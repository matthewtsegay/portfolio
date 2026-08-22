"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from "@/data/personal";
import SocialLinks from "@/components/SocialLinks";
import Button from "@/components/Button";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const hasCv = Boolean(personalInfo.cvUrl);
  const nameParts = personalInfo.name.split(" ");

  return (
    <section id="home" className="relative overflow-hidden border-b border-border bg-background">
      <div className="bg-grid" aria-hidden />
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 pb-20 pt-16 text-center sm:px-10 md:pb-28 md:pt-24">
        <motion.p
          {...fadeUp(0)}
          className="font-mono text-xs font-semibold uppercase tracking-[0.5em] text-foreground/70 md:text-sm"
        >
          {personalInfo.heroLabel}
        </motion.p>

        <motion.h1
          {...fadeUp(0.1)}
          className="mt-9 max-w-[1100px] text-[clamp(36px,6.5vw,88px)] font-extrabold leading-[1.08] tracking-tight text-balance"
        >
          {nameParts.map((part, i) => (
            <span key={part} className="relative mr-4 inline-block last:mr-0 md:mr-6">
              {part}
              <span
                aria-hidden
                className={`name-underline${i === 1 ? " name-underline--rest" : ""}`}
                style={{ animationDelay: `${i * 3}s` }}
              />
            </span>
          ))}
        </motion.h1>

        <motion.p
          {...fadeUp(0.26)}
          className="mt-10 max-w-2xl text-lg font-semibold leading-relaxed text-foreground md:text-2xl"
        >
          {personalInfo.role}
        </motion.p>

        <motion.p
          {...fadeUp(0.34)}
          className="mt-5 max-w-xl text-base leading-relaxed text-foreground/60 md:text-lg"
        >
          {personalInfo.description}
        </motion.p>

        <motion.div
          {...fadeUp(0.44)}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button variant="primary" asAnchor href="/contact" className="group">
            Contact Me
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>

          {hasCv ? (
            <Button asAnchor href={personalInfo.cvUrl} download>
              <Download size={16} />
              Download CV
            </Button>
          ) : (
            <Button>
              <Download size={16} />
              Download CV
            </Button>
          )}
        </motion.div>

        <motion.div {...fadeUp(0.54)} className="mt-14">
          <SocialLinks />
        </motion.div>
      </div>
    </section>
  );
}
