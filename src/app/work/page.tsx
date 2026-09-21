import type { Metadata } from "next";
import WorkClient from "./WorkClient";
import { SITE_NAME } from "@/config/siteMode";

export const metadata: Metadata = {
  title: "Capsule Models & Modular Applications",
  description:
    "Explore premium capsule models and modular applications for hospitality, private retreats, commercial spaces, workplaces, and community amenities by RP EXOTIC HOMES.",
};

export default function WorkPage() {
  return <WorkClient />;
}
