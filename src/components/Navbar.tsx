"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import MenuIcon from "@/components/MenuIcon";
import MenuOverlay from "@/components/MenuOverlay";
import { cn } from "@/lib/utils";
import { SECTIONS, type SectionKey } from "@/lib/sections";
import { scrollToSection, scrollToTop } from "@/lib/scroll";

const navLinks: { name: string; href: string; section: SectionKey }[] = [
  { name: "About", href: "/about", section: "about" },
  { name: "Skills", href: "/skills", section: "skills" },
  { name: "Projects", href: "/work", section: "work" },
  { name: "Education", href: "/education", section: "education" },
  { name: "Contact", href: "/contact", section: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [active, setActive] = useState(
    () => navLinks.find((link) => link.href === pathname)?.name ?? "About"
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const link = navLinks.find((l) => l.href.slice(1) === entry.target.id);
            if (link) setActive(link.name);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md",
          open && "invisible"
        )}
      >
        <nav className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-6 sm:px-10 md:h-20 md:px-[100px]">
          {/* ── Logo ─────────────────────────────────── */}
          <Link
            href="/"
            aria-label="Matyos — home"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                scrollToTop("smooth");
              }
            }}
            className="group inline-flex items-center gap-2.5"
          >
            <span className="logo-mark inline-flex h-9 w-9 items-center justify-center rounded-md border-2 border-foreground text-sm font-extrabold tracking-tight text-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
              M
            </span>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Matyos.
            </span>
          </Link>

          {/* ── Desktop navigation ───────────────────── */}
          <div className="hidden items-center gap-6 xl:flex" style={{ gap: "clamp(16px, 2vw, 36px)" }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (pathname === link.href) {
                    e.preventDefault();
                    scrollToSection(SECTIONS[link.section].id);
                  }
                }}
                className={cn(
                  "relative whitespace-nowrap font-semibold tracking-tight transition-colors duration-300",
                  active === link.name ? "text-foreground" : "text-foreground/55 hover:text-foreground"
                )}
                style={{ fontSize: "clamp(13px, 1.1vw, 15px)" }}
              >
                {link.name}
                <span
                  aria-hidden
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-px w-full origin-left bg-foreground transition-transform duration-300",
                    active === link.name ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* ── Mobile controls ──────────────────────── */}
          <div className="flex items-center gap-4 xl:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative inline-flex h-10 w-10 items-center justify-center text-foreground"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <MenuIcon mode="close" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <MenuIcon mode="menu" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile overlay — rendered outside header to escape sticky stacking context ── */}
      <MenuOverlay open={open} onClose={() => setOpen(false)} links={navLinks} />    </>
  );
}
