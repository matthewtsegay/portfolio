"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { SectionLabel } from "@/components/SectionLabel";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";

export default function Projects() {
  return (
    <section id="work" className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 pt-24 pb-16 sm:px-10 md:px-[100px] md:pt-32 md:pb-20">
        <SectionLabel>Selected Work</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-[clamp(32px,5vw,56px)] font-extrabold uppercase tracking-tight"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg"
        >
          Products, platforms, and intelligent systems I&apos;ve designed and built.
        </motion.p>
      </div>

      <div className="mx-auto max-w-[1200px] space-y-28 px-6 pb-32 sm:px-10 md:space-y-36 md:px-[100px] md:pb-40">
        {projects.map((project, i) => (
          <React.Fragment key={project.slug}>
            <ProjectCaseStudy project={project} />
            {i < projects.length - 1 && (
              <div className="border-t border-border" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
