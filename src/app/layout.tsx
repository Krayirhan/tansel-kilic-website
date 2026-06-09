import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LangProvider } from "@/context/LangContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Tansel KILIÇ — Technology Leader & AI Executive",
  description:
    "Technology executive with 20+ years of experience leading large-scale platforms, engineering organizations, and AI transformation initiatives.",
  openGraph: {
    title: "Tansel KILIÇ — Technology Leader & AI Executive",
    description:
      "Technology executive with 20+ years of experience leading large-scale platforms, engineering organizations, and AI transformation initiatives.",
    url: "https://tanselkilic.com",
    siteName: "Tansel KILIÇ",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tansel KILIÇ — Technology Leader & AI Executive",
    description:
      "Technology executive with 20+ years of experience leading large-scale platforms, engineering organizations, and AI transformation initiatives.",
  },
  alternates: {
    canonical: "https://tanselkilic.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
