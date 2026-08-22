"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";
import { Section } from "@/components/Section";
import { SectionLabel } from "@/components/SectionLabel";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <Section id="about" className="border-b border-border">
      <SectionLabel>About</SectionLabel>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.08] tracking-tight"
        >
          A software engineer building reliable, scalable systems — from backend
          APIs to intelligent products.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="md:pt-2"
        >
          <p className="leading-relaxed text-muted">{personalInfo.aboutLead}</p>
          <p className="mt-4 leading-relaxed text-muted">{personalInfo.aboutBody}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {personalInfo.languages.map((lang) => (
              <span
                key={lang.name}
                className="rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs text-foreground/80"
              >
                {lang.name} · {lang.level}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Achievements row ──────────────────────── */}
      <div className="mt-14 border-t border-border pt-10 md:mt-20 md:pt-12">
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-0">
          {[
            { value: "3.7", label: "CGPA" },
            { value: "81.25%", label: "National Exit Exam" },
            { value: "2026", label: "Graduate" },
            { value: "4+", label: "Projects Built" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1 + i * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "pb-8 md:pb-0 md:pr-8",
                i % 2 === 0 && "border-b border-border md:border-b-0",
                i < 3 && "md:border-r md:border-border"
              )}
            >
              <p className="text-[clamp(28px,4vw,40px)] font-bold leading-none tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
