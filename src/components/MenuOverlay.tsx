"use client";

import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import MenuIcon from "@/components/MenuIcon";
import { scrollToSection, scrollToTop } from "@/lib/scroll";

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
  links: { name: string; href: string; section?: string }[];
}

export default function MenuOverlay({ open, onClose, links }: MenuOverlayProps) {
  const pathname = usePathname();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [open, handleKeyDown]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    section?: string
  ) => {
    onClose();
    if (pathname === href) {
      e.preventDefault();
      if (section) {
        scrollToSection(section);
      } else {
        scrollToTop("smooth");
      }
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col bg-background lg:hidden"
          style={{ top: 0 }}
        >
          {/* ── Mobile header ──────────────────────── */}
          <div className="flex h-[100px] shrink-0 items-center justify-between border-b border-border px-8">
            <Link
              href="/"
              aria-label="Matyos — home"
              onClick={(e) => handleLinkClick(e, "/")}
              className="group inline-flex items-center gap-2.5"
            >
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-md border-2 border-foreground text-sm font-extrabold tracking-tight text-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
                M
              </span>
              <span className="text-lg font-bold tracking-tight text-foreground">
                Matyos.
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="relative inline-flex h-10 w-10 items-center justify-center text-foreground"
              >
                <MenuIcon mode="close" />
              </button>
            </div>
          </div>

          {/* ── Navigation links ───────────────────── */}
          <nav className="flex flex-1 flex-col gap-7 overflow-y-auto px-8 py-10 md:px-12">
            {links.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.08 + i * 0.04,
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.section)}
                  className="block font-normal text-foreground transition-colors duration-200 hover:text-muted"
                  style={{ fontSize: "clamp(20px, 5vw, 24px)", lineHeight: 1.2 }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
