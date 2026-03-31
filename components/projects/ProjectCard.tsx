"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Code2, ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <GlassCard className="h-full overflow-hidden">
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(600px circle at var(--x,50%) var(--y,0%), rgba(34,211,238,0.18), transparent 55%)",
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
            {/* Project Header */}
            <div>
              <h3 className="text-xl font-black tracking-tight">{project.title}</h3>
              <p className="mt-1 text-sm font-medium text-cyan-300">{project.tagline}</p>
            </div>

            {/* Problem Section */}
            <div>
              <h4 className="text-xs font-semibold tracking-[0.18em] text-white/55 uppercase mb-2">
                THE PROBLEM
              </h4>
              <p className="text-sm leading-6 text-white/70">{project.problem}</p>
            </div>

            {/* Solution Section */}
            <div>
              <h4 className="text-xs font-semibold tracking-[0.18em] text-white/55 uppercase mb-2">
                THE SOLUTION
              </h4>
              <p className="text-sm leading-6 text-white/70">{project.solution}</p>
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
                    {project.hrefLabel ?? "View Code"}
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
    </motion.div>
  );
}

