import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, BookOpen, FileText, Link, Upload } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="lg:w-1/5">
            <div className="sticky top-20">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-tight">
                    Documentation
                  </h2>
                  <div className="flex flex-col space-y-1">
                    <a
                      href="#getting-started"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Getting Started
                    </a>
                    <a
                      href="#uploading"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Uploading Code
                    </a>
                    <a
                      href="#features"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Features
                    </a>
                    <a
                      href="#faq"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      FAQ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex-1 lg:max-w-3xl">
            <section id="getting-started" className="space-y-6">
              <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                  Documentation
                </h1>
                <p className="text-lg text-muted-foreground">
                  Learn how to use AutoDoc AI to generate documentation for your
                  codebase.
                </p>
              </div>

              <Separator className="my-6" />

              <div className="space-y-2">
                <h2 className="scroll-m-20 text-2xl font-bold tracking-tight">
                  Getting Started
                </h2>
                <p className="text-muted-foreground">
                  AutoDoc AI simplifies the process of creating documentation
                  for your codebase. Follow these steps to get started.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <Upload className="h-5 w-5 text-primary mb-1" />
                    <CardTitle className="text-base">
                      1. Upload Your Code
                    </CardTitle>
                    <CardDescription>
                      Upload a ZIP file or provide a GitHub repository URL.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p>
                      Supports major programming languages including JavaScript,
                      TypeScript, Python, Java, and more.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <FileText className="h-5 w-5 text-primary mb-1" />
                    <CardTitle className="text-base">
                      2. Review Results
                    </CardTitle>
                    <CardDescription>
                      Review the generated documentation files.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p>
                      AutoDoc AI analyzes your code and generates README, module
                      summaries, API docs, and diagrams.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="uploading" className="space-y-6">
              <div className="space-y-2">
                <h2 className="scroll-m-20 text-2xl font-bold tracking-tight">
                  Uploading Your Code
                </h2>
                <p className="text-muted-foreground">
                  AutoDoc AI provides two methods to analyze your codebase.
                </p>
              </div>

              <Tabs defaultValue="github">
                <TabsList>
                  <TabsTrigger value="github">GitHub Repository</TabsTrigger>
                  <TabsTrigger value="zip">ZIP Upload</TabsTrigger>
                </TabsList>
                <TabsContent value="github" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">
                      Using GitHub Repository URL
                    </h3>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Navigate to the Upload page</li>
                      <li>Select the "GitHub URL" tab</li>
                      <li>Enter the URL of your public GitHub repository</li>
                      <li>Click "Analyze Repository"</li>
                    </ol>
                  </div>
                  <Card className="bg-muted/40 border">
                    <CardContent className="pt-6">
                      <p className="text-sm">
                        <span className="font-medium">Note:</span> Only public
                        repositories are supported at this time. For private
                        repositories, please use the ZIP upload method.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="zip" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Using ZIP Upload</h3>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Create a ZIP file of your project directory</li>
                      <li>Navigate to the Upload page</li>
                      <li>Select the "Upload ZIP" tab</li>
                      <li>Drag and drop your ZIP file or click to select</li>
                      <li>Click "Upload and Analyze"</li>
                    </ol>
                  </div>
                  <Card className="bg-muted/40 border">
                    <CardContent className="pt-6">
                      <p className="text-sm">
                        <span className="font-medium">Note:</span> ZIP files
                        must be smaller than 50MB. For larger projects, consider
                        uploading only the relevant portions of your codebase.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </section>

            <Separator className="my-8" />

            <section id="features" className="space-y-6">
              <div className="space-y-2">
                <h2 className="scroll-m-20 text-2xl font-bold tracking-tight">
                  Features
                </h2>
                <p className="text-muted-foreground">
                  AutoDoc AI offers several features to make documentation easy
                  and comprehensive.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">
                    README Generation
                  </h3>
                  <p className="text-muted-foreground">
                    Creates a comprehensive README.md file with project
                    overview, installation instructions, usage examples, and
                    more.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">
                    Module Summaries
                  </h3>
                  <p className="text-muted-foreground">
                    Generates detailed documentation for each module in your
                    codebase, including functions, classes, and their
                    parameters.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">
                    API Documentation
                  </h3>
                  <p className="text-muted-foreground">
                    Automatically documents REST APIs, including endpoints,
                    request/response formats, and authentication requirements.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">
                    Architecture Diagrams
                  </h3>
                  <p className="text-muted-foreground">
                    Creates visual diagrams of your project's structure using
                    Mermaid.js to help understand component relationships.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="faq" className="space-y-6">
              <div className="space-y-2">
                <h2 className="scroll-m-20 text-2xl font-bold tracking-tight">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">
                    Which programming languages are supported?
                  </h3>
                  <p className="text-muted-foreground">
                    AutoDoc AI supports most popular programming languages,
                    including JavaScript, TypeScript, Python, Java, Ruby, Go,
                    C#, PHP, and more.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">
                    Is my code secure?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, your code is processed securely and is not stored
                    permanently. All uploaded code is deleted after processing
                    is complete.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">
                    How accurate is the generated documentation?
                  </h3>
                  <p className="text-muted-foreground">
                    While AutoDoc AI provides high-quality documentation, it's
                    recommended to review and make adjustments as needed to
                    ensure accuracy.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">
                    Can I customize the generated documentation?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, all generated documentation is provided in Markdown
                    format, which you can easily edit and customize to your
                    needs.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
