"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { personalInfo } from "@/data/personal";
import { SectionLabel } from "@/components/SectionLabel";
import { cn } from "@/lib/utils";
import { LIMITS, validateContactFields, type ContactFieldErrors } from "@/lib/validation";

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

type FormStatus = "idle" | "sending" | "sent" | "fallback" | "error";

function openMailto(data: { name: string; email: string; subject: string; message: string }) {
  const body = `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`;
  window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    data.subject
  )}&body=${encodeURIComponent(body)}`;
}

const inputClasses = (hasError: boolean) =>
  cn(
    "h-12 rounded-xl border bg-surface px-4 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted/60 focus:border-foreground focus:ring-1 focus:ring-foreground/20",
    hasError && "border-error focus:border-error focus:ring-error/30"
  );

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);

  const clearFieldError = (field: keyof ContactFieldErrors) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const formData = new FormData(event.currentTarget);
    const raw = Object.fromEntries(formData) as Record<string, unknown>;

    const result = validateContactFields(raw);
    if (!result.valid) {
      setErrors(result.errors);
      setFormError(null);
      setStatus("idle");
      return;
    }

    setErrors({});
    setFormError(null);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.data, website: String(raw.website ?? "") }),
      });

      let payload: { ok?: boolean; delivered?: boolean; errors?: ContactFieldErrors; error?: string } | null =
        null;
      try {
        payload = await response.json();
      } catch {
        payload = null;
      }

      if (response.status === 429) {
        setFormError("You're sending messages too quickly. Please wait a few minutes and try again.");
        setStatus("error");
        return;
      }

      if (response.ok && payload?.ok) {
        if (payload.delivered) {
          setStatus("sent");
          formRef.current?.reset();
        } else {
          openMailto(result.data);
          setStatus("fallback");
          formRef.current?.reset();
        }
        return;
      }

      if (response.status === 400 && payload?.errors) {
        setErrors(payload.errors);
        setStatus("idle");
        return;
      }

      setFormError(payload?.error ?? "Something went wrong. Please try again later.");
      setStatus("error");
    } catch {
      setFormError("Network error. You can also email me directly.");
      setStatus("error");
    }
  }

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
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
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
                    autoComplete="name"
                    required
                    maxLength={LIMITS.name.max}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    onChange={() => clearFieldError("name")}
                    className={inputClasses(Boolean(errors.name))}
                  />
                  {errors.name && (
                    <p id="contact-name-error" role="alert" className="text-xs font-medium text-error">
                      {errors.name}
                    </p>
                  )}
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
                    autoComplete="email"
                    required
                    maxLength={LIMITS.email.max}
                    placeholder="your@email.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    onChange={() => clearFieldError("email")}
                    className={inputClasses(Boolean(errors.email))}
                  />
                  {errors.email && (
                    <p id="contact-email-error" role="alert" className="text-xs font-medium text-error">
                      {errors.email}
                    </p>
                  )}
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
                  maxLength={LIMITS.subject.max}
                  placeholder="What is this about?"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                  onChange={() => clearFieldError("subject")}
                  className={inputClasses(Boolean(errors.subject))}
                />
                {errors.subject && (
                  <p id="contact-subject-error" role="alert" className="text-xs font-medium text-error">
                    {errors.subject}
                  </p>
                )}
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
                  maxLength={LIMITS.message.max}
                  placeholder="Tell me about your project..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  onChange={() => clearFieldError("message")}
                  className={cn(inputClasses(Boolean(errors.message)), "min-h-[140px] resize-y py-3 leading-relaxed")}
                />
                {errors.message && (
                  <p id="contact-message-error" role="alert" className="text-xs font-medium text-error">
                    {errors.message}
                  </p>
                )}
              </div>

              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-foreground text-background text-sm font-bold transition-colors duration-300 hover:bg-foreground/80 disabled:pointer-events-none disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

              {status === "sent" && (
                <p
                  role="status"
                  className="mt-4 flex items-start gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground"
                >
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                  Thanks! Your message has been sent. I&apos;ll get back to you soon.
                </p>
              )}

              {status === "fallback" && (
                <p
                  role="status"
                  className="mt-4 flex items-start gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground"
                >
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                  <span>
                    Opening your email app... If nothing happens,{" "}
                    <a href={`mailto:${personalInfo.email}`} className="underline underline-offset-2">
                      email me directly
                    </a>
                    .
                  </span>
                </p>
              )}

              {status === "error" && formError && (
                <p
                  role="alert"
                  className="mt-4 flex items-start gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-error"
                >
                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  {formError}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
