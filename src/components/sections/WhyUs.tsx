import { LowerHeading } from "@/components/site/LowerHeading";
import { Reveal } from "@/components/site/Reveal";

const features = [
  { title: "Premium Quality Materials", desc: "Carefully selected, durable and long-lasting." },
  { title: "Professional Design", desc: "Thoughtful and functional spaces for modern living." },
  { title: "Transparent Process", desc: "Clear communication at every stage." },
  { title: "Post-Installation Support", desc: "We're here even after handover." },
];

export function WhyUs() {
  return (
    <section id="why-us" className="section-lower bg-[#F7F3EC]">
      <div className="container-x">
        <LowerHeading eyebrow="Why Choose MNS" title="Designed for a better tomorrow" align="center" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:gap-6 xl:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} as="article" delay={i * 70} className="h-full">
              <div className="flex h-full flex-col rounded-[20px] border border-[#E5DED4] bg-white p-8 shadow-[0_1px_2px_rgba(23,20,17,0.04),0_14px_32px_-22px_rgba(23,20,17,0.18)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(23,20,17,0.05),0_22px_44px_-24px_rgba(23,20,17,0.26)] lg:p-9">
                <span className="text-xs font-medium tracking-[0.2em] text-[#B95827]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden className="mt-5 block h-px w-10 bg-[#E5DED4]" />
                <h3 className="font-editorial mt-6 text-[1.35rem] leading-snug text-[#171411]">{f.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-[#6B625A]">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
