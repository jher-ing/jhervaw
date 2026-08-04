import { Search, PenTool, Code2, Gauge, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

/**
 * Versión condensada del flujo de 12 fases de IDENTITY.md
 * ("Flujo de Trabajo Profesional"). El detalle completo vive en /proceso.
 */
const steps = [
  {
    icon: Search,
    range: "Fases 0–4",
    title: "Descubrimiento y estrategia",
    description:
      "Analizamos el objetivo real del proyecto, el público y qué información falta antes de tocar una sola pantalla.",
  },
  {
    icon: PenTool,
    range: "Fases 5–6",
    title: "Estructura y diseño",
    description:
      "Mapa del sitio, jerarquía de contenido y aplicación del sistema de diseño — propio o del cliente.",
  },
  {
    icon: Code2,
    range: "Fase 7",
    title: "Desarrollo",
    description: "Arquitectura limpia y código de calidad, sin atajos genéricos.",
  },
  {
    icon: Gauge,
    range: "Fases 8–10",
    title: "SEO, performance y accesibilidad",
    description:
      "Se optimizan como parte del proceso, no como un ajuste de última hora.",
  },
  {
    icon: CheckCircle2,
    range: "Fases 11–12",
    title: "Verificación y entrega",
    description:
      "Se revisa contra el estándar completo antes de entregar — con el mismo criterio con que se entregaría a un cliente real.",
  },
];

export function ProcessOverview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Cómo trabajamos"
        title="Un proceso, no una improvisación"
        description="Jherva no genera un sitio cuando alguien lo pide — sigue un proceso, igual que lo haría cualquier agencia seria."
      />

      <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => (
          <li key={step.title} className="relative flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white dark:bg-surface-raised dark:text-text-primary">
                {index + 1}
              </span>
              <step.icon size={18} className="text-primary" aria-hidden />
            </div>
            <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
              {step.range}
            </p>
            <h3 className="text-base font-semibold">{step.title}</h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              {step.description}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-12 flex justify-center">
        <Button href="/proceso" variant="outline">
          Ver las 12 fases completas
          <ArrowRight size={16} aria-hidden />
        </Button>
      </div>
    </Section>
  );
}
