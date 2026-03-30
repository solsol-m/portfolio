"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

export function Reveal({
  children,
  className,
  delayMs = 0,
  y = 16,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  y?: number;
  once?: boolean;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once, margin: "-80px 0px -80px 0px" });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: delayMs / 1000 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Stagger({
  children,
  className,
  delayMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: delayMs / 1000 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 18,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

