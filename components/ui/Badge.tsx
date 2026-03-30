import * as React from "react";
import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/[0.10] bg-white/[0.06] px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur",
        className
      )}
    >
      {children}
    </span>
  );
}

