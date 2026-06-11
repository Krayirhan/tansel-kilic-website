# Sprint-13 — Package Dependency Security

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 13 |
| **Başlık** | Package Dependency Security |
| **Başlangıç** | 2026-06-11 |
| **Bitiş (hedef)** | 2026-06-12 |
| **Durum** | `Tamamlandı` |
| **Odak alanı** | Güvenlik |

---

## Hedef (Goal)

`pnpm audit` taramalarında ortaya çıkan paket güvenlik zafiyetlerini (özellikle `postcss` ve Next.js alt bağımlılıklarındaki açıkları) temizlemek ve bağımlılık tablosunu güncel tutmak.

---

## Görevler

- [x] [P2] `postcss` bağımlılığını en son güvenli sürüme (`>=8.5.10`) pnpm overrides kullanarak veya doğrudan güncelleyerek yükselt.
- [x] [P3] Güncelleme sonrası `pnpm audit` çalıştırarak güvenlik zafiyetlerinin sıfırlandığını doğrula.
- [x] [P3] Güncelleme sonrası static build (`pnpm build`) çıktısını alarak derleme kırılmalarını engelle.

---

## Etkilenen dosyalar

- `package.json`
- `pnpm-lock.yaml`

---

## Notlar

`package.json` dosyasına override kuralları eklenerek postcss moderat zafiyeti tamamen yamandı.

---

## Retrospektif

**Neler iyi gitti?**
Overrides sonrasında pnpm audit temiz rapor verdi ("No known vulnerabilities found").

**Neler zorlandı / engelledi?**
Herhangi bir engelle karşılaşılmadı.
