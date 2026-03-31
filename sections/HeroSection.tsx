import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/motion/Reveal";
import { TypingHeadline } from "@/components/motion/TypingHeadline";
import { SectionShell } from "@/sections/SectionShell";

export default function HeroSection() {
  return (
    <SectionShell
      id="home"
      paddingY="pt-24 pb-16 sm:pt-28 sm:pb-20"
      className="relative"
      withDivider={false}
    >
      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <Reveal>
            <Badge className="bg-white/[0.06]">
              Elite UI • Production-ready • Motion-first
            </Badge>
          </Reveal>
          <Reveal delayMs={80}>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              <span className="block bg-gradient-to-r from-cyan-200 via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
                Malak Elmalahi
              </span>
              <span className="block mt-2 text-white/90">
                <TypingHeadline headline="Full Stack Developer" className="text-2xl sm:text-3xl" />
              </span>
            </h1>
          </Reveal>

          <Reveal delayMs={140}>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              I build experiences that feel alive.
            </p>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Full-Stack Developer specialized in motion-first, production-ready interfaces.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-3">
            <Reveal delayMs={180}>
              <Button href="#projects" variant="primary">
                See My Best Work
              </Button>
            </Reveal>
            <Reveal delayMs={220}>
              <Button href="#contact" variant="secondary">
                Let&apos;s Talk
              </Button>
            </Reveal>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-white/55">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.7)]" />
            <span>Available for freelance and collaborations</span>
          </div>
        </div>

        <div className="relative">
          <Reveal delayMs={120}>
            <GlassCard className="p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold tracking-[0.18em] text-white/55 uppercase">
                    Snapshot
                  </div>
                  <div className="mt-2 text-xl font-black tracking-tight">
                    Building premium interfaces.
                  </div>
                  <div className="mt-2 text-sm leading-6 text-white/70">
                    Motion, gradients, and component architecture that stays clean as you scale.
                  </div>
                </div>
                <div className="hidden sm:flex">
                  <div className="relative h-16 w-16 rounded-2xl border border-white/[0.10] bg-white/[0.06] backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_25px_70px_-45px_rgba(167,139,250,0.45)] overflow-hidden">
                    <div className="absolute -inset-6 bg-[conic-gradient(from_180deg,rgba(34,211,238,0.22),rgba(168,85,247,0.28),rgba(244,114,182,0.20),rgba(34,211,238,0.22))] opacity-80 animate-[spinSlow_6s_linear_infinite]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.28),transparent_55%)]" />
                    <div className="relative h-full w-full flex items-center justify-center text-2xl font-black bg-gradient-to-r from-cyan-200 via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
                      M
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/[0.10] bg-black/[0.22] p-4">
                  <div className="text-sm font-semibold text-white/85">Motion-first</div>
                  <div className="mt-1 text-sm text-white/65">
                    Framer Motion reveals + micro-interactions.
                  </div>
                </div>
                <div className="rounded-2xl border border-white/[0.10] bg-black/[0.22] p-4">
                  <div className="text-sm font-semibold text-white/85">Scalable UI</div>
                  <div className="mt-1 text-sm text-white/65">
                    Reusable sections and component primitives.
                  </div>
                </div>
                <div className="rounded-2xl border border-white/[0.10] bg-black/[0.22] p-4 sm:col-span-2">
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"].map(
                      (t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/[0.10] bg-white/[0.06] px-3 py-1 text-xs font-semibold text-white/75 backdrop-blur"
                        >
                          {t}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <div className="pointer-events-none absolute -left-10 top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.30),transparent_60%)] blur-2xl animate-[orbFloat_9s_ease-in-out_infinite]" />
          <div className="pointer-events-none absolute -bottom-10 right-0 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.24),transparent_62%)] blur-2xl animate-[orbFloat2_11s_ease-in-out_infinite]" />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 w-full -translate-x-1/2">
        <div className="mx-auto flex max-w-6xl items-center justify-center pb-2">
          <div className="flex flex-col items-center gap-2 opacity-70">
            <div className="relative h-8 w-[2px] rounded-full bg-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-200/60 via-violet-200/50 to-fuchsia-200/60 animate-[scan_2.2s_ease-in-out_infinite]" />
            </div>
            <div className="text-xs font-semibold tracking-[0.22em] text-white/45 uppercase">
              Scroll
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

