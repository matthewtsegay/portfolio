"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/content";
import { Github, Linkedin, Mail, ChevronRight, Terminal } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden technical-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-0" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Internships & Opportunities
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-mono">
              {personalInfo.title}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] text-lg text-muted-foreground"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:opacity-90 transition-all"
            >
              View Projects
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 border border-border rounded-full font-semibold hover:bg-muted transition-all"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6 pt-4"
          >
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>

        {/* Terminal Visual Hook */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 max-w-4xl mx-auto border rounded-lg bg-card/80 backdrop-blur-md overflow-hidden shadow-2xl hidden md:block"
        >
          <div className="flex items-center gap-2 px-4 py-2 border-b bg-muted/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs font-mono text-muted-foreground opacity-70 flex items-center justify-center gap-2">
                <Terminal size={12} /> matyos — software-engineer
              </span>
            </div>
          </div>
          <div className="p-6 font-mono text-sm space-y-3">
            <div className="flex gap-2">
              <span className="text-primary font-bold">{">"}</span>
              <span className="text-foreground">cat matyos.config.js</span>
            </div>
            <div className="pl-4">
              <div className="text-muted-foreground">{"{"}</div>
              <div className="pl-4 space-y-1">
                <div>
                  <span className="text-primary/90">specialization</span>: <span className="text-accent">&quot;{personalInfo.terminalData.specialization}&quot;</span>,
                </div>
                <div>
                  <span className="text-primary/90">location</span>: <span className="text-accent">&quot;{personalInfo.terminalData.location}&quot;</span>,
                </div>
                <div>
                  <span className="text-primary/90">interest</span>: [
                  {personalInfo.terminalData.interest.map((item, i) => (
                    <React.Fragment key={i}>
                      <span className="text-accent">&quot;{item}&quot;</span>
                      {i < personalInfo.terminalData.interest.length - 1 && <span className="text-muted-foreground">, </span>}
                    </React.Fragment>
                  ))}
                  ],
                </div>
                <div>
                  <span className="text-primary/90">philosophy</span>: <span className="text-accent">&quot;{personalInfo.terminalData.philosophy}&quot;</span>
                </div>
              </div>
              <div className="text-muted-foreground">{"}"}</div>
            </div>
            <div className="flex gap-2">
              <span className="text-primary font-bold">{">"}</span>
              <span className="animate-pulse inline-block w-2 h-4 bg-primary/50" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
