"use client";

import React from "react";
import { motion } from "framer-motion";
import { techStack } from "@/data/content";
import { TechIcon } from "@/components/ui/TechIcon";
import { Layers } from "lucide-react";

const TechStack = () => {
  const categories = [
    { title: "Languages", skills: techStack.languages },
    { title: "Frontend & Mobile", skills: techStack.frontend },
    { title: "Backend", skills: techStack.backend },
    { title: "Databases", skills: techStack.databases },
    { title: "Tools & DevOps", skills: techStack.tools },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-4">
          <Layers size={14} /> TOOLBELT
        </div>
        <h2 className="text-3xl md:text-5xl font-bold">
          Technical <span className="text-primary">Ecosystem</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-2xl border border-border bg-background/70 backdrop-blur-sm"
          >
            <h3 className="text-lg font-mono font-bold text-primary mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {cat.title.toUpperCase()}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border text-sm font-medium hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                >
                  <TechIcon name={skill} size={18} />
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
