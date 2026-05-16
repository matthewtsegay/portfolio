"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/content";
import { User, Target, Shield, BookOpen } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Target className="text-primary" />,
      title: "Vision",
      description: "Building technology companies that solve societal problems."
    },
    {
      icon: <Shield className="text-primary" />,
      title: "Core Values",
      description: "Discipline, consistency, and structured problem-solving."
    },
    {
      icon: <BookOpen className="text-primary" />,
      title: "Focus",
      description: "Deep expertise in backend systems and software design."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-6">
              <User size={14} /> ABOUT ME
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Engineering <span className="text-primary">Impactful</span> Systems
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>{personalInfo.about}</p>
              <p>{personalInfo.philosophy}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
