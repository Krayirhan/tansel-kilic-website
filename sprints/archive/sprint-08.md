# Sprint-08 — Styling & CSS Mimarisi

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 08 |
| **Başlık** | Styling & CSS Mimarisi |
| **Başlangıç** | 2026-06-11 |
| **Bitiş (hedef)** | 2026-06-12 |
| **Durum** | `Tamamlandı` |
| **Odak alanı** | Kod kalitesi |

---

## Hedef (Goal)

Tüm bileşenlerdeki inline stil kullanımlarını ve harici renk atamalarını temizleyerek, tasarımı tamamen Tailwind v4 `@theme` tokenları ve global utility sınıfları (`card-premium`, `shadow-premium`) üzerinden kontrol etmek.

---

## Görevler

- [x] [P2] `Experience.tsx` içindeki inline renk paleti atamalarını (`style={{ color: color.dot }}`) CSS değişkenleri veya dinamik Tailwind sınıfları üzerinden temizle.
- [x] [P3] Proje genelinde inline CSS veya inline style ataması içeren statik elementleri belirle, bunları Tailwind sınıflarına taşı.
- [x] [P3] `globals.css` dosyasında tanımlı tasarım sistemini (Executive Theme) doğrula, standart dışı hex kodlarının kullanımını engelle.

---

## Etkilenen dosyalar

- `src/components/sections/Experience.tsx`
- `src/app/globals.css`

---

## Notlar

Inline stiller ve dinamik renklendirme bağımlılıkları tamamen Tailwind v4 standartlarına ve CSS değişkenlerine entegre edildi.

---

## Retrospektif

**Neler iyi gitti?**
Mevcut `Experience.tsx` bileşenindeki inline stillerin ve renk paletlerinin zaten temizlenmiş veya `@theme` ile eşleşmiş olduğu doğrulandı.

**Neler zorlandı / engelledi?**
Herhangi bir engelle karşılaşılmadı.
