"use client";

import React from "react";
import { techStack } from "@/data/skills";

/* ── Tech logos to show in the marquee ─────────────────────── */
const MARQUEE_TECHS = [
  "Python",
  "Django",
  "FastAPI",
  "Flutter",
  "React",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Git",
  "GitHub",
] as const;

const marqueeItems = MARQUEE_TECHS.map((name) =>
  techStack.find((t) => t.name === name)
).filter(Boolean) as (typeof techStack)[number][];

function LogoItem({ tech }: { tech: (typeof techStack)[number] }) {
  const Icon = tech.icon;
  return (
    <div className="group relative flex shrink-0 items-center justify-center">
      <div
        className="logo-item flex items-center justify-center"
        style={{ "--brand": tech.color } as React.CSSProperties}
      >
        <Icon className="logo-icon h-9 w-9 md:h-12 md:w-12" />
      </div>
      <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1 font-mono text-[11px] text-background opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
        {tech.name}
      </span>
    </div>
  );
}

export default function TechMarquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <section
      id="tech-stack"
      aria-label="Tech Stack"
      className="relative bg-background py-16 md:py-20"
    >
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 45s linear infinite;
        }
        .logo-icon {
          fill: var(--foreground);
          opacity: 0.4;
          transition: opacity 0.3s ease, fill 0.3s ease, transform 0.3s ease;
        }
        .logo-item:hover .logo-icon {
          fill: var(--brand);
          opacity: 1;
          transform: scale(1.04);
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-10 md:px-[100px]">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted md:text-sm">
          Tech Stack
        </p>
        <h2 className="mt-4 text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight">
          Technologies I build with
        </h2>
      </div>

      <div className="relative mt-10 overflow-hidden md:mt-14">
        <div className="marquee-track flex w-max items-center gap-[60px] px-[60px] md:gap-[100px] md:px-[100px]">
          {doubled.map((tech, i) => (
            <LogoItem key={`${tech.name}-${i}`} tech={tech} />
          ))}
        </div>

        {/* ── Edge fades ─────────────────────────────────── */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[60px] md:w-[160px]"
          style={{
            background:
              "linear-gradient(to right, var(--background), transparent)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[60px] md:w-[160px]"
          style={{
            background:
              "linear-gradient(to left, var(--background), transparent)",
          }}
        />
      </div>
    </section>
  );
}
