import * as React from "react";
import { cn } from "@/lib/cn";

export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/[0.10] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_22px_70px_-35px_rgba(99,102,241,0.35)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(650px_circle_at_var(--x,50%)_var(--y,0%),rgba(99,102,241,0.16),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </div>
  );
}

