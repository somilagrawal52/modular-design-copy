"use client";

import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Magnetic from "./Magnetic";
import { SITE_NAME, SITE_STUDIO_NAME, INDIA_CONTACT, CANADA_CONTACT, SALES_EMAIL } from "../config/siteMode";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
    { name: "Designs", href: "/work" },
    { name: "Technology", href: "/system" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="site-nav-shell fixed top-0 left-0 w-full z-[999] px-4 sm:px-6 lg:px-10 xl:px-16 py-3 md:py-4 flex justify-between items-center bg-light/90 backdrop-blur-xl border-b border-stone/15 shadow-[0_4px_20px_rgba(222,117,86,0.05)]">
      <Link href="/" onClick={() => setIsOpen(false)}>
        <Magnetic>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm sm:text-base md:text-lg font-brand font-semibold tracking-[0.08em] md:tracking-[0.1em] text-stone flex items-center gap-2 md:gap-3 py-2 whitespace-nowrap"
          >
            <div
              className="relative h-8 w-12 shrink-0 overflow-hidden md:h-10 md:w-16"
              aria-hidden="true"
            >
              <img
                src="/images/rp-monogram-emblem.png"
                alt="RP Exotic Homes emblem"
                className="h-full w-full object-contain"
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
                href={link.href}
                aria-current={
                  pathname === link.href ? "page" : undefined
                }
                className={`text-[13px] 2xl:text-sm uppercase tracking-[0.08em] font-medium transition-all duration-300 relative group px-2.5 py-3 whitespace-nowrap ${pathname === link.href ? "text-gold font-semibold" : "text-stone/80 hover:text-gold"}`}
              >
                {link.name}
                <span
                  className={`absolute bottom-2 left-2.5 right-2.5 h-[2px] bg-gold transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${pathname === link.href ? "scale-x-100" : ""}`}
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
            {/* Branded Mobile Drawer Header */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-8 flex flex-col items-center gap-2 text-center"
            >
              <img
                src="/images/rp-monogram-emblem.png"
                alt="RP Exotic Homes"
                className="h-14 w-24 object-contain filter drop-shadow-[0_4px_12px_rgba(177,138,71,0.25)]"
              />
              <span className="text-xs font-brand font-semibold tracking-[0.14em] text-stone">
                {SITE_NAME}
              </span>
              <span className="text-[10px] font-mono text-gold-text tracking-widest uppercase">
                Modular Capsules & Living
              </span>
            </motion.div>

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
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={
                      pathname === link.href ? "page" : undefined
                    }
                    className={`text-[clamp(2rem,9vw,2.75rem)] font-sans font-semibold tracking-[-0.03em] leading-none transition-all duration-300 block py-2.5 ${
                      pathname === link.href
                        ? "text-gold font-bold"
                        : "text-stone hover:text-gold"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Footer & Direct Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-col items-center gap-4 w-full max-w-xs text-center"
            >
              <div className="w-12 h-[1px] bg-gold/40" />
              <div className="flex flex-col gap-3 w-full">
                {/* Indian Office */}
                <div className="w-full text-left space-y-0.5">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-stone/50 font-semibold block">
                    Indian Office (Jaipur)
                  </span>
                  <a
                    href={INDIA_CONTACT.tel}
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-mono font-bold text-stone hover:text-gold transition-colors block"
                  >
                    {INDIA_CONTACT.phone}
                  </a>
                </div>

                {/* International Office */}
                <div className="w-full text-left space-y-0.5">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-stone/50 font-semibold block">
                    International Office (Canada)
                  </span>
                  <a
                    href={CANADA_CONTACT.tel}
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-mono font-bold text-stone hover:text-gold transition-colors block"
                  >
                    {CANADA_CONTACT.phone}
                  </a>
                </div>

                <a
                  href={`mailto:${SALES_EMAIL}`}
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center gap-2 py-2 px-3 bg-stone text-light text-[11px] font-mono tracking-wider hover:bg-gold hover:text-stone transition-colors rounded-[2px] font-semibold break-all"
                >
                  <Mail size={12} className="shrink-0 text-gold" /> {SALES_EMAIL}
                </a>
              </div>
              <span className="text-[10px] uppercase tracking-[0.1em] text-stone/50 font-mono">
                Jaipur, India • Bowmanville, Canada
              </span>
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
