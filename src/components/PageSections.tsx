"use client";

import Hero from "@/components/sections/Hero";
import ImpactMetrics from "@/components/sections/ImpactMetrics";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Expertise from "@/components/sections/Expertise";
import ResponsibleAI from "@/components/sections/ResponsibleAI";
import Contact from "@/components/sections/Contact";

export default function PageSections() {
  return (
    <main>
      <Hero />
      <ImpactMetrics />
      <About />
      <Experience />
      <Education />
      <Expertise />
      <ResponsibleAI />
      <Contact />
    </main>
  );
}
