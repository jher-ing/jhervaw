import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { StandardsPreviewGrid } from "@/components/features/StandardsGrid";

export function StandardsSection() {
  return (
    <Section tone="raised">
      <SectionHeading
        eyebrow="Estándar de ingeniería"
        title="El mismo rigor en cada proyecto, sin importar el tamaño"
        description="Todo lo que entregamos pasa por el mismo estándar interno: arquitectura, diseño, SEO, seguridad, performance, accesibilidad, copywriting, despliegue y QA."
      />
      <div className="mt-12">
        <StandardsPreviewGrid limit={6} />
      </div>
      <div className="mt-10 flex justify-center">
        <Button href="/estandares" variant="outline">
          Ver el estándar completo
          <ArrowRight size={16} aria-hidden />
        </Button>
      </div>
    </Section>
  );
}
