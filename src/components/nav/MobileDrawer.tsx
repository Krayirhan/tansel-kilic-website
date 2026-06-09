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
          className="md:hidden w-full bg-white border-b border-slate-200 shadow-lg"
        >
          <nav className="flex flex-col px-6 py-4 gap-2">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={onNavigate}
                className="block py-3 text-base font-semibold text-slate-800 border-b border-slate-100 last:border-b-0 hover:text-blue-600 transition-colors"
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
