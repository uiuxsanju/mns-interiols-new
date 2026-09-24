import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems, galleryTabs } from "@/lib/site-data";
import { SectionHeading } from "@/components/site/SectionHeading";
import { cn } from "@/lib/utils";

export function Gallery({
  heading = true,
  limit,
}: {
  heading?: boolean;
  /** Show only the first N items with a "view all" link — used on the homepage
   *  so the preview stays a readable length. The /gallery page passes nothing
   *  and therefore still renders every item. */
  limit?: number;
}) {
  const [tab, setTab] = useState("All");
  const [index, setIndex] = useState<number | null>(null);

  const allItems = useMemo(
    () => (tab === "All" ? galleryItems : galleryItems.filter((g) => g.cat === tab)),
    [tab],
  );
  const items = useMemo(
    () => (limit ? allItems.slice(0, limit) : allItems),
    [allItems, limit],
  );
  const hasMore = limit !== undefined && allItems.length > items.length;

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length]);

  const active = index === null ? null : items[index];

  return (
    <section id="gallery" className="container-x section-y">
      {heading && (
        <SectionHeading
          eyebrow="Design Gallery"
          title="Homes we've finished recently"
          desc="Real projects, photographed after handover — plus a few 3D design concepts, clearly tagged. Filter by room to find a direction you like."
        />
      )}

      <div className="scrollbar-none mt-10 flex gap-2 overflow-x-auto pb-1">
        {galleryTabs.map((t) => (
          <button
            key={t}
            onClick={() => {
              setTab(t);
              setIndex(null);
            }}
            className={cn(
              "shrink-0 rounded-full border px-5 py-2 text-sm transition-colors",
              tab === t
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-6 columns-2 gap-3 sm:mt-8 sm:gap-5 lg:columns-3 [&>*]:mb-3 sm:[&>*]:mb-5">
        {items.map((item, i) => (
          <button
            key={`${item.title}-${i}`}
            onClick={() => setIndex(i)}
            className="card-media group relative block w-full break-inside-avoid overflow-hidden rounded-2xl bg-card text-left shadow-card transition-shadow hover:shadow-lift"
          >
            {item.cat === "3D Design" && (
              <span className="absolute top-3 left-3 z-10 rounded-full bg-ink/75 px-3 py-1 text-[0.65rem] tracking-[0.14em] text-background uppercase backdrop-blur-sm">
                3D Concept
              </span>
            )}
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              width={1200}
              height={900}
              className={cn("w-full object-cover", i % 3 === 1 ? "aspect-square" : "aspect-4/3")}
            />
            <div className="flex flex-col gap-1 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-5 sm:py-4">
              <span className="line-clamp-2 text-[0.78rem] leading-snug font-medium text-ink sm:truncate sm:text-sm">
                {item.title}
              </span>
              <span className="shrink-0 text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase sm:text-[0.68rem] sm:tracking-[0.18em]">
                {item.cat}
              </span>
            </div>
          </button>
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <Link
            to="/gallery"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
          >
            View full gallery
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      )}

      {active && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/95 p-4 animate-in fade-in"
          role="dialog"
          aria-modal="true"
          onClick={() => setIndex(null)}
        >
          <button
            aria-label="Close"
            onClick={() => setIndex(null)}
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-background/25 text-background hover:bg-background/10"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
            }}
            className="absolute left-3 grid h-11 w-11 place-items-center rounded-full border border-background/25 text-background hover:bg-background/10 lg:left-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i === null ? i : (i + 1) % items.length));
            }}
            className="absolute right-3 grid h-11 w-11 place-items-center rounded-full border border-background/25 text-background hover:bg-background/10 lg:right-8"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <figure className="max-h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={active.image}
              alt={active.title}
              className="max-h-[78svh] w-full rounded-xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-background/75">
              {active.title} · {active.cat}
              {active.cat === "3D Design" ? " · 3D Concept Render" : ""}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
