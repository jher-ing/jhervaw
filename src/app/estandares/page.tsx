import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { StandardsPreviewGrid } from "@/components/features/StandardsGrid";
import { CTASection } from "@/components/features/CTASection";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Estándares",
  description:
    "El estándar de ingeniería que aplicamos en cada proyecto: arquitectura, sistema de diseño, SEO, seguridad, performance, accesibilidad, copywriting, deployment y QA.",
  path: "/estandares",
});

const thresholds = [
  { label: "Lighthouse Performance", value: "≥ 90" },
  { label: "Lighthouse Accessibility", value: "≥ 95" },
  { label: "Lighthouse Best Practices", value: "≥ 95" },
  { label: "Lighthouse SEO", value: "100" },
  { label: "LCP (Largest Contentful Paint)", value: "≤ 2.5s" },
  { label: "INP (Interaction to Next Paint)", value: "≤ 200ms" },
  { label: "CLS (Cumulative Layout Shift)", value: "≤ 0.1" },
  { label: "Accesibilidad", value: "WCAG 2.1 AA" },
];

const stack = [
  { label: "Frontend", value: "Next.js (App Router) + TypeScript + Tailwind CSS" },
  { label: "Backend", value: "API Routes / Server Actions o servicio dedicado según escala" },
  { label: "Base de datos", value: "PostgreSQL como default; Redis para cache/sesiones" },
  { label: "ORM", value: "Prisma o Drizzle" },
];

export default function EstandaresPage() {
  return (
    <>
      <Section className="pb-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <Eyebrow>Estándares</Eyebrow>
          <h1 className="max-w-3xl text-4xl font-semibold text-balance sm:text-5xl">
            El mismo rigor en cada proyecto, sin importar el tamaño
          </h1>
          <p className="max-w-2xl text-lg text-text-secondary text-pretty">
            Cada entregable pasa por el mismo estándar de arquitectura, diseño,
            SEO, seguridad, performance, accesibilidad, copywriting, despliegue y
            QA que usaría un equipo de producto serio.
          </p>
        </div>
      </Section>

      <Section tone="raised">
        <StandardsPreviewGrid />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Umbrales medibles"
          title="Todo output medible"
          description="Si no se puede medir, no se puede mejorar. Estos son los umbrales mínimos que debe cumplir cualquier proyecto antes de lanzarse."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {thresholds.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <p className="font-display text-2xl font-semibold text-primary">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-text-secondary">{item.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="flex flex-col gap-4">
            <Eyebrow className="text-accent">Stack de referencia</Eyebrow>
            <h2 className="text-3xl font-semibold text-balance sm:text-4xl">
              Herramientas probadas, no experimentos
            </h2>
          </div>
          <dl className="grid gap-5 sm:grid-cols-2">
            {stack.map((item) => (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/5 p-5">
                <dt className="text-xs font-medium uppercase tracking-wide text-white/50">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-white/85">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
