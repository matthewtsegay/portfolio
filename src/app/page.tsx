import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Credentials from "@/components/Credentials";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
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
