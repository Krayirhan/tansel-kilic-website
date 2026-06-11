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
      - navigation [ref=e5]:
        - link "About" [ref=e6]:
          - /url: "#about"
        - link "Experience" [ref=e7]:
          - /url: "#experience"
        - link "Expertise" [ref=e8]:
          - /url: "#expertise"
        - link "Education" [ref=e9]:
          - /url: "#education"
        - link "Responsible AI" [ref=e10]:
          - /url: "#responsible-ai"
        - link "Contact" [ref=e11]:
          - /url: "#contact"
      - group "Language" [ref=e13]:
        - button "Switch language to English" [ref=e14] [cursor=pointer]: en
        - button "Switch language to Turkish" [ref=e15] [cursor=pointer]: tr
  - main [ref=e16]:
    - generic [ref=e19]:
      - generic [ref=e20]:
        - heading "Tansel KILIÇ" [level=1] [ref=e21]
        - generic [ref=e22]: Technology leadership for AI, fintech, and platform teams.
        - paragraph [ref=e23]: 20+ years leading engineering teams, cloud-native platforms, and AI initiatives in production across fintech, e-commerce, and digital ecosystems.
        - generic [ref=e24]:
          - link "Get in touch" [ref=e25]:
            - /url: "#contact"
            - text: Get in touch
            - img [ref=e26]
          - link "View experience" [ref=e29]:
            - /url: "#experience"
        - generic [ref=e30]:
          - link "LinkedIn profile" [ref=e31]:
            - /url: https://www.linkedin.com/in/tanselkilic/
            - img [ref=e33]
            - text: LinkedIn
          - generic [ref=e36]:
            - img [ref=e37]
            - text: Istanbul, Turkey · Hybrid
          - generic [ref=e40]:
            - img [ref=e41]
            - text: Turkish · English
      - complementary [ref=e44]:
        - generic [ref=e45]: From strategy to execution
        - generic [ref=e46]:
          - generic [ref=e48]: AI transformation
          - generic [ref=e50]: Fintech platforms
          - generic [ref=e52]: Engineering scale
    - region "Impact" [ref=e53]:
      - generic [ref=e54]:
        - heading "Impact" [level=2] [ref=e55]
        - generic [ref=e56]:
          - generic [ref=e58]:
            - generic [ref=e59]: 20+
            - generic [ref=e60]:
              - generic [ref=e61]: Years of experience
              - generic [ref=e62]: Since 2003
          - generic [ref=e64]:
            - generic [ref=e65]: 50+
            - generic [ref=e66]:
              - generic [ref=e67]: Engineers led
              - generic [ref=e68]: Distributed, cross-functional teams
          - generic [ref=e70]:
            - generic [ref=e71]: 10+
            - generic [ref=e72]:
              - generic [ref=e73]: Companies led
              - generic [ref=e74]: CTO · Director · Advisor
    - generic [ref=e76]:
      - generic [ref=e78]:
        - heading "Strategic Technology & Engineering Leadership" [level=2] [ref=e79]
        - paragraph [ref=e80]: Bridging business vision with engineering scale to transform AI initiatives into robust production systems.
      - generic [ref=e81]:
        - generic [ref=e82]:
          - generic [ref=e84]: Turning strategy into working systems.
          - generic [ref=e86]:
            - paragraph [ref=e87]: For 20+ years, I have led large-scale platforms and engineering organizations across fintech, e-commerce, and digital ecosystems. I have built and led distributed teams of 50+ engineers, delivering cloud-native microservices that support millions of users.
            - paragraph [ref=e88]: In recent years, I have led AI and LLM initiatives not as experiments, but as production systems that improve decisions and streamline operations.
        - generic [ref=e90]:
          - generic [ref=e92]: Business-first AI and platform decisions
          - generic [ref=e94]: Engineering leadership across distributed teams
          - generic [ref=e96]: Cloud-native systems designed for scale
          - generic [ref=e98]: Pragmatic delivery from discovery to rollout
    - generic [ref=e100]:
      - generic [ref=e102]:
        - heading "Career Journey & Leadership Timeline" [level=2] [ref=e103]
        - paragraph [ref=e104]: Two decades of leadership across fintech, platforms, and e-commerce, defined by operational scale and measurable impact.
      - generic [ref=e105]:
        - article [ref=e107]:
          - generic [ref=e108]: Self-Employed — İstanbul
          - heading "AI & Digital Transformation Executive · Ex-CTO · Fractional CTO" [level=3] [ref=e109]
          - generic [ref=e110]:
            - generic [ref=e111]: Jan 2026 — Present
            - generic [ref=e112]: 5 months
          - paragraph [ref=e113]: Advising companies on AI adoption strategies with focus on practical implementation and measurable business impact. Designing AI-native workflows with strong accuracy standards and human oversight models. Delivering blockchain and digital asset custody projects with enterprise-grade security — HSM integrations (Thales, SafeNet), mTLS, and PKI.
          - generic [ref=e114]:
            - generic [ref=e115]: AI Strategy
            - generic [ref=e116]: LLM
            - generic [ref=e117]: Blockchain
            - generic [ref=e118]: HSM
        - generic [ref=e119]:
          - article [ref=e121]:
            - generic [ref=e122]:
              - heading "Chief Technology Officer" [level=3] [ref=e123]
              - generic [ref=e124]: Dec 2024 — Dec 2025 · 1 year 1 month
            - generic [ref=e125]: Ozan — İstanbul (Fintech)
            - paragraph [ref=e126]: Directed end-to-end technology operations and strategy. Led multidisciplinary engineering teams across BE, FE, QA, DevOps and Infrastructure. Oversaw core payment products — Physical POS, Virtual POS (Gateway), and digital wallet. Built LLM-based Document Intelligence Platform for high-volume financial documents and FraudInsight — an AI-powered fraud detection system using NLP & LLM, designed for cross-domain scalability.
            - generic [ref=e127]:
              - generic [ref=e128]: Fintech
              - generic [ref=e129]: LLM
              - generic [ref=e130]: Fraud Detection
          - article [ref=e132]:
            - generic [ref=e133]:
              - heading "Chief Technology Officer" [level=3] [ref=e134]
              - generic [ref=e135]: Mar 2024 — Sep 2024 · 7 months
            - generic [ref=e136]: Saran Group — İstanbul
            - paragraph [ref=e137]: "Led digital transformation across Saran Group's diverse portfolio: Tuttur.com (betting), Sonduzluk.com (TJK Betting), Ajansspor.com, SDS (Saran Digital Studios), RadyoSpor, and RadyoTrafik. Managed multi-team engineering, defined IT strategy across verticals, and oversaw third-party vendor relationships."
            - generic [ref=e138]:
              - generic [ref=e139]: Digital Transformation
              - generic [ref=e140]: Media Tech
              - generic [ref=e141]: Betting Systems
          - article [ref=e143]:
            - generic [ref=e144]:
              - heading "Chief Technology Officer" [level=3] [ref=e145]
              - generic [ref=e146]: Apr 2023 — Feb 2024 · 11 months
            - generic [ref=e147]: Huudle.io — Türkiye
            - paragraph [ref=e148]: Led development of Huudle, an innovative meeting platform focused on smooth user experience. Recruited and managed skilled engineering teams, shaped software and system architecture, and ensured security and compliance with data privacy standards.
            - generic [ref=e149]:
              - generic [ref=e150]: Startup
              - generic [ref=e151]: GCP
              - generic [ref=e152]: System Architecture
          - article [ref=e154]:
            - generic [ref=e155]:
              - heading "Director of Software Engineering" [level=3] [ref=e156]
              - generic [ref=e157]: Feb 2022 — Feb 2023 · 1 year 1 month · London, UK
            - generic [ref=e158]: Pisano — London
            - paragraph [ref=e159]: Responsible for IT roadmap, budget, and strategy. Managed the full engineering department — Development, DevOps, QA, Integration, PO, and BA teams. Expanded the engineering team 3x in one year. Developed partnerships with Microsoft, Salesforce, and Azure Marketplace. Oversaw delivery of multiple applications.
            - generic [ref=e160]:
              - generic [ref=e161]: Azure
              - generic [ref=e162]: Salesforce
              - generic [ref=e163]: Team Scaling
          - article [ref=e165]:
            - generic [ref=e166]:
              - heading "Director of Software Engineering" [level=3] [ref=e167]
              - generic [ref=e168]: Jul 2021 — Feb 2022 · 8 months
            - generic [ref=e169]: Demirören Teknoloji / Azerloterya — İstanbul
            - paragraph [ref=e170]: Led Azerbaijan Sports Betting and Virtual Sports web platforms and mobile apps. Deployed 100+ microservices on Azure. Managed 30-35 person engineering teams with Scrum and Kanban. Oversaw Azure DevOps, cloud deployments, and third-party integrations.
            - generic [ref=e171]:
              - generic [ref=e172]: Azure
              - generic [ref=e173]: Microservices
              - generic [ref=e174]: DevOps
      - generic [ref=e175]:
        - heading "Earlier roles" [level=3] [ref=e176]
        - generic [ref=e177]:
          - generic [ref=e179]:
            - generic [ref=e180]: E-commerce Senior Manager
            - generic [ref=e181]: Odeon Software & Technology / OTI Holding — İstanbul
            - generic [ref=e182]: Feb 2020 — Jul 2021 · 1 year 6 months
          - generic [ref=e184]:
            - generic [ref=e185]: E-commerce Software Development Manager
            - generic [ref=e186]: LC Waikiki — İstanbul
            - generic [ref=e187]: Apr 2019 — Feb 2020 · 11 months
          - generic [ref=e189]:
            - generic [ref=e190]: Project & Software Development Manager
            - generic [ref=e191]: Demirören Gazetecilik — İstanbul
            - generic [ref=e192]: Sep 2017 — Apr 2019 · 1 year 8 months
          - generic [ref=e194]:
            - generic [ref=e195]: Software Development Manager
            - generic [ref=e196]: Hürriyet — İstanbul
            - generic [ref=e197]: May 2015 — Sep 2017 · 2 years 5 months
          - generic [ref=e199]:
            - generic [ref=e200]: Software Development Assistant Manager
            - generic [ref=e201]: Hürriyet — İstanbul
            - generic [ref=e202]: Jul 2014 — May 2015 · 11 months
          - generic [ref=e204]:
            - generic [ref=e205]: Chief Software Engineer
            - generic [ref=e206]: Hürriyet — İstanbul
            - generic [ref=e207]: Sep 2011 — Jul 2014 · 2 years 11 months
          - generic [ref=e209]:
            - generic [ref=e210]: Senior Software Developer
            - generic [ref=e211]: SFS Şirketler Grubu — İstanbul
            - generic [ref=e212]: Mar 2011 — Sep 2011 · 7 months
          - generic [ref=e214]:
            - generic [ref=e215]: Software Developer
            - generic [ref=e216]: BİLİN Yazılım — İstanbul
            - generic [ref=e217]: Jan 2009 — Mar 2011 · 2 years 3 months
          - generic [ref=e219]:
            - generic [ref=e220]: Software Developer
            - generic [ref=e221]: NETİSİS Bilgi Teknolojileri — İstanbul
            - generic [ref=e222]: Jan 2003 — Nov 2008 · 5 years 11 months
    - generic [ref=e224]:
      - generic [ref=e226]:
        - heading "Core Expertise & Capabilities" [level=2] [ref=e227]
        - paragraph [ref=e228]: Strategic focus areas spanning AI integration, cloud-native platforms, regulated fintech ecosystems, and engineering management.
      - generic [ref=e230]:
        - generic [ref=e232]:
          - generic [ref=e233]: Core
          - generic [ref=e234]:
            - article [ref=e235]:
              - heading "AI & LLM Transformation" [level=3] [ref=e236]
              - paragraph [ref=e237]: Production-grade LLM systems for document intelligence, fraud detection, and decision automation.
            - article [ref=e238]:
              - heading "Fintech & Payment Systems" [level=3] [ref=e239]
              - paragraph [ref=e240]: Strong hands-on experience across POS, virtual POS, digital wallets, AML, and financial compliance.
        - generic [ref=e242]:
          - generic [ref=e243]: Systems
          - generic [ref=e244]:
            - article [ref=e245]:
              - heading "Cloud-Native Architecture" [level=3] [ref=e246]
              - paragraph [ref=e247]: High-traffic microservice architectures on Azure and GCP, with 100+ services in operation.
            - article [ref=e248]:
              - heading "Security & Cryptography" [level=3] [ref=e249]
              - paragraph [ref=e250]: Experience with HSM integrations, mTLS, PKI, and enterprise security architecture.
        - generic [ref=e252]:
          - generic [ref=e253]: Leadership
          - generic [ref=e254]:
            - article [ref=e255]:
              - heading "Engineering Leadership" [level=3] [ref=e256]
              - paragraph [ref=e257]: 3x team growth, leadership of 50+ engineers, and Agile operations at scale.
            - article [ref=e258]:
              - heading "Digital Transformation" [level=3] [ref=e259]
              - paragraph [ref=e260]: Experience modernizing legacy systems into scalable digital platforms.
    - generic [ref=e262]:
      - generic [ref=e264]:
        - heading "Responsible & Production-Grade AI Framework" [level=2] [ref=e265]
        - paragraph [ref=e266]: Ensuring precision, compliance, data privacy, and human-in-the-loop oversight in enterprise AI systems.
      - generic [ref=e267]:
        - generic [ref=e268]:
          - generic [ref=e270]: Operating principles
          - generic [ref=e271]:
            - generic [ref=e272]:
              - heading "Production-first" [level=3] [ref=e273]
              - paragraph [ref=e274]: No deployment without validated business impact. Every system is designed for real operational load.
            - generic [ref=e275]:
              - heading "Human oversight" [level=3] [ref=e276]
              - paragraph [ref=e277]: Human oversight is the default for critical decisions. Automation expands gradually as trust increases.
            - generic [ref=e278]:
              - heading "Privacy by design" [level=3] [ref=e279]
              - paragraph [ref=e280]: On-premise architecture is used for financial and sensitive data. Data stays within the boundary, and compliance is handled in the architecture.
        - generic [ref=e281]:
          - generic [ref=e282]:
            - generic [ref=e283]: Ozan · 2024–2025
            - heading "Document Intelligence Platform" [level=3] [ref=e284]
            - paragraph [ref=e285]: Local LLM-based system for high-volume financial documents. On-premise architecture protected data privacy while reducing manual review time and operational overhead.
          - generic [ref=e286]:
            - generic [ref=e287]: Ozan · 2024–2025
            - heading "FraudInsight — AI-Powered Fraud Detection" [level=3] [ref=e288]
            - paragraph [ref=e289]: Fraud detection system using NLP and LLM to analyze transaction data and text signals. It identifies suspicious patterns in real time and scales across fintech, e-commerce, and telecom use cases.
    - generic [ref=e291]:
      - generic [ref=e293]:
        - heading "Academic Background & Education" [level=2] [ref=e294]
        - paragraph [ref=e295]: An academic foundation combining big data analytics, information systems, and core computer science.
      - generic [ref=e296]:
        - article [ref=e298]:
          - generic [ref=e299]:
            - img [ref=e301]
            - generic [ref=e304]:
              - heading "Istanbul Technical University" [level=3] [ref=e305]
              - generic [ref=e306]: MSc, Big Data & Business Analytics
          - generic [ref=e307]: Aug 2024 — Ongoing
        - article [ref=e309]:
          - generic [ref=e310]:
            - img [ref=e312]
            - generic [ref=e315]:
              - heading "Ahmet Yesevi University" [level=3] [ref=e316]
              - generic [ref=e317]: Management Information Systems
          - generic [ref=e318]: 2005 — 2009
        - article [ref=e320]:
          - generic [ref=e321]:
            - img [ref=e323]
            - generic [ref=e326]:
              - heading "Ondokuz Mayıs University" [level=3] [ref=e327]
              - generic [ref=e328]: Computer Programming, Associate's Degree
          - generic [ref=e329]: 1999 — 2001
    - generic [ref=e331]:
      - generic [ref=e332]:
        - generic [ref=e334]:
          - heading "Let's Connect & Collaborate" [level=2] [ref=e335]
          - paragraph [ref=e336]: Reach out directly to discuss enterprise AI strategies, fintech architecture, or engineering organization design.
        - generic [ref=e338]: "Typical response time: within 24 hours"
      - generic [ref=e341]:
        - link "LinkedIn tanselkilic" [ref=e343]:
          - /url: https://www.linkedin.com/in/tanselkilic/
          - generic [ref=e344]:
            - img [ref=e346]
            - generic [ref=e348]:
              - generic [ref=e349]: LinkedIn
              - generic [ref=e350]: tanselkilic
            - img [ref=e351]
        - link "Email Send a message" [ref=e355]:
          - /url: mailto:tanselkilic@gmail.com
          - generic [ref=e356]:
            - img [ref=e358]
            - generic [ref=e361]:
              - generic [ref=e362]: Email
              - generic [ref=e363]: Send a message
            - img [ref=e364]
        - generic [ref=e369]:
          - img [ref=e371]
          - generic [ref=e374]:
            - generic [ref=e375]: Istanbul, Turkey
            - generic [ref=e376]: Open to remote
  - contentinfo [ref=e377]:
    - generic [ref=e378]:
      - generic [ref=e379]:
        - generic [ref=e380]: Tansel KILIÇ
        - generic [ref=e381]: © 2026 Tansel KILIÇ · Technology Leader & AI Executive
      - generic [ref=e382]:
        - link "LinkedIn profile" [ref=e383]:
          - /url: https://www.linkedin.com/in/tanselkilic/
          - img [ref=e384]
        - link "Email address" [ref=e386]:
          - /url: mailto:tanselkilic@gmail.com
          - img [ref=e387]
        - button "Back to top" [ref=e390] [cursor=pointer]:
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