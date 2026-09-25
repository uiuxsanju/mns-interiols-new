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
    <section className="container-x section-y">
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
                <p className="mt-1.5 text-[0.85rem] leading-relaxed text-muted-foreground">{s.desc}</p>
              </li>
            );
          })}
        </ol>
        <div className="mt-1 flex justify-center gap-1.5 px-4">
          {processSteps.map((s) => (
            <span key={s.no} aria-hidden className="h-1.5 w-1.5 rounded-full bg-border" />
          ))}
        </div>
      </div>

      <ol className="section-gap relative hidden lg:grid lg:grid-cols-7 lg:gap-5">
        <span aria-hidden className="absolute top-5 right-0 left-0 h-px bg-border" />
        {processSteps.map((s, i) => {
          const Icon = icons[i] ?? PhoneCall;
          return (
            <li key={s.no} className="rise-in relative flex flex-col items-start" style={{ animationDelay: `${i * 70}ms` }}>
              <span className="group relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-primary bg-background text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground">
                <Icon className="h-4 w-4" />
              </span>
              <p className="mt-4 text-[0.68rem] font-semibold tracking-[0.16em] text-primary uppercase">Step {s.no}</p>
              <h3 className="font-display mt-1 text-[1.02rem] leading-snug">{s.title}</h3>
              <p className="mt-1.5 text-[0.85rem] leading-relaxed text-muted-foreground">{s.desc}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
