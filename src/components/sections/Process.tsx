import { processSteps } from "@/lib/site-data";
import { SectionHeading } from "@/components/site/SectionHeading";

export function Process() {
  return (
    <section className="container-x section-y">
      <SectionHeading
        eyebrow="Design to Move-In"
        title="Seven steps, one project manager"
        desc="A predictable path from first call to handover, with fixed checkpoints you sign off at every stage."
      />

      <ol className="section-gap grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:mt-16 lg:grid-cols-4 xl:grid-cols-7">
        {processSteps.map((s, i) => (
          <li
            key={s.no}
            className="rise-in group flex flex-col gap-2 rounded-xl border border-border bg-card p-3.5 shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift sm:gap-3.5 sm:rounded-2xl sm:p-5"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-background font-display text-[0.8rem] text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground sm:h-10 sm:w-10 sm:text-sm">
              {s.no}
            </span>
            <div>
              <h3 className="font-display text-[0.92rem] leading-snug sm:text-[1.05rem]">{s.title}</h3>
              <p className="mt-1 text-[0.78rem] leading-relaxed text-muted-foreground sm:mt-1.5 sm:text-[0.85rem]">
                {s.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
