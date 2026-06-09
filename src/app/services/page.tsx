import { Metadata } from "next";
import { services } from "@/lib/constants/services";
import { ServicesPageClient } from "@/components/sections/ServicesPageClient";

export const metadata: Metadata = {
  title: "Our Services | Mission Hub Digital Solution",
  description: "Comprehensive cybersecurity services including penetration testing, vulnerability assessment, SOC setup, and incident response.",
};

export default function ServicesPage() {
  return <ServicesPageClient services={services} />;
}
