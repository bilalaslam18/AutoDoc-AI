import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, FileText, Github, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-primary-foreground/20 dark:bg-primary-foreground/5">
          <div className="container px-4 sm:px-6 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-center">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                  About AutoDoc AI
                </h1>
                <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground px-4">
                  Transforming code documentation with the power of artificial
                  intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Approach Section */}
        <section className="container py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 px-4 sm:px-6 md:px-8">
          <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
                Our Mission
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  At AutoDoc AI, we&apos;re addressing one of the most common
                  challenges in software development: creating and maintaining
                  comprehensive documentation. We believe that well-documented
                  code is essential for collaboration, onboarding, and long-term
                  project success.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  Our mission is to make documentation effortless by leveraging
                  advanced AI to analyze codebases and generate clear, accurate,
                  and useful documentation automatically.
                </p>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
                Our Approach
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  Our AI model has been trained on millions of code repositories
                  to understand patterns, conventions, and best practices across
                  different programming languages and frameworks.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  We&apos;re constantly improving our algorithms to provide better
                  insights, more accurate documentation, and useful suggestions
                  for improving your codebase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-primary-foreground/20 dark:bg-primary-foreground/5">
          <div className="container px-4 sm:px-6 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-center mb-8 sm:mb-10 md:mb-12">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
                  How It Works
                </h2>
                <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground px-4">
                  AutoDoc AI analyzes your code using advanced machine learning
                  techniques.
                </p>
              </div>
            </div>
            
            {/* Process Cards */}
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="relative overflow-hidden border border-muted bg-background h-full">
                <div className="absolute top-0 right-0 h-12 w-12 sm:h-16 sm:w-16 bg-primary/10 rounded-bl-full"></div>
                <CardContent className="p-4 sm:p-6 pt-6 sm:pt-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
                    <div className="rounded-full bg-primary/10 p-2 sm:p-3 shrink-0">
                      <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">Code Analysis</h3>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Our AI analyzes your code structure, functions, classes,
                    comments, and dependencies to understand what your code
                    does.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border border-muted bg-background h-full">
                <div className="absolute top-0 right-0 h-12 w-12 sm:h-16 sm:w-16 bg-primary/10 rounded-bl-full"></div>
                <CardContent className="p-4 sm:p-6 pt-6 sm:pt-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
                    <div className="rounded-full bg-primary/10 p-2 sm:p-3 shrink-0">
                      <BrainCircuit className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">AI Processing</h3>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Advanced machine learning models process the analyzed code
                    to generate human-readable documentation.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border border-muted bg-background h-full md:col-span-2 lg:col-span-1">
                <div className="absolute top-0 right-0 h-12 w-12 sm:h-16 sm:w-16 bg-primary/10 rounded-bl-full"></div>
                <CardContent className="p-4 sm:p-6 pt-6 sm:pt-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
                    <div className="rounded-full bg-primary/10 p-2 sm:p-3 shrink-0">
                      <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">Documentation</h3>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    The AI generates comprehensive documentation including
                    README files, API docs, module summaries, and diagrams.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="container py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-center">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
                Meet the Team
              </h2>
              <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground px-4">
                We&apos;re two full-stack developers passionate about building
                AI-powered tools that make developers&apos; lives easier.
              </p>
            </div>
          </div>
          
          {/* Team Member Cards */}
          <div className="grid gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-12 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 sm:space-y-5">
              <div className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full bg-muted flex items-center justify-center overflow-hidden ring-4 ring-primary/10 relative">
                <Image
                  src="https://res.cloudinary.com/dqpyagkv3/image/upload/v1745504620/IMG_0788_xzb0g0_c_pad_b_gen_fill_ar_1_1_s9taup.jpg"
                  alt="Muhammad Bilal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-lg sm:text-xl font-bold">Muhammad Bilal</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Co-Founder & Full-Stack Developer
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4 sm:space-y-5">
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full bg-muted flex items-center justify-center overflow-hidden ring-4 ring-primary/10">
                <Image
                  src="https://res.cloudinary.com/dqpyagkv3/image/upload/v1747390924/WhatsApp_Image_2025-05-16_at_15.20.39_dwo5on.jpg"
                  alt="Noman Nawaz"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-lg sm:text-xl font-bold">Noman Nawaz</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Co-Founder & Full-Stack Developer
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GitHub Section (Commented out as in original) */}
        {/* <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-primary-foreground/20 dark:bg-primary-foreground/5">
          <div className="container px-4 sm:px-6 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-center">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
                  Contribute to Our Project
                </h2>
                <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground px-4">
                  AutoDoc AI is constantly improving. We welcome contributions
                  from the community.
                </p>
                <div className="flex justify-center mt-4 sm:mt-6">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium text-sm sm:text-base transition-colors"
                  >
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
}
