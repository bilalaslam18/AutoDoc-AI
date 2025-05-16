import Link from "next/link";
import { CodeIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background flex items-center justify-center">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <CodeIcon className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose md:text-left">
            &copy; {new Date().getFullYear()} AutoDoc AI. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/privacy"
            className="text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground"
          >
            Terms
          </Link>
          <Link
            href="/contact"
            className="text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
