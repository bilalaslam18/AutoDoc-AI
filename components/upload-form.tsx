"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { UploadIcon } from "@radix-ui/react-icons";
import { FileUp, Link as LinkIcon, Github as GitHubIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { api } from "@/lib/axios";

const MAX_FILE_SIZE = 50 * 1024 * 1024;

const urlFormSchema = z.object({
  repositoryUrl: z
    .string()
    .url("Please enter a valid URL")
    .refine(
      (url) => url.includes("github.com"),
      "Please enter a valid GitHub repository URL"
    ),
});

const fileFormSchema = z.object({
  file: z
    .any()
    .refine((file) => file && file.size > 0, "Please select a file")
    .refine(
      (file) => file && file.size <= MAX_FILE_SIZE,
      `File size must be less than 50MB`
    ),
});

type UrlFormValues = z.infer<typeof urlFormSchema>;
type FileFormValues = z.infer<typeof fileFormSchema>;

export function UploadForm() {
  const [activeTab, setActiveTab] = useState<string>("url");
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const router = useRouter();
  const { toast } = useToast();

  const urlForm = useForm<UrlFormValues>({
    resolver: zodResolver(urlFormSchema),
    defaultValues: {
      repositoryUrl: "",
    },
  });

  const fileForm = useForm<FileFormValues>({
    resolver: zodResolver(fileFormSchema),
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const simulateUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          router.push("/results");
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  function onUrlSubmit(data: UrlFormValues) {
    toast({
      title: "Processing Repository",
      description: `Starting analysis of ${data.repositoryUrl}`,
    });
    simulateUpload();
  }

  async function onFileSubmit(data: FileFormValues) {
    if (selectedFile) {
      toast({
        title: "File Uploaded",
        description: `Processing ${selectedFile.name}`,
      });
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        setIsUploading(true);
        const response = await api.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / (progressEvent.total ?? 100)
            );
            setUploadProgress(progress);
          },
        });
        console.log("response from api", response);

        // router.push("/results");
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Failed to upload file";
        toast({
          title: "Error",
          description: errorMessage,
          variant: "destructive",
        });
      } finally {
        setIsUploading(false);
      }
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    if (file) {
      fileForm.setValue("file", file);
    }
  };

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="max-w-xl mx-auto"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="url" className="flex items-center gap-2">
          <GitHubIcon className="h-4 w-4" />
          <span>GitHub URL</span>
        </TabsTrigger>
        <TabsTrigger value="file" className="flex items-center gap-2">
          <FileUp className="h-4 w-4" />
          <span>Upload ZIP</span>
        </TabsTrigger>
      </TabsList>

      {isUploading && (
        <Card className="mt-6 mb-6">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Uploading and processing...</span>
                <span>{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="h-2" />
            </div>
          </CardContent>
        </Card>
      )}

      <TabsContent
        value="url"
        className={cn(isUploading ? "opacity-50 pointer-events-none" : "")}
      >
        <Card>
          <CardContent className="pt-6">
            <Form {...urlForm}>
              <form
                onSubmit={urlForm.handleSubmit(onUrlSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={urlForm.control}
                  name="repositoryUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>GitHub Repository URL</FormLabel>
                      <FormControl>
                        <div className="flex gap-2">
                          <div className="relative flex-1">
                            <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              placeholder="https://github.com/username/repository"
                              className="pl-9"
                              {...field}
                            />
                          </div>
                        </div>
                      </FormControl>
                      <FormDescription>
                        Enter the URL of a public GitHub repository.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Analyze Repository
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent
        value="file"
        className={cn(isUploading ? "opacity-50 pointer-events-none" : "")}
      >
        <Card>
          <CardContent className="pt-6">
            <Form {...fileForm}>
              <form
                onSubmit={fileForm.handleSubmit(onFileSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={fileForm.control}
                  name="file"
                  render={({ field: { value, onChange, ...fieldProps } }) => (
                    <FormItem>
                      <FormLabel>ZIP File</FormLabel>
                      <FormControl>
                        <div className="grid gap-4">
                          <div
                            className={cn(
                              "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors",
                              selectedFile ? "border-primary" : "border-muted"
                            )}
                            onClick={() =>
                              document.getElementById("file-upload")?.click()
                            }
                          >
                            <Input
                              id="file-upload"
                              type="file"
                              accept=".zip"
                              className="hidden"
                              onChange={handleFileChange}
                              {...fieldProps}
                            />
                            <div className="flex flex-col items-center gap-2">
                              <UploadIcon className="h-8 w-8 text-muted-foreground" />
                              <div className="space-y-1">
                                {selectedFile ? (
                                  <div className="text-sm font-medium">
                                    {selectedFile.name} (
                                    {(
                                      selectedFile.size /
                                      (1024 * 1024)
                                    ).toFixed(2)}
                                    MB)
                                  </div>
                                ) : (
                                  <>
                                    <p className="text-sm font-medium">
                                      Drag or click to upload a ZIP file
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      Files up to 50MB supported
                                    </p>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={!selectedFile}
                >
                  Upload and Analyze
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
