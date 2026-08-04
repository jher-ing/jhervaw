import { Hero } from "@/components/features/Hero";
import { Differentiators } from "@/components/features/Differentiators";
import { ProjectTypes } from "@/components/features/ProjectTypes";
import { ProcessOverview } from "@/components/features/ProcessOverview";
import { StandardsSection } from "@/components/features/StandardsSection";
import { Philosophy } from "@/components/features/Philosophy";
import { CTASection } from "@/components/features/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Differentiators />
      <ProjectTypes />
      <ProcessOverview />
      <StandardsSection />
      <Philosophy />
      <CTASection />
    </>
  );
}
