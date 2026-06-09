# Sprint-04 — Hero Yenileme

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 04 |
| **Başlık** | Hero Yenileme |
| **Başlangıç** | 2026-06-08 |
| **Bitiş (hedef)** | 2026-06-08 |
| **Durum** | `Tamamlandı` |

---

## Hedef (Goal)

Hero section'ı kişisel marka için güçlü bir ilk izlenim bırakacak düzeye taşımak. Sprint sonunda sağ taraf dolmuş, layout dengeli, fotoğraf/avatar hazır, CTA hiyerarşisi doğru olmalı.

---

## Görevler

- [x] Hero layout'u 2 kolona çevir: sol metin, sağ dekoratif/fotoğraf alanı
- [x] Tek `<h1>` içinde "Tansel KILIÇ" + title hiyerarşisi kur
- [x] CTA butonlarını hizala — primary daha geniş olmalı
- [x] Sağ kolona fotoğraf placeholder (profil fotoğrafı gelince değiştirilecek)
- [x] Sosyal linkler (LinkedIn, email) hero'ya ekle
- [x] İstatistikleri daha çarpıcı hale getir

---

## Retrospektif

Hero tamamen yenilendi. Sol kolon: badge → H1 → title → subtitle → CTA'lar → sosyal linkler (LinkedIn + Email SVG ikonlu) → stats. Sağ kolon: gradient daire TK monogramı + "Photo coming soon" badge + info kartı (konum, açıklık, dil). Mobile'da sağ kolon gizleniyor (hero-card class). globals.css'e hero-grid ve hero-card responsive kuralları eklendi.
