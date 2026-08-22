"use client";

import React from "react";
import { motion } from "framer-motion";

interface MenuIconProps {
  mode: "menu" | "close";
  className?: string;
}

export default function MenuIcon({ mode, className }: MenuIconProps) {
  const isMenu = mode === "menu";

  return (
    <svg
      width="28"
      height="24"
      viewBox="0 0 28 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Top line: short, left-aligned */}
      <motion.line
        x1={0}
        y1={3}
        x2={28}
        y2={3}
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        animate={
          isMenu
            ? { x2: 14, opacity: 1, rotate: 0 }
            : { x2: 28, opacity: 1, rotate: 45 }
        }
        style={{ originX: "0px", originY: "12px" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Middle line: full width */}
      <motion.line
        x1={0}
        y1={12}
        x2={28}
        y2={12}
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        animate={
          isMenu
            ? { opacity: 1, scaleX: 1 }
            : { opacity: 0, scaleX: 0 }
        }
        style={{ originX: "0px", originY: "12px" }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Bottom line: short, right-aligned */}
      <motion.line
        x1={0}
        y1={21}
        x2={28}
        y2={21}
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        animate={
          isMenu
            ? { x1: 14, opacity: 1, rotate: 0 }
            : { x1: 0, opacity: 1, rotate: -45 }
        }
        style={{ originX: "0px", originY: "12px" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}
