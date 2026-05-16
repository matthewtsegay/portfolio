"use client";

import React from "react";
import { motion } from "framer-motion";
import { education, certifications, volunteer } from "@/data/content";
import { GraduationCap, Award, Heart, CheckCircle2 } from "lucide-react";

const EducationAndOthers = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education & Certs */}
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-6">
                <GraduationCap size={14} /> ACADEMIC
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-border bg-background shadow-sm"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">{education.degree}</h3>
                    <p className="text-muted-foreground">{education.school}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-primary">{education.cgpa}</p>
                    <p className="text-[10px] font-mono uppercase text-muted-foreground">CGPA</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-sm font-bold text-primary">Relevant Coursework:</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {education.coursework.map((course, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 size={12} className="text-primary" />
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-6">
                <Award size={14} /> CERTIFICATIONS
              </div>
              <div className="grid gap-4">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-xl border border-border bg-background flex justify-between items-center"
                  >
                    <div>
                      <h4 className="font-bold text-sm">{cert.title}</h4>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground">{cert.year}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Volunteer & Leadership */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-6">
              <Heart size={14} /> IMPACT
            </div>
            <div className="space-y-6">
              {volunteer.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl border border-border bg-background shadow-sm hover:border-primary/30 transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold">{item.role}</h3>
                      <p className="text-sm text-primary">{item.organization}</p>
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground bg-muted px-2 py-1 rounded">{item.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-1">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAndOthers;
