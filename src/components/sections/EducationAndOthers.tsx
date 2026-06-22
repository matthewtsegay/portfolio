"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { education, certifications, volunteer } from "@/data/content";
import { GraduationCap, Award, Heart, CheckCircle2 } from "lucide-react";

function CertCard({
  cert,
  index,
}: {
  cert: (typeof certifications)[number];
  index: number;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group rounded-lg border border-border bg-background overflow-hidden hover:border-primary/35 transition-all shadow-sm hover:shadow-md"
    >
      <div className="relative aspect-[5/3] w-full overflow-hidden bg-muted">
        {!imgError && cert.image ? (
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            className="object-contain p-1 group-hover:scale-[1.02] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
            <Award size={40} className="text-primary/40" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        <span className="absolute top-3 right-3 text-[10px] font-mono text-foreground bg-card/90 px-2 py-1 rounded border border-border/60">
          {cert.year}
        </span>
      </div>
      <div className="p-4">
        <h4 className="font-bold text-sm leading-snug mb-1">{cert.title}</h4>
        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
      </div>
    </motion.div>
  );
}

const EducationAndOthers = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="space-y-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-6">
              <GraduationCap size={14} /> ACADEMIC
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-2xl border border-border bg-background/80 shadow-sm"
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
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <CertCard key={idx} cert={cert} index={idx} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-6">
            <Heart size={14} /> IMPACT
          </div>
          <div className="space-y-5">
            {volunteer.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-background/80 shadow-sm hover:border-primary/30 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold">{item.role}</h3>
                    <p className="text-sm text-primary">{item.organization}</p>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                    {item.period}
                  </span>
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
  );
};

export default EducationAndOthers;
