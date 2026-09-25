import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { LowerHeading } from "@/components/site/LowerHeading";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

const initials = (name: string) =>
  name
    .split(/[\s&]+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="relative flex h-full flex-col overflow-hidden rounded-[20px] border border-[#E5DED4] bg-gradient-to-br from-[#FBF6ED] to-[#F7F1E6] p-8 shadow-[0_1px_2px_rgba(23,20,17,0.04),0_16px_36px_-26px_rgba(23,20,17,0.22)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(23,20,17,0.05),0_24px_48px_-28px_rgba(23,20,17,0.3)] lg:p-9">
      {/* top accent bar */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#D9A15B] via-[#B95827] to-[#D9A15B]"
      />
      {/* decorative corner glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 h-28 w-40"
        style={{
          background: "radial-gradient(140px 100px at 100% 100%, rgba(185,88,39,0.08), transparent 70%)",
        }}
      />

      <div className="relative z-[1] flex items-start justify-between gap-3">
        <span aria-hidden className="font-editorial block h-10 text-[3.5rem] leading-none text-[#D9A15B]">
          &ldquo;
        </span>
        <span className="mt-1.5 shrink-0 rounded-full border border-[#E5DED4] bg-white px-3 py-1 text-[0.66rem] font-semibold tracking-[0.08em] text-[#B95827] uppercase">
          {t.project}
        </span>
      </div>
      {"rating" in t && t.rating && (
        <div className="relative z-[1] -mt-1 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-[#D9A15B] text-[#D9A15B]" />
          ))}
        </div>
      )}
      <blockquote className="relative z-[1] mt-2 flex-1 text-[1.02rem] leading-relaxed text-[#171411] lg:text-[1.08rem]">
        {t.quote}
      </blockquote>
      <figcaption className="relative z-[1] mt-8 flex items-center gap-4 border-t border-[#E5DED4] pt-6">
        <span className="font-editorial grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#D9A15B] to-[#B95827] text-base text-white shadow-[0_4px_10px_-4px_rgba(185,88,39,0.5)]">
          {initials(t.name)}
        </span>
        <div className="min-w-0">
          <p className="font-editorial text-lg leading-tight text-[#171411]">{t.name}</p>
          <p className="mt-1 text-[0.8rem] font-medium tracking-[0.02em] text-[#8A8177]">{t.city}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [active, setActive] = useState(0);
  // Below this count the cards fit a static grid — no scroll chrome needed.
  // Once more real reviews come in and this crosses the threshold, it
  // upgrades itself to the swipeable carousel with arrows + dots.
  const isCarousel = testimonials.length > 3;

  useEffect(() => {
    if (!isCarousel) return;
    const el = trackRef.current;
    if (!el) return;
    const updateEdges = () => {
      setAtStart(el.scrollLeft <= 4);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
      const card = el.querySelector<HTMLElement>("[data-testimonial-card]");
      const step = (card?.offsetWidth ?? el.clientWidth) + 24;
      setActive(Math.round(el.scrollLeft / step));
    };
    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [isCarousel]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-testimonial-card]");
    const amount = (card?.offsetWidth ?? el.clientWidth) + 24;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const scrollToIndex = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-testimonial-card]");
    const step = (card?.offsetWidth ?? el.clientWidth) + 24;
    el.scrollTo({ left: i * step, behavior: "smooth" });
  };

  const arrowBtn =
    "grid h-11 w-11 place-items-center rounded-full border border-[#E5DED4] bg-white text-[#171411] transition-colors duration-300 hover:border-[#171411] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[#E5DED4]";

  return (
    <section id="testimonials" className="section-lower border-t border-[#E5DED4] bg-white">
      <div className="container-x">
        <LowerHeading
          eyebrow="What Our Clients Say"
          title="Happy homes, happier people"
          desc="Real feedback from our valued clients."
          action={
            isCarousel ? (
              <div className="flex shrink-0 gap-3">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => scrollByCard(-1)}
                  disabled={atStart}
                  className={arrowBtn}
                >
                  <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => scrollByCard(1)}
                  disabled={atEnd}
                  className={arrowBtn}
                >
                  <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
            ) : undefined
          }
        />

        {isCarousel ? (
          <>
            <Reveal className="section-gap">
              <div
                ref={trackRef}
                className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {testimonials.map((t) => (
                  <div
                    key={t.name}
                    data-testimonial-card
                    className="w-[86%] shrink-0 snap-start sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                  >
                    <TestimonialCard t={t} />
                  </div>
                ))}
              </div>
            </Reveal>
            <div className="mt-5 flex justify-center gap-1.5">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => scrollToIndex(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === active ? "w-6 bg-[#B95827]" : "w-1.5 bg-[#E5DED4]",
                  )}
                />
              ))}
            </div>
          </>
        ) : (
          <Reveal className="section-gap">
            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} t={t} />
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
