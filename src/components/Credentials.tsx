"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, MapPin, Clock } from "lucide-react";
import { experience, education, certifications } from "@/data/experience";
import { Section } from "@/components/Section";
import { SectionLabel } from "@/components/SectionLabel";

const cardClass =
  "rounded-3xl border border-border bg-card p-8 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]";

export default function Credentials() {
  return (
    <Section id="education" className="border-b border-border">
      <SectionLabel>Experience · Education · Certifications</SectionLabel>
      <h2 className="mt-8 text-[clamp(30px,4vw,52px)] font-extrabold tracking-tight">
        Career &amp; Credentials
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={cardClass}
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-surface text-foreground">
              <Briefcase size={20} strokeWidth={1.75} />
            </span>
            <span className="rounded-full bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-foreground">
              {experience.duration}
            </span>
          </div>

          <h3 className="mt-6 text-lg font-bold tracking-tight">{experience.role}</h3>
          <p className="mt-1 font-semibold text-foreground/80">{experience.company}</p>
          <p className="mt-3 flex items-center gap-1.5 font-mono text-xs text-muted">
            <MapPin size={13} /> {experience.location}
            <span className="ml-2 inline-flex items-center gap-1">
              <Clock size={13} /> {experience.duration}
            </span>
          </p>

          <ul className="mt-5 space-y-2 border-t border-border pt-5">
            {experience.responsibilities.slice(0, 4).map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
                <span className="mt-[7px] inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className={cardClass}
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-surface text-foreground">
            <GraduationCap size={20} strokeWidth={1.75} />
          </span>

          <h3 className="mt-6 text-lg font-bold tracking-tight">{education.degree}</h3>
          <p className="mt-1 font-semibold text-foreground/80">{education.school}</p>
          <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
            {education.years}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-6">
            <div className="rounded-2xl border border-border p-4">
              <p className="text-3xl font-extrabold tracking-tight">{education.cgpa}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                CGPA
              </p>
            </div>
            <div className="rounded-2xl border border-border p-4">
              <p className="text-3xl font-extrabold tracking-tight">{education.exitExam}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                Exit Exam
              </p>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className={cardClass}
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-surface text-foreground">
            <Award size={20} strokeWidth={1.75} />
          </span>
          <h3 className="mt-6 text-lg font-bold tracking-tight">Certifications</h3>

          <ul className="mt-5 space-y-4 border-t border-border pt-5">
            {certifications.map((cert) => (
              <li key={cert.title}>
                <p className="font-semibold leading-snug">{cert.title}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-accent-dark">
                  {cert.year}
                </p>
                <p className="mt-1 text-sm text-muted">{cert.org}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
