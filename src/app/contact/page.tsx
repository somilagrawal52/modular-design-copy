import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Inquiries & Project Advisory",
  description: "Engage RP Exotic Homes project advisory for custom space capsule configurations, resort masterplanning, siting feasibility, and turnkey delivery.",
};

export default function ContactPage() {
  return <ContactClient />;
}
