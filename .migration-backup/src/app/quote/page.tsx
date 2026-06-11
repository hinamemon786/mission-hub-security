import { Metadata } from "next";
import { QuotePageClient } from "@/components/sections/QuotePageClient";

export const metadata: Metadata = {
  title: "Get Quote | Mission Hub Digital Solution",
  description: "Request a customized security quote for your organization.",
};

export default function QuotePage() {
  return <QuotePageClient />;
}
