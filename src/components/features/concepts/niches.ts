import type { LucideIcon } from "lucide-react";
import { UtensilsCrossed, BedDouble, Shirt, Leaf, Clock, MapPin, Sparkles, Truck, Tag } from "lucide-react";

export interface NicheBadge {
  icon: LucideIcon;
  label: string;
}

export interface NicheHeroContent {
  url: string;
  eyebrowLabel: string;
  headline: string;
  subtext: string;
  primaryCta: string;
  secondaryCta: string;
  badges: [NicheBadge, NicheBadge];
}

export interface NicheConfig {
  id: string;
  href: string;
  icon: LucideIcon;
  title: string;
  /** Descripción corta usada en la tarjeta de la galería /conceptos. */
  description: string;
  /** Checklist de características mostrado en la tarjeta de la galería. */
  features: string[];
  /** Mockup de página completa (1536x1024) usado en la tarjeta de la galería. */
  image: string;
  /** Paleta local del mockup — no toca los tokens de marca de Jherva. */
  palette: Record<string, string>;
  hero: NicheHeroContent;
}

/**
 * Fuente de verdad única para los tres conceptos de ejemplo (no son clientes
 * reales de Jherva). La usan tanto la galería /conceptos como cada página de
 * detalle, para que el mockup mostrado sea siempre el mismo.
 */
export const niches: NicheConfig[] = [
  {
    id: "restaurante",
    href: "/conceptos/restaurante",
    icon: UtensilsCrossed,
    title: "Restaurante",
    description:
      "Sitio pensado para restaurantes modernos que buscan transmitir calidad y facilitar las reservas.",
    image: "/restaurante.webp",
    features: [
      "Hero gastronómico impactante",
      "Menú digital",
      "Reservas online",
      "Adaptado a móviles",
      "Optimizado para conversión",
    ],
    palette: {
      "--n-bg": "#181310",
      "--n-surface": "#211a15",
      "--n-text": "#f4ece1",
      "--n-text-muted": "#a89a8a",
      "--n-accent": "#c9743c",
      "--n-border": "#332822",
    },
    hero: {
      url: "restaurante-concepto.com",
      eyebrowLabel: "Cocina de temporada",
      headline: "Sabores con carácter, en cada plato",
      subtext: "Ingredientes locales, técnica clásica y una carta que cambia con las estaciones.",
      primaryCta: "Reservar mesa",
      secondaryCta: "Ver menú",
      badges: [
        { icon: Leaf, label: "Ingredientes locales" },
        { icon: Clock, label: "Reserva en 2 min" },
      ],
    },
  },
  {
    id: "hotel",
    href: "/conceptos/hotel",
    icon: BedDouble,
    title: "Hotel",
    description: "Sitio diseñado para hoteles boutique y alojamientos premium.",
    image: "/hotel.webp",
    features: [
      "Hero con fotografía inmersiva",
      "Buscador de disponibilidad",
      "Habitaciones destacadas",
      "Reserva directa",
      "Diseño elegante",
    ],
    palette: {
      "--n-bg": "#f6f1e6",
      "--n-surface": "#ffffff",
      "--n-text": "#2b2620",
      "--n-text-muted": "#6f6558",
      "--n-accent": "#2f4a3f",
      "--n-border": "#e2d9c6",
    },
    hero: {
      url: "hotel-concepto.com",
      eyebrowLabel: "Hospitalidad boutique",
      headline: "Descansa en un lugar memorable",
      subtext: "Habitaciones diseñadas para desconectar, en el corazón de la ciudad.",
      primaryCta: "Ver habitaciones",
      secondaryCta: "Contáctanos",
      badges: [
        { icon: MapPin, label: "Centro de la ciudad" },
        { icon: Sparkles, label: "Servicio premium" },
      ],
    },
  },
  {
    id: "tienda-de-ropa",
    href: "/conceptos/tienda-de-ropa",
    icon: Shirt,
    title: "Tienda de ropa",
    description: "Ecommerce moderno enfocado en vender productos.",
    image: "/ropa.webp",
    features: ["Hero editorial", "Catálogo organizado", "Filtros", "Carrito", "Checkout intuitivo"],
    palette: {
      "--n-bg": "#f7f7f4",
      "--n-surface": "#ffffff",
      "--n-text": "#131313",
      "--n-text-muted": "#6a6a64",
      "--n-accent": "#2b57ff",
      "--n-border": "#e4e3dd",
    },
    hero: {
      url: "tienda-concepto.com",
      eyebrowLabel: "Colección actual",
      headline: "Diseño que se usa, no que se guarda",
      subtext: "Piezas esenciales, hechas para durar más de una temporada.",
      primaryCta: "Ver colección",
      secondaryCta: "Nuestra historia",
      badges: [
        { icon: Truck, label: "Envío en 24h" },
        { icon: Tag, label: "Piezas limitadas" },
      ],
    },
  },
];

export function getNiche(id: string): NicheConfig | undefined {
  return niches.find((n) => n.id === id);
}
