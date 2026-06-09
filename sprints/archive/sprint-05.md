# Sprint-05 — Görsel Kalite & Animasyonlar

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 05 |
| **Başlık** | Görsel Kalite & Animasyonlar |
| **Başlangıç** | 2026-06-08 |
| **Bitiş (hedef)** | 2026-06-08 |
| **Durum** | `Tamamlandı` |

---

## Hedef (Goal)

Siteyi "iyi çalışıyor"dan "etkileyici görünüyor"a taşımak.

---

## Görevler

- [x] Emoji ikonları kaldır → Lucide SVG ikonlarla değiştir (About, Expertise, Contact)
- [x] Framer Motion kur ve scroll-triggered fade-in animasyonları ekle (tüm section'lar)
- [x] Section arka plan kontrastını artır — `#f7f7f5` → `#f4f4f2`
- [x] About kartlarındaki border-radius tutarsızlığı düzelt → 12px tam yuvarlak
- [x] Expertise kart accent çizgisini 3px → 4px yaptı, daha belirgin
- [x] Contact section sol kolonu zenginleştir (availability, response time, start date)
- [x] Footer bileşeni oluştur: koyu arka plan, LinkedIn + Email SVG ikonlar, "Back to top" butonu

---

## Retrospektif

- `lucide-react`'te `Linkedin` ikonu yok — inline SVG `LinkedInIcon` komponenti yazıldı
- Framer Motion: `initial/whileInView/viewport once:true` pattern ile her section scroll animasyonu aldı
- Contact'a 3 availability satırı eklendi (Clock, Calendar, MessageSquare ikonlarıyla)
- Footer: `var(--text)` (#111) arka plan, sosyal ikonlar hover efektli, ArrowUp "Back to top"
- `i18n`: hero'ya `title_line/card_*`, contact'a `avail_*` key'leri eklendi (EN + TR)
