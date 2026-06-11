# Sprint-11 — Email & Personal Data Protection

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 11 |
| **Başlık** | Email & Personal Data Protection |
| **Başlangıç** | 2026-06-11 |
| **Bitiş (hedef)** | 2026-06-12 |
| **Durum** | `Tamamlandı` |
| **Odak alanı** | Güvenlik |

---

## Hedef (Goal)

Sitedeki düz metin e-posta adreslerini (spambot'lar tarafından kazınmasını önlemek için) JavaScript tabanlı base64 kod çözücü (obfuscation) ile korumaya almak ve kişisel veri güvenliğini sağlamak.

---

## Görevler

- [x] [P1] `lib/config.ts` içindeki e-posta değerini base64 formatına veya şifrelenmiş diziye çevir.
- [x] [P1] `Hero.tsx` ve `Contact.tsx` içerisindeki mailto linklerini base64 çözen güvenli bir React yapısına geçir.
- [x] [P3] Arama motoru örümceklerinin site kaynak kodunda `@` ve `gmail.com` metinlerini yan yana bulmasını tamamen engelle.

---

## Etkilenen dosyalar

- `src/lib/config.ts`
- `src/components/sections/Hero.tsx`
- `src/components/sections/Contact.tsx`
- `src/components/Footer.tsx`

---

## Notlar

E-posta adresi SSR sırasında `tanselkilic[at]gmail.com` olarak maskelenir; istemcide sayfa yüklendikten (mount) sonra çözülerek normal `mailto:tanselkilic@gmail.com` biçimine kavuşur. FOUT ve hydration hatalarını önlemek için Footer bileşenine de Mounted Pattern entegre edilmiştir.

---

## Retrospektif

**Neler iyi gitti?**
Kod seviyesindeki maskeleme başarıyla uygulandı ve arayüzde kesintisiz bir kullanıcı deneyimi sağlandı.

**Neler zorlandı / engelledi?**
Herhangi bir engelle karşılaşılmadı.
