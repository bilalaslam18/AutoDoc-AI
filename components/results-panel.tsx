"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Download, FileDown } from "lucide-react";
import { MarkdownPreview } from "@/components/markdown-preview";
import { DiagramDisplay } from "@/components/diagram-display";
import { useToast } from "@/hooks/use-toast";
import { mockDocumentation } from "@/lib/mock-data";
import fileDownload from "js-file-download";
import JSZip from "jszip";

export function ResultsPanel() {
  const [activeTab, setActiveTab] = useState("readme");
  const { toast } = useToast();

  const { readme, moduleSummaries, apiDocs, architecture } = mockDocumentation;

  const handleDownloadFile = (content: string, filename: string) => {
    fileDownload(content, filename);
    toast({
      title: "File Downloaded",
      description: `${filename} has been downloaded successfully.`,
    });
  };

  const handleDownloadAll = async () => {
    const zip = new JSZip();

    zip.file("README.md", readme);
    zip.file("module-summaries.md", moduleSummaries);
    zip.file("api-documentation.md", apiDocs);
    zip.file("architecture.md", architecture);

    try {
      const content = await zip.generateAsync({ type: "blob" });
      fileDownload(content, "documentation.zip");
      toast({
        title: "Documentation Downloaded",
        description:
          "All documentation files have been downloaded as a ZIP file.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error generating the ZIP file.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h2 className="text-2xl font-bold">Generated Documentation</h2>
        <Button onClick={handleDownloadAll} className="w-full sm:w-auto">
          <Download className="mr-2 h-4 w-4" />
          Download All Files
        </Button>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
          <TabsTrigger value="readme">README</TabsTrigger>
          <TabsTrigger value="modules">Module Summaries</TabsTrigger>
          <TabsTrigger value="api">API Docs</TabsTrigger>
          <TabsTrigger value="architecture">Architecture</TabsTrigger>
        </TabsList>

        <Card className="border rounded-lg p-0 overflow-hidden">
          <div className="flex justify-between items-center border-b p-3 bg-muted/40">
            <h3 className="text-sm font-medium">
              {activeTab === "readme" && "README.md"}
              {activeTab === "modules" && "module-summaries.md"}
              {activeTab === "api" && "api-documentation.md"}
              {activeTab === "architecture" && "architecture.md"}
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const content = {
                  readme: readme,
                  modules: moduleSummaries,
                  api: apiDocs,
                  architecture: architecture,
                }[activeTab];

                const filename = {
                  readme: "README.md",
                  modules: "module-summaries.md",
                  api: "api-documentation.md",
                  architecture: "architecture.md",
                }[activeTab];

                handleDownloadFile(content!, filename!);
              }}
            >
              <FileDown className="h-4 w-4 mr-1" />
              Download
            </Button>
          </div>

          <div className="p-4 max-h-[600px] overflow-y-auto">
            <TabsContent value="readme" className="m-0">
              <MarkdownPreview content={readme} />
            </TabsContent>

            <TabsContent value="modules" className="m-0">
              <MarkdownPreview content={moduleSummaries} />
            </TabsContent>

            <TabsContent value="api" className="m-0">
              <MarkdownPreview content={apiDocs} />
            </TabsContent>

            <TabsContent value="architecture" className="m-0">
              <DiagramDisplay markdownWithDiagram={architecture} />
            </TabsContent>
          </div>
        </Card>
      </Tabs>

      <Card className="p-6 border-l-4 border-l-blue-500">
        <h3 className="text-lg font-medium mb-2">Improvement Suggestions</h3>
        <ul className="space-y-2 ml-6 list-disc">
          <li>Consider adding more inline documentation to the auth module.</li>
          <li>
            Several functions in utils.js could benefit from TypeScript type
            annotations.
          </li>
          <li>
            The database connection logic could be refactored into a separate
            module.
          </li>
          <li>Unit tests are missing for 4 critical components.</li>
        </ul>
      </Card>
    </div>
  );
}
