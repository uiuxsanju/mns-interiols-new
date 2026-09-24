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
        "flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6",
        align === "center" && "md:flex-col md:items-center md:text-center",
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        <p className="eyebrow-mns">{eyebrow}</p>
        <h2 className="font-editorial text-display-2 mt-2.5 text-balance text-[#171411]">
          {title}
        </h2>
        {desc && (
          <p className="mt-3 text-[0.95rem] leading-relaxed text-[#6B625A] sm:mt-4 sm:text-base">
            {desc}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
