import { Metadata } from "next";
import { AboutPageClient } from "@/components/sections/AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | Mission Hub Digital Solution",
  description: "Meet the team of cybersecurity experts at Mission Hub Digital Solution.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
