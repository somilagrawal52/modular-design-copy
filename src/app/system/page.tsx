import type { Metadata } from "next";
import SystemClient from "./SystemClient";

export const metadata: Metadata = {
  title: "Technological System & Engineering",
  description: "Explore the precision engineering, aerograde galvanized steel frames, thermal envelope, and rapid plug-and-play assembly of RP Exotic Homes modular capsules.",
};

export default function SystemPage() {
  return <SystemClient />;
}
