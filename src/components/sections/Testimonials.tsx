import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { LowerHeading } from "@/components/site/LowerHeading";
import { Reveal } from "@/components/site/Reveal";

const initials = (name: string) =>
  name
    .split(/[\s&]+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const canScroll = testimonials.length > 1;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const updateEdges = () => {
      setAtStart(el.scrollLeft <= 4);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    };
    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-testimonial-card]");
    const amount = (card?.offsetWidth ?? el.clientWidth) + 24;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
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
            canScroll ? (
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

        <Reveal className="mt-12 lg:mt-16">
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
                <figure className="relative flex h-full flex-col overflow-hidden rounded-[20px] border border-[#E5DED4] bg-gradient-to-br from-[#FBF6ED] to-[#F7F1E6] p-8 shadow-[0_1px_2px_rgba(23,20,17,0.04),0_16px_36px_-26px_rgba(23,20,17,0.22)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(23,20,17,0.05),0_24px_48px_-28px_rgba(23,20,17,0.3)] lg:p-9">
                  {/* top accent bar */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#D9A15B] via-[#B95827] to-[#D9A15B]"
                  />
                  {/* decorative corner glow */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute bottom-0 right-0 h-28 w-40"
                    style={{
                      background:
                        "radial-gradient(140px 100px at 100% 100%, rgba(185,88,39,0.08), transparent 70%)",
                    }}
                  />

                  <span aria-hidden className="font-editorial relative z-[1] block h-10 text-[3.5rem] leading-none text-[#D9A15B]">
                    &ldquo;
                  </span>
                  <blockquote className="relative z-[1] mt-2 flex-1 text-[1.02rem] leading-relaxed text-[#171411] lg:text-[1.08rem]">
                    {t.quote}
                  </blockquote>
                  <figcaption className="relative z-[1] mt-8 flex items-center gap-4 border-t border-[#E5DED4] pt-6">
                    <span className="font-editorial grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#D9A15B] to-[#B95827] text-base text-white shadow-[0_4px_10px_-4px_rgba(185,88,39,0.5)]">
                      {initials(t.name)}
                    </span>
                    <div className="min-w-0">
                      <p className="font-editorial text-lg leading-tight text-[#171411]">{t.name}</p>
                      <p className="mt-1 text-[0.8rem] font-medium tracking-[0.06em] text-[#B95827]">
                        {t.city} · {t.project}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
