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

      <section className="container-x section-y">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <h2 className="text-display-2 text-balance">{intro.heading}</h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
              {intro.body}
            </p>
            <ul className="mt-6 space-y-2.5 sm:mt-8 sm:space-y-3">
              {intro.points.map((p) => (
                <li key={p} className="flex gap-3 text-[0.88rem] sm:text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-foreground/85">{p}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-7 h-11 rounded-full px-7" onClick={openEstimate}>
              Get Free Estimate
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">{priceNote}</p>
          </div>
          <div className="card-media overflow-hidden rounded-2xl shadow-card">
            <img src={image} alt={title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-sand section-y">
        <div className="container-x">
          <SectionHeading eyebrow="Styles & Layouts" title="Choose a starting point" />
          <div className="section-gap grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {types.map((t) => (
              <article
                key={t.title}
                className="card-media group overflow-hidden rounded-xl bg-card shadow-card transition-shadow hover:shadow-lift sm:rounded-2xl"
              >
                <img src={t.image} alt={t.title} loading="lazy" width={1200} height={900} className="aspect-4/3 w-full object-cover" />
                <div className="p-3 sm:p-6">
                  <h3 className="font-display text-[0.95rem] leading-snug text-balance sm:text-xl">
                    {t.title}
                  </h3>
                  <p className="mt-1.5 text-[0.78rem] leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">
                    {t.desc}
                  </p>
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
