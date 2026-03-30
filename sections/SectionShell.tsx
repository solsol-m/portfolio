import * as React from "react";
import { cn } from "@/lib/cn";

export function SectionShell({
  id,
  children,
  className,
  paddingY = "py-20 sm:py-28",
  withDivider = false,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  paddingY?: string;
  withDivider?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24",
        paddingY,
        className,
        withDivider ? "border-t border-white/[0.08]" : ""
      )}
    >
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

