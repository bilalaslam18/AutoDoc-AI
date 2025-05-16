import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Us
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      <a
                        href="mailto:support@autodoc-ai.com"
                        className="hover:underline"
                      >
                        support@autodoc-ai.com
                      </a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Live Chat</h3>
                    <p className="text-sm text-muted-foreground">
                      Available Monday to Friday, 9AM-6PM EST
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Office</h3>
                    <p className="text-sm text-muted-foreground">
                      123 Innovation Drive, Tech City, TC 12345
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Card className="p-6">
            <form className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  Send us a message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First name
                    </label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last name
                    </label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help..."
                    rows={5}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
