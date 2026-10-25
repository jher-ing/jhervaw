import { Hero } from "@/components/features/Hero";
import { Differentiators } from "@/components/features/Differentiators";
import { IndustriesShowcase } from "@/components/features/IndustriesShowcase";
import { ProductsSection } from "@/components/features/ProductsSection";
import { ProcessOverview } from "@/components/features/ProcessOverview";
import { StandardsSection } from "@/components/features/StandardsSection";
import { Philosophy } from "@/components/features/Philosophy";
import { CTASection } from "@/components/features/CTASection";
import { canalesWeb } from "@/config/whatsapp";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Differentiators />
      <IndustriesShowcase />
      <ProductsSection />
      <ProcessOverview />
      <StandardsSection />
      <Philosophy />
      <CTASection canal={canalesWeb.portada} />
    </>
  );
}
