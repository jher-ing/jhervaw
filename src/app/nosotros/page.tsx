import type { Metadata } from "next";
import { ShieldCheck, Sparkle, Target, Layers, MessageSquareQuote } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { CTASection } from "@/components/features/CTASection";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Nosotros",
  description:
    "Jherva es un estudio de desarrollo web y producto digital. No nos especializamos en una industria: nos especializamos en hacer las cosas bien.",
  path: "/nosotros",
});

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Rigor técnico real",
    description:
      "Cada entregable pasa por el mismo estándar de arquitectura, seguridad, performance y accesibilidad que usaría un equipo de producto serio — no \"vale, para una landing no importa\".",
  },
  {
    icon: Sparkle,
    title: "Diseño moderno, limpio, minimalista y tech",
    description: "Nunca sobrecargado, nunca genérico. Preferimos quitar antes que agregar.",
  },
  {
    icon: Target,
    title: "Orientación a conversión desde el primer boceto",
    description: "Cada página tiene un objetivo de negocio claro, no es decoración.",
  },
  {
    icon: Layers,
    title: "Versatilidad sin perder estándar",
    description:
      "Trabajamos con cualquier tipo de cliente, pero el nivel de calidad no baja nunca, sin importar el tamaño del proyecto.",
  },
];

const voiceTraits = [
  "Frases cortas. Directas. Sin relleno.",
  "Se explica el beneficio, no la característica técnica, salvo que la audiencia sea técnica.",
  "Cero jerga corporativa vacía (\"sinergia\", \"solución integral innovadora\", \"líderes del mercado\" sin sustento).",
  "Confianza sin arrogancia: afirmamos lo que hacemos bien porque podemos demostrarlo, no porque \"sonamos\" seguros.",
];

export default function NosotrosPage() {
  return (
    <>
      <Section className="pb-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <Eyebrow>Nosotros</Eyebrow>
          <h1 className="max-w-3xl text-4xl font-semibold text-balance sm:text-5xl">
            Un estudio que se especializa en hacer las cosas bien
          </h1>
          <p className="max-w-2xl text-lg text-text-secondary text-pretty">
            Jherva es un estudio de desarrollo web y producto digital. Diseñamos y
            construimos sitios web, landing pages, propuestas y productos digitales
            para clientes de cualquier sector — desde negocios locales hasta
            startups y empresas medianas. No nos especializamos en una sola
            industria: nos especializamos en hacer las cosas bien, sin importar
            para quién.
          </p>
        </div>
      </Section>

      <Section tone="raised">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <MessageSquareQuote className="text-primary" size={28} aria-hidden />
          <p className="font-display text-2xl font-semibold text-balance sm:text-3xl">
            Construir presencia digital que genera resultados reales para nuestros
            clientes — no sitios bonitos que nadie convierte, sino productos
            digitales que combinan diseño moderno, performance técnico y estrategia
            de conversión.
          </p>
          <p className="text-sm font-medium uppercase tracking-wide text-text-muted">
            Nuestra misión
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Lo que nos diferencia"
          title="Cuatro cosas que no negociamos"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {differentiators.map((item) => (
            <Card key={item.title}>
              <IconTile icon={item.icon} />
              <h2 className="mt-5 text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          <div className="flex flex-col gap-4">
            <Eyebrow className="text-accent">Personalidad de marca</Eyebrow>
            <h2 className="text-3xl font-semibold text-balance sm:text-4xl">
              Moderna. Minimalista. Tech. Directa.
            </h2>
            <p className="text-base leading-relaxed text-white/70 text-pretty">
              Si tuviéramos que describir a Jherva como persona: alguien que sabe
              exactamente lo que hace, no necesita explicarlo de más, y deja que
              el trabajo hable. Precisión antes que ruido.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-sm font-medium uppercase tracking-wide text-white/50">
              Cómo escribimos
            </p>
            <ul className="flex flex-col gap-4">
              {voiceTraits.map((trait) => (
                <li
                  key={trait}
                  className="rounded-lg border border-white/10 bg-white/5 px-5 py-4 text-sm leading-relaxed text-white/80"
                >
                  {trait}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
