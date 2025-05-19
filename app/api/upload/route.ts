import AdmZip from "adm-zip";
import fs from "fs";
import path from "path";
import os from "os";
import { ApiError, ErrorCodes } from "@/lib/error";
import {
  createSuccessResponse,
  errorHandler,
} from "@/middleware/error-handler";
import { summarizeCode } from "@/services/langchain/langchainService";

export async function POST(req: Request) {
  let tempDir = "";

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      throw new ApiError(ErrorCodes.BAD_REQUEST, "No file uploaded", 400);
    }

    const fileName = file.name.toLowerCase();
    if (!fileName.endsWith(".zip") && file.type !== "application/zip") {
      throw new ApiError(
        ErrorCodes.BAD_REQUEST,
        "Invalid file. Please upload a ZIP file.",
        400,
        { fileType: file.type, fileName: file.name }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "upload-"));
    const zipPath = path.join(tempDir, file.name);

    fs.writeFileSync(zipPath, new Uint8Array(buffer));

    let zip;
    try {
      zip = new AdmZip(zipPath);
    } catch (error) {
      const zipError = error as Error;
      throw new ApiError(
        ErrorCodes.ZIP_PROCESSING_ERROR,
        "Failed to open ZIP file. File may be corrupted or not a valid ZIP archive.",
        400,
        { details: zipError.message }
      );
    }

    const zipEntries = zip.getEntries();

    const extractPath = path.join(tempDir, "unzipped");
    fs.mkdirSync(extractPath, { recursive: true });

    zip.extractAllTo(extractPath, true);

    const getAllFiles = (
      dirPath: string,
      arrayOfFiles: string[] = []
    ): string[] => {
      const files = fs.readdirSync(dirPath);

      files.forEach((file) => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
          arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        } else {
          arrayOfFiles.push(fullPath);
        }
      });

      return arrayOfFiles;
    };

    const allFilePaths = getAllFiles(extractPath);

    const parsed = allFilePaths.map((filePath) => {
      try {
        const relativePath = path.relative(extractPath, filePath);

        try {
          const content = fs.readFileSync(filePath, "utf-8");
          return {
            filename: relativePath,
            content,
            path: relativePath,
          };
        } catch (readError) {
          const binaryContent = fs.readFileSync(filePath);
          return {
            filename: relativePath,
            content: `[Binary file: ${binaryContent.length} bytes]`,
            path: relativePath,
            isBinary: true,
            size: binaryContent.length,
          };
        }
      } catch (fileError) {
        return {
          filename: path.basename(filePath),
          path: path.relative(extractPath, filePath),
          error: true,
          errorMessage: (fileError as Error).message,
        };
      }
    });

    const result = await summarizeCode(parsed[10].content || "");
    console.log("File:", parsed[10].filename);
    console.log("Content:", parsed[10].content);
    console.log("Summary:", result);

    return createSuccessResponse({
      message: "ZIP extracted and parsed successfully",
      files: parsed,
      totalFiles: parsed.length,
      zipInfo: {
        originalName: file.name,
        size: buffer.length,
        entryCount: zipEntries.length,
      },
    });
  } catch (error) {
    return errorHandler(error);
  } finally {
    if (tempDir && fs.existsSync(tempDir)) {
      try {
        fs.rmSync(tempDir, { recursive: true, force: true });
      } catch (cleanupError) {
        console.error(
          "Failed to clean up temporary directory:",
          JSON.stringify(cleanupError, null, 2)
        );
      }
    }
  }
}
