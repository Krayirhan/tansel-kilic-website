"use client";

import { ArrowUp } from "lucide-react";

type ScrollTopButtonProps = {
  ariaLabel: string;
};

export default function ScrollTopButton({ ariaLabel }: ScrollTopButtonProps) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-950 hover:bg-slate-100 transition-colors"
      aria-label={ariaLabel}
    >
      <ArrowUp size={16} />
    </button>
  );
}
