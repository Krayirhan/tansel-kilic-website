type MobileMenuButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
  ariaLabel: string;
};

export default function MobileMenuButton({
  isOpen,
  onToggle,
  ariaLabel,
}: MobileMenuButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="flex md:hidden flex-col justify-center gap-1.5 w-10 h-10 bg-slate-50 border border-slate-200 hover:bg-slate-100 rounded-lg p-2.5 transition-colors"
      aria-label={ariaLabel}
      aria-expanded={isOpen}
    >
      <span
        className={`block h-0.5 w-full bg-slate-800 rounded-full transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-full bg-slate-800 rounded-full transition-opacity duration-200 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`block h-0.5 w-full bg-slate-800 rounded-full transition-transform duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </button>
  );
}
