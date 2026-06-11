"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";
import type { Messages } from "@/lib/i18n";

type ImpactCopyKey = keyof Messages["impact"];

type ImpactMetricItem = {
  valueKey: ImpactCopyKey;
  labelKey: ImpactCopyKey;
  subKey: ImpactCopyKey;
};

const IMPACT_METRICS = [
  { valueKey: "stat1_value", labelKey: "stat1_label", subKey: "stat1_sub" },
  { valueKey: "stat2_value", labelKey: "stat2_label", subKey: "stat2_sub" },
  { valueKey: "stat3_value", labelKey: "stat3_label", subKey: "stat3_sub" },
] satisfies ImpactMetricItem[];

export default function ImpactMetrics() {
  const { t } = useLang();
  const m = t.impact;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section
        id="impact"
        className="bg-white px-6 py-6 md:py-7 min-h-[80px]"
      />
    );
  }


  return (
    <section id="impact" aria-label={m.label} className="bg-white px-6 py-6 md:py-7">
      <div className="section-shell">
        <h2 className="sr-only">{m.label}</h2>
        <div className="grid grid-cols-1 gap-0 border-y border-stone-200 sm:grid-cols-3">
          {IMPACT_METRICS.map(({ valueKey, labelKey, subKey }, i) => (
            <Reveal
              key={valueKey}
              delay={Math.min(i * 0.06, 0.18)}
              duration={0.35}
              margin="-80px"
              className={`px-4 py-3.5 md:px-5 md:py-4 ${i > 0 ? "border-t border-stone-200 sm:border-l sm:border-t-0" : ""}`}
            >
              <div className="flex items-start gap-2.5">
                <div className="min-w-[3.35rem] text-3xl font-semibold leading-none tracking-[-0.05em] text-slate-950 md:min-w-[3.85rem] md:text-[2.35rem]">
                  {m[valueKey]}
                </div>
                <div className="min-w-0 pt-0.5">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    {m[labelKey]}
                  </div>
                  <div className="mt-1 text-sm leading-5 text-slate-600">{m[subKey]}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
