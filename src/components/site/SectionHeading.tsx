import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "left",
  action,
}: {
  eyebrow?: string;
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
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="text-display-2 mt-2.5 text-balance">{title}</h2>
        {desc && (
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
            {desc}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
