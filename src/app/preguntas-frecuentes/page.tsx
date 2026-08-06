import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui/Section";
import { FAQSection } from "@/components/features/FAQSection";
import { CTASection } from "@/components/features/CTASection";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Preguntas frecuentes sobre crear una página web",
  description:
    "Resolvemos las dudas más comunes sobre crear una página web para tu negocio: plataformas, costos, características, contratación de agencias y tiendas online.",
  path: "/preguntas-frecuentes",
});

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <Section className="pb-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h1 className="max-w-3xl text-4xl font-semibold text-balance sm:text-5xl">
            Todo lo que quieres saber antes de crear tu página web
          </h1>
          <p className="max-w-2xl text-lg text-text-secondary text-pretty">
            Respuestas claras y directas sobre cómo crear, diseñar y contratar
            una página web para tu negocio — organizadas por tema para que
            encuentres justo lo que buscas.
          </p>
        </div>
      </Section>

      <FAQSection showHeading={false} />

      <CTASection />
    </>
  );
}
