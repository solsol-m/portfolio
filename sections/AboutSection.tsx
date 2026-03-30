import { Reveal } from "@/components/motion/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/sections/SectionHeading";
import { SectionShell } from "@/sections/SectionShell";

export default function AboutSection() {
  return (
    <SectionShell id="about" paddingY="py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Profile"
            title="Engineering student, builder mindset."
            description="I blend structured software engineering with creative UI craft. Always curious, always shipping."
          />
          <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            I’m passionate about web development and continuous learning. I enjoy turning complex requirements into
            simple, polished interfaces that feel fast and intuitive.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/[0.10] bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur">
              Detail-driven UI
            </span>
            <span className="rounded-full border border-white/[0.10] bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur">
              Scalable components
            </span>
            <span className="rounded-full border border-white/[0.10] bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur">
              Continuous learning
            </span>
          </div>
        </Reveal>

        <div className="grid gap-4">
          <Reveal>
            <GlassCard className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-500/25 via-cyan-300/15 to-fuchsia-500/25 border border-white/[0.10] flex items-center justify-center text-white text-lg">
                  A
                </div>
                <div>
                  <div className="text-sm font-semibold text-white/90">
                    Software Engineering student at Al-Azhar University
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delayMs={80}>
            <GlassCard className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-cyan-300/20 via-violet-500/15 to-fuchsia-500/20 border border-white/[0.10] flex items-center justify-center text-white text-lg">
                  U
                </div>
                <div>
                  <div className="text-sm font-semibold text-white/90">
                    Computer Science student at University of the People
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delayMs={140}>
            <GlassCard className="p-6">
              <div className="text-xs font-semibold tracking-[0.18em] text-white/55 uppercase">
                Why I build
              </div>
              <div className="mt-3 text-xl font-black tracking-tight">Modern interfaces that feel alive.</div>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Motion, typography, and performance details are not extras; they are the product. I craft experiences
                recruiters remember.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}

