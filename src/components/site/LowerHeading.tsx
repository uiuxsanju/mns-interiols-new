import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Editorial heading used by the lower homepage sections. */
export function LowerHeading({
  eyebrow,
  title,
  desc,
  align = "left",
  action,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        <p className="eyebrow-mns">{eyebrow}</p>
        <h2 className="font-editorial mt-4 text-[2rem] leading-[1.12] text-[#171411] sm:text-[2.5rem] lg:text-[3rem]">
          {title}
        </h2>
        {desc && (
          <p className="mt-4 text-base leading-relaxed text-[#6B625A] sm:text-[1.05rem]">{desc}</p>
        )}
      </div>
      {action}
    </div>
  );
}
