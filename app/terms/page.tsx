import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: March 15, 2024
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground">
              By accessing and using AutoDoc AI, you agree to be bound by these
              Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              2. Use License
            </h2>
            <p className="text-muted-foreground">
              AutoDoc AI grants you a limited, non-exclusive, non-transferable
              license to use our service for generating documentation for your
              code.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You must not use the service for any illegal purposes</li>
              <li>You must not attempt to reverse engineer the service</li>
              <li>You retain all rights to your source code</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              3. Service Availability
            </h2>
            <p className="text-muted-foreground">
              We strive to maintain high availability but do not guarantee
              uninterrupted access to the service. We reserve the right to
              modify or discontinue the service at any time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              4. Limitation of Liability
            </h2>
            <p className="text-muted-foreground">
              AutoDoc AI is provided "as is" without warranties of any kind. We
              are not liable for any damages arising from your use of the
              service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              5. Changes to Terms
            </h2>
            <p className="text-muted-foreground">
              We reserve the right to update these terms at any time. Continued
              use of the service after changes constitutes acceptance of the new
              terms.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
