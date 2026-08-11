"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Coffee,
  Stethoscope,
  Hospital,
  PawPrint,
  Home as HomeIcon,
  Scale,
  Briefcase,
  Building2,
  HardHat,
  Car,
  BookOpen,
  Croissant,
  Flower2,
  ShoppingBag,
  Gem,
  GraduationCap,
  Landmark,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { BrowserFrame } from "@/components/features/concepts/BrowserFrame";
import { getNiche } from "@/components/features/concepts/niches";

const availableConcepts = [
  "restaurante",
  "hotel",
  "tienda-de-ropa",
  "barberia",
  "gimnasio",
  "centro-de-estetica",
].map((id) => getNiche(id)!);

/**
 * Nichos aspiracionales: comunican amplitud de capacidad, no trabajos
 * entregados — por eso no son clicables. Es una declaración de alcance,
 * no una lista de proyectos (ver IDENTITY.md — nunca inventar clientes).
 */
const otherIndustries = [
  { icon: Coffee, label: "Cafeterías" },
  { icon: Stethoscope, label: "Clínicas" },
  { icon: Hospital, label: "Centros médicos" },
  { icon: PawPrint, label: "Veterinarias" },
  { icon: HomeIcon, label: "Inmobiliarias" },
  { icon: Scale, label: "Estudios jurídicos" },
  { icon: Briefcase, label: "Consultorías" },
  { icon: Building2, label: "Empresas de servicios" },
  { icon: HardHat, label: "Constructoras" },
  { icon: Car, label: "Concesionarios" },
  { icon: BookOpen, label: "Academias" },
  { icon: Croissant, label: "Panaderías" },
  { icon: Flower2, label: "Spa & Wellness" },
  { icon: ShoppingBag, label: "Boutiques" },
  { icon: Gem, label: "Joyerías" },
  { icon: GraduationCap, label: "Instituciones educativas" },
  { icon: Landmark, label: "Servicios financieros" },
];

export function IndustriesShowcase() {
  const [activeId, setActiveId] = React.useState(availableConcepts[0].id);
  const active = availableConcepts.find((n) => n.id === activeId) ?? availableConcepts[0];

  return (
    <Section>
      <div className="overflow-hidden rounded-2xl border border-border bg-ink shadow-sm">
        <div className="mx-auto flex max-w-[880px] flex-col items-center px-6 pt-14 text-center sm:px-10 sm:pt-20 lg:pt-24">
          <Eyebrow className="text-white/70">Diseño por industria</Eyebrow>

          <h2 className="mt-5 font-display text-3xl font-semibold text-balance text-white sm:text-4xl lg:text-5xl">
            Diseñamos para tu industria, no para una plantilla.
          </h2>

          <div className="mt-6 flex flex-col gap-4 sm:mt-8">
            <p className="text-base leading-relaxed text-white/65 sm:text-lg">
              Cada negocio tiene necesidades diferentes, pero todos comparten un mismo
              objetivo: convertir visitantes en clientes.
            </p>
            <p className="text-base leading-relaxed text-white/65 sm:text-lg">
              En Jherva adaptamos el diseño, la experiencia y la estrategia a cada sector,
              manteniendo un mismo estándar de calidad, rendimiento y conversión.
            </p>
            <p className="text-base leading-relaxed text-white/65 sm:text-lg">
              Explora algunos de los proyectos de nuestro portafolio y descubre cómo
              podría verse la presencia digital de tu negocio.
            </p>
          </div>

          <Button href="/portafolio" className="mt-8">
            Ver portafolio
            <ArrowRight size={16} aria-hidden />
          </Button>

          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-xs font-medium tracking-wide text-white/50 uppercase">
                Portafolio disponible
              </h3>
              <ul className="flex flex-wrap justify-center gap-2.5">
                {availableConcepts.map((niche) => {
                  const Icon = niche.icon;
                  return (
                    <li key={niche.id}>
                      <Link
                        href={niche.href}
                        onMouseEnter={() => setActiveId(niche.id)}
                        onFocus={() => setActiveId(niche.id)}
                        className={cn(
                          "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium text-white transition-[background-color,border-color,transform] duration-[250ms] ease-[var(--ease-standard)] hover:-translate-y-0.5 hover:border-indigo-light/50 hover:bg-white/[0.09]",
                          niche.id === activeId
                            ? "border-indigo-light/50 bg-white/[0.09]"
                            : "border-white/15 bg-white/[0.04]"
                        )}
                      >
                        <Icon size={16} className="text-indigo-light" aria-hidden />
                        {niche.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex flex-col items-center gap-3">
              <h3 className="text-xs font-medium tracking-wide text-white/50 uppercase">
                También diseñamos para
              </h3>
              <ul className="flex flex-wrap justify-center gap-2">
                {otherIndustries.map((industry) => (
                  <li key={industry.label}>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-2 text-xs font-medium text-white/55">
                      <industry.icon size={14} className="text-white/40" aria-hidden />
                      {industry.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 px-4 pb-4 sm:mt-16 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8">
          <BrowserFrame url={active.hero.url} className="w-full shadow-xl">
            <div className="relative aspect-[3/2] w-full">
              {availableConcepts.map((niche, index) => (
                <Image
                  key={niche.id}
                  src={niche.image}
                  alt={`Mockup del concepto de sitio web para ${niche.title.toLowerCase()}`}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 1100px, 100vw"
                  className={cn(
                    "object-cover transition-opacity duration-[350ms] ease-[var(--ease-standard)]",
                    niche.id === activeId ? "opacity-100" : "opacity-0"
                  )}
                />
              ))}
            </div>
          </BrowserFrame>
        </div>
      </div>
    </Section>
  );
}
