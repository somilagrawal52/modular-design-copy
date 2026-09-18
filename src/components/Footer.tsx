import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Download,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Reveal from "./Reveal";
import {
  INDIA_CONTACT,
  CANADA_CONTACT,
  SALES_EMAIL,
  SITE_STUDIO_NAME,
} from "../config/siteMode";

const navLinks = [
  { label: "Design Collection", to: "/work", isDownload: false },
  { label: "Technological System", to: "/system", isDownload: false },
  { label: "Architectural Services", to: "/services", isDownload: false },
  { label: "Studio & Vision", to: "/about", isDownload: false },
  { label: "Inquiries & Advisory", to: "/contact", isDownload: false },
  {
    label: "Download Brochure (PDF)",
    to: "/rp-exotic-homes-architectural-brochure.pdf",
    isDownload: true,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-secondary border-t border-stone/15 pt-16 md:pt-24 pb-10 relative overflow-hidden text-stone">
      <div className="site-container relative z-10">
        {/* Top Editorial Invitation & Direct Commission Desk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-14 md:pb-20 border-b border-stone/15">
          <div className="lg:col-span-7">
            <Reveal direction="right">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-gold" />
                <span className="text-xs uppercase tracking-[0.14em] text-gold-text font-semibold font-mono">
                  RP Exotic Homes · Architectural Advisory
                </span>
              </div>
              <h2 className="type-section max-w-2xl text-stone mb-6">
                Let's build{" "}
                <span className="text-gold font-sans font-medium">
                  something timeless.
                </span>
              </h2>
              <p className="text-stone/75 text-base md:text-lg font-light leading-relaxed max-w-xl">
                Engage our executive architectural team for site feasibility
                assessments, custom capsule configurations, and turnkey global
                commissioning.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end items-start lg:items-end gap-6">
            <Reveal direction="up" delay={0.2}>
              <div className="space-y-3 lg:text-right">
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-stone/50 block font-semibold">
                  Direct Commission Desk
                </span>
                <a
                  href={`mailto:${SALES_EMAIL}`}
                  className="group inline-flex items-center gap-3 md:gap-4 text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-stone hover:text-gold transition-colors duration-300"
                >
                  <span>{SALES_EMAIL}</span>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-stone/25 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300 shrink-0">
                    <ArrowUpRight
                      className="text-stone group-hover:text-light transition-colors"
                      size={20}
                    />
                  </div>
                </a>
                <span className="block text-[11px] font-mono text-gold-text">
                  Guaranteed 24-Hour Executive Advisory SLA
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <a
                href="/rp-exotic-homes-architectural-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="RP-Exotic-Homes-Architectural-Brochure.pdf"
                className="group inline-flex min-h-11 items-center gap-2.5 px-5 py-2.5 border border-stone/20 rounded-[2px] text-xs uppercase tracking-[0.1em] font-semibold text-stone/80 hover:text-gold hover:border-gold transition-all duration-300"
              >
                <Download
                  size={14}
                  className="text-gold transition-transform duration-300 group-hover:translate-y-0.5"
                />
                <span>Download Brochure (PDF)</span>
              </a>
            </Reveal>
          </div>
        </div>

        {/* 4-Column Architectural Studio Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-14 py-14 md:py-16">
          {/* Column 1: Brand & Editorial Statement (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/images/rp-monogram-emblem.png"
                alt="RP Exotic Homes"
                className="h-10 w-16 shrink-0 object-contain"
              />
              <div>
                <span className="block font-brand font-semibold text-base tracking-[0.08em] text-stone">
                  {SITE_STUDIO_NAME}
                </span>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-gold-text font-semibold">
                  Modular Architecture & Living
                </span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-stone/70 font-light leading-relaxed max-w-sm">
              Pioneering precision-engineered modular capsules, autonomous
              off-grid enclaves, and turnkey hospitality living solutions.
              Designed for 48-hour rapid site commissioning.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-[11px] font-mono text-gold-text font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Turnkey Logistics & Global Commissioning
              </span>
            </div>
          </div>

          {/* Column 2: Navigation & System Directory (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.14em] text-stone font-bold font-mono">
              Directory
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.isDownload ? (
                    <a
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      download="RP-Exotic-Homes-Architectural-Brochure.pdf"
                      className="text-xs uppercase tracking-[0.08em] text-stone/75 hover:text-gold transition-colors font-medium inline-flex items-center gap-1.5"
                    >
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      className="text-xs uppercase tracking-[0.08em] text-stone/75 hover:text-gold transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Indian Office (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-gold-text font-semibold block">
                Indian Office
              </span>
              <h4 className="text-xs uppercase tracking-[0.14em] text-stone font-bold font-mono">
                Jaipur, India
              </h4>
            </div>
            <div className="space-y-2 pt-0.5">
              <div>
                <a
                  href={INDIA_CONTACT.tel}
                  className="text-sm font-mono font-bold text-stone hover:text-gold transition-colors block tracking-tight"
                >
                  {INDIA_CONTACT.phone}
                </a>
              </div>
              <p className="text-xs text-stone/65 font-light leading-relaxed pt-1">
                {INDIA_CONTACT.address}
              </p>
              <p className="text-[11px] font-mono text-stone/50 pt-0.5">
                {INDIA_CONTACT.hours}
              </p>
            </div>
          </div>

          {/* Column 4: International Office (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-gold-text font-semibold block">
                International Office
              </span>
              <h4 className="text-xs uppercase tracking-[0.14em] text-stone font-bold font-mono">
                Bowmanville, Canada
              </h4>
            </div>
            <div className="space-y-2 pt-0.5">
              <div>
                <a
                  href={CANADA_CONTACT.tel}
                  className="text-sm font-mono font-bold text-stone hover:text-gold transition-colors block tracking-tight"
                >
                  {CANADA_CONTACT.phone}
                </a>
              </div>
              <p className="text-xs text-stone/65 font-light leading-relaxed pt-1">
                {CANADA_CONTACT.address}
              </p>
              <p className="text-[11px] font-mono text-stone/50 pt-0.5">
                {CANADA_CONTACT.hours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar — Copyright & Coordinates */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-[0.1em] text-stone/60 font-mono">
          <div className="flex items-center gap-2">
            <span>
              © {currentYear} {SITE_STUDIO_NAME}. ALL RIGHTS RESERVED.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[10px] tracking-widest text-gold-text">
            <span>Jaipur, India</span>
            <span>•</span>
            <span>Bowmanville, Canada</span>
            <span>•</span>
            <span>Modular Architectural Systems</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
