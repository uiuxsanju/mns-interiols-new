import { MessageCircle, Phone } from "lucide-react";
import { brand } from "@/lib/site-data";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 lg:right-6 lg:bottom-6">
      <a
        href={brand.whatsapp}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat on WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-ink text-background shadow-lift transition-transform hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href={brand.phoneHref}
        aria-label="Call us"
        className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-105 lg:hidden"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
