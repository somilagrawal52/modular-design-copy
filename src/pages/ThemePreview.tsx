import { ArrowUpRight, Check } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import SEO from "../components/SEO";

const themes = [
  {
    id: "coastal",
    name: "Coastal Navy",
    description: "Confident navy, warm ivory, and bright champagne gold.",
    swatches: ["#173E5C", "#FCF8EF", "#E3B85E"],
  },
  {
    id: "white",
    name: "White Gallery",
    description: "A simple white-first canvas with graphite contrast and restrained brass accents.",
    swatches: ["#FFFFFF", "#F3F2EE", "#30363B", "#C99742"],
  },
  {
    id: "minimal",
    name: "Minimal Graphite",
    description: "Clean neutral architecture with a restrained gold accent.",
    swatches: ["#27313A", "#FAFAF8", "#C9A35B"],
  },
  {
    id: "natural",
    name: "Natural Studio",
    description: "Quiet architectural neutrals that keep the buildings and photography in focus.",
    swatches: ["#262720", "#F7F5EE", "#777568", "#D0AC6B"],
  },
  {
    id: "mono",
    name: "Studio Mono",
    description: "A product-first white and charcoal system with one quiet brass brand accent.",
    swatches: ["#171819", "#FFFFFF", "#F5F5F3", "#B18A47"],
  },
];

export default function ThemePreview() {
  const location = useLocation();
  const activeTheme = new URLSearchParams(location.search).get("theme") ?? "coastal";

  return (
    <div className="min-h-screen bg-light pt-32 text-stone md:pt-40">
      <SEO
        title="Theme Comparison"
        description="Compare Dream Ventures Realty visual theme directions."
        robots="noindex, nofollow"
      />
      <main className="site-container pb-24 md:pb-32">
        <span className="eyebrow text-gold-text">Internal design review</span>
        <h1 className="mt-6 max-w-3xl type-display">Choose a visual direction.</h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-stone/70 md:text-lg">
          Each option applies the same palette to every page, so you can compare
          the Home, Technology, About, Work, and Contact experiences fairly.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:mt-16 lg:grid-cols-3 2xl:grid-cols-5">
          {themes.map((theme) => {
            const selected = activeTheme === theme.id;
            return (
              <article
                key={theme.id}
                className={`border p-6 md:p-8 ${selected ? "border-gold bg-light-secondary" : "border-stone/15 bg-white"}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex gap-2" aria-label={`${theme.name} colours`}>
                    {theme.swatches.map((swatch) => (
                      <span
                        key={swatch}
                        className="h-7 w-7 rounded-full border border-stone/15"
                        style={{ backgroundColor: swatch }}
                      />
                    ))}
                  </div>
                  {selected && <Check size={18} className="text-gold-text" aria-label="Selected" />}
                </div>
                <h2 className="mt-10 text-2xl font-semibold tracking-tight">{theme.name}</h2>
                <p className="mt-3 min-h-14 text-sm leading-relaxed text-stone/70">{theme.description}</p>
                <Link
                  to={`/?theme=${theme.id}`}
                  className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-gold/60 pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-gold-text transition-colors hover:border-stone hover:text-stone"
                >
                  View full site <ArrowUpRight size={15} />
                </Link>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
}
