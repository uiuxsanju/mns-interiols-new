import { solutions } from "@/lib/site-data";
import { SectionHeading } from "@/components/site/SectionHeading";

export function Solutions() {
  return (
    <section className="bg-sand section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="End-to-End Solutions"
          title="Fourteen services under one contract"
          desc="From carcass to cushions. You never coordinate between vendors — we do it, and we own the timeline."
        />
        <div className="section-gap grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {solutions.map((s) => (
            <figure
              key={s.title}
              className="card-media group overflow-hidden rounded-xl bg-card shadow-card transition-shadow hover:shadow-lift"
            >
              <img src={s.image} alt={s.title} loading="lazy" width={1200} height={900} className="aspect-4/3 w-full object-cover" />
              <figcaption className="px-3 py-3 text-center text-[0.8rem] font-medium text-ink">{s.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
