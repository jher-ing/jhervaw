import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { CTASection } from "@/components/features/CTASection";
import { nichosServicio } from "@/components/features/servicios/nichos-servicio";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Páginas web por tipo de negocio",
  description:
    "Diseño y desarrollo de páginas web pensadas para tu tipo de negocio en Colombia: restaurantes, hoteles, tiendas de ropa, barberías, gimnasios y centros de estética.",
  path: "/paginas-web-para",
});

export default function ServiciosPage() {
  return (
    <>
      <Section className="pb-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <Eyebrow>Páginas web por tipo de negocio</Eyebrow>
          <h1 className="max-w-3xl text-4xl font-semibold text-balance sm:text-5xl">
            Cada negocio tiene un problema distinto — la web debería resolverlo
          </h1>
          <p className="max-w-2xl text-lg text-text-secondary text-pretty">
            Diseñamos pensando en el rubro específico de tu negocio, no en una plantilla
            genérica. Elegí el tuyo.
          </p>
        </div>
      </Section>

      <Section tone="raised">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {nichosServicio.map((n) => (
            <Card key={n.slug} interactive className="relative flex flex-col gap-4">
              <IconTile icon={n.icon} />
              <div>
                <h2 className="text-lg font-semibold">{n.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{n.painPoint}</p>
              </div>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary">
                Ver más
                <ArrowRight size={14} aria-hidden />
              </span>
              <Link
                href={`/paginas-web-para/${n.slug}`}
                aria-label={`Ver página de diseño web para ${n.title.toLowerCase()}`}
                className="absolute inset-0 rounded-xl"
              />
            </Card>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
