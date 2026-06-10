import Hero from "@/components/sections/Hero";
import ImpactMetrics from "@/components/sections/ImpactMetrics";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Expertise from "@/components/sections/Expertise";
import ResponsibleAI from "@/components/sections/ResponsibleAI";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function PageSections() {
  return (
    <main>
      <Hero />
      <ImpactMetrics />
      <About />
      <Experience />
      <Expertise />
      <ResponsibleAI />
      <Education />
      <Contact />
    </main>
  );
}
