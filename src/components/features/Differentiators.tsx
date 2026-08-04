import { ShieldCheck, Sparkle, Target, Layers } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";

/**
 * Fuente: IDENTITY.md — "Lo que nos diferencia" (4 puntos, textual).
 */
const items = [
  {
    icon: ShieldCheck,
    title: "Rigor técnico real",
    description:
      "Cada entregable pasa por el mismo estándar de arquitectura, seguridad, performance y accesibilidad que usaría un equipo de producto serio.",
  },
  {
    icon: Sparkle,
    title: "Diseño moderno y minimalista",
    description:
      "Limpio, minimalista y tech — nunca sobrecargado, nunca genérico. Preferimos quitar antes que agregar.",
  },
  {
    icon: Target,
    title: "Orientación a conversión",
    description:
      "Desde el primer boceto: cada página tiene un objetivo de negocio claro, no es decoración.",
  },
  {
    icon: Layers,
    title: "Versatilidad sin perder estándar",
    description:
      "Trabajamos con cualquier tipo de cliente, pero el nivel de calidad no baja nunca, sin importar el tamaño del proyecto.",
  },
];

export function Differentiators() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Lo que nos diferencia"
        title="Calidad de producto, no de plantilla"
        description="No nos especializamos en una industria: nos especializamos en hacer las cosas bien, sin importar para quién."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {items.map((item) => (
          <Card key={item.title}>
            <IconTile icon={item.icon} />
            <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
