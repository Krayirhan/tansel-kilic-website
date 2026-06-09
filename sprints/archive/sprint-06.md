# Sprint-06 — Tasarım Denetimi Düzeltmeleri

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 06 |
| **Başlık** | Tasarım Denetimi Düzeltmeleri |
| **Başlangıç** | 2026-06-08 |
| **Bitiş (hedef)** | 2026-06-08 |
| **Durum** | `Aktif` |

---

## Hedef (Goal)

Uçtan uca tasarım denetiminde (6.5/10) çıkan kritik ve orta öncelikli sorunları gidermek. Sprint sonunda: Experience bölümü orantılı ve okunabilir, iki dillilik tam tutarlı, metin kontrastı WCAG AA geçer, bölüm ayrımları belirgin olmalı.

---

## Görevler

### 🔴 Kritik

- [x] **Experience yeniden yapısı** — İlk 6 rol tam kart, kalan 9 rol kompakt tek-satır liste ("Önceki roller"). Bölüm 4042px → 2339px (%43↓), sayfa 7003 → 5301px.
- [x] **Etiket çevirisi** — `data.ts`'e `tags_tr` eklendi, tüm 15 entry lokalize. Çevrilebilir terimler çevrildi (Medya Teknolojisi, Sanal POS, Ekip Büyütme...), teknik kısaltmalar (LLM, HSM, GCP, Azure) korundu.
- [x] **Muted kontrast düzeltmesi** — `--muted` #6b7280 → #5b626f. Gri zeminde kontrast 4.39 → 5.28 (AA geçer ✓), beyazda 6.14.

### 🟡 Orta

- [x] **Bölüm ayrımı** — `--bg` #f4f4f2 → #eeeeea (kontrast 1.10 → 1.16), `--border` #e5e5e1 → #e0e0db. About/Expertise border'larıyla birlikte ayrım belirginleşti.
- [x] **Renk monotonluğu** — 6 tam karta 6 renkli palet uygulandı (mavi/mor/camgöbeği/yeşil/amber/kırmızı): sol kenar, timeline noktası, şirket adı ve etiketler kartın rengini alıyor.
- [-] **Placeholder denetimi** — Test amaçlı bırakıldı (hello@tanselkilic.com, 20+/50+/10+ istatistikler). Yapı hazır, veriler sonra güncellenebilir.

---

## Notlar

- Denetim ölçümleri: Experience 4042/7003px (%58), muted-on-gray kontrast 4.39 (<4.5 AA), gray-vs-white kontrast 1.10
- Öncelik sırası: #1 Experience > #3 Kontrast > #2 Etiket > diğerleri
- Hedef değiştirilemez (RULES.md §Kapsam)

---

## Retrospektif

Sayfayı fiziksel olarak daha küçülttük: Experience %43 kısaldı, sayfa toplamı 7003px → 5301px. Kontrast sorunları çözüldü (AA geçti). Renk sistemi 6 palet ile mono görünümü kırdı. Etiketler tam Türkçe tutarlı. Eski roller kompakt listeye taşınarak arayüz yüksek kaliteyi korudu.
