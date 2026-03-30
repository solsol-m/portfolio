import * as React from "react";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        align === "center" ? "text-center" : "text-left",
        "flex flex-col gap-3"
      )}
    >
      {eyebrow ? (
        <div className="text-xs font-semibold tracking-[0.18em] text-white/60 uppercase">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

