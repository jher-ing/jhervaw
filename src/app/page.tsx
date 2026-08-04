import { Hero } from "@/components/features/Hero";
import { Differentiators } from "@/components/features/Differentiators";
import { IndustriesShowcase } from "@/components/features/IndustriesShowcase";
import { ProcessOverview } from "@/components/features/ProcessOverview";
import { StandardsSection } from "@/components/features/StandardsSection";
import { Philosophy } from "@/components/features/Philosophy";
import { CTASection } from "@/components/features/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Differentiators />
      <IndustriesShowcase />
      <ProcessOverview />
      <StandardsSection />
      <Philosophy />
      <CTASection />
    </>
  );
}
