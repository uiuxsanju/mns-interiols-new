import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/site-data";
import { SectionHeading } from "@/components/site/SectionHeading";

export function Categories() {
  return (
    <section className="container-x py-20 lg:py-28">
      <SectionHeading
        eyebrow="Interior Categories"
        title="Every room, designed with intent"
        desc="Ten specialisations, one team. Pick a space to see how we plan storage, light and movement around it."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <Link
            key={cat.title}
            to={cat.to ?? "/gallery"}
            className={`group card-media relative block overflow-hidden rounded-2xl bg-card shadow-card transition-shadow hover:shadow-lift ${
              i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
            }`}
          >
            <img
              src={cat.image}
              alt={cat.title}
              loading="lazy"
              width={1200}
              height={900}
              className={`w-full object-cover ${i === 0 ? "h-72 lg:h-96" : "h-64"}`}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent p-6 pt-16">
              <div className="flex items-end justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="truncate font-display text-xl text-background">{cat.title}</h3>
                  <p className="mt-1 line-clamp-1 text-sm text-background/75">{cat.desc}</p>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-background/40 text-background transition-colors group-hover:border-transparent group-hover:bg-primary">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
