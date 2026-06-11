import { Metadata } from "next";
import { ContactPageClient } from "@/components/sections/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Mission Hub Digital Solution",
  description: "Get in touch with Mission Hub for security consultations and services.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
