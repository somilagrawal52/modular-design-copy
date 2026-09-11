import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] bg-light pb-24 pt-36 text-stone md:pt-44">
      <SEO
        title="Page not found"
        description="The page you requested could not be found."
        robots="noindex, nofollow"
      />
      <div className="site-container">
        <span className="text-xs uppercase tracking-[0.14em] text-gold-text font-semibold">404 · Not found</span>
        <h1 className="type-page-title mt-6 max-w-3xl text-stone">This space is no longer available.</h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-stone/75 md:text-lg">
          The page may have moved, or the model link may be out of date. Use one of these paths to continue.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/"
            className="group inline-flex min-h-12 items-center gap-3 bg-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-light transition-colors duration-300 hover:bg-gold-text shadow-sm"
          >
            Return home
            <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          <Link
            to="/work"
            className="group inline-flex min-h-12 items-center gap-3 border border-stone/25 px-7 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-stone transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            View models
            <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
