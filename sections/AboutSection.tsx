"use client";

import { Reveal } from "@/components/motion/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/sections/SectionHeading";
import { SectionShell } from "@/sections/SectionShell";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <SectionShell id="about" paddingY="py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="The builder behind the code."
          description="Three dimensions of what makes me different."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {/* Card 1: The Journey */}
        <Reveal delayMs={100}>
          <motion.div
            whileHover={{
              y: -8,
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
            }}
            className="group"
          >
            <GlassCard className="h-full p-6 border-t-4 border-t-blue-500/50 hover:border-t-blue-400 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500/25 to-cyan-400/25 border border-white/[0.10] flex items-center justify-center text-white text-xl">
                  📚
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">THE JOURNEY</h3>
                </div>
              </div>
              
              <div className="space-y-3 text-sm leading-6 text-white/80">
                <p>
                  <strong className="text-white/90">Software Engineering</strong> student at Al-Azhar + CS at UOP.
                </p>
                <p>
                  Obsessed with turning ideas into real, shipped work.
                </p>
                <p>
                  <strong className="text-white/90">2 years</strong> of consistent building.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-white/[0.05]">
                <div className="text-xs text-white/60">
                  Every project is a case study in growth.
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </Reveal>

        {/* Card 2: The Code */}
        <Reveal delayMs={200}>
          <motion.div
            whileHover={{
              y: -8,
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
            }}
            className="group"
          >
            <GlassCard className="h-full p-6 border-t-4 border-t-purple-500/50 hover:border-t-purple-400 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500/25 to-violet-400/25 border border-white/[0.10] flex items-center justify-center text-white text-xl">
                  🎨
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">THE CODE</h3>
                </div>
              </div>
              
              <div className="space-y-3 text-sm leading-6 text-white/80">
                <p>
                  I don&apos;t just write code—I <strong className="text-white/90">craft experiences</strong>.
                </p>
                <p>
                  Motion, typography, and details aren&apos;t extras—they&apos;re the product.
                </p>
                <p>
                  I approach every pixel like an <strong className="text-white/90">engineer</strong>: intentional, measurable, scalable.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-white/[0.05]">
                <div className="text-xs text-white/60">
                  Code that recruiters notice.
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </Reveal>

        {/* Card 3: The Result */}
        <Reveal delayMs={300}>
          <motion.div
            whileHover={{
              y: -8,
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
            }}
            className="group"
          >
            <GlassCard className="h-full p-6 border-t-4 border-t-orange-500/50 hover:border-t-orange-400 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-500/25 to-amber-400/25 border border-white/[0.10] flex items-center justify-center text-white text-xl">
                  🎯
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">THE RESULT</h3>
                </div>
              </div>
              
              <div className="space-y-3 text-sm leading-6 text-white/80">
                <p>
                  When I deliver:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    <span><strong className="text-white/90">98+ Page Speed</strong> scores</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    <span><strong className="text-white/90">Zero bugs</strong> in production</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    <span><strong className="text-white/90">Users notice</strong> the difference</span>
                  </div>
                </div>
                <p>
                  Projects I build become case studies.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-white/[0.05]">
                <div className="text-xs text-white/60">
                  Results that get you hired.
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

