import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffect from "@/components/BackgroundEffect";
import { SITE_NAME, SITE_STUDIO_NAME, SITE_URL } from "@/config/siteMode";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Premium Space Capsules & Modular Living`,
    template: `%s | ${SITE_STUDIO_NAME}`,
  },
  description:
    "RP EXOTIC HOMES pioneers precision-engineered modular capsules, autonomous off-grid enclaves, and turnkey hospitality living solutions. Designed for 48-hour rapid site commissioning.",
  keywords: [
    "modular homes",
    "space capsules",
    "prefab architecture",
    "modular retreat",
    "luxury capsule home",
    "RP Exotic Homes",
  ],
  authors: [{ name: SITE_STUDIO_NAME }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_STUDIO_NAME,
    title: `${SITE_NAME} — Premium Space Capsules & Modular Living`,
    description:
      "RP EXOTIC HOMES pioneers precision-engineered modular capsules, autonomous off-grid enclaves, and turnkey hospitality living solutions.",
    images: [
      {
        url: "/images/modular-capsule-desert-retreat-hero.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Modular Capsule Architecture`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Premium Space Capsules & Modular Living`,
    description:
      "RP EXOTIC HOMES pioneers precision-engineered modular capsules, autonomous off-grid enclaves, and turnkey hospitality living solutions.",
    images: ["/images/modular-capsule-desert-retreat-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-light text-stone font-sans selection:bg-gold selection:text-light antialiased min-h-screen flex flex-col">
        <div className="grain" aria-hidden="true" />
        <BackgroundEffect />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
