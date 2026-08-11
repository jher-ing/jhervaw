import type { LucideIcon } from "lucide-react";
import { UtensilsCrossed, BedDouble, Shirt, Scissors, Dumbbell, Sparkles } from "lucide-react";

export interface NicheHeroContent {
  url: string;
}

export interface NicheConfig {
  id: string;
  href: string;
  icon: LucideIcon;
  title: string;
  /** Descripción corta usada en la tarjeta de la galería /portafolio. */
  description: string;
  /** Checklist de características mostrado en la tarjeta de la galería. */
  features: string[];
  /** Mockup de página completa (1536x1024) usado en la tarjeta de la galería. */
  image: string;
  hero: NicheHeroContent;
  /** Slug de la landing comercial equivalente en /paginas-web-para, si existe. */
  servicioSlug?: string;
}

/**
 * Fuente de verdad única para los conceptos de ejemplo (no son clientes
 * reales de Jherva). La usan tanto la galería /portafolio como cada página de
 * detalle, para que el mockup mostrado sea siempre el mismo. Nivel 1
 * únicamente: imagen estática dentro de un marco de navegador — sin demos
 * interactivas (ver IDENTITY.md / decisión del 2026-08-09).
 */
export const niches: NicheConfig[] = [
  {
    id: "restaurante",
    href: "/portafolio/restaurante",
    icon: UtensilsCrossed,
    title: "Restaurante",
    description:
      "Sitio pensado para restaurantes modernos que buscan transmitir calidad y facilitar las reservas.",
    image: "/restaurante.webp",
    servicioSlug: "restaurantes",
    features: [
      "Hero gastronómico impactante",
      "Menú digital",
      "Reservas online",
      "Adaptado a móviles",
      "Optimizado para conversión",
    ],
    hero: { url: "restaurante-concepto.com" },
  },
  {
    id: "hotel",
    href: "/portafolio/hotel",
    icon: BedDouble,
    title: "Hotel",
    description: "Sitio diseñado para hoteles boutique y alojamientos premium.",
    image: "/hotel.webp",
    servicioSlug: "hoteles",
    features: [
      "Hero con fotografía inmersiva",
      "Buscador de disponibilidad",
      "Habitaciones destacadas",
      "Reserva directa",
      "Diseño elegante",
    ],
    hero: { url: "hotel-concepto.com" },
  },
  {
    id: "tienda-de-ropa",
    href: "/portafolio/tienda-de-ropa",
    icon: Shirt,
    title: "Tienda de ropa",
    description: "Ecommerce moderno enfocado en vender productos.",
    image: "/ropa.webp",
    servicioSlug: "tiendas-de-ropa",
    features: ["Hero editorial", "Catálogo organizado", "Filtros", "Carrito", "Checkout intuitivo"],
    hero: { url: "tienda-concepto.com" },
  },
  {
    id: "barberia",
    href: "/portafolio/barberia",
    icon: Scissors,
    title: "Barbería",
    description: "Sitio pensado para barberías que buscan turnos claros y una imagen profesional.",
    image: "/barberias.webp",
    servicioSlug: "barberias",
    features: [
      "Reserva de turno visible",
      "Galería de cortes y estilos",
      "Ubicación y horario siempre a mano",
      "Adaptado a móviles",
      "Optimizado para conversión",
    ],
    hero: { url: "barberia-concepto.com" },
  },
  {
    id: "gimnasio",
    href: "/portafolio/gimnasio",
    icon: Dumbbell,
    title: "Gimnasio",
    description: "Sitio pensado para gimnasios y entrenadores que buscan inscripciones sin fricción.",
    image: "/gimnasios.webp",
    servicioSlug: "gimnasios",
    features: [
      "Planes y horarios claros",
      "Inscripción sin fricción",
      "Aparece en búsquedas locales",
      "Adaptado a móviles",
      "Optimizado para conversión",
    ],
    hero: { url: "gimnasio-concepto.com" },
  },
  {
    id: "centro-de-estetica",
    href: "/portafolio/centro-de-estetica",
    icon: Sparkles,
    title: "Centro de estética",
    description: "Sitio pensado para centros de estética que buscan agenda simple y confianza previa.",
    image: "/centros-de-estetica.webp",
    servicioSlug: "centros-de-estetica",
    features: [
      "Tratamientos explicados con claridad",
      "Agenda de citas simple",
      "Imagen que genera confianza",
      "Adaptado a móviles",
      "Optimizado para conversión",
    ],
    hero: { url: "estetica-concepto.com" },
  },
];

export function getNiche(id: string): NicheConfig | undefined {
  return niches.find((n) => n.id === id);
}
