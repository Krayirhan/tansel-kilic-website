"use client";
import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section
      id="about"
      className="py-20 md:py-24 bg-slate-50 border-y border-slate-200/80 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal duration={0.5}>
          <SectionHeader label={a.label} title={a.title} className="mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {(["p1", "p2", "p3", "p4"] as const).map((k) => (
              <p key={k} className="text-slate-500 leading-relaxed text-base">
                {a[k]}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
