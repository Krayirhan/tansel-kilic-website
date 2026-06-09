"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import { LINKEDIN_URL, EMAIL } from "@/lib/config";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();

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
      href: LINKEDIN_URL,
      iconColor: "#2563eb",
      iconBg: "#eff6ff",
      iconBorder: "border-blue-200",
      cardHoverClass: "hover:border-blue-300 hover:bg-blue-50/30 hover:translate-x-1.5",
      isLink: true,
    },
    {
      Icon: Mail,
      label: c.email,
      sub: c.email_sub,
      href: `mailto:${EMAIL}`,
      iconColor: "#059669",
      iconBg: "#ecfdf5",
      iconBorder: "border-emerald-200",
      cardHoverClass: "hover:border-emerald-300 hover:bg-emerald-50/30 hover:translate-x-1.5",
      isLink: true,
    },
    {
      Icon: MapPin,
      label: c.location,
      sub: c.location_sub,
      href: undefined,
      iconColor: "#7c3aed",
      iconBg: "#f5f3ff",
      iconBorder: "border-violet-200",
      cardHoverClass: "hover:border-violet-300 hover:bg-violet-50/30",
      isLink: false,
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
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: prefersReduced ? 0 : 0.5 }}
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
          {links.map((l, i) => {
            const cardClass = `flex items-center gap-4 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm hover:shadow-premium transition-all duration-300 ${l.cardHoverClass}`;
            const motionProps = {
              initial: { opacity: 0, x: prefersReduced ? 0 : 20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: prefersReduced ? 0 : 0.4, delay: prefersReduced ? 0 : i * 0.05 },
            };
            const inner = (
              <>
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center border flex-shrink-0 ${l.iconBorder}`}
                  style={{ backgroundColor: l.iconBg }}
                >
                  <l.Icon size={18} style={{ color: l.iconColor }} />
                </div>
                <span className="font-bold text-sm text-slate-900">{l.label}</span>
                <span className="ml-auto text-[11px] font-bold text-slate-400">{l.sub}</span>
              </>
            );

            return l.isLink ? (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href?.startsWith("http") ? "_blank" : undefined}
                rel={l.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                {...motionProps}
                className={cardClass}
              >
                {inner}
              </motion.a>
            ) : (
              <motion.div key={l.label} {...motionProps} className={cardClass}>
                {inner}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
