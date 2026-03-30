import { skills } from "@/lib/skills";
import { Reveal, RevealItem, Stagger } from "@/components/motion/Reveal";
import { SectionHeading } from "@/sections/SectionHeading";
import { SectionShell } from "@/sections/SectionShell";

export default function SkillsSection() {
  return (
    <SectionShell id="skills" paddingY="py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Stack"
          title="Skills that ship."
          description="Modern front-end craftsmanship with full-stack thinking."
        />
      </Reveal>

      <div className="mt-10">
        <Reveal delayMs={120}>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" delayMs={60}>
            {skills.map((s, idx) => (
              <RevealItem key={s.name} y={18} className="group">
                <div className="rounded-2xl border border-white/[0.10] bg-white/[0.05] p-5 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition-all hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.07] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.07),0_20px_70px_-35px_rgba(34,211,238,0.35)]">
                  <div className="flex items-start gap-3">
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.12] bg-gradient-to-br from-cyan-300/10 via-violet-500/10 to-fuchsia-500/10">
                      <s.icon className="h-5 w-5 text-cyan-200/85" />
                      <div className="pointer-events-none absolute -inset-2 rounded-[1.2rem] opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.28),transparent_60%)] blur-2xl" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white">{s.name}</div>
                      <div className="mt-1 text-xs leading-5 text-white/65">
                        {idx % 2 === 0
                          ? "Clean, scalable implementation."
                          : "Design-system + performance details."}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </SectionShell>
  );
}

