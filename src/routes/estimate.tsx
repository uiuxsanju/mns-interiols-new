import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { EstimateForm } from "@/components/site/EstimateForm";
import { Process } from "@/components/sections/Process";
import { images } from "@/lib/site-data";

const title = "Free Interior Estimate in Vizag | MNS Interiors";
const description =
  "Share your home details on WhatsApp and get a free interior estimate from MNS Interiors, Visakhapatnam.";

export const Route = createFileRoute("/estimate")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: EstimatePage,
});

const promises = [
  "An itemised quote, room by room, within 24 hours",
  "Pricing from a single published rate card",
  "A designer call to refine scope before you commit",
  "No booking amount required to receive the estimate",
];

function EstimatePage() {
  return (
    <>
      <PageHero
        eyebrow="Free Estimate"
        title="Know what your interiors will cost"
        desc="Answer seven quick questions. A consultant prepares your itemised estimate and walks you through it."
        image={images.kitchen}
      />

      <section className="container-x section-y">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl">What you get</h2>
            <ul className="mt-8 space-y-4">
              {promises.map((p) => (
                <li key={p} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-foreground/85">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7 shadow-card lg:p-9">
            <EstimateForm />
          </div>
        </div>
      </section>

      <Process />
    </>
  );
}
