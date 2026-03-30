"use client";

import { skills, skillCategories } from "@/lib/skills";
import { Reveal, RevealItem, Stagger } from "@/components/motion/Reveal";
import { SectionHeading } from "@/sections/SectionHeading";
import { SectionShell } from "@/sections/SectionShell";
import { StarRating } from "@/components/ui/StarRating";
import { motion } from "framer-motion";

export default function SkillsSection() {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <SectionShell id="skills" paddingY="py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Expertise"
          title="Skills that deliver results."
          description="Professional capabilities organized by domain with proven project impact."
        />
      </Reveal>

      <div className="mt-12 space-y-12">
        {Object.entries(skillCategories).map(([categoryKey, categoryInfo], categoryIndex) => (
          <Reveal key={categoryKey} delayMs={categoryIndex * 100}>
            <div>
              {/* Category Header */}
              <div className="mb-6">
                <h3 className={`text-lg font-black text-white border-l-4 ${categoryInfo.borderColor} pl-3`}>
                  {categoryInfo.name}
                </h3>
              </div>

              {/* Skills Grid */}
              <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" delayMs={60}>
                {skillsByCategory[categoryKey]?.map((skill) => (
                  <RevealItem key={skill.name} y={18} className="group">
                    <motion.div
                      whileHover={{
                        y: -4,
                        transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
                      }}
                      className={`rounded-2xl border border-white/[0.10] bg-white/[0.05] p-5 backdrop-blur-xl transition-all hover:bg-white/[0.07] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.07),0_20px_70px_-35px_rgba(34,211,238,0.25)] ${categoryInfo.borderColor} border-l-4`}
                    >
                      {/* Skill Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-base font-semibold text-white">{skill.name}</h4>
                        </div>
                        <StarRating rating={skill.rating} size="sm" />
                      </div>

                      {/* Description */}
                      <p className="text-sm leading-5 text-white/70 mb-3">
                        {skill.description}
                      </p>

                      {/* Projects Reference */}
                      <div className="mt-auto pt-3 border-t border-white/[0.05]">
                        <div className="text-xs text-white/60">
                          Used in: {skill.projects.join(", ")}
                        </div>
                      </div>
                    </motion.div>
                  </RevealItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

