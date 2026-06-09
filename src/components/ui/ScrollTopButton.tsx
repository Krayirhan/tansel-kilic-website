"use client";

import { ArrowUp } from "lucide-react";

type ScrollTopButtonProps = {
  ariaLabel: string;
  className?: string;
};

export default function ScrollTopButton({
  ariaLabel,
  className = "bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-950 hover:bg-slate-100",
}: ScrollTopButtonProps) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`flex items-center justify-center w-9 h-9 rounded-lg border transition-colors ${className}`}
      aria-label={ariaLabel}
    >
      <ArrowUp size={16} />
    </button>
  );
}
