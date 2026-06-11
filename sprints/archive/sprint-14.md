# Sprint-14 — Input Validation & Code Injection

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 14 |
| **Başlık** | Input Validation & Code Injection |
| **Başlangıç** | 2026-06-11 |
| **Bitiş (hedef)** | 2026-06-12 |
| **Durum** | `Tamamlandı` |
| **Odak alanı** | Güvenlik |

---

## Hedef (Goal)

Arayüzdeki potansiyel kod enjeksiyon (XSS) risklerini incelemek, `dangerouslySetInnerHTML` kullanımını güvenli kılmak ve harici link yönlendirmelerini güvenlik standartlarına uyumlu hale getirmek.

---

## Görevler

- [x] [P3] `layout.tsx` içindeki JSON-LD enjeksiyon noktasını (`dangerouslySetInnerHTML`) XSS enjeksiyonlarına karşı doğrula, statik JSON çıktısının güvenliğini kesinleştir.
- [x] [P3] Tüm harici bağlantılarda (`target="_blank"`) tab-nabbing saldırılarını önlemek amacıyla `rel="noopener noreferrer"` etiketinin doğru uygulandığını kontrol et.
- [x] [P3] Tarayıcı konsolunda veya derleme loglarında XSS'e sebebiyet verebilecek lint uyarılarını sıfırla.

---

## Etkilenen dosyalar

- `src/app/layout.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/Contact.tsx`

---

## Notlar

JSON-LD veri akışı tamamen statik ve doğrulanmış yapıdadır. Linklerde noopener noreferrer etiketleri başarıyla korundu.

---

## Retrospektif

**Neler iyi gitti?**
Kod enjeksiyonu denetimi ve statik süzgeçlerin doğrulanması başarıyla yapıldı.

**Neler zorlandı / engelledi?**
Herhangi bir engelle karşılaşılmadı.
