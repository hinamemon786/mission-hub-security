import { caseStudies } from "@/lib/constants/caseStudies";
import { CaseStudiesPageClient } from "@/components/sections/CaseStudiesPageClient";

export default function CaseStudiesPage() {
  return <CaseStudiesPageClient caseStudies={caseStudies} />;
}
