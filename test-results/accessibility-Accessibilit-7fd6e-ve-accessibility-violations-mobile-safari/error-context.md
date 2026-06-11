# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility Audits >> homepage in English should not have accessibility violations
- Location: tests\e2e\accessibility.spec.ts:16:7

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -    1
+ Received  + 1178

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
+         "html": "<p class=\"mt-4 max-w-2xl text-base leading-relaxed text-slate-500\">Bridging business vision with engineering scale to transform AI initiatives into robust production systems.</p>",
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
+         "html": "<span>Jan 2026 — Present</span>",
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
+         "html": "<span>5 months</span>",
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
+         "html": "<div class=\"text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400\">Dec 2024 — Dec 2025 · 1 year 1 month</div>",
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
+         "html": "<div class=\"text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400\">Mar 2024 — Sep 2024 · 7 months</div>",
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
+         "html": "<div class=\"text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400\">Apr 2023 — Feb 2024 · 11 months</div>",
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
+         "html": "<div class=\"text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400\">Feb 2022 — Feb 2023 · 1 year 1 month · London, UK</div>",
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
+         "html": "<div class=\"text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400\">Jul 2021 — Feb 2022 · 8 months</div>",
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
+         "html": "<h3 class=\"mb-4 text-[11px] font-bold uppercase tracking-[0.26em] text-slate-400 md:mb-5\">Earlier roles</h3>",
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
+         "html": "<span class=\"text-xs font-medium text-slate-400\">Feb 2020 — Jul 2021 · 1 year 6 months</span>",
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
+         "html": "<span class=\"text-xs font-medium text-slate-400\">Apr 2019 — Feb 2020 · 11 months</span>",
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
+         "html": "<span class=\"text-xs font-medium text-slate-400\">Sep 2017 — Apr 2019 · 1 year 8 months</span>",
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
+         "html": "<span class=\"text-xs font-medium text-slate-400\">May 2015 — Sep 2017 · 2 years 5 months</span>",
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
+         "html": "<span class=\"text-xs font-medium text-slate-400\">Jul 2014 — May 2015 · 11 months</span>",
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
+         "html": "<span class=\"text-xs font-medium text-slate-400\">Sep 2011 — Jul 2014 · 2 years 11 months</span>",
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
+         "html": "<span class=\"text-xs font-medium text-slate-400\">Mar 2011 — Sep 2011 · 7 months</span>",
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
+         "html": "<span class=\"text-xs font-medium text-slate-400\">Jan 2009 — Mar 2011 · 2 years 3 months</span>",
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
+         "html": "<span class=\"text-xs font-medium text-slate-400\">Jan 2003 — Nov 2008 · 5 years 11 months</span>",
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
+         "html": "<p class=\"mt-4 max-w-2xl text-base leading-relaxed text-slate-500\">Strategic focus areas spanning AI integration, cloud-native platforms, regulated fintech ecosystems, and engineering management.</p>",
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
+         "html": "<div class=\"pt-0.5 text-[11px] font-bold uppercase tracking-[0.26em] text-slate-400\">Core</div>",
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
+         "html": "<div class=\"pt-0.5 text-[11px] font-bold uppercase tracking-[0.26em] text-slate-400\">Systems</div>",
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
+         "html": "<div class=\"pt-0.5 text-[11px] font-bold uppercase tracking-[0.26em] text-slate-400\">Leadership</div>",
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
+         "html": "<div class=\"text-[11px] font-bold uppercase tracking-[0.26em] text-slate-400\">Operating principles</div>",
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
+         "html": "<p class=\"mt-4 max-w-2xl text-base leading-relaxed text-slate-500\">An academic foundation combining big data analytics, information systems, and core computer science.</p>",
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
+         "html": "<div class=\"text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 md:pt-1\">Aug 2024 — Ongoing</div>",
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
+         "html": "<div class=\"mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400\">Send a message</div>",
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
+         "html": "<div class=\"mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400\">Open to remote</div>",
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
+         "html": "<div class=\"mt-1 text-[10px] uppercase tracking-[0.08em] text-slate-500\">© 2026 Tansel KILIÇ · Technology Leader &amp; AI Executive</div>",
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
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "Tansel KILIÇ homepage" [ref=e4]:
        - /url: /
        - text: Tansel KILIÇ
      - generic [ref=e5]:
        - group "Language" [ref=e6]:
          - button "Switch language to English" [ref=e7] [cursor=pointer]: en
          - button "Switch language to Turkish" [ref=e8] [cursor=pointer]: tr
        - button "Open or close menu" [ref=e9] [cursor=pointer]
  - main [ref=e13]:
    - generic [ref=e17]:
      - heading "Tansel KILIÇ" [level=1] [ref=e18]
      - generic [ref=e19]: Technology leadership for AI, fintech, and platform teams.
      - paragraph [ref=e20]: 20+ years leading engineering teams, cloud-native platforms, and AI initiatives in production across fintech, e-commerce, and digital ecosystems.
      - generic [ref=e21]:
        - link "Get in touch" [ref=e22]:
          - /url: "#contact"
          - text: Get in touch
          - img [ref=e23]
        - link "View experience" [ref=e26]:
          - /url: "#experience"
      - generic [ref=e27]:
        - link "LinkedIn profile" [ref=e28]:
          - /url: https://www.linkedin.com/in/tanselkilic/
          - img [ref=e30]
          - text: LinkedIn
        - generic [ref=e32]:
          - img [ref=e33]
          - text: Istanbul, Turkey · Hybrid
        - generic [ref=e36]:
          - img [ref=e37]
          - text: Turkish · English
    - region "Impact" [ref=e40]:
      - generic [ref=e41]:
        - heading "Impact" [level=2] [ref=e42]
        - generic [ref=e43]:
          - generic [ref=e45]:
            - generic [ref=e46]: 20+
            - generic [ref=e47]:
              - generic [ref=e48]: Years of experience
              - generic [ref=e49]: Since 2003
          - generic [ref=e51]:
            - generic [ref=e52]: 50+
            - generic [ref=e53]:
              - generic [ref=e54]: Engineers led
              - generic [ref=e55]: Distributed, cross-functional teams
          - generic [ref=e57]:
            - generic [ref=e58]: 10+
            - generic [ref=e59]:
              - generic [ref=e60]: Companies led
              - generic [ref=e61]: CTO · Director · Advisor
    - generic [ref=e63]:
      - generic [ref=e65]:
        - heading "Strategic Technology & Engineering Leadership" [level=2] [ref=e66]
        - paragraph [ref=e67]: Bridging business vision with engineering scale to transform AI initiatives into robust production systems.
      - generic [ref=e68]:
        - generic [ref=e69]:
          - generic [ref=e71]: Turning strategy into working systems.
          - generic [ref=e73]:
            - paragraph [ref=e74]: For 20+ years, I have led large-scale platforms and engineering organizations across fintech, e-commerce, and digital ecosystems. I have built and led distributed teams of 50+ engineers, delivering cloud-native microservices that support millions of users.
            - paragraph [ref=e75]: In recent years, I have led AI and LLM initiatives not as experiments, but as production systems that improve decisions and streamline operations.
        - generic [ref=e77]:
          - generic [ref=e79]: Business-first AI and platform decisions
          - generic [ref=e81]: Engineering leadership across distributed teams
          - generic [ref=e83]: Cloud-native systems designed for scale
          - generic [ref=e85]: Pragmatic delivery from discovery to rollout
    - generic [ref=e87]:
      - generic [ref=e89]:
        - heading "Career Journey & Leadership Timeline" [level=2] [ref=e90]
        - paragraph [ref=e91]: Two decades of leadership across fintech, platforms, and e-commerce, defined by operational scale and measurable impact.
      - generic [ref=e92]:
        - article [ref=e94]:
          - generic [ref=e95]: Self-Employed — İstanbul
          - heading "AI & Digital Transformation Executive · Ex-CTO · Fractional CTO" [level=3] [ref=e96]
          - generic [ref=e97]:
            - generic [ref=e98]: Jan 2026 — Present
            - generic [ref=e99]: 5 months
          - paragraph [ref=e100]: Advising companies on AI adoption strategies with focus on practical implementation and measurable business impact. Designing AI-native workflows with strong accuracy standards and human oversight models. Delivering blockchain and digital asset custody projects with enterprise-grade security — HSM integrations (Thales, SafeNet), mTLS, and PKI.
          - generic [ref=e101]:
            - generic [ref=e102]: AI Strategy
            - generic [ref=e103]: LLM
            - generic [ref=e104]: Blockchain
            - generic [ref=e105]: HSM
        - generic [ref=e106]:
          - article [ref=e108]:
            - generic [ref=e109]:
              - heading "Chief Technology Officer" [level=3] [ref=e110]
              - generic [ref=e111]: Dec 2024 — Dec 2025 · 1 year 1 month
            - generic [ref=e112]: Ozan — İstanbul (Fintech)
            - paragraph [ref=e113]: Directed end-to-end technology operations and strategy. Led multidisciplinary engineering teams across BE, FE, QA, DevOps and Infrastructure. Oversaw core payment products — Physical POS, Virtual POS (Gateway), and digital wallet. Built LLM-based Document Intelligence Platform for high-volume financial documents and FraudInsight — an AI-powered fraud detection system using NLP & LLM, designed for cross-domain scalability.
            - generic [ref=e114]:
              - generic [ref=e115]: Fintech
              - generic [ref=e116]: LLM
              - generic [ref=e117]: Fraud Detection
          - article [ref=e119]:
            - generic [ref=e120]:
              - heading "Chief Technology Officer" [level=3] [ref=e121]
              - generic [ref=e122]: Mar 2024 — Sep 2024 · 7 months
            - generic [ref=e123]: Saran Group — İstanbul
            - paragraph [ref=e124]: "Led digital transformation across Saran Group's diverse portfolio: Tuttur.com (betting), Sonduzluk.com (TJK Betting), Ajansspor.com, SDS (Saran Digital Studios), RadyoSpor, and RadyoTrafik. Managed multi-team engineering, defined IT strategy across verticals, and oversaw third-party vendor relationships."
            - generic [ref=e125]:
              - generic [ref=e126]: Digital Transformation
              - generic [ref=e127]: Media Tech
              - generic [ref=e128]: Betting Systems
          - article [ref=e130]:
            - generic [ref=e131]:
              - heading "Chief Technology Officer" [level=3] [ref=e132]
              - generic [ref=e133]: Apr 2023 — Feb 2024 · 11 months
            - generic [ref=e134]: Huudle.io — Türkiye
          - article [ref=e136]:
            - generic [ref=e137]:
              - heading "Director of Software Engineering" [level=3] [ref=e138]
              - generic [ref=e139]: Feb 2022 — Feb 2023 · 1 year 1 month · London, UK
            - generic [ref=e140]: Pisano — London
          - article [ref=e142]:
            - generic [ref=e143]:
              - heading "Director of Software Engineering" [level=3] [ref=e144]
              - generic [ref=e145]: Jul 2021 — Feb 2022 · 8 months
            - generic [ref=e146]: Demirören Teknoloji / Azerloterya — İstanbul
      - generic [ref=e147]:
        - heading "Earlier roles" [level=3] [ref=e148]
        - generic [ref=e149]:
          - generic [ref=e151]:
            - generic [ref=e152]: E-commerce Senior Manager
            - generic [ref=e153]: Odeon Software & Technology / OTI Holding — İstanbul
            - generic [ref=e154]: Feb 2020 — Jul 2021 · 1 year 6 months
          - generic [ref=e156]:
            - generic [ref=e157]: E-commerce Software Development Manager
            - generic [ref=e158]: LC Waikiki — İstanbul
            - generic [ref=e159]: Apr 2019 — Feb 2020 · 11 months
          - generic [ref=e161]:
            - generic [ref=e162]: Project & Software Development Manager
            - generic [ref=e163]: Demirören Gazetecilik — İstanbul
            - generic [ref=e164]: Sep 2017 — Apr 2019 · 1 year 8 months
          - generic [ref=e166]:
            - generic [ref=e167]: Software Development Manager
            - generic [ref=e168]: Hürriyet — İstanbul
            - generic [ref=e169]: May 2015 — Sep 2017 · 2 years 5 months
          - generic [ref=e171]:
            - generic [ref=e172]: Software Development Assistant Manager
            - generic [ref=e173]: Hürriyet — İstanbul
            - generic [ref=e174]: Jul 2014 — May 2015 · 11 months
          - generic [ref=e176]:
            - generic [ref=e177]: Chief Software Engineer
            - generic [ref=e178]: Hürriyet — İstanbul
            - generic [ref=e179]: Sep 2011 — Jul 2014 · 2 years 11 months
          - generic [ref=e181]:
            - generic [ref=e182]: Senior Software Developer
            - generic [ref=e183]: SFS Şirketler Grubu — İstanbul
            - generic [ref=e184]: Mar 2011 — Sep 2011 · 7 months
          - generic [ref=e186]:
            - generic [ref=e187]: Software Developer
            - generic [ref=e188]: BİLİN Yazılım — İstanbul
            - generic [ref=e189]: Jan 2009 — Mar 2011 · 2 years 3 months
          - generic [ref=e191]:
            - generic [ref=e192]: Software Developer
            - generic [ref=e193]: NETİSİS Bilgi Teknolojileri — İstanbul
            - generic [ref=e194]: Jan 2003 — Nov 2008 · 5 years 11 months
    - generic [ref=e196]:
      - generic [ref=e198]:
        - heading "Core Expertise & Capabilities" [level=2] [ref=e199]
        - paragraph [ref=e200]: Strategic focus areas spanning AI integration, cloud-native platforms, regulated fintech ecosystems, and engineering management.
      - generic [ref=e202]:
        - generic [ref=e204]:
          - generic [ref=e205]: Core
          - generic [ref=e206]:
            - article [ref=e207]:
              - heading "AI & LLM Transformation" [level=3] [ref=e208]
              - paragraph [ref=e209]: Production-grade LLM systems for document intelligence, fraud detection, and decision automation.
            - article [ref=e210]:
              - heading "Fintech & Payment Systems" [level=3] [ref=e211]
        - generic [ref=e213]:
          - generic [ref=e214]: Systems
          - generic [ref=e215]:
            - article [ref=e216]:
              - heading "Cloud-Native Architecture" [level=3] [ref=e217]
              - paragraph [ref=e218]: High-traffic microservice architectures on Azure and GCP, with 100+ services in operation.
            - article [ref=e219]:
              - heading "Security & Cryptography" [level=3] [ref=e220]
        - generic [ref=e222]:
          - generic [ref=e223]: Leadership
          - generic [ref=e224]:
            - article [ref=e225]:
              - heading "Engineering Leadership" [level=3] [ref=e226]
              - paragraph [ref=e227]: 3x team growth, leadership of 50+ engineers, and Agile operations at scale.
            - article [ref=e228]:
              - heading "Digital Transformation" [level=3] [ref=e229]
    - generic [ref=e231]:
      - generic [ref=e233]:
        - heading "Responsible & Production-Grade AI Framework" [level=2] [ref=e234]
        - paragraph [ref=e235]: Ensuring precision, compliance, data privacy, and human-in-the-loop oversight in enterprise AI systems.
      - generic [ref=e236]:
        - generic [ref=e237]:
          - generic [ref=e239]: Operating principles
          - generic [ref=e240]:
            - generic [ref=e241]:
              - heading "Production-first" [level=3] [ref=e242]
              - paragraph [ref=e243]: No deployment without validated business impact. Every system is designed for real operational load.
            - heading "Human oversight" [level=3] [ref=e245]
            - heading "Privacy by design" [level=3] [ref=e247]
        - generic [ref=e248]:
          - generic [ref=e249]:
            - generic [ref=e250]: Ozan · 2024–2025
            - heading "Document Intelligence Platform" [level=3] [ref=e251]
            - paragraph [ref=e252]: Local LLM-based system for high-volume financial documents. On-premise architecture protected data privacy while reducing manual review time and operational overhead.
          - generic [ref=e253]:
            - generic [ref=e254]: Ozan · 2024–2025
            - heading "FraudInsight — AI-Powered Fraud Detection" [level=3] [ref=e255]
    - generic [ref=e257]:
      - generic [ref=e259]:
        - heading "Academic Background & Education" [level=2] [ref=e260]
        - paragraph [ref=e261]: An academic foundation combining big data analytics, information systems, and core computer science.
      - generic [ref=e262]:
        - article [ref=e264]:
          - generic [ref=e265]:
            - img [ref=e267]
            - generic [ref=e270]:
              - heading "Istanbul Technical University" [level=3] [ref=e271]
              - generic [ref=e272]: MSc, Big Data & Business Analytics
          - generic [ref=e273]: Aug 2024 — Ongoing
        - article [ref=e275]:
          - generic [ref=e276]:
            - img [ref=e278]
            - generic [ref=e281]:
              - heading "Ahmet Yesevi University" [level=3] [ref=e282]
              - generic [ref=e283]: Management Information Systems
          - generic [ref=e284]: 2005 — 2009
        - article [ref=e286]:
          - generic [ref=e287]:
            - img [ref=e289]
            - generic [ref=e292]:
              - heading "Ondokuz Mayıs University" [level=3] [ref=e293]
              - generic [ref=e294]: Computer Programming, Associate's Degree
          - generic [ref=e295]: 1999 — 2001
    - generic [ref=e297]:
      - generic [ref=e298]:
        - generic [ref=e300]:
          - heading "Let's Connect & Collaborate" [level=2] [ref=e301]
          - paragraph [ref=e302]: Reach out directly to discuss enterprise AI strategies, fintech architecture, or engineering organization design.
        - generic [ref=e304]: "Typical response time: within 24 hours"
      - generic [ref=e307]:
        - link "LinkedIn tanselkilic" [ref=e309]:
          - /url: https://www.linkedin.com/in/tanselkilic/
          - generic [ref=e310]:
            - img [ref=e312]
            - generic [ref=e314]:
              - generic [ref=e315]: LinkedIn
              - generic [ref=e316]: tanselkilic
            - img [ref=e317]
        - link "Email Send a message" [ref=e321]:
          - /url: mailto:tanselkilic@gmail.com
          - generic [ref=e322]:
            - img [ref=e324]
            - generic [ref=e327]:
              - generic [ref=e328]: Email
              - generic [ref=e329]: Send a message
            - img [ref=e330]
        - generic [ref=e335]:
          - img [ref=e337]
          - generic [ref=e340]:
            - generic [ref=e341]: Istanbul, Turkey
            - generic [ref=e342]: Open to remote
  - contentinfo [ref=e343]:
    - generic [ref=e344]:
      - generic [ref=e345]:
        - generic [ref=e346]: Tansel KILIÇ
        - generic [ref=e347]: © 2026 Tansel KILIÇ · Technology Leader & AI Executive
      - generic [ref=e348]:
        - link "LinkedIn profile" [ref=e349]:
          - /url: https://www.linkedin.com/in/tanselkilic/
          - img [ref=e350]
        - link "Email address" [ref=e352]:
          - /url: mailto:tanselkilic@gmail.com
          - img [ref=e353]
        - button "Back to top" [ref=e356] [cursor=pointer]:
          - img [ref=e357]
  - button "Open Next.js Dev Tools" [ref=e364] [cursor=pointer]:
    - img [ref=e365]
  - alert [ref=e370]
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
  13 |     expect(accessibilityScanResults.violations).toEqual([]);
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
> 26 |     expect(accessibilityScanResults.violations).toEqual([]);
     |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
  27 |   });
  28 | });
  29 | 
```