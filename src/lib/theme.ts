export interface ThemeConfig {
  id: string;
  name: string;
  badge?: string;
  description: string;
  swatches: string[];
  paletteBreakdown: {
    canvas: string;
    text: string;
    accent: string;
  };
}

export const THEMES: ThemeConfig[] = [
  {
    id: "peach",
    name: "Warm Off-White & Sunset Peach",
    badge: "Current Primary Theme",
    description: "Warm off-white canvas with radiant sunset peach accents and rich espresso typography — zero cold greys or blues.",
    swatches: ["#FAF6F2", "#F3E8DF", "#DE7556", "#3A231A"],
    paletteBreakdown: {
      canvas: "Warm Off-White (#FAF6F2)",
      text: "Espresso Bark (#3A231A)",
      accent: "Sunset Peach (#DE7556)",
    },
  },
  {
    id: "coastal",
    name: "Ivory Canvas & Coastal Navy",
    badge: "Maritime Contrast",
    description: "Warm cream ivory canvas with deep nautical navy contrast and bright champagne gold accents.",
    swatches: ["#FCF8EF", "#173E5C", "#E3B85E", "#27323A"],
    paletteBreakdown: {
      canvas: "Cream Ivory (#FCF8EF)",
      text: "Coastal Navy (#173E5C)",
      accent: "Champagne Gold (#E3B85E)",
    },
  },
  {
    id: "white",
    name: "Pure White & Architectural Brass",
    badge: "Minimalist Gallery",
    description: "Ultra-clean pure white background with graphite slate typography and warm architectural brass.",
    swatches: ["#FFFFFF", "#F3F2EE", "#30363B", "#C99742"],
    paletteBreakdown: {
      canvas: "Pure White (#FFFFFF)",
      text: "Graphite Slate (#30363B)",
      accent: "Architectural Brass (#C99742)",
    },
  },
  {
    id: "minimal",
    name: "Soft Bone & Slate Graphite",
    badge: "Understated Architecture",
    description: "Subtle muted bone-white backdrop with cool slate-graphite text and understated pale gold.",
    swatches: ["#FAFAF8", "#ECEDEA", "#27313A", "#C9A35B"],
    paletteBreakdown: {
      canvas: "Bone White (#FAFAF8)",
      text: "Slate Graphite (#27313A)",
      accent: "Pale Gold (#C9A35B)",
    },
  },
  {
    id: "natural",
    name: "Linen Sand & Olive Bronze",
    badge: "Organic Earthy",
    description: "Earthy linen-sand background with organic olive-bronze tones and warm ochre sand gold accents.",
    swatches: ["#F7F5EE", "#E9E4D8", "#262720", "#D0AC6B"],
    paletteBreakdown: {
      canvas: "Linen Sand (#F7F5EE)",
      text: "Olive Bronze (#262720)",
      accent: "Ochre Sand Gold (#D0AC6B)",
    },
  },
  {
    id: "mono",
    name: "High-Contrast Studio Monochrome",
    badge: "Stark Studio Mono",
    description: "Product-first stark monochrome with maximum black-and-white contrast and antique bronze detailing.",
    swatches: ["#FFFFFF", "#F5F5F3", "#171819", "#B18A47"],
    paletteBreakdown: {
      canvas: "Studio White (#FFFFFF)",
      text: "Jet Black (#171819)",
      accent: "Antique Bronze (#B18A47)",
    },
  },
];

export const DEFAULT_THEME = "peach";
export const THEME_STORAGE_KEY = "dvr-theme";
export const THEME_IDS = new Set(THEMES.map((t) => t.id));

export function getActiveTheme(): string {
  if (typeof window === "undefined") return DEFAULT_THEME;

  // 1. Check URL query param first
  try {
    const searchParam = new URLSearchParams(window.location.search).get("theme");
    if (searchParam && THEME_IDS.has(searchParam)) {
      return searchParam;
    }
  } catch {}

  // 2. Check localStorage
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored && THEME_IDS.has(stored)) {
      return stored;
    }
  } catch {}

  // 3. Check document data-theme attribute
  try {
    const docTheme = document.documentElement.dataset.theme;
    if (docTheme && THEME_IDS.has(docTheme)) {
      return docTheme;
    }
  } catch {}

  return DEFAULT_THEME;
}

export function applyTheme(themeId: string): void {
  if (!THEME_IDS.has(themeId)) return;
  if (typeof window === "undefined") return;

  document.documentElement.dataset.theme = themeId;
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, themeId);
  } catch {}
  window.dispatchEvent(new CustomEvent("dvr-theme-change", { detail: { theme: themeId } }));
}
