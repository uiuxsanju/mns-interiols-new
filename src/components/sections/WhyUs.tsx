import { Reveal } from "@/components/site/Reveal";
import materialsImg from "@/assets/portfolio/stone-accent-wall-backlit.webp";
import designImg from "@/assets/portfolio/tv-unit-3.webp";
import processImg from "@/assets/portfolio/kitchen-design-render-1.webp";
import supportImg from "@/assets/portfolio/living-room-tv.webp";

const TERRACOTTA = "#A95F35";
const OLIVE = "#667344";

type Feature = {
  title: string;
  desc: string;
  image: string;
  /** object-position for the portrait crop */
  focus: string;
  accent: string;
};

const features: Feature[] = [
  {
    title: "Premium Quality Materials",
    desc: "Carefully selected, durable and long-lasting materials for timeless interiors.",
    image: materialsImg,
    focus: "60% 50%",
    accent: TERRACOTTA,
  },
  {
    title: "Professional Design",
    desc: "Thoughtful and functional spaces for modern living.",
    image: designImg,
    focus: "40% 50%",
    accent: OLIVE,
  },
  {
    title: "Transparent Process",
    desc: "Clear communication at every stage, with regular updates and on-time delivery.",
    image: processImg,
    focus: "55% 45%",
    accent: TERRACOTTA,
  },
  {
    title: "Post-Installation Support",
    desc: "We're here even after handover to ensure your complete satisfaction.",
    image: supportImg,
    focus: "72% 60%",
    accent: OLIVE,
  },
];

function FeatureCard({ f, index }: { f: Feature; index: number }) {
  return (
    <div className="relative flex h-full min-h-[14rem] overflow-hidden rounded-[26px] bg-[#FFFDF9] shadow-[0_1px_2px_rgba(32,32,32,0.04),0_22px_44px_-30px_rgba(32,32,32,0.25)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(32,32,32,0.05),0_30px_54px_-30px_rgba(32,32,32,0.3)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 max-[375px]:min-h-[13rem] sm:min-h-[16rem] xl:min-h-[18rem]">
      {/* Bottom-right accent crescent (sits under the image). */}
      <span
        aria-hidden
        className="absolute right-2.5 bottom-2.5 h-[42%] w-[40%] sm:right-3 sm:bottom-3 xl:w-[36%]"
        style={{
          backgroundColor: f.accent,
          borderTopLeftRadius: "100% 100%",
          borderBottomRightRadius: "20px",
        }}
      />
      {/* Image: large organic curve on its inner edge, white curved divider
          (the ring follows the radius), cut away bottom-right to reveal the
          accent. */}
      <div
        className="absolute top-2.5 right-2.5 bottom-2.5 w-[44%] overflow-hidden shadow-[0_0_0_5px_#FFFDF9] sm:top-3 sm:right-3 sm:bottom-3 sm:w-[46%] xl:w-[39%] 2xl:w-[42%]"
        style={{
          borderTopLeftRadius: "78% 46%",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "84% 30%",
          borderBottomLeftRadius: "14px",
        }}
      >
        <img
          src={f.image}
          alt=""
          aria-hidden
          loading="lazy"
          className="h-full w-full object-cover"
          style={{ objectPosition: f.focus }}
        />
      </div>

      {/* Content column */}
      <div className="relative flex h-full w-[56%] flex-col justify-center p-5 max-[375px]:p-4 sm:w-[54%] sm:p-6 xl:w-[62%] xl:p-5 2xl:w-[58%] 2xl:p-6">
        <span
          className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em]"
          style={{ color: f.accent }}
        >
          {String(index + 1).padStart(2, "0")}
          <span aria-hidden className="block h-px w-5 bg-current opacity-50" />
        </span>

        <h3 className="font-editorial mt-2.5 text-[1.375rem] leading-[1.15] text-[#202020] max-[375px]:text-[1.2rem] sm:text-[1.3rem] xl:text-[1.18rem] 2xl:text-[1.35rem]">
          {f.title}
        </h3>
        <p className="mt-2.5 text-[0.9rem] leading-relaxed text-[#6B6B6B] max-[375px]:text-[0.85rem] sm:text-[0.92rem] xl:text-[0.85rem] 2xl:text-[0.9rem]">
          {f.desc}
        </p>
      </div>
    </div>
  );
}

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative isolate overflow-hidden bg-[#F7F2E9] py-12 max-[375px]:py-10 sm:py-20 lg:py-24"
    >
      {/* Very subtle oversized curved shapes on the left. */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-48 -z-10 h-[34rem] w-[34rem] rounded-full border-[70px] border-[#EFE5D3]/70"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-40 -z-10 h-[26rem] w-[26rem] rounded-full bg-[#EFE5D3]/60 blur-3xl"
      />
      {/* Soft blurred greenery, top-right. */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-16 -z-10 h-72 w-72 rounded-[45%_55%_60%_40%] bg-[#7E9460]/25 blur-3xl sm:h-96 sm:w-96"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-6 right-10 -z-10 hidden h-40 w-24 rotate-[35deg] rounded-[100%_0] bg-[#5E7447]/20 blur-2xl lg:block"
      />

      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-3 text-[0.72rem] font-semibold tracking-[0.26em] text-[#A95F35] uppercase sm:text-[0.8rem]">
            <span aria-hidden className="h-px w-10 bg-current opacity-50 max-[375px]:w-6 sm:w-16" />
            Why Choose MNS
            <span aria-hidden className="h-px w-10 bg-current opacity-50 max-[375px]:w-6 sm:w-16" />
          </p>
          <h2 className="font-editorial mt-4 text-[2.1rem] leading-[1.1] text-balance text-[#202020] max-[375px]:text-[1.8rem] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem]">
            Designed for a <em className="text-[#A95F35] italic">better tomorrow</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-[#6B6B6B] max-[375px]:text-[0.88rem] sm:text-[1.05rem]">
            Thoughtful designs, quality craftsmanship and complete support — for spaces you&rsquo;ll love, today and
            always.
          </p>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} as="article" delay={i * 70} className="h-full">
              <FeatureCard f={f} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
