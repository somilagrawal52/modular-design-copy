import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us & Leadership Vision",
  description: "Learn how RP Exotic Homes combines decades of hospitality, luxury tourism, marine, and project consultancy experience with precision modular architecture.",
};

export default function AboutPage() {
  return <AboutClient />;
}
