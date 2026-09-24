import { GraduationCap } from "lucide-react";
import { LowerHeading } from "@/components/site/LowerHeading";
import { Reveal } from "@/components/site/Reveal";
import venkataSunilPhoto from "@/assets/founders/venkata-sunil.webp";
import manoharPhoto from "@/assets/founders/manohar.webp";

// Only authentic founder information already in the project.
const founders = [
  {
    name: "Venkata Sunil E.",
    position: "Founder & Principal Designer",
    qualification: "Diploma & B.Tech Civil",
    desc: "Passionate about creating spaces that are functional, elegant and truly personal.",
    photo: venkataSunilPhoto,
    imgClass: "object-[50%_18%]",
  },
  {
    name: "Mrs. Manohar T M S",
    position: "Co-Founder & Managing Partner",
    qualification: "MBA",
    desc: "Ensuring every project is delivered with quality, care and a focus on customer satisfaction.",
    photo: manoharPhoto,
    imgClass: "object-[50%_18%]",
  },
];

export function Founders() {
  return (
    <section id="founders" className="section-lower border-t border-[#E5DED4] bg-white">
      <div className="container-x">
        <LowerHeading
          eyebrow="Meet the Founders"
          title="The people behind MNS Interiors"
          desc="A passionate team committed to creating beautiful, functional spaces."
        />

        <div className="mt-12 lg:mt-16">
          <div className="mx-auto flex max-w-4xl flex-col gap-6">
            {founders.map((f, i) => (
              <Reveal key={f.name} as="article" delay={i * 90} className="flex-1">
                <div className="relative flex h-full flex-col items-center gap-6 overflow-hidden rounded-[20px] border border-[#E5DED4] bg-gradient-to-br from-[#FBF6ED] to-[#F7F1E6] p-7 text-center shadow-[0_1px_2px_rgba(23,20,17,0.04),0_16px_36px_-26px_rgba(23,20,17,0.22)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(23,20,17,0.05),0_24px_48px_-28px_rgba(23,20,17,0.3)] sm:flex-row sm:items-center sm:gap-8 sm:p-8 sm:text-left lg:p-9">
                  {/* left accent bar */}
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-[5px] bg-gradient-to-b from-[#D9A15B] via-[#B95827] to-[#D9A15B]"
                  />
                  {/* decorative wave, bottom-right */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute bottom-0 right-0 h-32 w-48"
                    style={{
                      background:
                        "radial-gradient(160px 110px at 100% 100%, rgba(185,88,39,0.10), transparent 70%)",
                    }}
                  />

                  <div className="relative z-[1] h-36 w-36 shrink-0 overflow-hidden rounded-full border-2 border-[#D9A15B] bg-white ring-4 ring-white sm:h-40 sm:w-40 xl:h-44 xl:w-44">
                    <img
                      src={f.photo}
                      alt={`${f.name}, ${f.position} at MNS Interiors`}
                      loading="lazy"
                      className={`h-full w-full object-cover ${f.imgClass}`}
                    />
                  </div>
                  <div className="relative z-[1] min-w-0">
                    <h3 className="font-editorial text-[1.6rem] leading-tight text-[#171411] sm:text-[1.75rem]">
                      {f.name}
                    </h3>
                    <p className="mt-2 text-[0.8rem] font-semibold tracking-[0.14em] text-[#B95827] uppercase">
                      {f.position}
                    </p>
                    <p className="mt-2 flex items-center justify-center gap-2 text-sm text-[#6B625A] sm:justify-start">
                      <GraduationCap className="h-4 w-4 shrink-0 text-[#B95827]" aria-hidden />
                      {f.qualification}
                    </p>
                    <span aria-hidden className="mx-auto mt-5 block h-px w-12 bg-[#D9A15B]/60 sm:mx-0" />
                    <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-[#6B625A]">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
