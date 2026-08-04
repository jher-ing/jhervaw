import type { Metadata } from "next";
import { ConceptDetail } from "@/components/features/concepts/ConceptDetail";
import { HotelConcept } from "@/components/features/concepts/HotelConcept";
import { CTASection } from "@/components/features/CTASection";
import { getNiche } from "@/components/features/concepts/niches";
import { pageMetadata } from "@/lib/metadata";

const niche = getNiche("hotel")!;

export const metadata: Metadata = pageMetadata({
  title: `Concepto — ${niche.title}`,
  description: niche.description,
  path: niche.href,
});

export default function HotelConceptoPage() {
  return (
    <>
      <ConceptDetail niche={niche} Concept={HotelConcept} />
      <CTASection />
    </>
  );
}
