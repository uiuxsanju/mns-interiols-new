import { Link } from "@tanstack/react-router";
import { categories } from "@/lib/site-data";
import { SectionHeading } from "@/components/site/SectionHeading";

// Compact photo tiles — clearer at a glance and lighter on mobile than
// a large image with text overlaid on top of it.
export function Categories() {
  return (
    <section className="container-x section-y">
      <SectionHeading
        eyebrow="Interior Categories"
        title="Every room, designed with intent"
        desc="Ten specialisations, one team. Pick a space to see how we plan storage, light and movement around it."
      />
      {/* 10 tiles divide evenly at every breakpoint we use — 2 columns (5 rows)
          on mobile/tablet, 5 columns (2 rows) from `sm` up — so the grid never
          ends in a dangling half-empty row. */}
      <div className="section-gap grid grid-cols-2 gap-3 sm:grid-cols-5 sm:gap-4">
        {categories.map((cat) => (
          <Link key={cat.title} to={cat.to ?? "/gallery"} className="group block">
            <div className="relative overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-transparent transition-[box-shadow,transform] duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lift group-hover:ring-primary/30">
              <img
                src={cat.image}
                alt={cat.title}
                loading="lazy"
                width={600}
                height={600}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-2.5 line-clamp-2 text-[0.78rem] leading-tight font-medium text-ink sm:text-[0.85rem]">
              {cat.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
