# Sprint-18 — Tip Güvenliği & CSS Token Mimarisi

---

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 18 |
| **Başlık** | Tip Güvenliği & CSS Token Mimarisi |
| **Başlangıç** | Sprint-17 tamamlandığında |
| **Bitiş (hedef)** | Başlangıçtan +3 gün |
| **Durum** | `Backlog` |
| **Odak alanı** | Kod kalitesi |

---

## Hedef (Goal)

`Expertise.tsx`'teki TypeScript tip kaçağını kapat, `Reveal.tsx` animasyon başlangıç state'ini düzelt ve `--color-paper` token'ı için Tailwind `@utility` class tanımlayarak `bg-[var(--color-paper)]` inline kullanımlarını temizle. Bu sprint `pnpm build` + `pnpm lint` ile doğrulanır.

---

## Görevler

- [ ] [P1] `Expertise.tsx` `as Record<string, string>` tip kaçağını kaldır — `ExpertiseCopyKey` tipi üzerinden güvenli erişim sağla
- [ ] [P2] `globals.css` içine `@utility bg-paper` (veya `@utility surface-paper`) tanımla; `--color-paper: #f7f4ee` değerini taşı
- [ ] [P2] `About.tsx`, `Expertise.tsx`, `Education.tsx` içindeki `bg-[var(--color-paper)]` kullanımlarını yeni utility class ile değiştir (3 dosya)
- [ ] [P3] `Reveal.tsx` — `initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}` ekle; mevcut `initial={false}` belirsizliğini kapat
- [ ] [P3] `pnpm lint` + `pnpm build` çalıştır, sıfır hata doğrula

---

## Etkilenen dosyalar (tahmini)

- `src/app/globals.css` — yeni `@utility surface-paper` tanımı
- `src/components/sections/About.tsx` — token değişimi
- `src/components/sections/Expertise.tsx` — tip kaçağı + token değişimi
- `src/components/sections/Education.tsx` — token değişimi
- `src/components/ui/Reveal.tsx` — `initial` state eklentisi

---

## Notlar

- `bg-[var(--color-paper)]` şu an 3 ayrı section'da kullanılıyor; değişim sonrası tutarlılık sağlanmalı.
- `--color-paper: #f7f4ee` değeri `bg-slate-50` (#f8fafc) değil — bu farklılık kasıtlı; tasarım warm-neutral paletine ait.
- `Expertise.tsx` tip kaçağı: `e as Record<string, string>` → `ExpertiseCopyKey` union type üzerinden indexing.

---

## Retrospektif

> Bu bölüm sprint kapanışında doldurulur. Sprint açıkken boş bırak.

**Neler iyi gitti?**
[...]

**Neler zorlandı / engelledi?**
[...]

**Bir sonraki sprinte taşınan:**
- [ ] [varsa]
