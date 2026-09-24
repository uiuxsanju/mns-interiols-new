import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/lib/services-data";

export function Services() {
  return (
    <section id="services" className="container-x py-20 lg:py-28">
      <SectionHeading
        eyebrow="Our Services"
        title="Everything we do, under one roof"
        desc="Every service MNS Interiors delivers, straight from our project portfolio — tap any card for details, photos and a WhatsApp quote."
        align="center"
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((s) => (
          <Link
            key={s.slug}
            to="/services/$slug"
            params={{ slug: s.slug }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
          >
            <div className="card-media relative overflow-hidden">
              <img
                src={s.heroImage}
                alt={`${s.title} by MNS Interiors`}
                loading="lazy"
                className={`aspect-4/3 w-full object-cover ${s.heroPosition ?? "object-center"}`}
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <span className="block text-sm leading-snug font-medium text-ink">{s.title}</span>
              <span className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-primary">
                View details <ChevronRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
