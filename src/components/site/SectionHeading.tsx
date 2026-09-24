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
        "flex flex-col gap-5 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="mt-3 text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem]">{title}</h2>
        {desc && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{desc}</p>}
      </div>
      {action}
    </div>
  );
}
