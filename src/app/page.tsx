import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CoreStrengths from "@/components/sections/CoreStrengths";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import EducationAndOthers from "@/components/sections/EducationAndOthers";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <CoreStrengths />
      <TechStack />
      <Projects />
      <Experience />
      <EducationAndOthers />
      <Contact />
    </div>
  );
}
