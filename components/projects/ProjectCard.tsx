"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Code2, ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const rafPending = React.useRef(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rafPending.current || !cardRef.current) return;
    rafPending.current = true;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    requestAnimationFrame(() => {
      if (cardRef.current) {
        cardRef.current.style.setProperty("--x", `${x}px`);
        cardRef.current.style.setProperty("--y", `${y}px`);
      }
      rafPending.current = false;
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group transition-transform duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.015] will-change-transform"
    >
      <GlassCard className="h-full overflow-hidden transition-shadow duration-300 group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.07),0_26px_90px_-45px_rgba(34,211,238,0.35)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
          style={{
            background:
              "radial-gradient(500px circle at var(--x,50%) var(--y,0%), rgba(34,211,238,0.15), transparent 45%)",
          }}
        />

        <div className="relative flex h-full flex-col">
          {/* Project Image */}
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {project.featured && (
              <div className="absolute top-3 left-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 text-xs font-semibold text-white">
                ⭐ FEATURED
              </div>
            )}
          </div>

          <div className="flex flex-1 flex-col gap-4 p-6">
            <div>
              <h3 className="text-xl font-black tracking-tight text-white">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">{project.description}</p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/[0.10] bg-white/[0.06] px-3 py-1 text-xs font-semibold text-white/75 backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
                {project.githubUrl ? (
                  <Button
                    href={project.githubUrl}
                    variant="secondary"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Code2 className="h-4 w-4" />
                    GitHub
                    <ArrowUpRight className="h-4 w-4 opacity-80" />
                  </Button>
                ) : null}

                {project.AppUrl?.trim() ? (
                  <Button
                    href={project.AppUrl}
                    variant="secondary"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                    <ArrowUpRight className="h-4 w-4 opacity-80" />
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

