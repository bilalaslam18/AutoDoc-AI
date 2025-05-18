import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, FileText, Github, MessageSquare } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-foreground/20 dark:bg-primary-foreground/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About AutoDoc AI
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Transforming code documentation with the power of artificial
                  intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">
                Our Mission
              </h2>
              <p className="text-muted-foreground md:text-lg">
                At AutoDoc AI, we're addressing one of the most common
                challenges in software development: creating and maintaining
                comprehensive documentation. We believe that well-documented
                code is essential for collaboration, onboarding, and long-term
                project success.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Our mission is to make documentation effortless by leveraging
                advanced AI to analyze codebases and generate clear, accurate,
                and useful documentation automatically.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">
                Our Approach
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Our AI model has been trained on millions of code repositories
                to understand patterns, conventions, and best practices across
                different programming languages and frameworks.
              </p>
              <p className="text-muted-foreground md:text-lg">
                We're constantly improving our algorithms to provide better
                insights, more accurate documentation, and useful suggestions
                for improving your codebase.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-foreground/20 dark:bg-primary-foreground/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  How It Works
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  AutoDoc AI analyzes your code using advanced machine learning
                  techniques.
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="relative overflow-hidden border border-muted bg-background">
                <div className="absolute top-0 right-0 h-16 w-16 bg-primary/10 rounded-bl-full"></div>
                <CardContent className="p-6 pt-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Code Analysis</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our AI analyzes your code structure, functions, classes,
                    comments, and dependencies to understand what your code
                    does.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border border-muted bg-background">
                <div className="absolute top-0 right-0 h-16 w-16 bg-primary/10 rounded-bl-full"></div>
                <CardContent className="p-6 pt-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <BrainCircuit className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">AI Processing</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Advanced machine learning models process the analyzed code
                    to generate human-readable documentation.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border border-muted bg-background">
                <div className="absolute top-0 right-0 h-16 w-16 bg-primary/10 rounded-bl-full"></div>
                <CardContent className="p-6 pt-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Documentation</h3>
                  </div>
                  <p className="text-muted-foreground">
                    The AI generates comprehensive documentation including
                    README files, API docs, module summaries, and diagrams.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Meet the Team
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We're two full-stack developers passionate about building
                AI-powered tools that make developers' lives easier.
              </p>
            </div>
          </div>
          <div className="grid gap-8 mt-12 md:grid-cols-2">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-32 w-32 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dqpyagkv3/image/upload/v1745504620/IMG_0788_xzb0g0_c_pad_b_gen_fill_ar_1_1_s9taup.jpg"
                  alt="Team member"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Muhammad Bilal</h3>
                <p className="text-muted-foreground">
                  Co-Founder & Full-Stack Developer
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-32 w-32 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dqpyagkv3/image/upload/v1747390924/WhatsApp_Image_2025-05-16_at_15.20.39_dwo5on.jpg"
                  alt="Team member"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Noman Nawaz</h3>
                <p className="text-muted-foreground">
                  Co-Founder & Full-Stack Developer
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-foreground/20 dark:bg-primary-foreground/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Contribute to Our Project
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  AutoDoc AI is constantly improving. We welcome contributions
                  from the community.
                </p>
                <div className="flex justify-center mt-6">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium"
                  >
                    <Github className="h-5 w-5" />
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
