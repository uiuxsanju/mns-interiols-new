import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/site-data";
import { SectionHeading } from "@/components/site/SectionHeading";

export function Categories() {
  return (
    <section className="container-x section-y">
      <SectionHeading
        eyebrow="Interior Categories"
        title="Every room, designed with intent"
        desc="Ten specialisations, one team. Pick a space to see how we plan storage, light and movement around it."
      />
      {/* Below `lg`, every tile is the same size — 10 items in a 2-column grid
          makes exactly 5 even rows. At `lg` the first tile becomes a full-width
          feature banner, leaving exactly 9 tiles for a clean 3×3 grid — so
          neither layout ever ends with a dangling half-empty row. */}
      <div className="section-gap grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
        {categories.map((cat, i) => (
          <Link
            key={cat.title}
            to={cat.to ?? "/gallery"}
            className={`group card-media relative block overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-transparent transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-lift hover:ring-primary/30 ${
              i === 0 ? "lg:col-span-3" : ""
            }`}
          >
            <img
              src={cat.image}
              alt={cat.title}
              loading="lazy"
              width={1200}
              height={900}
              className={`w-full object-cover ${
                i === 0
                  ? "aspect-[4/3] sm:aspect-[16/7] lg:aspect-[21/6]"
                  : "aspect-square sm:aspect-[4/5]"
              }`}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/88 via-ink/25 to-transparent transition-opacity duration-300 group-hover:from-ink/92"
            />
            <div
              className={`absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:gap-4 sm:p-5 ${
                i === 0 ? "sm:p-7" : ""
              }`}
            >
              <div className="min-w-0">
                {i === 0 && (
                  <p className="mb-1.5 hidden text-[0.68rem] font-semibold tracking-[0.24em] text-primary/90 uppercase sm:block">
                    Our Signature Work
                  </p>
                )}
                <h3
                  className={`truncate font-display text-background ${
                    i === 0 ? "text-lg sm:text-2xl lg:text-[1.75rem]" : "text-[0.9rem] sm:text-lg"
                  }`}
                >
                  {cat.title}
                </h3>
                <p
                  className={`mt-0.5 text-background/75 sm:mt-1.5 ${
                    i === 0 ? "line-clamp-1 text-[0.78rem] sm:text-[0.95rem]" : "line-clamp-1 text-[0.68rem] sm:text-[0.82rem]"
                  }`}
                >
                  {cat.desc}
                </p>
              </div>
              <span
                className={`grid shrink-0 place-items-center rounded-full border border-background/40 text-background backdrop-blur-sm transition-colors duration-300 group-hover:border-transparent group-hover:bg-primary ${
                  i === 0 ? "h-10 w-10 sm:h-12 sm:w-12" : "h-8 w-8 sm:h-10 sm:w-10"
                }`}
              >
                <ArrowUpRight className={i === 0 ? "h-4 w-4 sm:h-5 sm:w-5" : "h-3.5 w-3.5 sm:h-4 sm:w-4"} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
