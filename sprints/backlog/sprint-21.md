# Sprint-21 — RSC Boundary Refactoring (Büyük Mimari)

---

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 21 |
| **Başlık** | RSC Boundary: Client Sınırını Daralt |
| **Başlangıç** | Sprint-20 tamamlandığında |
| **Bitiş (hedef)** | Başlangıçtan +5 gün |
| **Durum** | `Backlog` |
| **Odak alanı** | Mimari / Performans |

---

## Hedef (Goal)

Tüm section bileşenlerini kapsayan `PageSections` client boundary'sini çöz. Her section kendi client sınırını taşısın; animasyon ve dil değişimlerine ihtiyaç duymayan yapılar Server Component kalabilecek hale gelsin. Client JS bundle boyutunu ölçülebilir şekilde azalt.

---

## Görevler

- [ ] [P2] `page.tsx` ve `PageSections.tsx` mimarisini incele; mevcut boundary tasarımını belgele
- [ ] [P2] `Reveal.tsx` — `"use client"` taşıyan izole animasyon wrapper olarak bırak; section bileşenlerini RSC'ye döndürmek için bu pattern'ı temel al
- [ ] [P2] `About.tsx`, `Education.tsx` gibi yalnızca statik içerik + Reveal animasyonu barındıran section'ları Server Component'e dönüştür; `useLang()` çağrısını `LangText` gibi minimal client primitive ile değiştir
- [ ] [P3] `next build` çıktısındaki First Load JS boyutunu sprint öncesi ve sonrası karşılaştır; iyileşme dokümente edilsin
- [ ] [P4] `LangContext`'i React Server Context (RSC-compatible) olarak yeniden modellemenin fizibilite araştırması — uygulama yapılmaz, yalnızca değerlendirme notu yazılır

---

## Etkilenen dosyalar (tahmini)

- `src/app/page.tsx` — RSC'ye dönüşüm
- `src/app/PageSections.tsx` — boundary daraltma
- `src/components/sections/About.tsx` — RSC dönüşüm adayı
- `src/components/sections/Education.tsx` — RSC dönüşüm adayı
- `src/context/LangContext.tsx` — fizibilite notu

---

## Notlar

> [!CAUTION]
> Bu sprint **yapısal refactor** içeriyor. AGENTS.md'de belirtildiği üzere: "`page.tsx` 'use client' — neden var ve nasıl düzeltilir" bölümüne göre bu değişiklik kullanıcı onayı gerektirir. Sprint-20 bitmeden başlamayın.

- `LangContext` React Context kullandığı sürece, onu tüketen tüm bileşenler client olmalı. Çözüm: i18n dictionary'yi props olarak geçirmek veya React Server Context kullanmak.
- RSC dönüşümü hatalı yapıldığında hydration mismatch ve runtime error üretir — `pnpm build` + manuel test zorunlu.
- Bu sprint öncesi kullanıcı onayı alınmalı.

---

## Retrospektif

> Bu bölüm sprint kapanışında doldurulur. Sprint açıkken boş bırak.

**Neler iyi gitti?**
[...]

**Neler zorlandı / engelledi?**
[...]

**Bir sonraki sprinte taşınan:**
- [ ] [varsa]
