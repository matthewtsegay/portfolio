"use client";

import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    setAnimating(true);
    toggle();
    setTimeout(() => setAnimating(false), 300);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors duration-300 hover:bg-surface"
    >
      {theme === "dark" ? (
        <Sun size={18} className={animating ? "theme-icon-animate" : ""} />
      ) : (
        <Moon size={18} className={animating ? "theme-icon-animate" : ""} />
      )}
    </button>
  );
}
