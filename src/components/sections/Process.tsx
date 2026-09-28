import {
  ClipboardCheck,
  Cog,
  Hammer,
  KeyRound,
  PenTool,
  PhoneCall,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { processSteps } from "@/lib/site-data";
import { SectionHeading } from "@/components/site/SectionHeading";

// Simple, single-glyph icons only — anything with fine detail turns to mush
// at this size and starts looking like generic AI-art clutter instead of a
// clean line icon.
const icons: LucideIcon[] = [PhoneCall, UserRound, PenTool, ClipboardCheck, Cog, Hammer, KeyRound];

export function Process() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1F1610] section-y">
      {/* Backlit arched slat wall (client's photo), darkened so the steps read. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <img
          src="/images/arch-lounge-bg.webp"
          alt=""
          loading="lazy"
          width={1448}
          height={1086}
          className="h-full w-full object-cover object-[50%_30%]"
        />
        <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,17,11,0.88)_0%,rgba(26,17,11,0.7)_50%,rgba(26,17,11,0.55)_100%)]" />
        <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,17,11,0.2)_0%,rgba(26,17,11,0.45)_55%,rgba(26,17,11,0.85)_100%)]" />
      </div>
      <div className="container-x [&_.eyebrow]:text-[#E8A25B] [&_h2]:text-[#F5EDE0] [&>div:first-child_p:not(.eyebrow)]:text-[#E6D5BC]">
        <SectionHeading
          eyebrow="Design to Move-In"
          title="Seven steps, one project manager"
          desc="A predictable path from first call to handover, with fixed checkpoints you sign off at every stage."
        />

        {/* Below `lg`: a swipeable horizontal carousel — one card per step,
          snapping into place, with a peek of the next card so it reads as
          "swipe me" rather than a static stack. At `lg` and up, the same
          steps become a single-row horizontal timeline with the line
          running across the top of the circles. */}
        <div className="section-gap -mx-4 lg:hidden">
          <ol className="scrollbar-none flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-4 pb-3">
            {processSteps.map((s, i) => {
              const Icon = icons[i] ?? PhoneCall;
              return (
                <li
                  key={s.no}
                  className="rise-in relative w-[78%] shrink-0 snap-start rounded-2xl border border-border bg-card p-5 shadow-card min-[420px]:w-[62%] sm:w-[42%]"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-primary bg-background text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="mt-4 text-[0.68rem] font-semibold tracking-[0.16em] text-primary uppercase">
                    Step {s.no}
                  </p>
                  <h3 className="font-display mt-1 text-[1.02rem] leading-snug">{s.title}</h3>
                  <p className="mt-1.5 text-[0.85rem] leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </li>
              );
            })}
          </ol>
          <div className="mt-1 flex justify-center gap-1.5 px-4">
            {processSteps.map((s) => (
              <span key={s.no} aria-hidden className="h-1.5 w-1.5 rounded-full bg-white/30" />
            ))}
          </div>
        </div>

        <ol className="section-gap relative hidden lg:grid lg:grid-cols-7 lg:gap-5">
          <span aria-hidden className="absolute top-5 right-0 left-0 h-px bg-[#E8A25B]/35" />
          {processSteps.map((s, i) => {
            const Icon = icons[i] ?? PhoneCall;
            return (
              <li
                key={s.no}
                className="rise-in relative flex flex-col items-start"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <span className="group relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-[#E8A25B] bg-[#1F1610] text-[#E8A25B] transition-colors duration-300 hover:bg-[#E8A25B] hover:text-[#1F1610]">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="mt-4 text-[0.68rem] font-semibold tracking-[0.16em] text-[#E8A25B] uppercase">
                  Step {s.no}
                </p>
                <h3 className="font-display mt-1 text-[1.02rem] leading-snug text-[#F5EDE0]">{s.title}</h3>
                <p className="mt-1.5 text-[0.85rem] leading-relaxed text-[#E6D5BC]/80">
                  {s.desc}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
