import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEstimate } from "@/components/site/estimate-context";
import { cn } from "@/lib/utils";

// ── Hero slides ──────────────────────────────────────────────────────────
// To change a slide, replace the file in public/images/ (keep the name) or
// point `image` at another file inside /public.
// `bakedTitle: true` = the photo already has "Interior Design" printed on it,
// so the text overlay is hidden for that slide.
const heroSlides: { image: string; alt: string; bakedTitle?: boolean }[] = [
  {
    image: "/images/hero-1.webp",
    alt: "Living room with a backlit curved accent wall, terracotta and navy cushions",
  },
  { image: "/images/hero-2.webp", alt: "Living room with a green accent wall, sectional sofa and marble-look flooring" },
  { image: "/images/hero-3.webp", alt: "Traditional Indian-style living and dining room with pendant lighting" },
  { image: "/images/hero-4.webp", alt: "Living room with a marble TV wall, wooden coffee table and armchair" },
  {
    image: "/images/hero-5.webp",
    alt: "Interior Design — luxury dining room with pendant lighting and warm wood panelling",
    bakedTitle: true,
  },
  { image: "/images/hero-6.webp", alt: "Modular kitchen with marble island and pendant lights" },
];

const SLIDE_MS = 2000;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export function Hero() {
  const { openEstimate } = useEstimate();
  const [active, setActive] = useState(0);
  const reducedMotion = usePrefersReducedMotion();
  // Only the first slide loads with the page. Each later slide is fetched one
  // step ahead of when it is shown, so phones don't download all six photos
  // up front.
  const [loaded, setLoaded] = useState(() => new Set([0, 1]));
  useEffect(() => {
    setLoaded((prev) => {
      const next = (active + 1) % heroSlides.length;
      if (prev.has(active) && prev.has(next)) return prev;
      return new Set([...prev, active, next]);
    });
  }, [active]);

  // Advance every 2s. Keyed on `active`, so picking a slide restarts the
  // 2s timer; the timeout is cleared on every change and on unmount.
  // Autoplay is paused for users who ask for reduced motion.
  useEffect(() => {
    if (reducedMotion) return;
    const t = window.setTimeout(() => setActive((i) => (i + 1) % heroSlides.length), SLIDE_MS);
    return () => window.clearTimeout(t);
  }, [active, reducedMotion]);

  const showTitle = !heroSlides[active]?.bakedTitle;

  return (
    <section
      className="relative isolate overflow-hidden bg-[#171411]"
      aria-roledescription="carousel"
      aria-label="MNS Interiors featured interiors"
    >
      {/* Slide stack. Below `lg` it's a banner at the first image's own
          aspect ratio (so slide 1 shows complete, uncropped); from `lg` up
          it fills the whole hero behind the content. */}
      <div className="relative aspect-[1672/941] w-full lg:absolute lg:inset-0 lg:aspect-auto">
        {heroSlides.map((s, i) => (
          <img
            key={s.image}
            {...(loaded.has(i) ? { src: s.image } : {})}
            alt={s.alt}
            aria-hidden={i !== active}
            width={1672}
            height={941}
            {...(i === 0 ? { fetchPriority: "high" as const } : {})}
            loading="eager"
            decoding="async"
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[900ms] ease-out motion-reduce:transition-opacity motion-reduce:duration-300",
              s.bakedTitle ? "object-[0%_68%]" : "object-center",
              i === active ? "scale-100 opacity-100" : "scale-[1.03] opacity-0 motion-reduce:scale-100",
            )}
          />
        ))}

        {/* Scrims: a left-side fade behind the text on every slide except the
            one that already has its own dark text panel; plus the original
            full-hero scrim from `lg` up. */}
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 bg-[linear-gradient(90deg,rgba(23,20,17,0.82)_0%,rgba(23,20,17,0.5)_40%,rgba(23,20,17,0)_75%)] transition-opacity duration-700 lg:hidden",
            showTitle ? "opacity-100" : "opacity-0",
          )}
        />
        <div aria-hidden className="hero-scrim absolute inset-0 hidden lg:block" />
        {/* Screen-reader-only slide status; no visible on-image indicator. */}
        <p aria-live="polite" className="sr-only">
          Slide {active + 1} of {heroSlides.length}
        </p>

        {/* "Interior Design" title for slides that don't have it printed on
            the photo. Decorative duplicate of the sr-only h1 below. */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 transition-opacity duration-700 motion-reduce:duration-200 lg:hidden",
            showTitle ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="container-x flex h-full flex-col justify-center">
            <p className="font-editorial leading-[0.85] text-[#EFE6D8]">
              <span className="block text-[1.6rem] text-[#EFE6D8]/80 sm:text-[2.4rem] lg:text-[3.4rem] xl:text-[4rem]">
                Interior
              </span>
              <span className="block bg-gradient-to-b from-[#F3EADB] to-[#B9A58B] bg-clip-text text-[3.4rem] text-transparent sm:text-[5rem] lg:text-[7.5rem] xl:text-[9rem]">
                Design
              </span>
            </p>
          </div>
        </div>

      </div>

      <div className="container-x relative flex flex-col justify-end py-8 sm:py-10 lg:min-h-[88svh] lg:pt-24 lg:pb-12 xl:pb-20">
        <div className="max-w-2xl rise-in">
          <h1 className="sr-only">Interiors made for how your family actually lives — MNS Interiors, Visakhapatnam</h1>
          {/* Desktop title sits in normal flow above the buttons, so on short
              laptop screens it pushes the buttons down instead of
              overlapping them. On the slide that already has the words in
              the photo it only fades out (keeps its space), so the buttons
              don't jump between slides. */}
          <p
            aria-hidden
            className={cn(
              "font-editorial mb-10 hidden leading-[0.85] text-[#EFE6D8] transition-opacity duration-700 motion-reduce:duration-200 lg:block xl:mb-12",
              showTitle ? "opacity-100" : "opacity-0",
            )}
          >
            <span className="block text-[3.2rem] text-[#EFE6D8]/80 xl:text-[3.8rem]">Interior</span>
            <span className="block bg-gradient-to-b from-[#F3EADB] to-[#B9A58B] bg-clip-text text-[7rem] text-transparent xl:text-[8.5rem]">
              Design
            </span>
          </p>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
            <Button className="h-11 rounded-full px-6 sm:h-12 sm:px-8" onClick={openEstimate}>
              Get Free Estimate
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-background/40 bg-transparent px-6 text-background hover:bg-background hover:text-ink sm:h-12 sm:px-8"
            >
              <Link to="/gallery">Explore Designs</Link>
            </Button>
          </div>
          <div className="mt-6 flex divide-x divide-background/20 sm:mt-9">
            {[
              { value: "200+", label: "Projects Completed" },
              { value: "6+", label: "Years Experience" },
              { value: "24", label: "Services Offered" },
            ].map((s) => (
              <div key={s.label} className="flex-1 pr-3 first:pl-0 sm:flex-none sm:px-6 sm:first:pl-0">
                <p className="font-display text-xl text-background sm:text-2xl">{s.value}</p>
                <p className="mt-0.5 text-[0.75rem] leading-snug text-background/75 sm:text-[0.8rem]">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 flex items-center gap-2 text-[0.78rem] text-background/70 sm:mt-6 sm:text-sm">
            <Check className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" /> BNI · JCI · Meeting Millions member
          </p>
        </div>
      </div>
    </section>
  );
}
