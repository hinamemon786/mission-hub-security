import { HeroSection } from "@/components/sections/HeroSection";
import { FreeScanSection } from "@/components/sections/FreeScanSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { PricingSection } from "@/components/sections/PricingSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <main className="relative">
      <HeroSection />
      <FreeScanSection />
      <ProcessSection />
      <ServicesOverview />
      <PricingSection />
      <TestimonialsSection />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}
