import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services & Turnkey Advisory",
  description: "Turnkey luxury space capsules, resort enclaves, and modular living solutions from concept feasibility to site commissioning.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
