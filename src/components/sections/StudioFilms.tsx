import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { studioFilms } from "@/lib/studio-films";
import { useScrollLock } from "@/lib/use-scroll-lock";

// Real, unscripted clips from MNS Interiors' own site visits, installs and
// handovers (sourced from the studio's Instagram). Videos are served from
// /public and load only on click (or on hover, for a lightweight preview on
// desktop), so the row itself stays light.
export function StudioFilms() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const scrollByCards = (dir: 1 | -1) => {
    const el = rowRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-film-card]");
    const amount = (card?.offsetWidth ?? el.clientWidth * 0.8) + 20;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const activeFilm = active ? studioFilms.find((f) => f.id === active) : null;

  useScrollLock(active !== null);

  return (
    <section className="section-lower relative overflow-hidden bg-[#171411] text-[#F2ECE2]">
      {/* faint corner glow for depth, matching the site's editorial-dark accents */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#D9A15B]/10 blur-3xl"
      />
      <div className="container-x relative">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-[#D9A15B]/60" />
              <p className="text-[0.7rem] font-semibold tracking-[0.28em] text-[#D9A15B] uppercase">
                In The Field
              </p>
            </div>
            <h2 className="font-editorial mt-3 text-[1.9rem] leading-[1.1] text-background sm:text-[2.5rem] lg:text-[3rem]">
              Real projects, in motion
            </h2>
            <p className="mt-3 text-[0.92rem] leading-relaxed text-background/70 sm:text-base">
              Unscripted clips from our own site visits, installs and handovers across Visakhapatnam —
              the craft and the payoff, filmed as it happened.
            </p>
          </div>
          <div className="flex shrink-0 gap-2.5">
            <button
              aria-label="Scroll left"
              onClick={() => scrollByCards(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-background/20 text-background transition-colors hover:border-[#D9A15B] hover:text-[#D9A15B]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollByCards(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-background/20 text-background transition-colors hover:border-[#D9A15B] hover:text-[#D9A15B]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={rowRef}
          className="scrollbar-none section-gap flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {studioFilms.map((film) => (
            <button
              key={film.id}
              data-film-card
              onClick={() => setActive(film.id)}
              onMouseEnter={() => setHovered(film.id)}
              onMouseLeave={() => setHovered((h) => (h === film.id ? null : h))}
              className="group relative w-[68%] shrink-0 snap-start overflow-hidden rounded-2xl bg-[#211D18] text-left shadow-[0_1px_2px_rgba(0,0,0,0.2),0_20px_44px_-24px_rgba(0,0,0,0.6)] ring-1 ring-background/10 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 sm:w-[280px] lg:w-[300px]"
            >
              <span className="absolute top-3 left-3 z-10 rounded-full bg-black/55 px-3 py-1 text-[0.64rem] tracking-[0.16em] text-background uppercase backdrop-blur-sm">
                {film.room}
              </span>
              <div className="aspect-[3/4] w-full overflow-hidden">
                {hovered === film.id ? (
                  <video
                    src={film.video}
                    poster={film.poster}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={film.poster}
                    alt={film.title}
                    loading="lazy"
                    width={640}
                    height={853}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"
              />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-[#D9A15B] text-[#171411] shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-0.5 h-5 w-5 fill-current" />
                </span>
              </span>
              <span className="absolute right-0 bottom-0 left-0 px-4 py-3.5 text-sm leading-snug font-medium text-background">
                {film.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeFilm && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 p-4 animate-in fade-in"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Close"
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-background/25 text-background hover:bg-background/10"
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-h-full w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            <video
              key={activeFilm.id}
              src={activeFilm.video}
              poster={activeFilm.poster}
              controls
              autoPlay
              playsInline
              className="max-h-[80svh] w-full rounded-xl bg-black object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-background/75">
              {activeFilm.title} · {activeFilm.room}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
