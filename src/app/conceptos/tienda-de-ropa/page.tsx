import type { Metadata } from "next";
import { ConceptDetail } from "@/components/features/concepts/ConceptDetail";
import { ClothingConcept } from "@/components/features/concepts/ClothingConcept";
import { CTASection } from "@/components/features/CTASection";
import { getNiche } from "@/components/features/concepts/niches";
import { pageMetadata } from "@/lib/metadata";

const niche = getNiche("tienda-de-ropa")!;

export const metadata: Metadata = pageMetadata({
  title: `Concepto — ${niche.title}`,
  description: niche.description,
  path: niche.href,
});

export default function TiendaDeRopaConceptoPage() {
  return (
    <>
      <ConceptDetail niche={niche} Concept={ClothingConcept} />
      <CTASection />
    </>
  );
}
