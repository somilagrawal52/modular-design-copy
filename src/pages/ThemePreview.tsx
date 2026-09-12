import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SEO from "../components/SEO";
import { THEMES, getActiveTheme, applyTheme } from "../lib/theme";

export default function ThemePreview() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTheme, setActiveTheme] = useState<string>(() => getActiveTheme());

  // Keep state synchronized with URL search params, localStorage, and custom events
  useEffect(() => {
    const syncTheme = () => {
      const current = getActiveTheme();
      setActiveTheme(current);
    };

    syncTheme();

    const handleThemeEvent = (e: Event) => {
      const custom = e as CustomEvent<{ theme: string }>;
      if (custom.detail?.theme) {
        setActiveTheme(custom.detail.theme);
      } else {
        syncTheme();
      }
    };

    window.addEventListener("dvr-theme-change", handleThemeEvent);
    window.addEventListener("storage", syncTheme);

    return () => {
      window.removeEventListener("dvr-theme-change", handleThemeEvent);
      window.removeEventListener("storage", syncTheme);
    };
  }, [location.search]);

  const handleSelectTheme = (themeId: string) => {
    applyTheme(themeId);
    setActiveTheme(themeId);
    navigate({ search: `?theme=${themeId}` }, { replace: true });
  };

  return (
    <div className="min-h-screen bg-light pt-32 text-stone md:pt-40 transition-colors duration-300">
      <SEO
        title="Theme Comparison & Visual Directions"
        description="Compare and select Dream Ventures Realty visual theme directions with live preview."
        robots="noindex, nofollow"
      />
      <main className="site-container pb-24 md:pb-32">
        <div className="flex flex-wrap items-center gap-3">
          <span className="eyebrow text-gold-text">Design System Review</span>
          <span className="text-xs uppercase tracking-[0.1em] text-stone/40">•</span>
          <span className="text-xs font-mono uppercase tracking-[0.08em] text-stone/60">
            Active: {THEMES.find((t) => t.id === activeTheme)?.name ?? activeTheme}
          </span>
        </div>

        <h1 className="mt-6 max-w-3xl type-display">Choose a visual direction.</h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-stone/70 md:text-lg">
          Click <strong className="font-semibold text-stone">"Apply Theme"</strong> on any card to switch the palette immediately across the site, or <strong className="font-semibold text-stone">"View full site"</strong> to explore all pages with that visual direction.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {THEMES.map((theme) => {
            const isSelected = activeTheme === theme.id;
            return (
              <article
                key={theme.id}
                onClick={() => handleSelectTheme(theme.id)}
                className={`group relative flex flex-col justify-between border p-6 md:p-8 transition-all duration-300 cursor-pointer rounded-sm ${
                  isSelected
                    ? "border-gold ring-2 ring-gold/40 bg-light-secondary shadow-lg shadow-gold/5"
                    : "border-stone/15 bg-white hover:border-gold/50 hover:shadow-md"
                }`}
              >
                <div>
                  {/* Top Bar: Swatches + Selection Indicator */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex gap-2" aria-label={`${theme.name} palette swatches`}>
                      {theme.swatches.map((swatch) => (
                        <span
                          key={swatch}
                          className="h-7 w-7 rounded-full border border-stone/15 shadow-2xs transition-transform duration-200 group-hover:scale-105"
                          style={{ backgroundColor: swatch }}
                          title={swatch}
                        />
                      ))}
                    </div>

                    {isSelected ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-gold-text">
                        <Check size={13} className="stroke-[2.5]" />
                        Active
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-stone/40 group-hover:text-gold-text transition-colors">
                        Click to apply
                      </span>
                    )}
                  </div>

                  {/* Badge & Title */}
                  <div className="mt-8">
                    {theme.badge && (
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gold-text block mb-2">
                        {theme.badge}
                      </span>
                    )}
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-stone">
                      {theme.name}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-stone/75 min-h-[4rem]">
                    {theme.description}
                  </p>

                  {/* Color Breakdown chips */}
                  <div className="mt-6 border-t border-stone/10 pt-4 space-y-2 text-xs">
                    <div className="flex justify-between items-center text-stone/70">
                      <span className="font-mono uppercase text-[10px] tracking-wider text-stone/50">Canvas:</span>
                      <span className="font-medium text-stone/85">{theme.paletteBreakdown.canvas}</span>
                    </div>
                    <div className="flex justify-between items-center text-stone/70">
                      <span className="font-mono uppercase text-[10px] tracking-wider text-stone/50">Typography:</span>
                      <span className="font-medium text-stone/85">{theme.paletteBreakdown.text}</span>
                    </div>
                    <div className="flex justify-between items-center text-stone/70">
                      <span className="font-mono uppercase text-[10px] tracking-wider text-stone/50">Accent:</span>
                      <span className="font-medium text-gold-text">{theme.paletteBreakdown.accent}</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-8 pt-5 border-t border-stone/10 flex items-center justify-between gap-4">
                  {isSelected ? (
                    <span className="inline-flex min-h-10 items-center gap-2 bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-light rounded-xs shadow-xs">
                      <Check size={14} />
                      Current Theme
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectTheme(theme.id);
                      }}
                      className="inline-flex min-h-10 items-center gap-2 border border-stone/20 bg-stone/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-stone transition-colors hover:border-gold hover:bg-gold hover:text-light rounded-xs"
                    >
                      <Sparkles size={13} />
                      Apply Theme
                    </button>
                  )}

                  <Link
                    to={`/?theme=${theme.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      applyTheme(theme.id);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-gold-text transition-colors hover:text-stone"
                  >
                    View site <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
}
