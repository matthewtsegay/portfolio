import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CoreStrengths from "@/components/sections/CoreStrengths";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import EducationAndOthers from "@/components/sections/EducationAndOthers";
import Contact from "@/components/sections/Contact";
import { SectionShell } from "@/components/layout/SectionShell";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div className="flex flex-col gap-8 md:gap-12 px-4 md:px-6 pb-20 max-w-7xl mx-auto w-full">
        <SectionShell innerClassName="p-0 overflow-hidden">
          <About />
        </SectionShell>
        <SectionShell>
          <CoreStrengths />
        </SectionShell>
        <SectionShell>
          <TechStack />
        </SectionShell>
        <SectionShell>
          <Projects />
        </SectionShell>
        <SectionShell>
          <Experience />
        </SectionShell>
        <SectionShell>
          <EducationAndOthers />
        </SectionShell>
        <SectionShell>
          <Contact />
        </SectionShell>
      </div>
    </div>
  );
}
