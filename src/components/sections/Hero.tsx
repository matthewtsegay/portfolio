"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/content";
import {
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  Terminal,
  MapPin,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

function HeroPhoto() {
  const [imgError, setImgError] = useState(false);
  const initials = `${personalInfo.firstName[0]}${personalInfo.lastName[0]}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center justify-center w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] mx-auto lg:mx-0 shrink-0"
    >
      {/* Outer glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/20 blur-2xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rotating ring 1 */}
      <motion.div
        className="absolute -inset-5 rounded-full border-2 border-dashed border-primary/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />

      {/* Rotating ring 2 — opposite direction */}
      <motion.div
        className="absolute -inset-9 rounded-full border border-primary/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Orbiting dots */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-[-36px] pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
            delay: i * 4.6,
          }}
        >
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-sm shadow-primary/40" />
        </motion.div>
      ))}

      {/* Photo frame */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <div className="relative w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] rounded-full p-1.5 bg-gradient-to-br from-primary via-accent to-primary shadow-xl shadow-primary/20">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-cream border-4 border-card">
            {!imgError ? (
              <Image
                src={personalInfo.profileImage}
                alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 220px, 280px"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/15">
                <span className="text-5xl md:text-6xl font-bold text-primary">
                  {initials}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Online badge */}
        <motion.span
          className="absolute bottom-3 right-3 w-5 h-5 rounded-full bg-accent border-[3px] border-card shadow-md"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden technical-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-cream/60 via-background to-background z-0" />
      <motion.div
        aria-hidden
        className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 xl:gap-20 items-center max-w-6xl mx-auto">
          {/* Photo */}
          <HeroPhoto />

          {/* Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-primary text-xs font-mono tracking-wide"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for Internships & Opportunities
            </motion.div>

            <motion.div {...fadeUp(0.08)} className="space-y-2">
              <p className="text-sm md:text-base font-mono text-primary tracking-widest uppercase">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]">
                <span className="text-primary">{personalInfo.firstName}</span>
                <br />
                <span className="text-foreground">{personalInfo.lastName}</span>
              </h1>
            </motion.div>

            <motion.div {...fadeUp(0.16)} className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-center lg:items-start justify-center lg:justify-start gap-x-3 gap-y-1">
                {personalInfo.roles.map((role, i) => (
                  <React.Fragment key={role}>
                    <span className="text-lg md:text-xl text-foreground/90 font-medium">
                      {role}
                    </span>
                    {i < personalInfo.roles.length - 1 && (
                      <span className="hidden sm:inline text-primary/40 font-light">
                        |
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/70 border border-border/60">
                  <GraduationCap size={14} className="text-primary shrink-0" />
                  {personalInfo.organization}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/70 border border-border/60">
                  <MapPin size={14} className="text-primary shrink-0" />
                  {personalInfo.location}
                </span>
              </div>
            </motion.div>

            <motion.p
              {...fadeUp(0.24)}
              className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              {personalInfo.summary}
            </motion.p>

            <motion.div
              {...fadeUp(0.32)}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="#projects"
                className="group flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-full font-semibold hover:opacity-90 transition-all shadow-md shadow-primary/20"
              >
                View Projects
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="#contact"
                className="px-7 py-3.5 border border-border rounded-full font-semibold hover:bg-muted/80 transition-all"
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp(0.4)}
              className="flex items-center gap-6 pt-2"
            >
              {[
                { href: personalInfo.github, icon: Github, label: "GitHub" },
                { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="p-2.5 rounded-full border border-border/70 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 lg:mt-20 max-w-4xl mx-auto border rounded-xl bg-card/80 backdrop-blur-md overflow-hidden shadow-2xl hidden md:block"
        >
          <div className="flex items-center gap-2 px-4 py-2.5 border-b bg-muted/50">
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
                  <span className="text-primary/90">specialization</span>:{" "}
                  <span className="text-accent">
                    &quot;{personalInfo.terminalData.specialization}&quot;
                  </span>
                  ,
                </div>
                <div>
                  <span className="text-primary/90">location</span>:{" "}
                  <span className="text-accent">
                    &quot;{personalInfo.terminalData.location}&quot;
                  </span>
                  ,
                </div>
                <div>
                  <span className="text-primary/90">interest</span>: [
                  {personalInfo.terminalData.interest.map((item, i) => (
                    <React.Fragment key={i}>
                      <span className="text-accent">&quot;{item}&quot;</span>
                      {i < personalInfo.terminalData.interest.length - 1 && (
                        <span className="text-muted-foreground">, </span>
                      )}
                    </React.Fragment>
                  ))}
                  ],
                </div>
                <div>
                  <span className="text-primary/90">philosophy</span>:{" "}
                  <span className="text-accent">
                    &quot;{personalInfo.terminalData.philosophy}&quot;
                  </span>
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
