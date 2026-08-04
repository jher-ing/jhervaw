/**
 * Configuración central del sitio.
 */
export const siteConfig = {
  name: "Jherva",
  tagline: "Estudio de desarrollo web y producto digital",
  description:
    "Jherva diseña y construye sitios web, landing pages y productos digitales que combinan diseño moderno, rigor técnico y estrategia de conversión.",
  url: "https://jherva.com",
  locale: "es",
  phone: {
    raw: "573021282572",
    display: "+57 302 128 2572",
    href: "tel:+573021282572",
    whatsapp: "https://wa.me/573021282572",
  },
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Metodología", href: "/proceso" },
    { label: "Estándares", href: "/estandares" },
    { label: "Conceptos", href: "/conceptos" },
    { label: "Contacto", href: "/contacto" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
