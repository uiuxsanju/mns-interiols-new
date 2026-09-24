import { Reveal } from "@/components/site/Reveal";
import bniLogo from "@/assets/memberships/bni.png";
import jciLogo from "@/assets/memberships/jci.png";
import mmnLogo from "@/assets/memberships/mmn.png";

// Real affiliations of MNS Interiors.
const memberships = [
  {
    name: "Business Network International",
    logo: bniLogo,
    alt: "BNI logo",
    accent: "#DA1F26",
    description:
      "A global networking organization helping businesses grow together through meaningful relationships.",
  },
  {
    name: "Junior Chamber International",
    logo: jciLogo,
    alt: "JCI logo",
    accent: "#0B63C5",
    description:
      "A worldwide federation of young leaders and active citizens creating positive impact in their communities.",
  },
  {
    name: "Meeting Millions Network",
    logo: mmnLogo,
    alt: "Meeting Millions Network logo",
    accent: "#132A52",
    description:
      "A powerful business community to create opportunities, share ideas and achieve success together.",
  },
];

export function Memberships() {
  return (
    <section id="memberships" className="section-lower bg-[#FBF9F5]">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-5">
            <span aria-hidden className="h-px w-10 bg-[#B95827]/50 sm:w-14" />
            <p className="eyebrow-mns tracking-[0.32em]">Stronger Together</p>
            <span aria-hidden className="h-px w-10 bg-[#B95827]/50 sm:w-14" />
          </div>
          <h2 className="font-editorial mt-5 text-[2.4rem] leading-[1.08] text-[#171411] sm:text-[3rem] lg:text-[3.6rem]">
            Our Memberships
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#6B625A] sm:text-[1.1rem]">
            MNS Interiors is proud to be associated with these professional networks and platforms.
          </p>
        </div>

        <div className="section-gap mx-auto flex max-w-3xl flex-col gap-3.5 sm:gap-5 lg:max-w-6xl lg:flex-row lg:gap-7">
          {memberships.map((m, i) => (
            <Reveal key={m.name} as="article" delay={i * 80} className="lg:flex-1">
              <div className="relative flex h-full flex-col items-start gap-4 overflow-hidden rounded-2xl border border-[#E5DED4] bg-white p-4 shadow-[0_1px_2px_rgba(23,20,17,0.04),0_16px_36px_-24px_rgba(23,20,17,0.2)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(23,20,17,0.05),0_24px_46px_-26px_rgba(23,20,17,0.28)] sm:flex-row sm:gap-5 sm:p-6">
                {/* corner ribbon */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]"
                  style={{ background: m.accent, clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                />
                {/* decorative fade, bottom-right */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-0 right-0 h-28 w-36"
                  style={{
                    background: `radial-gradient(120px 90px at 100% 100%, ${m.accent}1a, transparent 70%)`,
                  }}
                />

                <div className="relative z-[1] ml-auto flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_1px_2px_rgba(23,20,17,0.06),0_10px_20px_-14px_rgba(23,20,17,0.25)] sm:ml-0 sm:h-28 sm:w-28">
                  <img src={m.logo} alt={m.alt} loading="lazy" className="h-12 w-auto max-w-[70%] object-contain sm:h-16" />
                </div>

                <div className="relative z-[1] min-w-0 flex-1 sm:border-l sm:border-[#EFE9DF] sm:pt-1 sm:pl-5">
                  <p className="text-[0.66rem] font-medium tracking-[0.22em] text-[#8A8177] uppercase sm:text-[0.68rem]">
                    Member of
                  </p>
                  <span aria-hidden className="mt-1.5 block h-[3px] w-8 rounded-full" style={{ background: m.accent }} />
                  <h3 className="font-editorial mt-2 text-[1.05rem] leading-snug text-balance text-[#171411] sm:text-xl">
                    {m.name}
                  </h3>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-[#6B625A] sm:text-sm">
                    {m.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
