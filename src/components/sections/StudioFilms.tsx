import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { studioFilms } from "@/lib/studio-films";

// Real, unscripted clips from MNS Interiors' own site visits, installs and
// handovers (sourced from the studio's Instagram). Videos are served from
// /public and load only on click, so the row itself stays light.
export function StudioFilms() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);

  const scrollByCards = (dir: 1 | -1) => {
    const el = rowRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(640, el.clientWidth * 0.8), behavior: "smooth" });
  };

  const activeFilm = active ? studioFilms.find((f) => f.id === active) : null;

  return (
    <section className="container-x py-16 lg:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase">Studio Notes</p>
          <h2 className="font-display mt-2 text-3xl text-ink sm:text-4xl">Real Projects, In Motion</h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Short clips from our own site visits, installs and handovers — the process and the payoff.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            aria-label="Scroll left"
            onClick={() => scrollByCards(-1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-ink transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scrollByCards(1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-ink transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div ref={rowRef} className="scrollbar-none mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2">
        {studioFilms.map((film) => (
          <button
            key={film.id}
            onClick={() => setActive(film.id)}
            className="group relative w-[220px] shrink-0 snap-start overflow-hidden rounded-2xl bg-card text-left shadow-card transition-shadow hover:shadow-lift sm:w-[260px]"
          >
            <span className="absolute top-3 left-3 z-10 rounded-full bg-ink/70 px-3 py-1 text-[0.65rem] tracking-[0.14em] text-background uppercase backdrop-blur-sm">
              {film.room}
            </span>
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img
                src={film.poster}
                alt={film.title}
                loading="lazy"
                width={640}
                height={853}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-background/90 text-ink shadow-lift transition-transform group-hover:scale-110">
                <Play className="ml-0.5 h-6 w-6 fill-current" />
              </span>
            </span>
            <span className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-ink/80 to-transparent px-4 py-3 text-sm font-medium text-background">
              {film.title}
            </span>
          </button>
        ))}
      </div>

      {activeFilm && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/95 p-4 animate-in fade-in"
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
