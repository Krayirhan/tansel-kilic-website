"use client";
import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";
import type { Messages } from "@/lib/i18n";

type ImpactCopyKey = keyof Messages["impact"];

type ImpactMetricItem = {
  valueKey: ImpactCopyKey;
  labelKey: ImpactCopyKey;
  subKey: ImpactCopyKey;
  valueClass: string;
};

const IMPACT_METRICS = [
  {
    valueKey: "stat1_value",
    labelKey: "stat1_label",
    subKey: "stat1_sub",
    valueClass: "text-blue-950",
  },
  {
    valueKey: "stat2_value",
    labelKey: "stat2_label",
    subKey: "stat2_sub",
    valueClass: "text-teal-700",
  },
  {
    valueKey: "stat3_value",
    labelKey: "stat3_label",
    subKey: "stat3_sub",
    valueClass: "text-amber-700",
  },
] satisfies ImpactMetricItem[];

export default function ImpactMetrics() {
  const { t } = useLang();
  const m = t.impact;

  return (
    <section id="impact" aria-label={m.label} className="py-10 md:py-14 bg-white border-y border-slate-200/70 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="sr-only">{m.label}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {IMPACT_METRICS.map(({ valueKey, labelKey, subKey, valueClass }, i) => (
            <Reveal
              key={valueKey}
              delay={i * 0.1}
              duration={0.45}
              margin="-80px"
              className="group rounded-3xl border border-slate-200 bg-slate-50/80 p-6 transition-all duration-300 hover:bg-white hover:shadow-premium"
            >
              <div className={`text-5xl md:text-6xl font-bold tracking-tight leading-none mb-4 ${valueClass}`}>
                {m[valueKey]}
              </div>
              <div className="text-base font-bold text-slate-950 mb-1">{m[labelKey]}</div>
              <div className="text-xs font-semibold text-slate-500 leading-relaxed">{m[subKey]}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
