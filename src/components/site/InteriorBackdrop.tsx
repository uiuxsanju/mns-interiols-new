import { cn } from "@/lib/utils";

/**
 * Site-wide backdrop style. "modern" = marble veining + timber slats;
 * "indian" = carved jali lattice, mandala rosettes and brass glows.
 * Change this one value to switch every section.
 */
export const BACKDROP_THEME: "modern" | "indian" = "modern";

const SLATS = "repeating-linear-gradient(90deg, #8A6339 0px, #6E4C2A 10px, #8A6339 20px)";

// Classic CNC-jali lattice: four quarter-circles per tile form interlocking petals.
const JALI = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='44' height='44' viewBox='0 0 44 44'><g fill='none' stroke='#A9743A' stroke-width='1.1'><circle cx='0' cy='0' r='22'/><circle cx='44' cy='0' r='22'/><circle cx='0' cy='44' r='22'/><circle cx='44' cy='44' r='22'/><circle cx='22' cy='22' r='4'/></g></svg>`,
)}")`;

// Dense carved-panel variant for the side columns.
const JALI_PANEL = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'><rect width='28' height='28' fill='#7A4E26'/><g fill='none' stroke='#E7C58C' stroke-width='1.4'><circle cx='0' cy='0' r='14'/><circle cx='28' cy='0' r='14'/><circle cx='0' cy='28' r='14'/><circle cx='28' cy='28' r='14'/></g><circle cx='14' cy='14' r='2.2' fill='#E7C58C'/></svg>`,
)}")`;

function Mandala({ className }: { className?: string }) {
  const petals = Array.from({ length: 16 }, (_, i) => i * 22.5);
  const inner = Array.from({ length: 8 }, (_, i) => i * 45 + 22.5);
  return (
    <svg viewBox="-100 -100 200 200" className={className} fill="none" stroke="#A9743A">
      <circle r="96" strokeWidth="0.8" />
      <circle r="90" strokeWidth="0.5" strokeDasharray="2 3" />
      {petals.map((a) => (
        <ellipse key={a} cx="0" cy="-62" rx="11" ry="26" strokeWidth="0.9" transform={`rotate(${a})`} />
      ))}
      <circle r="38" strokeWidth="0.8" />
      {inner.map((a) => (
        <ellipse key={a} cx="0" cy="-24" rx="8" ry="15" strokeWidth="0.9" transform={`rotate(${a})`} />
      ))}
      <circle r="9" strokeWidth="1" />
      <circle r="3" fill="#A9743A" />
    </svg>
  );
}

/**
 * Decorative interior-style backdrop for light sections.
 * Place inside a `relative isolate overflow-hidden` section.
 */
export function InteriorBackdrop({
  slats = "both",
  flip = false,
  className,
}: {
  slats?: "both" | "left" | "right" | "none";
  /** mirror angles + corners so stacked sections don't look identical */
  flip?: boolean;
  className?: string;
}) {
  const left = slats === "both" || slats === "left";
  const right = slats === "both" || slats === "right";

  if (BACKDROP_THEME === "indian") {
    return (
      <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
        {/* Jali lattice, fading out toward the centre so content stays clean */}
        <span
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: JALI,
            maskImage: "radial-gradient(ellipse at center, transparent 30%, black 85%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, transparent 30%, black 85%)",
          }}
        />
        {/* Carved jali side panels with a brass border */}
        {left && (
          <span
            className="absolute inset-y-0 left-0 hidden w-14 border-r-2 border-[#C9974F]/50 opacity-[0.28] xl:block"
            style={{ backgroundImage: JALI_PANEL }}
          />
        )}
        {right && (
          <span
            className="absolute inset-y-0 right-0 hidden w-14 border-l-2 border-[#C9974F]/50 opacity-[0.28] xl:block"
            style={{ backgroundImage: JALI_PANEL }}
          />
        )}
        {/* Mandala rosettes in opposite corners */}
        <Mandala
          className={cn(
            "absolute h-72 w-72 opacity-[0.14] sm:h-[26rem] sm:w-[26rem]",
            flip ? "-top-28 -right-28" : "-top-28 -left-28",
          )}
        />
        <Mandala
          className={cn(
            "absolute hidden h-80 w-80 opacity-[0.1] md:block",
            flip ? "-bottom-32 -left-32" : "-right-32 -bottom-32",
          )}
        />
        {/* Brass diya-light and marigold glows */}
        <span
          className={cn(
            "absolute h-72 w-72 rounded-full bg-[#E0A83E]/20 blur-3xl sm:h-96 sm:w-96",
            flip ? "-top-20 -right-20" : "-top-20 -left-20",
          )}
        />
        <span
          className={cn(
            "absolute h-72 w-72 rounded-full bg-[#C8553D]/10 blur-3xl sm:h-96 sm:w-96",
            flip ? "-bottom-24 -left-24" : "-right-24 -bottom-24",
          )}
        />
      </div>
    );
  }

  const a1 = flip ? 65 : 115;
  const a2 = flip ? 155 : 25;
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      {/* Marble veining */}
      <span
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `repeating-linear-gradient(${a1}deg, transparent 0px, transparent 90px, rgba(180,165,140,0.5) 91px, transparent 94px, transparent 240px), repeating-linear-gradient(${a2}deg, transparent 0px, transparent 140px, rgba(180,165,140,0.35) 141px, transparent 145px, transparent 320px)`,
        }}
      />
      {/* Timber-slat columns */}
      {left && (
        <span className="absolute inset-y-0 left-0 hidden w-14 opacity-[0.2] xl:block" style={{ backgroundImage: SLATS }} />
      )}
      {right && (
        <span className="absolute inset-y-0 right-0 hidden w-14 opacity-[0.2] xl:block" style={{ backgroundImage: SLATS }} />
      )}
      {/* Warm cove-light glows */}
      <span
        className={cn(
          "absolute h-72 w-72 rounded-full bg-[#E3B77A]/20 blur-3xl sm:h-96 sm:w-96",
          flip ? "-top-24 -right-24" : "-top-24 -left-24",
        )}
      />
      <span
        className={cn(
          "absolute h-72 w-72 rounded-full bg-[#C79A63]/15 blur-3xl sm:h-96 sm:w-96",
          flip ? "-bottom-24 -left-24" : "-right-24 -bottom-24",
        )}
      />
      {/* Soft greenery */}
      <span
        className={cn(
          "absolute hidden h-64 w-40 rounded-[45%_55%_60%_40%] bg-[#7E9460]/15 blur-3xl lg:block",
          flip ? "top-1/3 -right-16" : "top-1/3 -left-16",
        )}
      />
    </div>
  );
}
