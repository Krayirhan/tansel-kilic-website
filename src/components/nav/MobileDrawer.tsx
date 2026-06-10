import { AnimatePresence, motion } from "framer-motion";

export type NavLinkItem = {
  id: string;
  label: string;
};

type MobileDrawerProps = {
  isOpen: boolean;
  links: NavLinkItem[];
  onNavigate: () => void;
};

export default function MobileDrawer({ isOpen, links, onNavigate }: MobileDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="w-full border-b border-stone-200 bg-[var(--color-paper)] md:hidden"
        >
          <nav className="flex flex-col gap-2 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={onNavigate}
                className="block border-b border-stone-200/80 py-3 text-base font-semibold text-slate-800 transition-colors last:border-b-0 hover:text-[var(--color-accent)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
