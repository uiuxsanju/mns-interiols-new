import { Link } from "@tanstack/react-router";
import { categories } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";

const TERRACOTTA = "#A95F35";

// Compact photo tiles on a marble backdrop with timber-slat columns at the
// edges, each image capped with a label plate that overlaps its bottom edge
// (matches the client's reference image).
export function Categories() {
  return (
    <section className="relative isolate overflow-hidden bg-[#FBFAF7] py-14 sm:py-20 lg:py-24">
      {/* Marble veining: layered faint diagonal streaks over an ivory base. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0px, transparent 90px, rgba(180,165,140,0.5) 91px, transparent 94px, transparent 240px), repeating-linear-gradient(25deg, transparent 0px, transparent 140px, rgba(180,165,140,0.35) 141px, transparent 145px, transparent 320px)",
        }}
      />
      {/* Timber-slat columns, echoing the wood pillars in the reference. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 hidden w-16 lg:block"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, #8A6339 0px, #6E4C2A 10px, #8A6339 20px)",
          opacity: 0.22,
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-16 lg:block"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, #8A6339 0px, #6E4C2A 10px, #8A6339 20px)",
          opacity: 0.22,
        }}
      />
      {/* Soft warm-wood glows, echoing the marble + timber reference. */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 -z-10 h-72 w-72 rounded-full bg-[#C79A63]/15 blur-3xl sm:h-96 sm:w-96"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-24 -bottom-24 -z-10 h-72 w-72 rounded-full bg-[#C79A63]/15 blur-3xl sm:h-96 sm:w-96"
      />
      {/* Soft greenery glows in the far corners, like the plants in the reference. */}
      <span
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-16 -z-10 hidden h-64 w-40 rounded-[45%_55%_60%_40%] bg-[#7E9460]/20 blur-3xl lg:block"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-1/4 -z-10 hidden h-64 w-40 rounded-[55%_45%_40%_60%] bg-[#7E9460]/20 blur-3xl lg:block"
      />

      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-editorial text-[2.1rem] leading-[1.1] text-balance text-[#20201E] max-[375px]:text-[1.8rem] sm:text-[2.75rem] lg:text-[3.25rem]">
            Our <span style={{ color: TERRACOTTA }}>Interior</span> Solutions
          </h2>
          <p className="mt-4 flex items-center justify-center gap-3 text-[0.68rem] font-semibold tracking-[0.26em] text-[#8A7F6E] uppercase sm:text-[0.75rem]">
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
