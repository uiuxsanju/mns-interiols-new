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
      <div className="section-gap grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <Link
            key={cat.title}
            to={cat.to ?? "/gallery"}
            className={`group card-media relative block overflow-hidden rounded-xl bg-card shadow-card transition-shadow hover:shadow-lift sm:rounded-2xl ${
              i === 0 ? "col-span-2 lg:col-span-2 lg:row-span-1" : ""
            }`}
          >
            <img
              src={cat.image}
              alt={cat.title}
              loading="lazy"
              width={1200}
              height={900}
              className={`w-full object-cover ${
                i === 0 ? "h-48 sm:h-72 lg:h-96" : "aspect-square h-auto sm:aspect-auto sm:h-64"
              }`}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent p-3 pt-12 sm:p-6 sm:pt-16">
              <div className="flex items-end justify-between gap-2 sm:gap-4">
                <div className="min-w-0">
                  <h3 className="truncate font-display text-[0.95rem] text-background sm:text-xl">
                    {cat.title}
                  </h3>
                  <p className="mt-0.5 line-clamp-1 text-[0.7rem] text-background/75 sm:mt-1 sm:text-sm">
                    {cat.desc}
                  </p>
                </div>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-background/40 text-background transition-colors group-hover:border-transparent group-hover:bg-primary sm:h-10 sm:w-10">
                  <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
