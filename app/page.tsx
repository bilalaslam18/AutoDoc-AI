import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  FileText,
  GitBranchIcon,
  ServerIcon,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-6 xs:py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-primary-foreground/20 dark:bg-primary-foreground/5 flex items-center justify-center">
          <div className="container px-3 xs:px-4 sm:px-6 md:px-8">
            <div className="grid gap-6 xs:gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-3 xs:space-y-4 sm:space-y-6">
                <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                  <h1 className="text-xl xs:text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                    AI-Powered Documentation for Your Codebase
                  </h1>
                  <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                    Upload your code, sit back, and let AutoDoc AI generate
                    comprehensive documentation, including README files, module
                    summaries, API docs, and architecture diagrams.
                  </p>
                </div>
                <div className="flex flex-col gap-2 xs:gap-3 sm:flex-row sm:gap-4">
                  <Link href="/upload" className="w-full sm:w-auto">
                    <Button size="default" className="group w-full sm:w-auto text-sm xs:text-base">
                      Get Started
                      <ArrowRight className="ml-2 h-3 w-3 xs:h-4 xs:w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/docs" className="w-full sm:w-auto">
                    <Button size="default" variant="outline" className="w-full sm:w-auto text-sm xs:text-base">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Code Preview */}
              <div className="mx-auto w-full max-w-[320px] xs:max-w-[400px] lg:max-w-none order-first lg:order-last">
                <div className="aspect-video overflow-hidden rounded-md xs:rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-accent-foreground p-2 xs:p-3 sm:p-4 md:p-6 shadow-lg">
                  <div className="h-full w-full rounded-sm xs:rounded-md sm:rounded-lg bg-background/90 backdrop-blur-sm p-1 xs:p-2 sm:p-3 md:p-4 overflow-hidden flex items-center justify-center">
                    <div className="w-full h-full overflow-auto">
                      <pre className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-left w-full min-w-0">
                        <code className="language-markdown font-mono leading-relaxed block">
                          {`# Project Name

## Overview
AI-generated overview of your project.

## Installation

\`\`\`bash
npm install my-awesome-project
\`\`\`

## Usage

\`\`\`javascript
import { someFunction } from 'my-awesome-project';

// Example usage
someFunction();
\`\`\`

## API Documentation

### getUser(id: string): User
Fetches a user by their ID.

### createPost(data: PostData): Post
Creates a new post with the given data.
`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-6 xs:py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 flex items-center justify-center">
          <div className="container px-3 xs:px-4 sm:px-6 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-3 xs:space-y-4 sm:space-y-6 text-center">
              <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                <h2 className="text-xl xs:text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                  Powerful Documentation Features
                </h2>
                <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-[900px] mx-auto leading-relaxed px-2 xs:px-0">
                  AutoDoc AI analyzes your codebase and generates comprehensive
                  documentation, saving you time and effort.
                </p>
              </div>
            </div>
            
            {/* Feature Cards Grid */}
            <div className="mx-auto grid max-w-5xl grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 mt-6 xs:mt-8 sm:mt-10 md:mt-12">
              <Card className="h-full">
                <CardHeader className="pb-2 xs:pb-3 sm:pb-4 text-center sm:text-left p-3 xs:p-4 sm:p-6">
                  <FileText className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary mb-1 xs:mb-2 mx-auto sm:mx-0" />
                  <CardTitle className="text-base xs:text-lg sm:text-xl">README Generation</CardTitle>
                  <CardDescription className="text-xs xs:text-sm">
                    Create professional README.md files with all the essential
                    sections.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 xs:p-4 sm:p-6 pt-0">
                  <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground">
                    Includes project overview, installation instructions, usage
                    examples, and more.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardHeader className="pb-2 xs:pb-3 sm:pb-4 text-center sm:text-left p-3 xs:p-4 sm:p-6">
                  <Code className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary mb-1 xs:mb-2 mx-auto sm:mx-0" />
                  <CardTitle className="text-base xs:text-lg sm:text-xl">Module Summaries</CardTitle>
                  <CardDescription className="text-xs xs:text-sm">
                    Get detailed documentation for each module and function in
                    your code.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 xs:p-4 sm:p-6 pt-0">
                  <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground">
                    Understand what each part of your codebase does at a glance.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardHeader className="pb-2 xs:pb-3 sm:pb-4 text-center sm:text-left p-3 xs:p-4 sm:p-6">
                  <ServerIcon className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary mb-1 xs:mb-2 mx-auto sm:mx-0" />
                  <CardTitle className="text-base xs:text-lg sm:text-xl">API Documentation</CardTitle>
                  <CardDescription className="text-xs xs:text-sm">
                    Automatically document REST APIs, endpoints, and
                    request/response formats.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 xs:p-4 sm:p-6 pt-0">
                  <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground">
                    Makes it easy for developers to understand and use your
                    APIs.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardHeader className="pb-2 xs:pb-3 sm:pb-4 text-center sm:text-left p-3 xs:p-4 sm:p-6">
                  <GitBranchIcon className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary mb-1 xs:mb-2 mx-auto sm:mx-0" />
                  <CardTitle className="text-base xs:text-lg sm:text-xl">Architecture Diagrams</CardTitle>
                  <CardDescription className="text-xs xs:text-sm">
                    Generate visual diagrams of your project&apos;s structure and
                    dependencies.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 xs:p-4 sm:p-6 pt-0">
                  <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground">
                    Visualize relationships between components and modules with
                    Mermaid.js.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-6 xs:py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-primary-foreground/20 dark:bg-primary-foreground/5 flex items-center justify-center">
          <div className="container px-3 xs:px-4 sm:px-6 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-3 xs:space-y-4 sm:space-y-6 text-center">
              <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                <h2 className="text-xl xs:text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                  Ready to document your code?
                </h2>
                <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-[600px] mx-auto leading-relaxed px-2 xs:px-0">
                  Save hours of manual documentation work and ensure your
                  project is well-documented.
                </p>
              </div>
              <div className="w-full sm:w-auto">
                <Link href="/upload" className="w-full sm:w-auto">
                  <Button size="default" className="w-full sm:w-auto text-sm xs:text-base">Get Started Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
