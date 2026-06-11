import type { Metadata } from "next";
import "@/styles/globals.css";
import { LenisProvider } from "@/components/ui/lenis-provider";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title:
    "Mission Hub Digital Solution — Cybersecurity & Penetration Testing | Pakistan",
  description:
    "Professional cybersecurity services including penetration testing, vulnerability assessment, SOC setup, and incident response. Protect your business from cyber threats.",
  keywords: [
    "cybersecurity",
    "penetration testing",
    "vulnerability assessment",
    "SOC setup",
    "ethical hacking",
    "security audit",
    "Pakistan",
    "Mission Hub",
  ],
  authors: [{ name: "Mission Hub Digital Solution" }],
  openGraph: {
    title: "Mission Hub Digital Solution — Cybersecurity Services",
    description:
      "Professional ethical hacking and security testing services for Pakistani businesses",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#0a0a0f] antialiased">
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
