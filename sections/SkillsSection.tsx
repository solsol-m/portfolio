import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/sections/SectionHeading";
import { SectionShell } from "@/sections/SectionShell";

export default function SkillsSection() {
  const items = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <SectionShell id="skills" paddingY="py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I use"
        />
      </Reveal>

      <Reveal delayMs={120}>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((name) => (
            <div
              key={name}
              className="rounded-2xl border border-white/[0.10] bg-white/[0.05] px-5 py-4 text-sm font-semibold text-white/85 backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/[0.07] hover:border-white/[0.18] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_18px_60px_-35px_rgba(34,211,238,0.30)]"
            >
              {name}
            </div>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}

