"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export function TypingHeadline({
  headline,
  className,
  cursorClassName,
}: {
  headline: string;
  className?: string;
  cursorClassName?: string;
}) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setIndex(headline.length);
      return;
    }

    setIndex(0);
    let intervalId: number | undefined;
    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setIndex((v) => {
          if (v >= headline.length) {
            window.clearInterval(intervalId);
            intervalId = undefined;
            return v;
          }
          return v + 1;
        });
      }, 42);
    }, 350);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [headline]);

  return (
    <span className={cn(className, "inline-flex items-baseline gap-0.5")}>
      <motion.span
        aria-label={headline}
        initial={false}
        className="bg-gradient-to-r from-cyan-200 via-violet-200 to-fuchsia-200 bg-clip-text text-transparent"
      >
        {headline.slice(0, index)}
      </motion.span>
      <motion.span
        className={cn(
          "inline-block h-[1.05em] w-[2px] translate-y-[0.08em] rounded-full bg-cyan-200/80 shadow-[0_0_18px_rgba(34,211,238,0.55)]",
          cursorClassName
        )}
        animate={{ opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 0.9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </span>
  );
}

