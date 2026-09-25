import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useEstimate } from "@/components/site/estimate-context";
import fullHomeInteriors from "@/assets/portfolio/living-room-green-wall-tv-unit.webp";
import modularKitchen from "@/assets/portfolio/kitchen-marble-island-pendant-lights.webp";

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
    <section id="estimate" className="bg-sand section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Transparent pricing"
          title="Get an Estimate for Your Dream Home"
          desc="An itemised, line-by-line quote in 24 hours. No account, no obligation, no hidden charges."
          align="center"
        />
        <div className="section-gap grid gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <article
              key={c.title}
              className="card-media group overflow-hidden rounded-2xl bg-card shadow-card transition-shadow hover:shadow-lift"
            >
              <img src={c.image} alt={c.title} loading="lazy" width={1200} height={900} className="h-60 w-full object-cover sm:h-72" />
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
