import { Reveal } from "@/components/site/Reveal";
import venkataSunilFullBody from "@/assets/founders/venkata-sunil-fullbody.webp";

const stats = [
  { value: "19+", label: "Projects" },
  { value: "24", label: "Services" },
  { value: "7-Step", label: "Process" },
  { value: "2D & 3D", label: "Visuals" },
];

export function FounderSpotlight() {
  return (
    <section id="founder-spotlight" className="section-lower border-t border-[#E5DED4] bg-white">
      <div className="container-x">
        <Reveal as="div">
          <div className="relative mx-auto grid max-w-4xl overflow-hidden rounded-[20px] border border-[#E5DED4] bg-[#FBF6ED] shadow-[0_1px_2px_rgba(23,20,17,0.04),0_20px_44px_-28px_rgba(23,20,17,0.24)] sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            {/* photo — fills its panel edge-to-edge, no dead space */}
            <div className="relative aspect-[2/3] w-full overflow-hidden bg-gradient-to-b from-[#F1E9D9] to-[#E9DCC4] sm:aspect-auto">
              <img
                src={venkataSunilFullBody}
                alt="Venkata Sunil E., Founder & Principal Designer at MNS Interiors"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent sm:hidden"
              />
            </div>

            <div className="relative z-[1] flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-[#B95827] uppercase">
                Founder Spotlight
              </p>
              <h3 className="font-editorial mt-2 text-[1.6rem] leading-tight text-[#171411] sm:text-[1.9rem]">
                Venkata Sunil E.
              </h3>
              <p className="mt-1 text-[0.8rem] font-semibold tracking-[0.08em] text-[#6B625A] uppercase">
                Founder &amp; Principal Designer
              </p>
              <span aria-hidden className="mt-4 block h-px w-12 bg-[#D9A15B]/60" />

              <p className="mt-4 text-[0.95rem] leading-relaxed text-[#6B625A]">
                A civil engineer by training (Diploma &amp; B.Tech Civil) and a designer by
                calling, Venkata Sunil founded MNS Interiors in Visakhapatnam on a simple belief —
                a home should work as beautifully as it looks. He leads every project through the
                studio's 7-step design-to-move-in process, delivering 19+ completed homes and
                commercial spaces across Visakhapatnam and North Andhra Pradesh, each one
                visualised in 2D &amp; 3D before a single wall is touched.
              </p>

              <div className="mt-6 grid grid-cols-4 gap-3 border-t border-[#E5DED4] pt-5">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-editorial text-lg text-[#171411] sm:text-xl">{s.value}</p>
                    <p className="mt-0.5 text-[0.66rem] leading-snug text-[#8A8177]">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
