import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ResultsPanel } from "@/components/results-panel";

export default function ResultsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Documentation Results
            </h1>
            <p className="text-muted-foreground">
              Here are the documentation files generated for your codebase.
            </p>
          </div>
          <ResultsPanel />
        </div>
      </main>
      <Footer />
    </div>
  );
}
