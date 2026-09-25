import { Phone } from "lucide-react";
import { brand } from "@/lib/site-data";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 lg:right-7 lg:bottom-7">
      <a
        href={brand.whatsapp}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat on WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#1F1B17] text-white shadow-lift transition-transform hover:scale-105 motion-reduce:transition-none lg:h-14 lg:w-14"
      >
        <WhatsAppIcon className="h-6 w-6 lg:h-7 lg:w-7" />
      </a>
      <a
        href={brand.phoneHref}
        aria-label="Call us"
        className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-105 motion-reduce:transition-none lg:hidden"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
