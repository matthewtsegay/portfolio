"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { Section } from "@/components/Section";
import { SectionLabel } from "@/components/SectionLabel";

export default function Skills() {
  return (
    <Section id="skills" className="border-b border-border">
      <SectionLabel>Skills</SectionLabel>
      <h2 className="mt-8 text-[clamp(30px,4vw,52px)] font-extrabold tracking-tight">
        Tools &amp; Technologies
      </h2>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-border bg-card p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)]"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-surface text-gray-400">
              <cat.icon size={20} strokeWidth={1.75} />
            </span>
            <h3 className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {cat.title}
            </h3>
            <p className="mt-3 font-semibold leading-relaxed">{cat.skills.join(" · ")}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
