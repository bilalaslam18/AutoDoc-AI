import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: March 15, 2024
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Information We Collect
            </h2>
            <p className="text-muted-foreground">
              When you use AutoDoc AI, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Source code that you upload for documentation generation</li>
              <li>GitHub repository URLs that you provide</li>
              <li>Basic usage analytics to improve our service</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              How We Use Your Information
            </h2>
            <p className="text-muted-foreground">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Generate documentation for your code</li>
              <li>Improve our AI models and service quality</li>
              <li>Maintain and secure our platform</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Data Security</h2>
            <p className="text-muted-foreground">
              We take security seriously. Your code is processed securely and is
              not stored permanently. All uploaded code is automatically deleted
              after processing is complete.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about our privacy policy, please contact
              us at{" "}
              <a
                href="mailto:privacy@autodoc-ai.com"
                className="text-primary hover:underline"
              >
                privacy@autodoc-ai.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
