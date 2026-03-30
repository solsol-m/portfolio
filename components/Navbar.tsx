"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export function Navbar() {
  const [activeId, setActiveId] = React.useState<(typeof links)[number]["id"]>("home");
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const targets = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (!visible?.target?.id) return;
        const id = visible.target.id as (typeof links)[number]["id"];
        setActiveId(id);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-30% 0px -55% 0px",
      }
    );

    for (const el of targets) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollTo = React.useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/[0.08]" : "bg-black/0"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          type="button"
          onClick={() => scrollTo("home")}
          className="group flex items-center gap-2 rounded-lg px-2 py-1 text-left"
          aria-label="Scroll to top"
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.06] backdrop-blur">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-400/30 via-cyan-300/20 to-fuchsia-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-base font-black tracking-tight bg-gradient-to-r from-cyan-200 via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
              M
            </span>
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-bold tracking-tight text-white">
              Malak
            </span>
            <span className="block text-xs text-white/60">Portfolio</span>
          </span>
        </button>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {links.map((l) => {
            const isActive = activeId === l.id;
            return (
              <button
                key={l.id}
                type="button"
                onClick={() => scrollTo(l.id)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                )}
              >
                <span className="relative z-10">{l.label}</span>
                {isActive ? (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300"
                  />
                ) : null}
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="secondary"
            onClick={() => scrollTo("projects")}
            className="px-4"
          >
            View Projects
          </Button>
          <Button
            variant="primary"
            onClick={() => scrollTo("contact")}
            className="px-4"
          >
            Contact Me
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.06] p-2 text-white md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
              <div className="mt-2 rounded-2xl border border-white/[0.10] bg-white/[0.06] backdrop-blur-xl shadow-[0_25px_70px_-45px_rgba(56,189,248,0.35)]">
                <div className="grid gap-1 p-2">
                  {links.map((l) => {
                    const isActive = activeId === l.id;
                    return (
                      <button
                        key={l.id}
                        type="button"
                        onClick={() => {
                          setMobileOpen(false);
                          scrollTo(l.id);
                        }}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3 text-left transition-colors",
                          isActive ? "text-white bg-white/[0.08]" : "text-white/70 hover:text-white hover:bg-white/[0.06]"
                        )}
                      >
                        <span className="text-sm font-semibold">{l.label}</span>
                        {isActive ? (
                          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 shadow-[0_0_18px_rgba(167,139,250,0.65)]" />
                        ) : (
                          <span className="h-2 w-2 rounded-full bg-white/[0.14]" />
                        )}
                      </button>
                    );
                  })}
                </div>
                <div className="flex gap-2 p-2 pt-0">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setMobileOpen(false);
                      scrollTo("projects");
                    }}
                    className="flex-1"
                  >
                    View Projects
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setMobileOpen(false);
                      scrollTo("contact");
                    }}
                    className="flex-1"
                  >
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

