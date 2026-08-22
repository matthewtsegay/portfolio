"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Play, Images, FileText, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCaseStudyProps {
  project: Project;
}

function ProjectLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-2 text-sm text-foreground transition-opacity duration-300 hover:opacity-60"
    >
      <Icon size={16} strokeWidth={1.5} />
      <span>{label}</span>
      <ArrowUpRight
        size={12}
        className="opacity-0 transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:opacity-100"
      />
    </a>
  );
}

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const hasVideo = Boolean(project.video);
  const isNubu = project.slug === "nubu-store";

  const mediaLinks = isNubu
    ? [
        project.live && { href: project.live, icon: ExternalLink, label: "Live Demo" },
        project.github && { href: project.github, icon: Github, label: "GitHub" },
        project.video && { href: project.video, icon: Play, label: "Video" },
        project.screenshots &&
          project.screenshots.length > 0 && {
            href: project.screenshots[0],
            icon: Images,
            label: "Screenshots",
          },
      ].filter(Boolean) as { href: string; icon: React.ComponentType<{ size?: number; strokeWidth?: number }>; label: string }[]
    : [
        project.github && {
          href: project.github,
          icon: Github,
          label: project.githubLabel ?? "GitHub",
        },
        project.caseStudy && {
          href: project.caseStudy,
          icon: FileText,
          label: project.caseStudyLabel ?? "Case Study",
        },
      ].filter(Boolean) as { href: string; icon: React.ComponentType<{ size?: number; strokeWidth?: number }>; label: string }[];

  const mediaBlock = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
    >
      <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-surface">
        {hasVideo ? (
          <>
            <video
              src={project.video}
              poster={project.image}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              muted
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 group-hover:bg-black/30">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Play size={24} className="ml-1" fill="currentColor" />
              </div>
            </div>
          </>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent && !parent.querySelector(".project-placeholder")) {
                const fallback = document.createElement("div");
                fallback.className =
                  "project-placeholder absolute inset-0 flex flex-col items-center justify-center bg-surface";
                fallback.innerHTML = `<span class="font-mono text-[11px] uppercase tracking-[0.25em] text-muted mb-3">${project.category}</span><span class="text-[clamp(48px,8vw,80px)] font-extrabold tracking-tight text-border select-none">${project.number}</span>`;
                parent.appendChild(fallback);
              }
            }}
          />
        )}
      </div>

      {mediaLinks.length > 0 && (
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          {mediaLinks.map((link) => (
            <ProjectLink key={link.label} href={link.href} icon={link.icon} label={link.label} />
          ))}
        </div>
      )}
    </motion.div>
  );

  const infoBlock = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="flex w-full flex-col justify-center"
    >
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm font-medium text-border">{project.number}</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
          {project.category}
        </span>
      </div>

      <h3 className="mt-5 text-[clamp(28px,3.5vw,44px)] font-extrabold leading-tight tracking-tight text-foreground">
        {project.title}
      </h3>
      <p className="mt-2 font-mono text-sm text-muted">{project.subtitle}</p>

      <div className="mt-8 space-y-6">
        <div>
          <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground">
            The Problem
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.problem}</p>
        </div>

        <div>
          <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground">
            The Approach
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.approach}</p>
        </div>
      </div>

      <div className="mt-7">
        <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground">
          Engineering
        </h4>
        <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
          {project.engineering.map((item) => (
            <div key={item.label}>
              <span className="font-mono text-[11px] text-muted">{item.label}</span>
              <p className="text-sm font-medium text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7">
        <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground">
          Key Highlights
        </h4>
        <ul className="mt-3 space-y-2">
          {project.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-border" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  return (
    <article className="w-full">
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
        {infoBlock}
        {mediaBlock}
      </div>
    </article>
  );
}
