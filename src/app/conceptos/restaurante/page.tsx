import type { Metadata } from "next";
import { ConceptDetail } from "@/components/features/concepts/ConceptDetail";
import { RestaurantConcept } from "@/components/features/concepts/RestaurantConcept";
import { CTASection } from "@/components/features/CTASection";
import { getNiche } from "@/components/features/concepts/niches";
import { pageMetadata } from "@/lib/metadata";

const niche = getNiche("restaurante")!;

export const metadata: Metadata = pageMetadata({
  title: `Concepto — ${niche.title}`,
  description: niche.description,
  path: niche.href,
});

export default function RestauranteConceptoPage() {
  return (
    <>
      <ConceptDetail niche={niche} Concept={RestaurantConcept} />
      <CTASection />
    </>
  );
}
