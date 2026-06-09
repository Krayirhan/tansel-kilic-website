export type Experience = {
  date_en: string;
  date_tr: string;
  role_en: string;
  role_tr?: string;
  company: string;
  desc_en: string;
  desc_tr: string;
  tags: string[];
  tags_tr: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    current: true,
    date_en: "Jan 2026 — Present · 6 months",
    date_tr: "Oca 2026 — Devam ediyor · 6 ay",
    role_en: "AI & Digital Transformation Executive · Ex-CTO · Fractional CTO",
    role_tr: "AI & Dijital Dönüşüm Yöneticisi · Ex-CTO · Fractional CTO",
    company: "Self-Employed — İstanbul",
    desc_en:
      "Advising companies on AI adoption strategies with focus on practical implementation and measurable business impact. Designing AI-native workflows with strong accuracy standards and human oversight models. Delivering blockchain and digital asset custody projects with enterprise-grade security — HSM integrations (Thales, SafeNet), mTLS, and PKI.",
    desc_tr:
      "Şirketlere ölçülebilir iş etkisi odaklı AI benimseme stratejisi danışmanlığı. Güçlü doğruluk standartları ve insan denetim modelleriyle AI-native iş akışları tasarımı. Kurumsal güvenlikte blockchain ve dijital varlık saklama projeleri — HSM (Thales, SafeNet), mTLS ve PKI.",
    tags: ["AI Strategy", "LLM", "Blockchain", "HSM", "Fractional CTO", "Web3"],
    tags_tr: ["AI Stratejisi", "LLM", "Blockchain", "HSM", "Fractional CTO", "Web3"],
  },
  {
    date_en: "Dec 2024 — Dec 2025 · 1 year 1 month",
    date_tr: "Ara 2024 — Ara 2025 · 1 yıl 1 ay",
    role_en: "Chief Technology Officer",
    company: "Ozan — İstanbul (Fintech)",
    desc_en:
      "Directed end-to-end technology operations and strategy. Led multidisciplinary engineering teams across BE, FE, QA, DevOps and Infrastructure. Oversaw core payment products — Physical POS, Virtual POS (Gateway), and digital wallet. Built LLM-based Document Intelligence Platform for high-volume financial documents and FraudInsight — an AI-powered fraud detection system using NLP & LLM, designed for cross-domain scalability.",
    desc_tr:
      "Uçtan uca teknoloji operasyonları ve strateji yönetimi. BE, FE, QA, DevOps ekiplerini yönetti. POS, Sanal POS ve dijital cüzdan ürünlerini geliştirdi. Yüksek hacimli finansal belgeler için LLM tabanlı Belge Zekası Platformu ve çok alanlı kullanım için tasarlanmış AI destekli dolandırıcılık tespit sistemi FraudInsight (NLP & LLM) kurdu.",
    tags: ["Fintech", "LLM", "Fraud Detection", "Payment Systems", "AML", "Virtual POS"],
    tags_tr: ["Fintech", "LLM", "Dolandırıcılık Tespiti", "Ödeme Sistemleri", "AML", "Sanal POS"],
  },
  {
    date_en: "Mar 2024 — Sep 2024 · 7 months",
    date_tr: "Mar 2024 — Eyl 2024 · 7 ay",
    role_en: "Chief Technology Officer",
    company: "Saran Group — İstanbul",
    desc_en:
      "Led digital transformation across Saran Group's diverse portfolio: Tuttur.com (betting), Sonduzluk.com (TJK Betting), Ajansspor.com, SDS (Saran Digital Studios), RadyoSpor, and RadyoTrafik. Managed multi-team engineering, defined IT strategy across verticals, and oversaw third-party vendor relationships.",
    desc_tr:
      "Saran Group portföyünde dijital dönüşüm liderliği: Tuttur.com, Sonduzluk.com (TJK), Ajansspor.com, SDS, RadyoSpor, RadyoTrafik. Çok ekipli mühendislik yönetimi ve üçüncü taraf tedarikçi ilişkileri.",
    tags: ["Digital Transformation", "Media Tech", "Betting Systems", "Agile"],
    tags_tr: ["Dijital Dönüşüm", "Medya Teknolojisi", "Bahis Sistemleri", "Agile"],
  },
  {
    date_en: "Apr 2023 — Feb 2024 · 11 months",
    date_tr: "Nis 2023 — Şub 2024 · 11 ay",
    role_en: "Chief Technology Officer",
    company: "Huudle.io — Türkiye",
    desc_en:
      "Led development of Huudle, an innovative meeting platform focused on smooth user experience. Recruited and managed skilled engineering teams, shaped software and system architecture, and ensured security and compliance with data privacy standards.",
    desc_tr:
      "Kullanıcı deneyimi odaklı yenilikçi toplantı platformu Huudle'ın geliştirilmesini yönetti. Mühendis işe alımı, ekip yönetimi, sistem mimarisi ve veri gizliliği standartlarına uyum.",
    tags: ["Startup", "GCP", "System Architecture", "Product"],
    tags_tr: ["Startup", "GCP", "Sistem Mimarisi", "Ürün"],
  },
  {
    date_en: "Feb 2022 — Feb 2023 · 1 year 1 month · London, UK",
    date_tr: "Şub 2022 — Şub 2023 · 1 yıl 1 ay · Londra, İngiltere",
    role_en: "Director of Software Engineering",
    role_tr: "Yazılım Mühendisliği Direktörü",
    company: "Pisano — London",
    desc_en:
      "Responsible for IT roadmap, budget, and strategy. Managed the full engineering department — Development, DevOps, QA, Integration, PO, and BA teams. Expanded the engineering team 3x in one year. Developed partnerships with Microsoft, Salesforce, and Azure Marketplace. Oversaw delivery of multiple applications.",
    desc_tr:
      "IT yol haritası, bütçesi ve strateji sorumluluğu. Geliştirme, DevOps, QA, Entegrasyon, PO ve BA ekiplerini yönetti. Mühendislik ekibini 1 yılda 3 katına çıkardı. Microsoft, Salesforce ve Azure Marketplace ortaklıkları geliştirdi.",
    tags: ["Azure", "Salesforce", "Team Scaling", "WebServices"],
    tags_tr: ["Azure", "Salesforce", "Ekip Büyütme", "Web Servisleri"],
  },
  {
    date_en: "Jul 2021 — Feb 2022 · 8 months",
    date_tr: "Tem 2021 — Şub 2022 · 8 ay",
    role_en: "Director of Software Engineering",
    role_tr: "Yazılım Mühendisliği Direktörü",
    company: "Demirören Teknoloji / Azerloterya — İstanbul",
    desc_en:
      "Led Azerbaijan Sports Betting and Virtual Sports web platforms and mobile apps. Deployed 100+ microservices on Azure. Managed 30-35 person engineering teams with Scrum and Kanban. Oversaw Azure DevOps, cloud deployments, and third-party integrations.",
    desc_tr:
      "Azerbaycan Spor Bahis ve Sanal Spor platformları ve mobil uygulamaları. Azure üzerinde 100+ mikroservis. 30-35 kişilik mühendislik ekibi yönetimi (Scrum/Kanban). Azure DevOps ve üçüncü taraf entegrasyonlar.",
    tags: ["Azure", "Microservices", "DevOps", "Betting", "Mobile"],
    tags_tr: ["Azure", "Mikroservisler", "DevOps", "Bahis", "Mobil"],
  },
  {
    date_en: "Feb 2020 — Jul 2021 · 1 year 6 months",
    date_tr: "Şub 2020 — Tem 2021 · 1 yıl 6 ay",
    role_en: "E-commerce Senior Manager",
    role_tr: "E-Ticaret Kıdemli Yöneticisi",
    company: "Odeon Software & Technology / OTI Holding — İstanbul",
    desc_en:
      "Managed all web and e-commerce applications for OTI Holding — coral.ru, sunmar.ru, coraltravel.ua, royalflight.ru, otiumhotels.com, sevenseashotels.com and more. Led cross-functional teams of 30-35 members across engineering, DevOps, PO, and QA.",
    desc_tr:
      "OTI Holding'in tüm web ve e-ticaret uygulamaları — coral.ru, sunmar.ru, coraltravel.ua, royalflight.ru, otiumhotels.com dahil. 30-35 kişilik mühendislik, DevOps, PO ve QA ekiplerini yönetti.",
    tags: ["E-commerce", "GCP", "Agile", "Travel Tech"],
    tags_tr: ["E-ticaret", "GCP", "Agile", "Seyahat Teknolojisi"],
  },
  {
    date_en: "Apr 2019 — Feb 2020 · 11 months",
    date_tr: "Nis 2019 — Şub 2020 · 11 ay",
    role_en: "E-commerce Software Development Manager",
    role_tr: "E-Ticaret Yazılım Geliştirme Müdürü",
    company: "LC Waikiki — İstanbul",
    desc_en:
      "Led digital and agile transformation for one of Turkey's largest fashion retailers. Managed engineering, DevOps, PO, and QA teams. Drove architecture, software strategy, and third-party integrations for high-traffic e-commerce platforms.",
    desc_tr:
      "Türkiye'nin en büyük moda perakendecilerinden biri için dijital ve agile dönüşüm. Mühendislik, DevOps, PO ve QA ekiplerini yönetti. Mimari strateji ve üçüncü taraf entegrasyonlar.",
    tags: ["E-commerce", "Agile", "Scrum", "GCP"],
    tags_tr: ["E-ticaret", "Agile", "Scrum", "GCP"],
  },
  {
    date_en: "Sep 2017 — Apr 2019 · 1 year 8 months",
    date_tr: "Eyl 2017 — Nis 2019 · 1 yıl 8 ay",
    role_en: "Project & Software Development Manager",
    role_tr: "Proje ve Yazılım Geliştirme Müdürü",
    company: "Demirören Gazetecilik — İstanbul",
    desc_en:
      "Led software and project management for Posta, Fanatik, and Canlı Skor (App). Drove agile transformation, improved team productivity and time-to-market, managed infrastructure and performance of high-traffic media websites.",
    desc_tr:
      "Posta, Fanatik ve Canlı Skor için yazılım ve proje yönetimi. Agile dönüşüm, ekip verimliliği ve piyasaya çıkış süresini iyileştirdi. Yüksek trafikli medya sitelerinin altyapı ve performans yönetimi.",
    tags: ["Media", "Agile", "Performance", "Project Management"],
    tags_tr: ["Medya", "Agile", "Performans", "Proje Yönetimi"],
  },
  {
    date_en: "May 2015 — Sep 2017 · 2 years 5 months",
    date_tr: "May 2015 — Eyl 2017 · 2 yıl 5 ay",
    role_en: "Software Development Manager",
    role_tr: "Yazılım Geliştirme Müdürü",
    company: "Hürriyet — İstanbul",
    desc_en:
      "Managed software development teams (10-15 members) across Hürriyet, Bigpara, Hürriyet Aile, Hürriyet TV, Mahmure, and Hürriyet Sosyal platforms. Led agile transformation, defined development strategy and KPIs, managed budget and infrastructure for high-traffic digital properties.",
    desc_tr:
      "Hürriyet, Bigpara, Hürriyet Aile, Hürriyet TV, Mahmure ve Hürriyet Sosyal platformlarında 10-15 kişilik ekip yönetimi. Agile dönüşüm, yazılım stratejisi, KPI tanımlama ve bütçe yönetimi.",
    tags: ["Media", "Agile", "Scrum", "Kanban", "Budget Management"],
    tags_tr: ["Medya", "Agile", "Scrum", "Kanban", "Bütçe Yönetimi"],
  },
  {
    date_en: "Jul 2014 — May 2015 · 11 months",
    date_tr: "Tem 2014 — May 2015 · 11 ay",
    role_en: "Software Development Assistant Manager",
    role_tr: "Yazılım Geliştirme Müdür Yardımcısı",
    company: "Hürriyet — İstanbul",
    desc_en:
      "Managed software development for Bigpara, Hürriyet Aile, Hürriyet TV, Mahmure, and Hürriyet Sosyal. Led 7-9 member teams, drove agile practices, and oversaw IT career planning and KPI structuring.",
    desc_tr:
      "Bigpara, Hürriyet Aile, Hürriyet TV, Mahmure ve Hürriyet Sosyal yazılım geliştirme yönetimi. 7-9 kişilik ekip, agile uygulamaları ve kariyer planı.",
    tags: ["Media", "Agile", "Product Development"],
    tags_tr: ["Medya", "Agile", "Ürün Geliştirme"],
  },
  {
    date_en: "Sep 2011 — Jul 2014 · 2 years 11 months",
    date_tr: "Eyl 2011 — Tem 2014 · 2 yıl 11 ay",
    role_en: "Chief Software Engineer",
    role_tr: "Baş Yazılım Mühendisi",
    company: "Hürriyet — İstanbul",
    desc_en:
      "Designed and built core infrastructure for Hürriyet digital platforms. Led architecture decisions for vertical-oriented high-traffic systems. Coordinated cross-department delivery and third-party integrations.",
    desc_tr:
      "Hürriyet dijital platformları için temel altyapı tasarımı ve geliştirme. Yüksek trafikli sistemler için mimari kararlar. Departmanlar arası koordinasyon ve üçüncü taraf entegrasyonlar.",
    tags: ["Architecture", "Infrastructure", "High-Traffic"],
    tags_tr: ["Mimari", "Altyapı", "Yüksek Trafik"],
  },
  {
    date_en: "Mar 2011 — Sep 2011 · 7 months",
    date_tr: "Mar 2011 — Eyl 2011 · 7 ay",
    role_en: "Senior Software Developer",
    role_tr: "Kıdemli Yazılım Geliştirici",
    company: "SFS Şirketler Grubu — İstanbul",
    desc_en:
      "Software development and product support. Analysed and developed customer requirements, optimised database processes.",
    desc_tr:
      "Yazılım geliştirme ve ürün desteği. Müşteri gereksinimlerini analiz etti ve geliştirdi, veritabanı süreçlerini optimize etti.",
    tags: ["SQL", "OOP", "Software Development"],
    tags_tr: ["SQL", "OOP", "Yazılım Geliştirme"],
  },
  {
    date_en: "Jan 2009 — Mar 2011 · 2 years 3 months",
    date_tr: "Oca 2009 — Mar 2011 · 2 yıl 3 ay",
    role_en: "Software Developer",
    role_tr: "Yazılım Geliştirici",
    company: "BİLİN Yazılım — İstanbul",
    desc_en:
      "Developed HR software solutions using ASP.NET. Transferred HR processes — leave, training, absenteeism — to web environments. Used MS SQL Server and Oracle databases; FoxPro for reporting.",
    desc_tr:
      "ASP.NET ile İK yazılım çözümleri geliştirdi. İzin, eğitim, devamsızlık gibi İK süreçlerini web ortamına taşıdı. MS SQL Server, Oracle ve FoxPro kullandı.",
    tags: ["ASP.NET", "SQL", "Oracle", "HR Systems"],
    tags_tr: ["ASP.NET", "SQL", "Oracle", "İK Sistemleri"],
  },
  {
    date_en: "Jan 2003 — Nov 2008 · 5 years 11 months",
    date_tr: "Oca 2003 — Kas 2008 · 5 yıl 11 ay",
    role_en: "Software Developer",
    role_tr: "Yazılım Geliştirici",
    company: "NETİSİS Bilgi Teknolojileri — İstanbul",
    desc_en:
      "Software development and consulting across the full project lifecycle using OOP principles. Worked closely with Türkiye İş Bankası users on the implemented project, gaining extensive customer relations experience.",
    desc_tr:
      "OOP prensipleriyle projenin tüm aşamalarında yazılım geliştirme ve danışmanlık. Türkiye İş Bankası kullanıcılarıyla yakın çalışma, geniş müşteri ilişkileri deneyimi.",
    tags: ["OOP", "Oracle", "SQL", "Banking"],
    tags_tr: ["OOP", "Oracle", "SQL", "Bankacılık"],
  },
];
