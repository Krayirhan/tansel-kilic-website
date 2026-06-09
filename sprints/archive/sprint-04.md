# Sprint-04 — Performans: RSC Dönüşümü

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 04 |
| **Başlık** | Performans: RSC Dönüşümü |
| **Başlangıç** | 2026-06-09 |
| **Bitiş (hedef)** | 2026-06-13 |
| **Durum** | `Tamamlandı` |
| **Odak alanı** | Performans |

---

## Hedef (Goal)

`page.tsx` ve mümkün olan section'ları Server Component'e taşıyarak Next.js App Router'ın RSC avantajlarını kullan. Sprint bittiğinde client bundle boyutu ölçülebilir şekilde küçülmüş, hydration yükü azalmış olmalı.

---

## Görevler

- [x] [P3] `page.tsx` — `"use client"` kaldır; `<PageSections />` adında ayrı bir Client Component wrapper oluştur, section import'larını oraya taşı
- [-] [P3] Animasyon veya lang toggle gerektirmeyen section'ları Server Component'e dönüştür — tüm section'lar `useLang()` kullandığı için kapsam dışı
- [-] [P3] Bundle boyutu karşılaştırması — Turbopack bu veriyi build çıktısında göstermiyor
- [x] [P4] Inter font — `subsets: ["latin", "latin-ext"]` güncellendi

---

## Etkilenen dosyalar (tahmini)

- `src/app/page.tsx`
- `src/components/PageSections.tsx` (yeni)
- `src/app/layout.tsx`

---

## Notlar

**En riskli sprint — son sıraya bırakıldı.**

RSC dönüşümü için AGENTS.md'deki yöntemi izle:
> "move section imports into a separate `<PageSections />` Client Component wrapper and keep `page.tsx` as a Server Component that only renders `<PageSections />`"

Tüm section'lar `useLang()` kullandığı için tam RSC'ye geçiş mümkün değil — hedef sadece `page.tsx` route'unu server'da tutmak.

Dönüşüm öncesi `pnpm build` çalıştır, bundle boyutlarını kaydet.

---

## Retrospektif

> Sprint tamamlandığında doldurulacak.

**Neler iyi gitti?**
`page.tsx` temiz Server Component oldu. `PageSections.tsx` wrapper minimal ve net. Inter `latin-ext` Türkçe karakterleri artık doğru fonttan alıyor.

**Neler zorlandı / engelledi?**
Tüm section'lar `useLang()` kullandığı için bireysel RSC dönüşümü mümkün olmadı — tek kazanım `page.tsx` route boundary'si. Turbopack bundle boyutunu build çıktısında raporlamıyor, sayısal karşılaştırma yapılamadı.

**Bir sonraki sprinte taşınan:**
- Sprint-03 bekliyor: Impact Metrics + Responsible AI için kullanıcıdan içerik onayı gerekli.
