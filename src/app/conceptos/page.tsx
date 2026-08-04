import type { Metadata } from "next";
import { Info } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { ConceptGalleryCard } from "@/components/features/concepts/ConceptGalleryCard";
import { CTASection } from "@/components/features/CTASection";
import { niches } from "@/components/features/concepts/niches";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Conceptos",
  description:
    "Exploraciones de diseño de Jherva aplicadas a distintos rubros — restaurante, hotel y tienda de ropa. No son clientes reales.",
  path: "/conceptos",
});

export default function ConceptosPage() {
  return (
    <>
      <Section className="pb-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <Eyebrow>Conceptos</Eyebrow>
          <h1 className="max-w-3xl text-4xl font-semibold text-balance sm:text-5xl">
            Un mismo estándar, distintas identidades
          </h1>
          <p className="max-w-2xl text-lg text-text-secondary text-pretty">
            El sistema de diseño de Jherva (grid, jerarquía, accesibilidad,
            performance) no cambia entre proyectos — la identidad visual sí,
            porque en un proyecto de cliente refleja su marca, no la nuestra.
            Estos son ejemplos de esa adaptación aplicados a tres rubros
            distintos.
          </p>

          <div className="mt-2 flex max-w-2xl items-start gap-3 rounded-xl border border-border bg-surface-raised p-5 text-left">
            <Info size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden />
            <p className="text-sm leading-relaxed text-text-secondary">
              <strong className="text-text-primary">Estos no son clientes reales de Jherva.</strong>{" "}
              Son exploraciones de diseño con marcas y contenido ficticios,
              pensadas para mostrar cómo se vería un sitio en cada rubro — no
              trabajos entregados.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="flex flex-col gap-6">
          {niches.map((niche) => (
            <ConceptGalleryCard key={niche.id} niche={niche} />
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
