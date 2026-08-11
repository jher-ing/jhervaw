import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { BrowserFrame } from "./BrowserFrame";
import type { NicheConfig } from "./niches";

/**
 * Cabecera + mockup estático de un proyecto del portafolio. El disclaimer se
 * repite aquí (no solo en la galería /portafolio) porque esta página es
 * alcanzable por URL directa, sin pasar necesariamente por la galería primero.
 *
 * Nivel 1 únicamente: imagen dentro de un marco de navegador — sin menús
 * clickeables, categorías ni segundas pantallas (decisión del 2026-08-09).
 */
export function ConceptDetail({ niche }: { niche: NicheConfig }) {
  const Icon = niche.icon;

  return (
    <>
      <Section className="pb-8">
        <div className="flex flex-col gap-6">
          <Link
            href="/portafolio"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-text-primary"
          >
            <ArrowLeft size={16} aria-hidden />
            Volver al portafolio
          </Link>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon size={20} aria-hidden />
              </div>
              <Eyebrow>Portafolio</Eyebrow>
            </div>
            <h1 className="text-3xl font-semibold text-balance sm:text-4xl">{niche.title}</h1>
            <p className="max-w-2xl text-lg text-text-secondary text-pretty">{niche.description}</p>
          </div>

          <div className="flex max-w-2xl items-start gap-3 rounded-xl border border-border bg-surface-raised p-5">
            <Info size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden />
            <p className="text-sm leading-relaxed text-text-secondary">
              <strong className="text-text-primary">Esto no es un cliente real de Jherva.</strong>{" "}
              Es una exploración de diseño con marca y contenido ficticios.
            </p>
          </div>

          {niche.servicioSlug && (
            <Button href={`/paginas-web-para/${niche.servicioSlug}`} variant="outline" className="w-fit">
              Ver qué gana tu negocio con una web así
              <ArrowRight size={16} aria-hidden />
            </Button>
          )}
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="sr-only">Vista previa del proyecto</h2>
        <BrowserFrame url={niche.hero.url} className="w-full shadow-lg">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src={niche.image}
              alt={`Mockup del concepto de sitio web para ${niche.title.toLowerCase()}`}
              fill
              priority
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover"
            />
          </div>
        </BrowserFrame>
      </Section>
    </>
  );
}
