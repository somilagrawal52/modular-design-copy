import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { dreamRealtyEmail, SITE_STUDIO_NAME } from '../config/siteMode';

const footerGroups = [
  {
    title: 'Explore',
    links: [
      { label: 'Capsule Collection', to: '/work', isDownload: false },
      { label: 'Our Services', to: '/services', isDownload: false },
      { label: 'Download Brochure (PDF)', to: '/rp-exotic-homes-architectural-brochure.pdf', isDownload: true },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about', isDownload: false },
      { label: 'Technology Behind It', to: '/system', isDownload: false },
      { label: 'Contact Us', to: '/contact', isDownload: false },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-light-secondary border-t border-stone/15 pt-16 md:pt-24 pb-10 relative overflow-hidden text-stone">
      <div className="site-container grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 relative z-10">
        <div className="lg:col-span-7">
          <Reveal direction="right">
            <h2 className="type-section mb-10 max-w-3xl">
              Let's build{' '}
              <span className="text-gold font-sans font-medium">something timeless.</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.4}>
            <a
              href={`mailto:${dreamRealtyEmail()}`}
              className="group inline-flex flex-wrap items-center gap-4 md:gap-6 text-xl md:text-3xl font-light tracking-tight hover:text-gold transition-all duration-500"
            >
              {dreamRealtyEmail()}
              <div className="w-12 h-12 rounded-full border border-stone/25 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                <ArrowUpRight className="text-stone group-hover:text-light transition-colors" size={24} />
              </div>
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16">
          {footerGroups.map((group, index) => (
            <Reveal key={group.title} direction="up" delay={0.2 + index * 0.1}>
              <h4 className="text-xs uppercase tracking-[0.12em] text-gold-text font-semibold mb-5">{group.title}</h4>
              <div className="flex flex-col items-start gap-1">
                {group.links.map((link) => (
                  link.isDownload ? (
                    <a
                      key={link.to}
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      download="RP-Exotic-Homes-Architectural-Brochure.pdf"
                      className="inline-flex min-h-11 items-center text-xs uppercase tracking-[0.08em] font-semibold text-stone/75 transition-colors duration-500 hover:text-gold"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="inline-flex min-h-11 items-center text-xs uppercase tracking-[0.08em] font-semibold text-stone/75 transition-colors duration-500 hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  )
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="site-container mt-14 md:mt-20 pt-8 border-t border-stone/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-[0.1em] text-stone/60 font-brand font-semibold relative z-10">
        <Reveal direction="up" delay={0.5}>
          <div className="flex items-center gap-3">
            <img
              src="/images/rp-monogram-emblem.png"
              alt="RP Exotic Homes"
              className="h-8 w-12 sm:h-9 sm:w-14 shrink-0 object-contain"
            />
            <span>© {new Date().getFullYear()} {SITE_STUDIO_NAME}. ALL RIGHTS RESERVED.</span>
          </div>
        </Reveal>
        <span className="text-[10px] font-mono tracking-widest text-gold-text">
          Modular Capsules & Architectural Suites
        </span>
      </div>
    </footer>
  );
}
