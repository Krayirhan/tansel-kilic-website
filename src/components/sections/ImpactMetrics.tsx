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
    valueClass: "text-blue-600",
  },
  {
    valueKey: "stat2_value",
    labelKey: "stat2_label",
    subKey: "stat2_sub",
    valueClass: "text-violet-600",
  },
  {
    valueKey: "stat3_value",
    labelKey: "stat3_label",
    subKey: "stat3_sub",
    valueClass: "text-emerald-600",
  },
] satisfies ImpactMetricItem[];

export default function ImpactMetrics() {
  const { t } = useLang();
  const m = t.impact;

  return (
    <section id="impact" aria-label={m.label} className="py-16 md:py-20 bg-white border-t border-slate-100 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="sr-only">{m.label}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {IMPACT_METRICS.map(({ valueKey, labelKey, subKey, valueClass }, i) => (
            <Reveal
              key={valueKey}
              delay={i * 0.1}
              duration={0.45}
              margin="-80px"
              className="flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <span className={`text-5xl md:text-6xl font-extrabold tracking-tight leading-none mb-2 ${valueClass}`}>
                {m[valueKey]}
              </span>
              <span className="text-base font-bold text-slate-900 mb-1">{m[labelKey]}</span>
              <span className="text-xs font-medium text-slate-400">{m[subKey]}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
