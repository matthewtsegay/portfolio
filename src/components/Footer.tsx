"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/data/personal";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/work" },
  { name: "Experience", href: "/education" },
  { name: "Contact", href: "/contact" },
];

const connectLinks = [
  { name: "GitHub", href: personalInfo.github, icon: Github },
  { name: "LinkedIn", href: personalInfo.linkedin, icon: Linkedin },
  { name: "Email", href: `mailto:${personalInfo.email}`, icon: Mail },
];

const footerVars = {
  "--f-bg": "#000000",
  "--f-text": "#ffffff",
  "--f-muted": "#a3a3a3",
  "--f-border": "#262626",
} as React.CSSProperties;

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ ...footerVars, backgroundColor: "var(--f-bg)", color: "var(--f-text)" }}
    >
      {/* Subtle grid decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--f-border) 1px, transparent 1px), linear-gradient(90deg, var(--f-border) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 md:px-[100px]">
        {/* Top CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="pt-24 pb-20 md:pt-32 md:pb-24"
        >
          <h2 className="text-[clamp(32px,5.5vw,64px)] font-extrabold leading-[1.08] tracking-tight">
            Let&apos;s build something<br className="hidden sm:block" /> meaningful.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed md:text-lg" style={{ color: "var(--f-muted)" }}>
            Have an idea, a technical challenge, or an opportunity in mind? I&apos;m
            always open to connecting and building thoughtful software solutions.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border px-8 py-3.5 text-[15px] font-bold transition-colors duration-300"
            style={{
              borderColor: "var(--f-text)",
              backgroundColor: "var(--f-text)",
              color: "var(--f-bg)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--f-text)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--f-text)";
              e.currentTarget.style.color = "var(--f-bg)";
            }}
          >
            Get in touch
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>

        {/* Divider */}
        <div className="h-px w-full" style={{ backgroundColor: "var(--f-border)" }} />

        {/* Main footer grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-14 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16 lg:py-20"
        >
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold tracking-tight">
              Matyos Tsegay Kassa
            </span>
            <p className="mt-2 text-sm font-medium" style={{ color: "var(--f-muted)" }}>
              Software Engineer
            </p>
            <p className="text-sm font-medium" style={{ color: "var(--f-muted)" }}>
              Backend &amp; AI Engineer
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed" style={{ color: "var(--f-muted)" }}>
              Building reliable software systems, scalable backend services, and intelligent products.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed" style={{ color: "var(--f-muted)" }}>
              Designing systems with clarity, building products with purpose.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--f-muted)" }}>
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center text-sm transition-colors duration-300 hover:underline underline-offset-4"
                    style={{ color: "var(--f-muted)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--f-text)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--f-muted)"; }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--f-muted)" }}>
              Connect
            </h3>
            <ul className="mt-5 space-y-3">
              {connectLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-sm transition-colors duration-300 hover:underline underline-offset-4"
                    style={{ color: "var(--f-muted)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--f-text)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--f-muted)"; }}
                  >
                    <link.icon size={14} strokeWidth={1.75} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="h-px w-full" style={{ backgroundColor: "var(--f-border)" }} />
        <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm sm:flex-row" style={{ color: "var(--f-muted)" }}>
          <p>&copy; 2026 Matyos Tsegay Kassa. All rights reserved.</p>
          <p>Built with Next.js &middot; TypeScript &middot; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
