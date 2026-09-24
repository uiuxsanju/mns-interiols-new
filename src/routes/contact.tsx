import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { EstimateForm } from "@/components/site/EstimateForm";
import { Faq } from "@/components/sections/Faq";
import { brand, images } from "@/lib/site-data";

const title = "Contact MNS Interiors Vizag — Call, WhatsApp or Visit";
const description =
  "Talk to a design consultant in Visakhapatnam. Call, WhatsApp or send your requirement.";

const mapQuery = "Sri Shirdi Sai Vet. Colony, Visalakshinagar, Hanumanthuwaka, Visakhapatnam 530043";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your home"
        desc="Reach a design consultant directly — no forms queued behind a call centre."
        image={images.foyer}
      />

      <section className="container-x section-y">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl">Reach us directly</h2>
            <ul className="mt-8 space-y-6">
              <li>
                <a href={brand.phoneHref} className="flex items-start gap-4 group">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-[0.2em] text-muted-foreground uppercase">Phone</span>
                    <span className="block text-lg text-ink group-hover:text-primary">{brand.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={brand.whatsapp} target="_blank" rel="noreferrer noopener" className="flex items-start gap-4 group">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-[0.2em] text-muted-foreground uppercase">WhatsApp</span>
                    <span className="block text-lg text-ink group-hover:text-primary">Start a chat</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="flex items-start gap-4 group">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-[0.2em] text-muted-foreground uppercase">Email</span>
                    <span className="block text-lg break-all text-ink group-hover:text-primary">{brand.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs tracking-[0.2em] text-muted-foreground uppercase">Studio</span>
                  <span className="block max-w-xs leading-relaxed text-ink">{brand.address}</span>
                </span>
              </li>
            </ul>
            <p className="mt-10 text-sm text-muted-foreground">
              Studio hours: Monday to Saturday, 10:00 – 19:00 IST.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-card lg:p-9">
            <h2 className="text-2xl">Send your requirement</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We reply within one working day with a plan for the next step.
            </p>
            <div className="mt-7">
              <EstimateForm />
            </div>
          </div>
        </div>
      </section>

      <section className="container-x pb-20 lg:pb-28">
        <div className="overflow-hidden rounded-2xl border border-border shadow-card">
          <iframe
            title="MNS Interiors studio location on Google Maps"
            src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[360px] w-full border-0 lg:h-[440px]"
          />
        </div>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-4 inline-flex text-sm font-medium text-primary hover:underline"
        >
          Open in Google Maps →
        </a>
      </section>

      <Faq />
    </>
  );
}
