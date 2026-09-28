import { Link } from "@tanstack/react-router";
import { categories } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";

const ACCENT = "#E8A25B";

// Compact photo tiles on a fluted-wood wall (client's texture), each image
// capped with a label plate that overlaps its bottom edge.
export function Categories() {
  return (
    <section className="relative isolate overflow-hidden bg-[#2A1C12] py-14 sm:py-20 lg:py-24">
      {/* Fluted wood-slat wall, darkened toward the middle so text and cards pop. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-[length:560px_auto] bg-repeat sm:bg-[length:900px_auto]"
          style={{ backgroundImage: "url(/images/wood-slat-bg.webp)" }}
        />
        <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,17,11,0.78)_0%,rgba(26,17,11,0.55)_40%,rgba(26,17,11,0.7)_100%)]" />
        <span className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_at_top,rgba(240,194,123,0.28)_0%,rgba(240,194,123,0)_70%)]" />
        <span className="absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-[#F0C27B]/80 to-transparent" />
      </div>

      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-editorial text-[2.1rem] leading-[1.1] text-balance text-[#F5EDE0] max-[375px]:text-[1.8rem] sm:text-[2.75rem] lg:text-[3.25rem]">
            Our <span style={{ color: ACCENT }}>Interior</span> Solutions
          </h2>
          <p className="mt-4 flex items-center justify-center gap-3 text-[0.68rem] font-semibold tracking-[0.26em] text-[#E6D5BC] uppercase sm:text-[0.75rem]">
            <span aria-hidden className="h-px w-8 bg-current opacity-50 sm:w-12" />
            Modern designs for better spaces
            <span aria-hidden className="h-px w-8 bg-current opacity-50 sm:w-12" />
          </p>
        </Reveal>

        {/* 10 tiles divide evenly at every breakpoint we use — 2 columns (5 rows)
            on mobile/tablet, 5 columns (2 rows) from `sm` up — so the grid never
            ends in a dangling half-empty row. */}
        <div className="mt-9 grid grid-cols-2 gap-x-3 gap-y-5 sm:mt-14 sm:grid-cols-5 sm:gap-x-4 sm:gap-y-7">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 40}>
              <Link to={cat.to ?? "/gallery"} className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-card shadow-[0_14px_30px_-16px_rgba(60,45,25,0.35)] ring-1 ring-[#EADFC8] transition-[box-shadow,transform] duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_20px_38px_-16px_rgba(60,45,25,0.4)]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    width={600}
                    height={600}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Label plate overlaps the image's bottom edge. */}
                <p className="relative z-10 -mt-4 mx-2 line-clamp-2 rounded-lg bg-[#FFFDF9] px-2 py-2 text-center text-[0.72rem] leading-tight font-semibold text-[#20201E] shadow-[0_8px_18px_-10px_rgba(60,45,25,0.3)] ring-1 ring-[#EADFC8] sm:mx-3 sm:px-3 sm:text-[0.82rem]">
                  {cat.title}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
