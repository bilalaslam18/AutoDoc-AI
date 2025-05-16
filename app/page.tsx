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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-foreground/20 dark:bg-primary-foreground/5 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    AI-Powered Documentation for Your Codebase
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Upload your code, sit back, and let AutoDoc AI generate
                    comprehensive documentation, including README files, module
                    summaries, API docs, and architecture diagrams.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/upload">
                    <Button size="lg" className="group">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/docs">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[400px] lg:max-w-none">
                <div className="aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-primary to-accent-foreground p-6 shadow-lg">
                  <div className="h-full w-full rounded-lg bg-background/90 backdrop-blur-sm p-4 overflow-hidden flex items-center justify-center">
                    <pre className="text-xs md:text-sm overflow-auto max-h-full text-left">
                      <code className="language-markdown font-mono">
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
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powerful Documentation Features
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AutoDoc AI analyzes your codebase and generates comprehensive
                  documentation, saving you time and effort.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <FileText className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>README Generation</CardTitle>
                  <CardDescription>
                    Create professional README.md files with all the essential
                    sections.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Includes project overview, installation instructions, usage
                    examples, and more.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <Code className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Module Summaries</CardTitle>
                  <CardDescription>
                    Get detailed documentation for each module and function in
                    your code.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Understand what each part of your codebase does at a glance.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <ServerIcon className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>API Documentation</CardTitle>
                  <CardDescription>
                    Automatically document REST APIs, endpoints, and
                    request/response formats.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Makes it easy for developers to understand and use your
                    APIs.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <GitBranchIcon className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Architecture Diagrams</CardTitle>
                  <CardDescription>
                    Generate visual diagrams of your project's structure and
                    dependencies.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Visualize relationships between components and modules with
                    Mermaid.js.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-foreground/20 dark:bg-primary-foreground/5 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to document your code?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Save hours of manual documentation work and ensure your
                  project is well-documented.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/upload">
                  <Button size="lg">Get Started Now</Button>
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
