import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { WhyUs } from "@/components/sections/WhyUs";
import { images } from "@/lib/site-data";

const title = "About MNS Interiors — Interior Designers in Visakhapatnam";
const description =
  "MNS Interiors is a Visakhapatnam-based interior design and execution studio led by E. Venkata Sunil and T.M.S. Manohar — consultation, designing and execution under one roof.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "200+", label: "Completed projects" },
  { value: "24", label: "Services offered" },
  { value: "7-Step", label: "Design-to-move-in process" },
  { value: "2D & 3D", label: "Visualisation before execution" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A design studio with its own factory"
        desc="We kept manufacturing in-house so quality, price and timelines stay in one pair of hands — ours."
        image={images.foyer}
      />

      <section className="container-x section-y">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl leading-tight sm:text-4xl">Consultation, Designing & Execution — under one roof</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              MNS Interiors is led by <span className="text-ink">E. Venkata Sunil</span> (Founder &amp; Principal
              Designer) and <span className="text-ink">T.M.S. Manohar</span> (Co-Founder &amp; Managing Partner),
              based in Visakhapatnam. Every project moves through the same seven stages — site visit, design
              brief, 2D &amp; 3D visualisation, finalised design, manufacturing, installation and handover — with
              one team accountable end to end.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              From modular kitchens and wardrobes to electrical, plumbing, false ceilings and full interior
              fit-outs, we've delivered residential, restaurant, healthcare and corporate interiors across
              Visakhapatnam and North Andhra Pradesh.
            </p>
          </div>
          <div className="card-media overflow-hidden rounded-2xl shadow-card">
            <img src={images.living} alt="Finished living room project" loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-7">
              <dt className="font-display text-3xl text-primary">{s.value}</dt>
              <dd className="mt-2 text-sm text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-sand section-y">
        <div className="container-x">
          <SectionHeading
            eyebrow="How we work"
            title="Three commitments we put in writing"
            desc="Fixed itemised pricing before booking. A contractual handover date. A ten-year warranty with a stocked spares programme."
          />
        </div>
      </section>

      <WhyUs />
      <CtaBanner />
    </>
  );
}
