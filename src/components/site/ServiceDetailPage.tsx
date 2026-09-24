import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/site/Lightbox";
import { brand, waLink } from "@/lib/site-data";
import { getRelatedServices, type ServiceItem } from "@/lib/services-data";

export function ServiceDetailPage({ service }: { service: ServiceItem }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const related = getRelatedServices(service.slug, 4);
  const enquiryMessage = `Hello MNS Interiors, I am interested in your ${service.title} service. Please share details and quotation.`;

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="h-[46vh] min-h-80 w-full overflow-hidden sm:h-[52vh]">
          <img
            src={service.heroImage}
            alt={`${service.title} by MNS Interiors`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent" />
        </div>
        <div className="container-x absolute inset-x-0 bottom-0 pb-8">
          <nav className="mb-3 flex items-center gap-1.5 text-xs text-background/80">
            <Link to="/" hash="services" className="hover:text-background">
              Services
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="truncate text-background">{service.title}</span>
          </nav>
          <h1 className="max-w-3xl font-display text-3xl leading-tight text-background sm:text-4xl lg:text-5xl">
            {service.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-background/85 sm:text-base">{service.shortDesc}</p>
        </div>
      </section>

      {/* Intro + benefits + CTA */}
      <section className="container-x grid gap-8 py-10 sm:py-12 lg:grid-cols-[1.4fr_1fr] lg:gap-10 lg:py-20">
        <div>
          <h2 className="font-display text-2xl text-ink">Overview</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{service.intro}</p>

          <h3 className="mt-8 font-display text-lg text-ink">What's included</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/85">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-card">
          <p className="font-display text-lg text-ink">Get a quote for {service.title}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Message us on WhatsApp or call directly — a design consultant will respond the same day.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <a href={waLink(enquiryMessage)} target="_blank" rel="noreferrer noopener">
              <Button className="w-full rounded-full">
                <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
              </Button>
            </a>
            <a href={brand.phoneHref}>
              <Button variant="outline" className="w-full rounded-full">
                <Phone className="h-4 w-4" /> Call {brand.phone}
              </Button>
            </a>
          </div>
        </aside>
      </section>

      {/* Our Work gallery */}
      <section className="container-x pb-10 sm:pb-12 lg:pb-20">
        <h2 className="font-display text-2xl text-ink">Our Work</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A look at {service.title.toLowerCase()} from recent MNS Interiors projects.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {service.gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="card-media group overflow-hidden rounded-2xl bg-card shadow-card transition-shadow hover:shadow-lift"
            >
              <img
                src={img}
                alt={`${service.title} project photo ${i + 1} by MNS Interiors`}
                loading="lazy"
                width={800}
                height={600}
                className="aspect-4/3 w-full object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={service.gallery}
          alt={service.title}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}

      {/* Related services */}
      <section className="container-x pb-12 sm:pb-14 lg:pb-24">
        <h2 className="font-display text-2xl text-ink">Related Services</h2>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {related.map((r) => (
            <Link
              key={r.slug}
              to="/services/$slug"
              params={{ slug: r.slug }}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
            >
              <div className="card-media overflow-hidden">
                <img
                  src={r.heroImage}
                  alt={`${r.title} by MNS Interiors`}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
              </div>
              <div className="p-4">
                <span className="block text-sm leading-snug font-medium text-ink">{r.title}</span>
                <span className="mt-1.5 inline-flex items-center gap-1 text-xs text-primary">
                  View service <ChevronRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Back to services */}
      <section className="container-x pb-20">
        <Link
          to="/"
          hash="services"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Services
        </Link>
      </section>
    </>
  );
}
