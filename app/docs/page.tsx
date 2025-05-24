"use client";
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
import { ArrowRight, BookOpen, FileText, Link, Upload, Menu } from "lucide-react";
import { useState } from "react";

export default function DocsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar />
      <main className="flex-1 container py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col space-y-6 lg:flex-row lg:space-x-8 xl:space-x-12 lg:space-y-0">
          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-4"
            >
              <Menu className="h-4 w-4" />
              Navigation
            </button>
          </div>

          {/* Sidebar Navigation */}
          <aside className={`lg:w-1/5 ${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="lg:sticky lg:top-20">
              <div className="space-y-4 lg:space-y-6 p-4 lg:p-0 bg-muted/30 lg:bg-transparent rounded-lg lg:rounded-none">
                <div className="space-y-3">
                  <h2 className="text-lg lg:text-xl font-semibold tracking-tight">
                    Documentation
                  </h2>
                  <div className="flex flex-col space-y-2">
                    <a
                      href="#getting-started"
                      className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors py-1"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Getting Started
                    </a>
                    <a
                      href="#uploading"
                      className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors py-1"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Uploading Code
                    </a>
                    <a
                      href="#features"
                      className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors py-1"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Features
                    </a>
                    <a
                      href="#faq"
                      className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors py-1"
                      onClick={() => setSidebarOpen(false)}
                    >
                      FAQ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 lg:max-w-3xl">
            {/* Getting Started Section */}
            <section id="getting-started" className="space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-3">
                <h1 className="scroll-m-20 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                  Documentation
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                  Learn how to use AutoDoc AI to generate documentation for your
                  codebase.
                </p>
              </div>

              <Separator className="my-4 sm:my-6" />

              <div className="space-y-2 sm:space-y-3">
                <h2 className="scroll-m-20 text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
                  Getting Started
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  AutoDoc AI simplifies the process of creating documentation
                  for your codebase. Follow these steps to get started.
                </p>
              </div>

              {/* Step Cards */}
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <Card className="h-full">
                  <CardHeader className="pb-3 sm:pb-4">
                    <Upload className="h-4 w-4 sm:h-5 sm:w-5 text-primary mb-1 sm:mb-2" />
                    <CardTitle className="text-sm sm:text-base">
                      1. Upload Your Code
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      Upload a ZIP file or provide a GitHub repository URL.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-xs sm:text-sm">
                    <p>
                      Supports major programming languages including JavaScript,
                      TypeScript, Python, Java, and more.
                    </p>
                  </CardContent>
                </Card>
                <Card className="h-full">
                  <CardHeader className="pb-3 sm:pb-4">
                    <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary mb-1 sm:mb-2" />
                    <CardTitle className="text-sm sm:text-base">
                      2. Review Results
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      Review the generated documentation files.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-xs sm:text-sm">
                    <p>
                      AutoDoc AI analyzes your code and generates README, module
                      summaries, API docs, and diagrams.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="my-6 sm:my-8" />

            {/* Uploading Section */}
            <section id="uploading" className="space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-3">
                <h2 className="scroll-m-20 text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
                  Uploading Your Code
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  AutoDoc AI provides two methods to analyze your codebase.
                </p>
              </div>

              <Tabs defaultValue="github" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="github" className="text-xs sm:text-sm">
                    GitHub Repository
                  </TabsTrigger>
                  <TabsTrigger value="zip" className="text-xs sm:text-sm">
                    ZIP Upload
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="github" className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-base sm:text-lg font-medium">
                      Using GitHub Repository URL
                    </h3>
                    <ol className="list-decimal list-inside space-y-1 sm:space-y-2 text-sm sm:text-base">
                      <li>Navigate to the Upload page</li>
                      <li>Select the &quot;GitHub URL&quot; tab</li>
                      <li>Enter the URL of your public GitHub repository</li>
                      <li>Click &quot;Analyze Repository&quot;</li>
                    </ol>
                  </div>
                  <Card className="bg-muted/40 border">
                    <CardContent className="pt-4 sm:pt-6">
                      <p className="text-xs sm:text-sm">
                        <span className="font-medium">Note:</span> Only public
                        repositories are supported at this time. For private
                        repositories, please use the ZIP upload method.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="zip" className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-base sm:text-lg font-medium">Using ZIP Upload</h3>
                    <ol className="list-decimal list-inside space-y-1 sm:space-y-2 text-sm sm:text-base">
                      <li>Create a ZIP file of your project directory</li>
                      <li>Navigate to the Upload page</li>
                      <li>Select the &quot;Upload ZIP&quot; tab</li>
                      <li>Drag and drop your ZIP file or click to select</li>
                      <li>Click &quot;Upload and Analyze&quot;</li>
                    </ol>
                  </div>
                  <Card className="bg-muted/40 border">
                    <CardContent className="pt-4 sm:pt-6">
                      <p className="text-xs sm:text-sm">
                        <span className="font-medium">Note:</span> ZIP files
                        must be smaller than 50MB. For larger projects, consider
                        uploading only the relevant portions of your codebase.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </section>

            <Separator className="my-6 sm:my-8" />

            {/* Features Section */}
            <section id="features" className="space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-3">
                <h2 className="scroll-m-20 text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
                  Features
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  AutoDoc AI offers several features to make documentation easy
                  and comprehensive.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold tracking-tight">
                    README Generation
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Creates a comprehensive README.md file with project
                    overview, installation instructions, usage examples, and
                    more.
                  </p>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold tracking-tight">
                    Module Summaries
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Generates detailed documentation for each module in your
                    codebase, including functions, classes, and their
                    parameters.
                  </p>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold tracking-tight">
                    API Documentation
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Automatically documents REST APIs, including endpoints,
                    request/response formats, and authentication requirements.
                  </p>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold tracking-tight">
                    Architecture Diagrams
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Creates visual diagrams of your project&apos;s structure using
                    Mermaid.js to help understand component relationships.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-6 sm:my-8" />

            {/* FAQ Section */}
            <section id="faq" className="space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-3">
                <h2 className="scroll-m-20 text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold tracking-tight">
                    Which programming languages are supported?
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    AutoDoc AI supports most popular programming languages,
                    including JavaScript, TypeScript, Python, Java, Ruby, Go,
                    C#, PHP, and more.
                  </p>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold tracking-tight">
                    Is my code secure?
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Yes, your code is processed securely and is not stored
                    permanently. All uploaded code is deleted after processing
                    is complete.
                  </p>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold tracking-tight">
                    How accurate is the generated documentation?
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    While AutoDoc AI provides high-quality documentation, it&apos;s
                    recommended to review and make adjustments as needed to
                    ensure accuracy.
                  </p>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold tracking-tight">
                    Can I customize the generated documentation?
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
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
