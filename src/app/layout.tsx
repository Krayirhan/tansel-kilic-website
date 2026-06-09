import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LangProvider } from "@/context/LangContext";
import { LINKEDIN_URL, EMAIL, SITE_URL } from "@/lib/config";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter" });

const description =
  "Technology executive with 20+ years leading large-scale platforms, engineering organizations, and AI transformation initiatives across fintech, e-commerce, and digital ecosystems.";

export const metadata: Metadata = {
  title: "Tansel KILIÇ — Technology Leader & AI Executive",
  description,
  openGraph: {
    title: "Tansel KILIÇ — Technology Leader & AI Executive",
    description,
    url: SITE_URL,
    siteName: "Tansel KILIÇ",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Tansel KILIÇ — Teknoloji Lideri & AI Yöneticisi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tansel KILIÇ — Technology Leader & AI Executive",
    description,
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Tansel KILIÇ",
    jobTitle: "Technology Leader & AI Executive / Teknoloji Lideri & AI Yöneticisi",
    url: SITE_URL,
    email: EMAIL,
    sameAs: [LINKEDIN_URL],
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressCountry: "TR",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.variable}>
        <LangProvider initialLocale="tr">{children}</LangProvider>
      </body>
    </html>
  );
}
