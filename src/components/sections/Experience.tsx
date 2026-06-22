"use client";

import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/data/content";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const Experience = () => {
  return (
    <div id="experience">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-4">
          <Briefcase size={14} /> CAREER PATH
        </div>
        <h2 className="text-3xl md:text-5xl font-bold">
          Professional <span className="text-primary">Experience</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-0"
          >
            <div className="hidden md:block absolute left-1/2 -ml-px h-full w-0.5 bg-border" />

            <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              <div className="flex-1 w-full">
                <div className="p-6 md:p-8 rounded-2xl border border-border bg-background/80 shadow-sm hover:border-primary/30 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-primary font-mono text-sm">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground px-2 py-1 rounded-md bg-muted">
                      <Calendar size={12} /> {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, tIdx) => (
                      <span key={tIdx} className="px-2 py-1 rounded bg-muted text-[10px] font-mono uppercase tracking-tight">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute left-0 md:left-1/2 md:-ml-3 w-6 h-6 rounded-full bg-primary border-4 border-card z-10 shadow-lg" />
              <div className="flex-1 hidden md:block" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
