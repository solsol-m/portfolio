import { projects } from "@/lib/projects";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/sections/SectionHeading";
import { SectionShell } from "@/sections/SectionShell";
import { ProjectCard } from "@/components/projects/ProjectCard";

export default function ProjectsSection() {
  return (
    <SectionShell id="projects" paddingY="py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="My work"
          description="A few projects I built. Each card includes the tech stack and links to the code and live demo."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delayMs={i * 120}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

