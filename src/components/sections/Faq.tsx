import {
  ArrowRight,
  ChefHat,
  Clock,
  Coins,
  DoorClosed,
  Headphones,
  Home as HomeIcon,
  PencilRuler,
  Phone,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { faqs, brand } from "@/lib/site-data";

// ── Replace this image anytime: drop a new file at public/images/faq-interior.webp
//    (or point this path at any other file inside /public).
const faqImage = "/images/faq-interior.webp";

// One icon per question, in the same order as `faqs` in site-data.ts.
const icons: LucideIcon[] = [Coins, Clock, PencilRuler, ChefHat, DoorClosed, HomeIcon, Settings, Headphones];

// Badge tones in the exact order of the reference:
// terracotta, olive, beige, olive, beige, terracotta, olive, beige.
const T = { bg: "#A95F35", fg: "#FFFFFF" };
const O = { bg: "#667344", fg: "#FFFFFF" };
const B = { bg: "#EFE4D2", fg: "#4A3B2E" };
const badgeTones = [T, O, B, O, B, T, O, B];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const Icon = icons[index] ?? Coins;
  const tone = badgeTones[index] ?? T;
  return (
    <AccordionItem
      value={`faq-${index}`}
      className="rounded-[20px] border border-[#E8E0D5] bg-white px-3.5 shadow-[0_1px_2px_rgba(32,32,32,0.03),0_10px_24px_-20px_rgba(32,32,32,0.18)] transition-[transform,box-shadow] duration-300 hover:-translate-y-px hover:shadow-[0_1px_2px_rgba(32,32,32,0.04),0_16px_30px_-22px_rgba(32,32,32,0.24)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-5"
    >
      <AccordionTrigger className="min-h-[4.25rem] py-3 hover:no-underline sm:min-h-[4.75rem]">
        <span className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
          <span
            aria-hidden
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full sm:h-12 sm:w-12"
            style={{ backgroundColor: tone.bg, color: tone.fg }}
          >
            <Icon className="h-[1.1rem] w-[1.1rem] sm:h-5 sm:w-5" strokeWidth={1.6} />
          </span>
          <span aria-hidden className="flex w-6 shrink-0 flex-col items-start gap-1.5 sm:w-8">
            <span className="text-[0.7rem] font-semibold tracking-[0.12em] text-[#A95F35] sm:text-xs">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="block h-px w-full bg-[#A95F35]/45" />
          </span>
          <span className="font-editorial min-w-0 flex-1 text-left text-[1.02rem] leading-snug text-[#202020] sm:text-[1.2rem] lg:text-[1.3rem]">
            {q}
          </span>
        </span>
      </AccordionTrigger>
      <AccordionContent className="pr-2 pb-5 pl-[5.5rem] text-[0.9rem] leading-relaxed text-[#6B6B6B] sm:pr-14 sm:pl-[7rem] sm:text-[0.95rem]">
        {a}
      </AccordionContent>
    </AccordionItem>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-[#F7F3EC] py-16 sm:py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:gap-8 xl:gap-10">
          {/* Left: one large rounded photo panel with the heading, copy and
              CTA laid over its bright top area — same as the reference. */}
          <Reveal className="h-full">
            <div className="relative isolate flex h-full min-h-[38rem] flex-col overflow-hidden rounded-[32px] bg-[#EDE4D7] shadow-[0_1px_2px_rgba(32,32,32,0.04),0_30px_60px_-40px_rgba(32,32,32,0.35)] sm:min-h-[42rem] lg:min-h-[44rem]">
              <img
                src={faqImage}
                alt="Living room interior by MNS Interiors"
                loading="lazy"
                className="absolute inset-0 -z-10 h-full w-full object-cover object-[60%_85%]"
              />
              {/* Soft ivory wash so the dark text stays crisp over the photo:
                  a vertical fade over the top half, plus a left-side fade on
                  desktop where the text column sits. */}
              <span
                aria-hidden
                className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,#F7F3EC_0%,rgba(247,243,236,0.94)_38%,rgba(247,243,236,0.55)_58%,rgba(247,243,236,0)_78%)]"
              />
              <span
                aria-hidden
                className="absolute inset-0 -z-10 hidden bg-[linear-gradient(to_right,rgba(247,243,236,0.75)_0%,rgba(247,243,236,0.35)_45%,rgba(247,243,236,0)_70%)] lg:block"
              />
              <div className="p-6 sm:p-9 lg:p-11">
                <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.3em] text-[#A95F35] uppercase sm:text-xs">
                  <span aria-hidden className="h-px w-10 bg-[#A95F35]/60" />
                  FAQ
                </p>
                <h2 className="font-editorial mt-5 text-[2.6rem] leading-[1.02] font-normal tracking-[-0.01em] text-[#202020] sm:text-[3.4rem] lg:text-[3.1rem] xl:text-[3.9rem]">
                  Questions we&rsquo;re
                  <br />
                  asked <em className="text-[#A95F35] italic">every week</em>
                </h2>
                <p className="mt-5 max-w-sm text-base leading-relaxed text-[#4F4A45] sm:text-[1.05rem]">
                  Still unsure about something? Call us and a designer will walk you through it — no sales pressure.
                </p>
                <a
                  href={brand.phoneHref}
                  className="group mt-7 inline-flex w-fit items-center gap-3 rounded-full border border-[#202020]/25 bg-white/70 py-1.5 pr-5 pl-1.5 text-[0.92rem] font-medium text-[#202020] backdrop-blur-sm transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#A95F35] hover:bg-white motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#A95F35] text-white">
                    <Phone className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  Talk to Our Designer
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                    strokeWidth={1.8}
                  />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right: FAQ cards inside a soft raised panel, as in the reference. */}
          <Reveal delay={80}>
            <div className="rounded-[32px] border border-white/80 bg-white/45 p-2.5 shadow-[0_30px_60px_-45px_rgba(32,32,32,0.3)] sm:p-3.5">
              <Accordion type="single" collapsible className="flex w-full flex-col gap-2.5 sm:gap-3">
                {faqs.map((f, i) => (
                  <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
