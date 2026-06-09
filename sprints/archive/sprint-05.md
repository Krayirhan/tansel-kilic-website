# Sprint-05 — Kod Temizliği

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 05 |
| **Başlık** | Kod Temizliği |
| **Başlangıç** | 2026-06-09 |
| **Bitiş (hedef)** | 2026-06-10 |
| **Durum** | `Tamamlandı` |
| **Odak alanı** | Kod kalitesi |

---

## Hedef (Goal)

Orphan i18n key'lerini temizle, yanlış namespace'teki içerikleri doğru yere taşı, redundant a11y attribute'larını kaldır. Sprint bittiğinde i18n dosyaları sıfır orphan key içeriyor, Education içeriği kendi namespace'inde, Navbar a11y doğru.

---

## Görevler

- [x] [P3] `tr.json` + `en.json` — `hero.*` altındaki orphan key'leri sil: `stat_years_label`, `stat_engineers_label`, `stat_companies_label`
- [x] [P3] `education.title` key'i `tr.json` + `en.json`'a ekle; `Education.tsx` h2'yi `t.education.label`'dan `t.education.title`'a güncelle
- [x] [P3] Education içerik key'lerini (`edu1_*`, `edu2_*`, `edu3_*`) `about.*` altından `education.*` altına taşı; `Education.tsx` referanslarını güncelle
- [x] [P2] `Navbar.tsx` — nav linklerindeki `aria-label={link.label}` redundant attribute'u kaldır (desktop + mobile drawer, 2 yer)

---

## Etkilenen dosyalar

- `src/messages/tr.json`
- `src/messages/en.json`
- `src/components/sections/Education.tsx`
- `src/components/Navbar.tsx`

---

## Notlar

`about.*` altındaki edu key'leri taşınırken `About.tsx`'i kontrol et — eğer About da bu key'leri kullanıyorsa önce orayı güncelle.

---

## Retrospektif

> Sprint tamamlandığında doldurulacak.

**Neler iyi gitti?**
4 görev tek oturumda tamamlandı. Education key namespace düzeltmesi temiz ve geri alınabilir oldu. TypeScript type inference (`typeof en`) sayesinde key taşıması otomatik olarak tip kontrolünden geçti.

**Neler zorlandı / engelledi?**
Engel yok.

**Bir sonraki sprinte taşınan:**
- SEO Derinleştirme: `lang="tr"` SSR sorunu, OG locale tutarsızlığı
