"use client";

import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/sections/SectionHeading";
import { SectionShell } from "@/sections/SectionShell";

export default function AboutSection() {
  return (
    <SectionShell id="about" paddingY="py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="About me"
        />
      </Reveal>

      <div className="mt-10 max-w-3xl">
        <Reveal delayMs={120}>
          <p className="text-base leading-7 text-white/75 sm:text-lg">
            I&apos;m a Software Engineering student at Al-Azhar University
            <br />
            and a Computer Science student at University of the People.
          </p>
        </Reveal>
        <Reveal delayMs={180}>
          <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">
            I&apos;m passionate about building real-world web applications and continuously improving my skills.
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}

