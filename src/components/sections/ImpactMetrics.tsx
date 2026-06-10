"use client";
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

  return (
    <section id="impact" aria-label={m.label} className="bg-white px-6 pb-7 pt-1 md:pb-8">
      <div className="section-shell">
        <h2 className="sr-only">{m.label}</h2>
        <div className="grid grid-cols-1 gap-0 border-y border-stone-200 sm:grid-cols-3">
          {IMPACT_METRICS.map(({ valueKey, labelKey, subKey }, i) => (
            <Reveal
              key={valueKey}
              delay={Math.min(i * 0.06, 0.18)}
              duration={0.35}
              margin="-80px"
              className={`px-4 py-3 md:px-5 md:py-4 ${i > 0 ? "border-t border-stone-200 sm:border-l sm:border-t-0" : ""}`}
            >
              <div className="flex items-baseline gap-2">
                <div className="text-3xl font-semibold leading-none tracking-[-0.05em] text-slate-950 md:text-[2.35rem]">
                  {m[valueKey]}
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    {m[labelKey]}
                  </div>
                  <div className="mt-0.5 text-sm leading-5 text-slate-600">{m[subKey]}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
