import type { Metadata } from "next";
import { Info } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { ConceptGalleryCard } from "@/components/features/concepts/ConceptGalleryCard";
import { CasoRealCard } from "@/components/features/portafolio/CasoRealCard";
import { casosPublicados } from "@/components/features/portafolio/casos-reales";
import { CTASection } from "@/components/features/CTASection";
import { canalesWeb } from "@/config/whatsapp";
import { niches } from "@/components/features/concepts/niches";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Portafolio",
  description:
    "Proyectos de muestra de Jherva para restaurantes, hoteles, tiendas de ropa, barberías, gimnasios y centros de estética: ejemplos de lo que podemos hacer para tu negocio, con marcas ficticias.",
  path: "/portafolio",
});

export default function PortafolioPage() {
  const hayCasosReales = casosPublicados.length > 0;

  return (
    <>
      <Section className="pb-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <Eyebrow>Portafolio</Eyebrow>
          <h1 className="max-w-3xl text-4xl font-semibold text-balance sm:text-5xl">
            Así se puede ver la página de tu negocio
          </h1>
          <p className="max-w-2xl text-lg text-text-secondary text-pretty">
            Cada negocio necesita algo distinto: un restaurante, reservas; una tienda, que le
            pidan por WhatsApp; un gimnasio, inscripciones. Estos ejemplos muestran cómo lo
            resolvemos en cada rubro.
          </p>

          <div className="mt-2 flex max-w-2xl items-start gap-3 rounded-xl border border-border bg-surface-raised p-5 text-left">
            <Info size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden />
            <p className="text-sm leading-relaxed text-text-secondary">
              <strong className="text-text-primary">
                Los que dicen «Proyecto de muestra» no son clientes reales.
              </strong>{" "}
              Son demos con marcas y textos inventados, hechos para mostrarte lo que podemos hacer
              por tu negocio.
              {hayCasosReales && " Los que dicen «Cliente real» son trabajos entregados."}
            </p>
          </div>
        </div>
      </Section>

      {hayCasosReales && (
        <Section className="pt-0">
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">Clientes reales</h2>
          <div className="flex flex-col gap-6">
            {casosPublicados.map((caso) => (
              <CasoRealCard key={caso.id} caso={caso} />
            ))}
          </div>
        </Section>
      )}

      <Section className="pt-0">
        <div className="mb-6 flex flex-col gap-2">
          <h2 className="text-2xl font-semibold sm:text-3xl">Proyectos de muestra</h2>
          <p className="text-text-secondary">Ejemplos de lo que se puede hacer en cada rubro.</p>
        </div>
        <div className="flex flex-col gap-6">
          {niches.map((niche) => (
            <ConceptGalleryCard key={niche.id} niche={niche} />
          ))}
        </div>
      </Section>

      <CTASection canal={canalesWeb.portafolio} />
    </>
  );
}
