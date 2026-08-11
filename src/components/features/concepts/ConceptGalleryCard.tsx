import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { BrowserFrame } from "./BrowserFrame";
import type { NicheConfig } from "./niches";

/**
 * Tarjeta de la galería /portafolio: 65% mockup de página completa (imagen
 * real, provista por el usuario) + 35% panel descriptivo (voz de Jherva,
 * tone="ink"). Toda la tarjeta es un único enlace ("stretched link") hacia
 * el detalle, con `aria-label` propio para no heredar el ruido del
 * contenido interno.
 */
export function ConceptGalleryCard({ niche }: { niche: NicheConfig }) {
  const Icon = niche.icon;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-ink shadow-sm transition-[border-color,box-shadow,transform] duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl lg:grid lg:grid-cols-[65%_35%] lg:items-stretch">
      <div className="flex items-center bg-white/[0.03] p-6 sm:p-10 lg:p-12">
        <BrowserFrame url={niche.hero.url} className="w-full">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src={niche.image}
              alt={`Mockup del concepto de sitio web para ${niche.title.toLowerCase()}`}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        </BrowserFrame>
      </div>

      <div className="flex flex-col gap-5 p-8 sm:p-10 lg:p-12">
        <div className="flex size-12 items-center justify-center rounded-xl bg-indigo-light/15 text-indigo-light">
          <Icon size={22} aria-hidden />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">{niche.title}</h2>
          <p className="text-sm leading-relaxed text-white/65 sm:text-base">{niche.description}</p>
        </div>

        <ul className="flex flex-col gap-2.5">
          {niche.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-white/80">
              <Check size={16} className="mt-0.5 shrink-0 text-indigo-light" aria-hidden />
              {feature}
            </li>
          ))}
        </ul>

        <span
          aria-hidden
          className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-medium text-white transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
        >
          Ver más
          <ArrowRight size={16} className="text-indigo-light" aria-hidden />
        </span>
      </div>

      <Link
        href={niche.href}
        aria-label={`Ver más sobre ${niche.title.toLowerCase()}`}
        className="absolute inset-0 z-20 rounded-2xl"
      />
    </article>
  );
}
