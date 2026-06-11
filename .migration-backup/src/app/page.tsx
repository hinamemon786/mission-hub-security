import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ServicesOverview />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}
