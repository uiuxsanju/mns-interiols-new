import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useEstimate } from "@/components/site/estimate-context";
import fullHomeInteriors from "@/assets/estimate/full-home-interiors.webp";
import modularKitchen from "@/assets/estimate/modular-kitchen.webp";
import { InteriorBackdrop } from "@/components/site/InteriorBackdrop";

const cards = [
  {
    title: "Full Home Interiors",
    image: fullHomeInteriors,
    desc: "Kitchen, wardrobes, ceilings, lighting, painting and furniture — planned and delivered as one project.",
  },
  {
    title: "Modular Kitchen",
    image: modularKitchen,
    desc: "Layout, core material, hardware and appliances specified for your cooking style and budget.",
  },
];

export function EstimateSection() {
  const { openEstimate } = useEstimate();
  return (
    <section id="estimate" className="relative isolate overflow-hidden bg-sand section-y">
      <InteriorBackdrop />
      <div className="container-x">
        <SectionHeading
          eyebrow="Transparent pricing"
          title="Get an Estimate for Your Dream Home"
          desc="An itemised, line-by-line quote in 24 hours. No account, no obligation, no hidden charges."
          align="center"
        />
        <div className="section-gap grid max-md:-mx-4 max-md:flex max-md:snap-x max-md:snap-mandatory max-md:gap-3.5 max-md:overflow-x-auto max-md:scroll-px-4 max-md:px-4 max-md:pb-2 max-md:[scrollbar-width:none] max-md:*:min-w-0 max-md:*:shrink-0 max-md:*:basis-[82%] max-md:*:snap-start sm:max-md:-mx-6 sm:max-md:scroll-px-6 sm:max-md:px-6 sm:max-md:*:basis-[60%] gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <article
              key={c.title}
              className="card-media group overflow-hidden rounded-2xl bg-card shadow-card transition-shadow hover:shadow-lift"
            >
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                width={1200}
                height={900}
                className="h-60 w-full object-cover sm:h-72"
              />
              <div className="p-7">
                <h3 className="text-2xl">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                <Button className="mt-6 rounded-full px-6" onClick={openEstimate}>
                  Get Free Estimate
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
