import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/sections/SectionHeading";
import { SectionShell } from "@/sections/SectionShell";

export default function ContactSection() {
  return (
    <SectionShell id="contact" paddingY="py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something great together"
              description="Open to collaborations and new opportunities. Reach out and I’ll respond quickly."
            />
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-3">
            <Reveal delayMs={70}>
              <div className="rounded-full border border-white/[0.10] bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur">
                Fast replies
              </div>
            </Reveal>
            <Reveal delayMs={120}>
              <div className="rounded-full border border-white/[0.10] bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur">
                Clean communication
              </div>
            </Reveal>
            <Reveal delayMs={170}>
              <div className="rounded-full border border-white/[0.10] bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur">
                UI + engineering
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delayMs={120}>
          <GlassCard className="p-6 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold tracking-[0.18em] text-white/55 uppercase">
                  Links
                </div>
                <div className="mt-2 text-xl font-black tracking-tight">Find me online</div>
                <div className="mt-2 text-sm leading-6 text-white/70">
                  I’d love to connect—especially for roles where UI quality and scalability matter.
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="relative h-14 w-14 rounded-2xl border border-white/[0.10] bg-white/[0.06] backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_25px_70px_-45px_rgba(56,189,248,0.25)] overflow-hidden">
                  <div className="absolute -inset-10 bg-[conic-gradient(from_180deg,rgba(34,211,238,0.30),rgba(168,85,247,0.26),rgba(244,114,182,0.20),rgba(34,211,238,0.30))] opacity-80 animate-[spinSlow_6s_linear_infinite]" />
                  <div className="relative h-full w-full flex items-center justify-center text-white font-black">ME</div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Button
                variant="primary"
                href="https://github.com/solsol-m"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Button>
              <Button
                variant="secondary"
                href="https://www.linkedin.com/in/malak-hamza-009529362"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </Button>
            </div>

            <div className="mt-6 text-xs font-semibold text-white/50">
              Tip: Use these links to review projects and collaboration style.
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </SectionShell>
  );
}

