"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="contact" className="py-20 md:py-24 bg-slate-50 border-t border-slate-200/80 px-6 min-h-[400px]" />
    );
  }

  const links = [
    {
      Icon: LinkedInIcon,
      label: c.linkedin,
      sub: c.linkedin_sub,
      href: "https://www.linkedin.com/in/tanselkilic/",
      iconColor: "#2563eb",
      iconBg: "#eff6ff",
      iconBorder: "border-blue-200",
      cardHoverClass: "hover:border-blue-300 hover:bg-blue-50/30 hover:translate-x-1.5"
    },
    {
      Icon: Mail,
      label: c.email,
      sub: c.email_sub,
      href: "mailto:hello@tanselkilic.com",
      iconColor: "#059669",
      iconBg: "#ecfdf5",
      iconBorder: "border-emerald-200",
      cardHoverClass: "hover:border-emerald-350 hover:bg-emerald-50/30 hover:translate-x-1.5"
    },
    {
      Icon: MapPin,
      label: c.location,
      sub: c.location_sub,
      href: "#",
      iconColor: "#7c3aed",
      iconBg: "#f5f3ff",
      iconBorder: "border-violet-200",
      cardHoverClass: "hover:border-violet-300 hover:bg-violet-50/30 hover:translate-x-1.5"
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-24 bg-slate-50 border-t border-slate-200/80 px-6"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          style={{ willChange: "transform, opacity" }}
        >
          <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-2">
            {c.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-5">
            {c.title}
          </h2>
          <p className="text-slate-500 leading-relaxed text-base mb-8">
            {c.desc}
          </p>

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2.5 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5 text-xs font-bold text-emerald-800">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-60 animate-ping" />
              <span className="relative w-2 h-2 rounded-full bg-emerald-500 block" />
            </span>
            {c.avail_reply}
          </div>
        </motion.div>

        {/* Right Column */}
        <div className="flex flex-col gap-3.5">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`flex items-center gap-4 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm hover:shadow-premium transition-all duration-300 ${l.cardHoverClass}`}
              style={{ willChange: "transform, opacity" }}
            >
              {/* Icon Container */}
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center border flex-shrink-0 ${l.iconBorder}`}
                style={{ backgroundColor: l.iconBg }}
              >
                <l.Icon size={18} style={{ color: l.iconColor }} />
              </div>
              
              <span className="font-bold text-sm text-slate-900">
                {l.label}
              </span>
              <span className="ml-auto text-[11px] font-bold text-slate-400">
                {l.sub}
              </span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
