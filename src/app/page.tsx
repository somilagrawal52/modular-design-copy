import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import FeaturedWork from "@/components/home/FeaturedWork";
import Services from "@/components/home/Services";
import Contact from "@/components/home/Contact";
import FAQ from "@/components/home/FAQ";
import { SITE_NAME } from "@/config/siteMode";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Premium Space Capsule & Modular Living Solutions`,
  description:
    "Premium space capsules and modular living solutions designed for hospitality, resorts, commercial developments and private projects.",
};

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <Philosophy />
      <FeaturedWork />
      <Services />
      <FAQ />
      <Contact />
    </div>
  );
}
