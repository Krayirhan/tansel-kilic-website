# Sprint-02 — Kod Kalitesi + Erişilebilirlik

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 02 |
| **Başlık** | Kod Kalitesi + Erişilebilirlik |
| **Başlangıç** | 2026-06-09 |
| **Bitiş (hedef)** | 2026-06-13 |
| **Durum** | `Tamamlandı` |
| **Odak alanı** | Kod kalitesi · Erişilebilirlik |

---

## Hedef (Goal)

Tekrar eden kodu birleştir, erişilebilirlik hatalarını düzelt. Sprint bittiğinde `LinkedInIcon` tek yerde tanımlı, `prefers-reduced-motion` tüm animasyonlu sectionlarda, `MapPin` card'ı interaktif olmayan bir element.

---

## Görevler

- [x] [P3] `LinkedInIcon` SVG'yi `src/components/ui/LinkedInIcon.tsx`'e taşı — `Hero.tsx` ve `Contact.tsx`'teki kopyaları kaldır
- [x] [P3] `LangContext.tsx:13` — default context değerindeki `locale: "tr"` / `t: messages.en` tutarsızlığını düzelt
- [x] [P2] Tüm animasyonlu Client Component'lere `useReducedMotion()` guard ekle (Hero, About, Experience, Expertise, Education, Contact)
- [x] [P2] `Contact.tsx` — `MapPin` card'ını `<a href="#">` yerine `<div>` yap, hover stilini koru
- [x] [P3] Tüm dosyalardaki `style={{ willChange: "transform, opacity" }}` satırlarını kaldır

---

## Etkilenen dosyalar (tahmini)

- `src/components/ui/LinkedInIcon.tsx` (yeni)
- `src/components/sections/Hero.tsx`
- `src/components/sections/Contact.tsx`
- `src/components/sections/About.tsx`
- `src/components/sections/Experience.tsx`
- `src/components/sections/Expertise.tsx`
- `src/components/sections/Education.tsx`
- `src/context/LangContext.tsx`

---

## Notlar

Sprint-01 tamamlandıktan sonra başla.

---

## Retrospektif

> Sprint tamamlandığında doldurulacak.

**Neler iyi gitti?**
Tüm 5 görev tek oturumda tamamlandı. `LinkedInIcon` artık tek kaynaktan geliyor. `useReducedMotion` 6 section'a tutarlı biçimde eklendi. `willChange` sıfır satıra indi.

**Neler zorlandı / engelledi?**
`Contact.tsx`'te `motion.a` / `motion.div` conditional rendering gerekti — `isLink` flag ile temiz çözüldü.

**Bir sonraki sprinte taşınan:**
- Sprint-03 içerik bekliyor: Impact Metrics ve Responsible AI için kullanıcıdan sayı ve tema onayı gerekli.
