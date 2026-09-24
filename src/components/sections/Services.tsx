import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Plus } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/lib/services-data";

/** Services shown before the "Show all" button on small screens. Every service
 *  is still reachable — the button reveals the rest in place. */
const PREVIEW_COUNT = 8;

export function Services() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? services : services.slice(0, PREVIEW_COUNT);
  const remaining = services.length - visible.length;

  return (
    <section id="services" className="container-x section-y">
      <SectionHeading
        eyebrow="Our Services"
        title="Everything we do, under one roof"
        desc="Every service MNS Interiors delivers, straight from our project portfolio — tap any card for details, photos and a WhatsApp quote."
        align="center"
      />
      <div className="section-gap grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((s) => (
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
            <div className="flex flex-1 flex-col p-3 sm:p-5">
              <span className="block text-[0.8rem] leading-snug font-medium text-balance text-ink sm:text-sm">
                {s.title}
              </span>
              <span className="mt-1.5 inline-flex items-center gap-1 text-[0.7rem] text-muted-foreground transition-colors group-hover:text-primary sm:mt-2 sm:text-xs">
                View details <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {remaining > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
          >
            <Plus className="h-4 w-4" />
            Show all {services.length} services
          </button>
        </div>
      )}
    </section>
  );
}
