import * as React from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

export type ButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-tight transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 text-black shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_10px_45px_-20px_rgba(168,85,247,0.9)] hover:brightness-110 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_20px_70px_-25px_rgba(34,211,238,0.7)]",
  secondary:
    "bg-white/[0.06] text-white border border-white/[0.12] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] hover:bg-white/[0.09] hover:border-white/[0.18] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.07),0_20px_70px_-35px_rgba(34,211,238,0.35)]",
  ghost:
    "bg-transparent text-white/90 border border-transparent hover:bg-white/[0.06] hover:border-white/[0.12] hover:text-white",
};

export function Button({
  variant = "secondary",
  className,
  children,
  href,
  onClick,
  target,
  rel,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a className={classes} href={href} target={target} rel={rel} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

