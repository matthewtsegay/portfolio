"use client";

import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import { SECTIONS, type SectionKey } from "@/lib/sections";
import { scrollToSection, scrollToTop } from "@/lib/scroll";

export default function HomeContent({ section }: { section?: SectionKey }) {
  const isFirstRender = useRef(true);
  const prevSection = useRef<SectionKey | null>(null);

  useEffect(() => {
    const instant = isFirstRender.current;
    isFirstRender.current = false;
    const previous = prevSection.current;
    prevSection.current = section ?? null;

    if (section) {
      const behavior = instant ? "instant" : "smooth";
      const raf = requestAnimationFrame(() => {
        scrollToSection(SECTIONS[section].id, behavior);
      });
      return () => cancelAnimationFrame(raf);
    }

    if (!instant && previous) {
      scrollToTop("smooth");
    }
  }, [section]);

  return (
    <div className="flex flex-col">
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Projects />
      <div id="experience">
        <Credentials />
      </div>
      <Contact />
    </div>
  );
}
