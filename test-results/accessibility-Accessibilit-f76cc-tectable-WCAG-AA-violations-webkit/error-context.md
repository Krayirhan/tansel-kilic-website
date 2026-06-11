# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility Audits >> homepage should not have any automatically detectable WCAG AA violations
- Location: tests\e2e\accessibility.spec.ts:5:7

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -    1
+ Received  + 1213

- Array []
+ Array [
+   Object {
+     "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
+     "help": "Elements must meet minimum color contrast ratio thresholds",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright",
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f7f4ee",
+               "contrastRatio": 4.33,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#62748e",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.33 (foreground color: #62748e, background color: #f7f4ee, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"about\" class=\"bg-[var(--color-paper)] px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#about",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.33 (foreground color: #62748e, background color: #f7f4ee, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"mt-4 max-w-2xl text-base leading-relaxed text-slate-500\">İş hedeflerini mühendislik ölçeğiyle birleştiren, yapay zekâ çözümlerini deneysel aşamadan üretim sistemlerine taşıyan liderlik yaklaşımı.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#about > .section-shell > div:nth-child(1) > .mb-8.md\\:mb-9 > .leading-relaxed.mt-4.max-w-2xl",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"experience\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#experience",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>Oca 2026 — Devam ediyor</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".gap-x-4 > span:nth-child(1)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"experience\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#experience",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>5 ay</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".gap-x-4 > span:nth-child(2)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"experience\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#experience",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400\">Ara 2024 — Ara 2025 · 1 yıl 1 ay</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".py-4.md\\:py-5.first\\:pt-0:nth-child(1) > article > .md\\:flex-row.md\\:items-baseline.md\\:justify-between > .tracking-\\[0\\.18em\\].text-slate-400.text-\\[11px\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"experience\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#experience",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400\">Mar 2024 — Eyl 2024 · 7 ay</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".py-4.md\\:py-5.first\\:pt-0:nth-child(2) > article > .md\\:flex-row.md\\:items-baseline.md\\:justify-between > .tracking-\\[0\\.18em\\].text-slate-400.text-\\[11px\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"experience\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#experience",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400\">Nis 2023 — Şub 2024 · 11 ay</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".py-4.md\\:py-5.first\\:pt-0:nth-child(3) > article > .md\\:flex-row.md\\:items-baseline.md\\:justify-between > .tracking-\\[0\\.18em\\].text-slate-400.text-\\[11px\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"experience\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#experience",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400\">Şub 2022 — Şub 2023 · 1 yıl 1 ay · Londra, İngiltere</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".py-4.md\\:py-5.first\\:pt-0:nth-child(4) > article > .md\\:flex-row.md\\:items-baseline.md\\:justify-between > .tracking-\\[0\\.18em\\].text-slate-400.text-\\[11px\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"experience\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#experience",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400\">Tem 2021 — Şub 2022 · 8 ay</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".py-4.md\\:py-5.first\\:pt-0:nth-child(5) > article > .md\\:flex-row.md\\:items-baseline.md\\:justify-between > .tracking-\\[0\\.18em\\].text-slate-400.text-\\[11px\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"experience\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#experience",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"mb-4 text-[11px] font-bold uppercase tracking-[0.26em] text-slate-400 md:mb-5\">Önceki roller</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:mb-5",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"experience\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#experience",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs font-medium text-slate-400\">Şub 2020 — Tem 2021 · 1 yıl 6 ay</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:py-3\\.5.md\\:last\\:border-b.md\\:\\[\\&\\:nth-last-child\\(-n\\+2\\)\\]\\:border-b-0:nth-child(1) > .flex-col.gap-1\\.5.flex > .font-medium.text-xs.text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"experience\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#experience",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs font-medium text-slate-400\">Nis 2019 — Şub 2020 · 11 ay</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:py-3\\.5.md\\:last\\:border-b.md\\:\\[\\&\\:nth-last-child\\(-n\\+2\\)\\]\\:border-b-0:nth-child(2) > .flex-col.gap-1\\.5.flex > .font-medium.text-xs.text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"experience\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#experience",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs font-medium text-slate-400\">Eyl 2017 — Nis 2019 · 1 yıl 8 ay</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:py-3\\.5.md\\:last\\:border-b.md\\:\\[\\&\\:nth-last-child\\(-n\\+2\\)\\]\\:border-b-0:nth-child(3) > .flex-col.gap-1\\.5.flex > .font-medium.text-xs.text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"experience\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#experience",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs font-medium text-slate-400\">May 2015 — Eyl 2017 · 2 yıl 5 ay</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:py-3\\.5.md\\:last\\:border-b.md\\:\\[\\&\\:nth-last-child\\(-n\\+2\\)\\]\\:border-b-0:nth-child(4) > .flex-col.gap-1\\.5.flex > .font-medium.text-xs.text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"experience\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#experience",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs font-medium text-slate-400\">Tem 2014 — May 2015 · 11 ay</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:py-3\\.5.md\\:last\\:border-b.md\\:\\[\\&\\:nth-last-child\\(-n\\+2\\)\\]\\:border-b-0:nth-child(5) > .flex-col.gap-1\\.5.flex > .font-medium.text-xs.text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"experience\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#experience",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs font-medium text-slate-400\">Eyl 2011 — Tem 2014 · 2 yıl 11 ay</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:py-3\\.5.md\\:last\\:border-b.md\\:\\[\\&\\:nth-last-child\\(-n\\+2\\)\\]\\:border-b-0:nth-child(6) > .flex-col.gap-1\\.5.flex > .font-medium.text-xs.text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"experience\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#experience",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs font-medium text-slate-400\">Mar 2011 — Eyl 2011 · 7 ay</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:py-3\\.5.md\\:last\\:border-b.md\\:\\[\\&\\:nth-last-child\\(-n\\+2\\)\\]\\:border-b-0:nth-child(7) > .flex-col.gap-1\\.5.flex > .font-medium.text-xs.text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"experience\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#experience",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs font-medium text-slate-400\">Oca 2009 — Mar 2011 · 2 yıl 3 ay</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:py-3\\.5.md\\:last\\:border-b.md\\:\\[\\&\\:nth-last-child\\(-n\\+2\\)\\]\\:border-b-0:nth-child(8) > .flex-col.gap-1\\.5.flex > .font-medium.text-xs.text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"experience\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#experience",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs font-medium text-slate-400\">Oca 2003 — Kas 2008 · 5 yıl 11 ay</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:py-3\\.5.md\\:last\\:border-b.md\\:\\[\\&\\:nth-last-child\\(-n\\+2\\)\\]\\:border-b-0:nth-child(9) > .flex-col.gap-1\\.5.flex > .font-medium.text-xs.text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f7f4ee",
+               "contrastRatio": 4.33,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#62748e",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.33 (foreground color: #62748e, background color: #f7f4ee, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"expertise\" class=\"bg-[var(--color-paper)] px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#expertise",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.33 (foreground color: #62748e, background color: #f7f4ee, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"mt-4 max-w-2xl text-base leading-relaxed text-slate-500\">Fintech altyapıları, bulut tabanlı mikroservisler ve yapay zekâ entegrasyonlarına yön veren teknik ve yönetsel yetkinlikler.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#expertise > .section-shell > div:nth-child(1) > .mb-8.md\\:mb-9 > .leading-relaxed.mt-4.max-w-2xl",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f7f4ee",
+               "contrastRatio": 2.39,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.39 (foreground color: #90a1b9, background color: #f7f4ee, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"expertise\" class=\"bg-[var(--color-paper)] px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#expertise",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.39 (foreground color: #90a1b9, background color: #f7f4ee, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"pt-0.5 text-[11px] font-bold uppercase tracking-[0.26em] text-slate-400\">Temel Alanlar</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".py-4.md\\:py-5.first\\:pt-0:nth-child(1) > .lg\\:grid-cols-\\[0\\.18fr_0\\.82fr\\].lg\\:gap-8.gap-3 > .pt-0\\.5.tracking-\\[0\\.26em\\].text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f7f4ee",
+               "contrastRatio": 2.39,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.39 (foreground color: #90a1b9, background color: #f7f4ee, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"expertise\" class=\"bg-[var(--color-paper)] px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#expertise",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.39 (foreground color: #90a1b9, background color: #f7f4ee, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"pt-0.5 text-[11px] font-bold uppercase tracking-[0.26em] text-slate-400\">Sistemler</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".py-4.md\\:py-5.first\\:pt-0:nth-child(2) > .lg\\:grid-cols-\\[0\\.18fr_0\\.82fr\\].lg\\:gap-8.gap-3 > .pt-0\\.5.tracking-\\[0\\.26em\\].text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f7f4ee",
+               "contrastRatio": 2.39,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.39 (foreground color: #90a1b9, background color: #f7f4ee, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"expertise\" class=\"bg-[var(--color-paper)] px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#expertise",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.39 (foreground color: #90a1b9, background color: #f7f4ee, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"pt-0.5 text-[11px] font-bold uppercase tracking-[0.26em] text-slate-400\">Liderlik</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".py-4.md\\:py-5.first\\:pt-0:nth-child(3) > .lg\\:grid-cols-\\[0\\.18fr_0\\.82fr\\].lg\\:gap-8.gap-3 > .pt-0\\.5.tracking-\\[0\\.26em\\].text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"responsible-ai\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#responsible-ai",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-bold uppercase tracking-[0.26em] text-slate-400\">Çalışma prensipleri</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".mb-4 > .tracking-\\[0\\.26em\\].text-slate-400.text-\\[11px\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"responsible-ai\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#responsible-ai",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400\">Ozan · 2024–2025</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".pb-4.md\\:pb-6.last\\:pb-0:nth-child(1) > .mb-2.tracking-\\[0\\.18em\\].text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"responsible-ai\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#responsible-ai",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400\">Ozan · 2024–2025</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".pb-4.md\\:pb-6.last\\:pb-0:nth-child(2) > .mb-2.tracking-\\[0\\.18em\\].text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f7f4ee",
+               "contrastRatio": 4.33,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#62748e",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.33 (foreground color: #62748e, background color: #f7f4ee, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"education\" class=\"bg-[var(--color-paper)] px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#education",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.33 (foreground color: #62748e, background color: #f7f4ee, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"mt-4 max-w-2xl text-base leading-relaxed text-slate-500\">İş analitiği, yönetim bilişim sistemleri ve yazılım temellerini birleştiren akademik altyapı.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#education > .section-shell > div:nth-child(1) > .mb-8.md\\:mb-9 > .leading-relaxed.mt-4.max-w-2xl",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f7f4ee",
+               "contrastRatio": 2.39,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.39 (foreground color: #90a1b9, background color: #f7f4ee, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"education\" class=\"bg-[var(--color-paper)] px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#education",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.39 (foreground color: #90a1b9, background color: #f7f4ee, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 md:pt-1\">Ağu 2024 — Devam ediyor</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".py-5.first\\:pt-0.last\\:pb-0:nth-child(1) > .md\\:grid-cols-\\[minmax\\(0\\,1fr\\)_auto\\].md\\:gap-6.gap-3 > .md\\:pt-1.tracking-\\[0\\.18em\\].text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f7f4ee",
+               "contrastRatio": 2.39,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.39 (foreground color: #90a1b9, background color: #f7f4ee, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"education\" class=\"bg-[var(--color-paper)] px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#education",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.39 (foreground color: #90a1b9, background color: #f7f4ee, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 md:pt-1\">2005 — 2009</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".py-5.first\\:pt-0.last\\:pb-0:nth-child(2) > .md\\:grid-cols-\\[minmax\\(0\\,1fr\\)_auto\\].md\\:gap-6.gap-3 > .md\\:pt-1.tracking-\\[0\\.18em\\].text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f7f4ee",
+               "contrastRatio": 2.39,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.39 (foreground color: #90a1b9, background color: #f7f4ee, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"education\" class=\"bg-[var(--color-paper)] px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#education",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.39 (foreground color: #90a1b9, background color: #f7f4ee, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 md:pt-1\">1999 — 2001</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".py-5.first\\:pt-0.last\\:pb-0:nth-child(3) > .md\\:grid-cols-\\[minmax\\(0\\,1fr\\)_auto\\].md\\:gap-6.gap-3 > .md\\:pt-1.tracking-\\[0\\.18em\\].text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"contact\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#contact",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400\">tanselkilic</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".group.hover\\:text-slate-950[target=\"_blank\"] > .grid-cols-\\[auto_minmax\\(0\\,1fr\\)_auto\\].py-3\\.5.md\\:py-4 > .min-w-0 > .tracking-\\[0\\.14em\\].mt-1.text-xs",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"contact\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#contact",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400\">Mesaj gönder</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".group.hover\\:text-slate-950[href=\"mailto:tanselkilic@gmail.com\"] > .grid-cols-\\[auto_minmax\\(0\\,1fr\\)_auto\\].py-3\\.5.md\\:py-4 > .min-w-0 > .tracking-\\[0\\.14em\\].mt-1.text-xs",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"contact\" class=\"bg-white px-6 py-14 md:py-20\">",
+                 "target": Array [
+                   "#contact",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400\">Uzaktan çalışmaya açık</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div > .grid-cols-\\[auto_minmax\\(0\\,1fr\\)_auto\\].py-3\\.5.md\\:py-4 > .min-w-0 > .tracking-\\[0\\.14em\\].mt-1.text-xs",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f7f4ee",
+               "contrastRatio": 4.33,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#62748e",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.33 (foreground color: #62748e, background color: #f7f4ee, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<footer class=\"border-t border-stone-200 bg-[var(--color-paper)] px-6 py-5 text-slate-900\">",
+                 "target": Array [
+                   "footer",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.33 (foreground color: #62748e, background color: #f7f4ee, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"mt-1 text-[10px] uppercase tracking-[0.08em] text-slate-500\">© 2026 Tansel KILIÇ · Teknoloji Lideri &amp; AI Yöneticisi</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".tracking-\\[0\\.08em\\].text-\\[10px\\].mt-1",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.color",
+       "wcag2aa",
+       "wcag143",
+       "TTv5",
+       "TT13.c",
+       "EN-301-549",
+       "EN-9.1.4.3",
+       "ACT",
+       "RGAAv4",
+       "RGAA-3.2.1",
+     ],
+   },
+   Object {
+     "description": "Ensure the complementary landmark or aside is at top level",
+     "help": "Aside should not be contained in another landmark",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/landmark-complementary-is-top-level?application=playwright",
+     "id": "landmark-complementary-is-top-level",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "role": null,
+             },
+             "id": "landmark-is-top-level",
+             "impact": "moderate",
+             "message": "The null landmark is contained in another landmark.",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   The null landmark is contained in another landmark.",
+         "html": "<aside class=\"hidden border-l border-stone-200 pl-5 pt-1 lg:block\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "aside",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.semantics",
+       "best-practice",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "Tansel KILIÇ anasayfa" [ref=e4]:
        - /url: /
        - text: Tansel KILIÇ
      - navigation [ref=e5]:
        - link "Hakkımda" [ref=e6]:
          - /url: "#about"
        - link "Deneyim" [ref=e7]:
          - /url: "#experience"
        - link "Uzmanlık" [ref=e8]:
          - /url: "#expertise"
        - link "Eğitim" [ref=e9]:
          - /url: "#education"
        - link "Sorumlu AI" [ref=e10]:
          - /url: "#responsible-ai"
        - link "İletişim" [ref=e11]:
          - /url: "#contact"
      - group "Dil" [ref=e13]:
        - button "Dili İngilizce yap" [ref=e14] [cursor=pointer]: en
        - button "Dili Türkçe yap" [ref=e15] [cursor=pointer]: tr
  - main [ref=e16]:
    - generic [ref=e19]:
      - generic [ref=e20]:
        - heading "Tansel KILIÇ" [level=1] [ref=e21]
        - generic [ref=e22]: AI, fintech ve platform ekipleri için teknoloji liderliği.
        - paragraph [ref=e23]: Fintech, e-ticaret ve dijital ekosistemlerde 20+ yıldır mühendislik ekipleri, cloud-native platformlar ve üretime alınan AI girişimleri yönetiyorum.
        - generic [ref=e24]:
          - link "İletişime geç" [ref=e25]:
            - /url: "#contact"
            - text: İletişime geç
            - img [ref=e26]
          - link "Deneyimi gör" [ref=e29]:
            - /url: "#experience"
        - generic [ref=e30]:
          - link "LinkedIn profili" [ref=e31]:
            - /url: https://www.linkedin.com/in/tanselkilic/
            - img [ref=e33]
            - text: LinkedIn
          - generic [ref=e36]:
            - img [ref=e37]
            - text: İstanbul, Türkiye · Hibrit
          - generic [ref=e40]:
            - img [ref=e41]
            - text: Türkçe · İngilizce
      - complementary [ref=e44]:
        - generic [ref=e45]: Stratejiden uygulamaya
        - generic [ref=e46]:
          - generic [ref=e48]: AI dönüşümü
          - generic [ref=e50]: Fintech platformları
          - generic [ref=e52]: Mühendislik ölçeği
    - region "Etki" [ref=e53]:
      - generic [ref=e54]:
        - heading "Etki" [level=2] [ref=e55]
        - generic [ref=e56]:
          - generic [ref=e58]:
            - generic [ref=e59]: 20+
            - generic [ref=e60]:
              - generic [ref=e61]: Yıl deneyim
              - generic [ref=e62]: 2003'ten bu yana
          - generic [ref=e64]:
            - generic [ref=e65]: 50+
            - generic [ref=e66]:
              - generic [ref=e67]: Mühendis yönetimi
              - generic [ref=e68]: Dağıtık, çok disiplinli ekipler
          - generic [ref=e70]:
            - generic [ref=e71]: 10+
            - generic [ref=e72]:
              - generic [ref=e73]: Şirkette liderlik
              - generic [ref=e74]: CTO · Direktör · Danışman
    - generic [ref=e76]:
      - generic [ref=e78]:
        - heading "Stratejik Teknoloji ve Mühendislik Yönetimi" [level=2] [ref=e79]
        - paragraph [ref=e80]: İş hedeflerini mühendislik ölçeğiyle birleştiren, yapay zekâ çözümlerini deneysel aşamadan üretim sistemlerine taşıyan liderlik yaklaşımı.
      - generic [ref=e81]:
        - generic [ref=e82]:
          - generic [ref=e84]: Stratejiyi çalışan sistemlere dönüştürmek.
          - generic [ref=e86]:
            - paragraph [ref=e87]: 20+ yıldır fintech, e-ticaret ve dijital ekosistemlerde büyük ölçekli platformlar ve mühendislik organizasyonları yönetiyorum. 50+'lik dağıtık ekiplerle, milyonlarca kullanıcıyı destekleyen cloud-native mikroservis mimarileri kurdum.
            - paragraph [ref=e88]: Son yıllarda AI ve LLM girişimlerini deney değil, karar almayı güçlendiren ve operasyonu hızlandıran üretim sistemleri olarak hayata geçirdim.
        - generic [ref=e90]:
          - generic [ref=e92]: İş öncelikli AI ve platform kararları
          - generic [ref=e94]: Dağıtık ekiplerde mühendislik liderliği
          - generic [ref=e96]: Ölçek için tasarlanmış cloud-native sistemler
          - generic [ref=e98]: Keşiften devreye almaya pragmatik teslimat
    - generic [ref=e100]:
      - generic [ref=e102]:
        - heading "Kariyer Yolculuğu & Liderlik Kronolojisi" [level=2] [ref=e103]
        - paragraph [ref=e104]: Fintech, e-ticaret ve platform odaklı liderlik rolleri; unvanlardan ziyade yaratılan etki ve üstlenilen operasyonel sorumluluklar.
      - generic [ref=e105]:
        - article [ref=e107]:
          - generic [ref=e108]: Self-Employed — İstanbul
          - heading "AI & Dijital Dönüşüm Yöneticisi · Ex-CTO · Fractional CTO" [level=3] [ref=e109]
          - generic [ref=e110]:
            - generic [ref=e111]: Oca 2026 — Devam ediyor
            - generic [ref=e112]: 5 ay
          - paragraph [ref=e113]: Şirketlere ölçülebilir iş etkisi odaklı AI benimseme stratejisi danışmanlığı. Güçlü doğruluk standartları ve insan denetim modelleriyle AI-native iş akışları tasarımı. Kurumsal güvenlikte blockchain ve dijital varlık saklama projeleri — HSM (Thales, SafeNet), mTLS ve PKI.
          - generic [ref=e114]:
            - generic [ref=e115]: AI Stratejisi
            - generic [ref=e116]: LLM
            - generic [ref=e117]: Blockchain
            - generic [ref=e118]: HSM
        - generic [ref=e119]:
          - article [ref=e121]:
            - generic [ref=e122]:
              - heading "Chief Technology Officer" [level=3] [ref=e123]
              - generic [ref=e124]: Ara 2024 — Ara 2025 · 1 yıl 1 ay
            - generic [ref=e125]: Ozan — İstanbul (Fintech)
            - paragraph [ref=e126]: Uçtan uca teknoloji operasyonları ve strateji yönetimi. BE, FE, QA, DevOps ekiplerini yönetti. POS, Sanal POS ve dijital cüzdan ürünlerini geliştirdi. Yüksek hacimli finansal belgeler için LLM tabanlı Belge Zekası Platformu ve çok alanlı kullanım için tasarlanmış AI destekli dolandırıcılık tespit sistemi FraudInsight (NLP & LLM) kurdu.
            - generic [ref=e127]:
              - generic [ref=e128]: Fintech
              - generic [ref=e129]: LLM
              - generic [ref=e130]: Dolandırıcılık Tespiti
          - article [ref=e132]:
            - generic [ref=e133]:
              - heading "Chief Technology Officer" [level=3] [ref=e134]
              - generic [ref=e135]: Mar 2024 — Eyl 2024 · 7 ay
            - generic [ref=e136]: Saran Group — İstanbul
            - paragraph [ref=e137]: "Saran Group portföyünde dijital dönüşüm liderliği: Tuttur.com, Sonduzluk.com (TJK), Ajansspor.com, SDS, RadyoSpor, RadyoTrafik. Çok ekipli mühendislik yönetimi ve üçüncü taraf tedarikçi ilişkileri."
            - generic [ref=e138]:
              - generic [ref=e139]: Dijital Dönüşüm
              - generic [ref=e140]: Medya Teknolojisi
              - generic [ref=e141]: Bahis Sistemleri
          - article [ref=e143]:
            - generic [ref=e144]:
              - heading "Chief Technology Officer" [level=3] [ref=e145]
              - generic [ref=e146]: Nis 2023 — Şub 2024 · 11 ay
            - generic [ref=e147]: Huudle.io — Türkiye
            - paragraph [ref=e148]: Kullanıcı deneyimi odaklı yenilikçi toplantı platformu Huudle'ın geliştirilmesini yönetti. Mühendis işe alımı, ekip yönetimi, sistem mimarisi ve veri gizliliği standartlarına uyum.
            - generic [ref=e149]:
              - generic [ref=e150]: Startup
              - generic [ref=e151]: GCP
              - generic [ref=e152]: Sistem Mimarisi
          - article [ref=e154]:
            - generic [ref=e155]:
              - heading "Yazılım Mühendisliği Direktörü" [level=3] [ref=e156]
              - generic [ref=e157]: Şub 2022 — Şub 2023 · 1 yıl 1 ay · Londra, İngiltere
            - generic [ref=e158]: Pisano — London
            - paragraph [ref=e159]: IT yol haritası, bütçesi ve strateji sorumluluğu. Geliştirme, DevOps, QA, Entegrasyon, PO ve BA ekiplerini yönetti. Mühendislik ekibini 1 yılda 3 katına çıkardı. Microsoft, Salesforce ve Azure Marketplace ortaklıkları geliştirdi.
            - generic [ref=e160]:
              - generic [ref=e161]: Azure
              - generic [ref=e162]: Salesforce
              - generic [ref=e163]: Ekip Büyütme
          - article [ref=e165]:
            - generic [ref=e166]:
              - heading "Yazılım Mühendisliği Direktörü" [level=3] [ref=e167]
              - generic [ref=e168]: Tem 2021 — Şub 2022 · 8 ay
            - generic [ref=e169]: Demirören Teknoloji / Azerloterya — İstanbul
            - paragraph [ref=e170]: Azerbaycan Spor Bahis ve Sanal Spor platformları ve mobil uygulamaları. Azure üzerinde 100+ mikroservis. 30-35 kişilik mühendislik ekibi yönetimi (Scrum/Kanban). Azure DevOps ve üçüncü taraf entegrasyonlar.
            - generic [ref=e171]:
              - generic [ref=e172]: Azure
              - generic [ref=e173]: Mikroservisler
              - generic [ref=e174]: DevOps
      - generic [ref=e175]:
        - heading "Önceki roller" [level=3] [ref=e176]
        - generic [ref=e177]:
          - generic [ref=e179]:
            - generic [ref=e180]: E-Ticaret Kıdemli Yöneticisi
            - generic [ref=e181]: Odeon Software & Technology / OTI Holding — İstanbul
            - generic [ref=e182]: Şub 2020 — Tem 2021 · 1 yıl 6 ay
          - generic [ref=e184]:
            - generic [ref=e185]: E-Ticaret Yazılım Geliştirme Müdürü
            - generic [ref=e186]: LC Waikiki — İstanbul
            - generic [ref=e187]: Nis 2019 — Şub 2020 · 11 ay
          - generic [ref=e189]:
            - generic [ref=e190]: Proje ve Yazılım Geliştirme Müdürü
            - generic [ref=e191]: Demirören Gazetecilik — İstanbul
            - generic [ref=e192]: Eyl 2017 — Nis 2019 · 1 yıl 8 ay
          - generic [ref=e194]:
            - generic [ref=e195]: Yazılım Geliştirme Müdürü
            - generic [ref=e196]: Hürriyet — İstanbul
            - generic [ref=e197]: May 2015 — Eyl 2017 · 2 yıl 5 ay
          - generic [ref=e199]:
            - generic [ref=e200]: Yazılım Geliştirme Müdür Yardımcısı
            - generic [ref=e201]: Hürriyet — İstanbul
            - generic [ref=e202]: Tem 2014 — May 2015 · 11 ay
          - generic [ref=e204]:
            - generic [ref=e205]: Baş Yazılım Mühendisi
            - generic [ref=e206]: Hürriyet — İstanbul
            - generic [ref=e207]: Eyl 2011 — Tem 2014 · 2 yıl 11 ay
          - generic [ref=e209]:
            - generic [ref=e210]: Kıdemli Yazılım Geliştirici
            - generic [ref=e211]: SFS Şirketler Grubu — İstanbul
            - generic [ref=e212]: Mar 2011 — Eyl 2011 · 7 ay
          - generic [ref=e214]:
            - generic [ref=e215]: Yazılım Geliştirici
            - generic [ref=e216]: BİLİN Yazılım — İstanbul
            - generic [ref=e217]: Oca 2009 — Mar 2011 · 2 yıl 3 ay
          - generic [ref=e219]:
            - generic [ref=e220]: Yazılım Geliştirici
            - generic [ref=e221]: NETİSİS Bilgi Teknolojileri — İstanbul
            - generic [ref=e222]: Oca 2003 — Kas 2008 · 5 yıl 11 ay
    - generic [ref=e224]:
      - generic [ref=e226]:
        - heading "Temel Uzmanlık Alanları" [level=2] [ref=e227]
        - paragraph [ref=e228]: Fintech altyapıları, bulut tabanlı mikroservisler ve yapay zekâ entegrasyonlarına yön veren teknik ve yönetsel yetkinlikler.
      - generic [ref=e230]:
        - generic [ref=e232]:
          - generic [ref=e233]: Temel Alanlar
          - generic [ref=e234]:
            - article [ref=e235]:
              - heading "AI & LLM Dönüşümü" [level=3] [ref=e236]
              - paragraph [ref=e237]: Belge zekası, dolandırıcılık tespiti ve karar otomasyonu için üretim kalitesinde LLM sistemleri.
            - article [ref=e238]:
              - heading "Fintech & Ödeme Sistemleri" [level=3] [ref=e239]
              - paragraph [ref=e240]: POS, Sanal POS, dijital cüzdan, AML ve finansal uyumluluk tarafında güçlü uygulama deneyimi.
        - generic [ref=e242]:
          - generic [ref=e243]: Sistemler
          - generic [ref=e244]:
            - article [ref=e245]:
              - heading "Cloud-Native Mimari" [level=3] [ref=e246]
              - paragraph [ref=e247]: Azure ve GCP üzerinde 100+ servislik, yüksek trafikli mikroservis mimarileri.
            - article [ref=e248]:
              - heading "Güvenlik & Kriptografi" [level=3] [ref=e249]
              - paragraph [ref=e250]: HSM entegrasyonları, mTLS, PKI ve kurumsal güvenlik mimarisi deneyimi.
        - generic [ref=e252]:
          - generic [ref=e253]: Liderlik
          - generic [ref=e254]:
            - article [ref=e255]:
              - heading "Mühendislik Liderliği" [level=3] [ref=e256]
              - paragraph [ref=e257]: 3x ekip büyütme, 50+ mühendis yönetimi ve ölçekli Agile operasyonu.
            - article [ref=e258]:
              - heading "Dijital Dönüşüm" [level=3] [ref=e259]
              - paragraph [ref=e260]: Eski sistemleri modern ve ölçeklenebilir dijital platformlara dönüştürme deneyimi.
    - generic [ref=e262]:
      - generic [ref=e264]:
        - heading "Sorumlu ve Güvenilir Yapay Zekâ Yaklaşımı" [level=2] [ref=e265]
        - paragraph [ref=e266]: Üretim seviyesindeki yapay zekâ uygulamalarında doğruluk, veri gizliliği ve insan denetimini esas alan mimari prensipler.
      - generic [ref=e267]:
        - generic [ref=e268]:
          - generic [ref=e270]: Çalışma prensipleri
          - generic [ref=e271]:
            - generic [ref=e272]:
              - heading "Üretim öncelikli" [level=3] [ref=e273]
              - paragraph [ref=e274]: Doğrulanmış iş etkisi olmadan devreye alma yapılmaz. Her sistem gerçek operasyon yükü için tasarlanır.
            - generic [ref=e275]:
              - heading "İnsan denetimi" [level=3] [ref=e276]
              - paragraph [ref=e277]: Kritik kararlarda insan denetimi varsayılandır. Otomasyon, güven arttıkça kademeli genişler.
            - generic [ref=e278]:
              - heading "Gizlilik tasarımı" [level=3] [ref=e279]
              - paragraph [ref=e280]: Finansal ve hassas veriler için on-premise mimari kurulur. Veri sınır dışına çıkmaz; uyumluluk mimaride çözülür.
        - generic [ref=e281]:
          - generic [ref=e282]:
            - generic [ref=e283]: Ozan · 2024–2025
            - heading "Belge Zekası Platformu" [level=3] [ref=e284]
            - paragraph [ref=e285]: Yüksek hacimli finansal belgeleri analiz eden yerel LLM tabanlı sistem. On-premise mimariyle veri gizliliği korundu, manuel inceleme süresi ve operasyonel yük azaltıldı.
          - generic [ref=e286]:
            - generic [ref=e287]: Ozan · 2024–2025
            - heading "FraudInsight — AI Tabanlı Dolandırıcılık Tespiti" [level=3] [ref=e288]
            - paragraph [ref=e289]: İşlem verileri ve metinsel sinyalleri NLP ve LLM ile analiz eden fraud tespit sistemi. Kural tabanlı yaklaşımın ötesinde şüpheli desenleri gerçek zamanlı tespit eder; fintech, e-ticaret ve telekom için ölçeklenebilir yapıdadır.
    - generic [ref=e291]:
      - generic [ref=e293]:
        - heading "Akademik Geçmiş & Sürekli Gelişim" [level=2] [ref=e294]
        - paragraph [ref=e295]: İş analitiği, yönetim bilişim sistemleri ve yazılım temellerini birleştiren akademik altyapı.
      - generic [ref=e296]:
        - article [ref=e298]:
          - generic [ref=e299]:
            - img [ref=e301]
            - generic [ref=e304]:
              - heading "İstanbul Teknik Üniversitesi" [level=3] [ref=e305]
              - generic [ref=e306]: Büyük Veri & İş Analitiği, YL
          - generic [ref=e307]: Ağu 2024 — Devam ediyor
        - article [ref=e309]:
          - generic [ref=e310]:
            - img [ref=e312]
            - generic [ref=e315]:
              - heading "Ahmet Yesevi Üniversitesi" [level=3] [ref=e316]
              - generic [ref=e317]: Yönetim Bilişim Sistemleri
          - generic [ref=e318]: 2005 — 2009
        - article [ref=e320]:
          - generic [ref=e321]:
            - img [ref=e323]
            - generic [ref=e326]:
              - heading "Ondokuz Mayıs Üniversitesi" [level=3] [ref=e327]
              - generic [ref=e328]: Bilgisayar Programcılığı, Ön Lisans
          - generic [ref=e329]: 1999 — 2001
    - generic [ref=e331]:
      - generic [ref=e332]:
        - generic [ref=e334]:
          - heading "İletişim & İş Birliği" [level=2] [ref=e335]
          - paragraph [ref=e336]: AI dönüşümü, fintech platformları veya yüksek ölçekli organizasyonel yapılanmalar için doğrudan temas kurabilirsiniz.
        - generic [ref=e338]: "Yanıt süresi: 24 saat içinde"
      - generic [ref=e341]:
        - link "LinkedIn tanselkilic" [ref=e343]:
          - /url: https://www.linkedin.com/in/tanselkilic/
          - generic [ref=e344]:
            - img [ref=e346]
            - generic [ref=e348]:
              - generic [ref=e349]: LinkedIn
              - generic [ref=e350]: tanselkilic
            - img [ref=e351]
        - link "E-posta Mesaj gönder" [ref=e355]:
          - /url: mailto:tanselkilic@gmail.com
          - generic [ref=e356]:
            - img [ref=e358]
            - generic [ref=e361]:
              - generic [ref=e362]: E-posta
              - generic [ref=e363]: Mesaj gönder
            - img [ref=e364]
        - generic [ref=e369]:
          - img [ref=e371]
          - generic [ref=e374]:
            - generic [ref=e375]: İstanbul, Türkiye
            - generic [ref=e376]: Uzaktan çalışmaya açık
  - contentinfo [ref=e377]:
    - generic [ref=e378]:
      - generic [ref=e379]:
        - generic [ref=e380]: Tansel KILIÇ
        - generic [ref=e381]: © 2026 Tansel KILIÇ · Teknoloji Lideri & AI Yöneticisi
      - generic [ref=e382]:
        - link "LinkedIn profili" [ref=e383]:
          - /url: https://www.linkedin.com/in/tanselkilic/
          - img [ref=e384]
        - link "E-posta adresi" [ref=e386]:
          - /url: mailto:tanselkilic@gmail.com
          - img [ref=e387]
        - button "Yukarı Çık" [ref=e390] [cursor=pointer]:
          - img [ref=e391]
  - button "Open Next.js Dev Tools" [ref=e398] [cursor=pointer]:
    - img [ref=e399]
  - alert [ref=e404]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import AxeBuilder from "@axe-core/playwright";
  3  | 
  4  | test.describe("Accessibility Audits", () => {
  5  |   test("homepage should not have any automatically detectable WCAG AA violations", async ({ page }) => {
  6  |     await page.goto("/");
  7  |     await page.waitForTimeout(500);
  8  | 
  9  |     const accessibilityScanResults = await new AxeBuilder({ page })
  10 |       .withTags(["wcag2a", "wcag2aa", "best-practice"])
  11 |       .analyze();
  12 | 
> 13 |     expect(accessibilityScanResults.violations).toEqual([]);
     |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
  14 |   });
  15 | 
  16 |   test("homepage in English should not have accessibility violations", async ({ page }) => {
  17 |     await page.goto("/");
  18 |     const btnEn = page.locator('button[aria-label="Dili İngilizce yap"], button[aria-label="Switch language to English"]');
  19 |     await btnEn.click();
  20 |     await page.waitForTimeout(500);
  21 | 
  22 |     const accessibilityScanResults = await new AxeBuilder({ page })
  23 |       .withTags(["wcag2a", "wcag2aa"])
  24 |       .analyze();
  25 | 
  26 |     expect(accessibilityScanResults.violations).toEqual([]);
  27 |   });
  28 | });
  29 | 
```