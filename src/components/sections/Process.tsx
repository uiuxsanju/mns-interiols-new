import { processSteps } from "@/lib/site-data";
import { SectionHeading } from "@/components/site/SectionHeading";

export function Process() {
  return (
    <section className="container-x py-20 lg:py-28">
      <SectionHeading
        eyebrow="Design to Move-In"
        title="Seven steps, one project manager"
        desc="A predictable path from first call to handover, with fixed checkpoints you sign off at every stage."
      />

      <ol className="mt-12 grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4 lg:mt-16 lg:grid-cols-4 xl:grid-cols-7">
        {processSteps.map((s, i) => (
          <li
            key={s.no}
            className="rise-in group flex flex-col gap-3.5 rounded-2xl border border-border bg-card p-5 shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-background font-display text-sm text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
              {s.no}
            </span>
            <div>
              <h3 className="font-display text-[1.05rem] leading-snug">{s.title}</h3>
              <p className="mt-1.5 text-[0.85rem] leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
