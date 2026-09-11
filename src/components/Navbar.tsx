import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Magnetic from "./Magnetic";
import { SITE_NAME, SITE_STUDIO_NAME } from "../config/siteMode";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Designs", href: "/work" },
    { name: "Technology", href: "/system" },
    { name: "Our Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="site-nav-shell fixed top-0 left-0 w-full z-[999] px-4 sm:px-6 lg:px-10 xl:px-16 py-3 md:py-4 flex justify-between items-center bg-light/90 backdrop-blur-xl border-b border-stone/15 shadow-[0_4px_20px_rgba(222,117,86,0.05)]">
      <Link to="/" onClick={() => setIsOpen(false)}>
        <Magnetic>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm sm:text-base md:text-lg font-brand font-semibold tracking-[0.08em] md:tracking-[0.1em] text-stone flex items-center gap-2 md:gap-3 py-2 whitespace-nowrap"
          >
            <div className="relative h-8 w-12 shrink-0 overflow-hidden md:h-10 md:w-16" aria-hidden="true">
              <img
                src="/images/dvr-monogram-logo.png"
                alt=""
                className="absolute left-1/2 top-1/2 w-[60px] max-w-none -translate-x-1/2 -translate-y-1/2 md:w-[78px]"
                style={{ clipPath: "inset(0 0 30% 0)", mixBlendMode: "multiply" }}
              />
            </div>
            {SITE_NAME}
          </motion.div>
        </Magnetic>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden xl:flex gap-4 2xl:gap-6 items-center">
        {navLinks.map((link, i) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Magnetic>
              <Link
                to={link.href}
                aria-current={location.pathname === link.href ? "page" : undefined}
                className={`text-[13px] 2xl:text-sm uppercase tracking-[0.08em] font-medium transition-all duration-300 relative group px-2.5 py-3 whitespace-nowrap ${location.pathname === link.href ? "text-gold font-semibold" : "text-stone/80 hover:text-gold"}`}
              >
                {link.name}
                <span
                  className={`absolute bottom-2 left-2.5 right-2.5 h-[2px] bg-gold transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${location.pathname === link.href ? "scale-x-100" : ""}`}
                />
              </Link>
            </Magnetic>
          </motion.div>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button
        className="xl:hidden min-w-12 min-h-12 flex items-center justify-center text-stone z-[1001] relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-0 w-full h-[100dvh] bg-light/98 backdrop-blur-2xl z-[1000] flex flex-col items-center justify-center xl:hidden overflow-y-auto px-6 py-20"
          >
            <div className="flex flex-col items-center gap-2 sm:gap-3 w-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-full text-center"
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={location.pathname === link.href ? "page" : undefined}
                    className={`text-[clamp(2rem,9vw,2.75rem)] font-sans font-semibold tracking-[-0.03em] leading-none transition-all duration-300 block py-2.5 ${
                      location.pathname === link.href
                        ? "text-gold font-bold"
                        : "text-stone hover:text-gold"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-col items-center gap-2"
            >
              <div className="w-8 h-[1px] bg-gold/40" />
              <span className="text-[11px] uppercase tracking-[0.1em] text-stone/60 font-brand font-semibold">
                {SITE_STUDIO_NAME} © {new Date().getFullYear()}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
