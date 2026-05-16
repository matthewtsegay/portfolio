"use client";

import React from "react";
import { motion } from "framer-motion";
import { coreStrengths } from "@/data/content";
import * as Icons from "lucide-react";
import { Zap } from "lucide-react";

const CoreStrengths = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-4">
            <Zap size={14} /> CORE COMPETENCIES
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Technical <span className="text-primary">Strengths</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A disciplined focus on scalable backend architecture, systems thinking, and structured problem solving.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreStrengths.map((strength, index) => {
            // @ts-expect-error: Lucide icons dynamic access
            const IconComponent = Icons[strength.icon] || Icons.Code;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl border border-border bg-background hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="mb-6 p-4 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors inline-block">
                  <IconComponent className="text-primary group-hover:scale-110 transition-transform" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{strength.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreStrengths;
