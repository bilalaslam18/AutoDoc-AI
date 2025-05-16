import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { UploadForm } from "@/components/upload-form";

export default function UploadPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar />
      <main className="flex-1 container max-w-5xl py-12">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Upload Your Codebase
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Upload a ZIP file of your code or provide a GitHub repository URL
              to get started.
            </p>
          </div>
          <UploadForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
