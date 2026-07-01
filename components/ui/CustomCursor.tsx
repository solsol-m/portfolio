"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, textarea, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null; // Don't show custom cursor on touch devices
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 mix-blend-screen blur-xl md:block"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          opacity: isVisible ? (isHovering ? 1 : 0.6) : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.8 }}
      />
    </>
  );
}
