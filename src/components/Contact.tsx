"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { SectionLabel } from "@/components/SectionLabel";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const contactItems = [
  {
    icon: Mail,
    label: "EMAIL",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: personalInfo.location,
    href: undefined,
  },
  {
    icon: Github,
    label: "GITHUB",
    value: "GitHub profile",
    href: personalInfo.github,
  },
  {
    icon: Linkedin,
    label: "LINKEDIN",
    value: "LinkedIn profile",
    href: personalInfo.linkedin,
  },
];

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = data.get("name") as string;
  const email = data.get("email") as string;
  const subject = data.get("subject") as string;
  const message = data.get("message") as string;

  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`;
  window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
}

export default function Contact() {
  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 pt-24 pb-28 sm:px-10 md:px-[100px] md:pt-32 md:pb-36">
        {/* Header */}
        <motion.div {...fadeUp(0)}>
          <SectionLabel>Contact</SectionLabel>
        </motion.div>

        <motion.h2
          {...fadeUp(0.08)}
          className="mt-6 text-[clamp(32px,5vw,56px)] font-extrabold tracking-tight"
        >
          Let&apos;s connect
        </motion.h2>

        <motion.p
          {...fadeUp(0.14)}
          className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg"
        >
          Have a project in mind or want to collaborate? I&apos;d love to hear from you.
        </motion.p>

        {/* Two-column layout */}
        <div className="mt-16 grid gap-16 lg:grid-cols-[2fr_3fr] lg:gap-20">
          {/* Left: Contact Information */}
          <motion.div {...fadeUp(0.2)} className="flex flex-col">
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground">
              Contact Information
            </h3>
            <div className="mt-px h-px w-12 bg-foreground" />

            <ul className="mt-8 space-y-6">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border">
                      <Icon size={18} strokeWidth={1.75} className="text-foreground" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">
                        {item.label}
                      </p>
                      <p className="mt-0.5 truncate text-sm font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                return (
                  <li key={item.label} className="flex items-center gap-4">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 transition-colors duration-300 hover:text-muted"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <p className="mt-10 max-w-xs text-sm leading-relaxed text-muted">
              I&apos;m currently open to software engineering opportunities, particularly in
              backend engineering, AI-driven solutions, and enterprise systems.
            </p>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div {...fadeUp(0.28)}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-muted"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="h-12 rounded-xl border border-border bg-surface px-4 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted/60 focus:border-foreground focus:ring-1 focus:ring-foreground/20"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="h-12 rounded-xl border border-border bg-surface px-4 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted/60 focus:border-foreground focus:ring-1 focus:ring-foreground/20"
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-1.5">
                <label
                  htmlFor="contact-subject"
                  className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-muted"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What is this about?"
                  className="h-12 rounded-xl border border-border bg-surface px-4 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted/60 focus:border-foreground focus:ring-1 focus:ring-foreground/20"
                />
              </div>

              <div className="mt-4 flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-muted"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="min-h-[140px] resize-y rounded-xl border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-foreground outline-none transition-colors duration-200 placeholder:text-muted/60 focus:border-foreground focus:ring-1 focus:ring-foreground/20"
                />
              </div>

              <button
                type="submit"
                className="group mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-foreground text-background text-sm font-bold transition-colors duration-300 hover:bg-foreground/80"
              >
                Send Message
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
