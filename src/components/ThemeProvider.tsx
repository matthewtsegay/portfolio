"use client";

import React, { createContext, useCallback, useContext, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

function applyThemeToDOM(theme: Theme) {
  const root = document.documentElement;
  root.classList.add("no-theme-transition");
  root.classList.toggle("dark", theme === "dark");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      root.classList.remove("no-theme-transition");
    });
  });
}

let currentTheme: Theme = "light";

if (typeof window !== "undefined") {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    currentTheme = stored;
  } else {
    currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
}

function subscribe(callback: () => void) {
  const handler = (e: MediaQueryListEvent) => {
    if (!localStorage.getItem("theme")) {
      currentTheme = e.matches ? "dark" : "light";
      applyThemeToDOM(currentTheme);
      callback();
    }
  };
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handler);
  return () => {
    window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", handler);
  };
}

function getSnapshot(): Theme {
  return currentTheme;
}

function getServerSnapshot(): Theme {
  return "light";
}

function setThemeValue(next: Theme) {
  currentTheme = next;
  localStorage.setItem("theme", next);
  applyThemeToDOM(next);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setThemeValue(next);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
