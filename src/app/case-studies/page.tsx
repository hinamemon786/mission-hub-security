import { Metadata } from "next";
import { caseStudies } from "@/lib/constants/caseStudies";
import { CaseStudiesPageClient } from "@/components/sections/CaseStudiesPageClient";

export const metadata: Metadata = {
  title: "Case Studies | Mission Hub Digital Solution",
  description: "Real-world security audits and successful vulnerability fixes for Pakistani organizations.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesPageClient caseStudies={caseStudies} />;
}
