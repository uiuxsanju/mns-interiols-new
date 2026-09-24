import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "./PageHero";
import { SectionHeading } from "./SectionHeading";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { useEstimate } from "./estimate-context";

export type ServicePageProps = {
  eyebrow: string;
  title: string;
  desc: string;
  image: string;
  intro: { heading: string; body: string; points: string[] };
  types: { title: string; desc: string; image: string }[];
  priceNote: string;
};

export function ServicePage({ eyebrow, title, desc, image, intro, types, priceNote }: ServicePageProps) {
  const { openEstimate } = useEstimate();
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} desc={desc} image={image} />

      <section className="container-x py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl leading-tight sm:text-4xl">{intro.heading}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{intro.body}</p>
            <ul className="mt-8 space-y-3">
              {intro.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-foreground/85">{p}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-9 rounded-full px-7" size="lg" onClick={openEstimate}>
              Get Free Estimate
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">{priceNote}</p>
          </div>
          <div className="card-media overflow-hidden rounded-2xl shadow-card">
            <img src={image} alt={title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Styles & Layouts" title="Choose a starting point" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {types.map((t) => (
              <article
                key={t.title}
                className="card-media group overflow-hidden rounded-2xl bg-card shadow-card transition-shadow hover:shadow-lift"
              >
                <img src={t.image} alt={t.title} loading="lazy" width={1200} height={900} className="aspect-4/3 w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-display text-xl">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
