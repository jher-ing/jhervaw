/**
 * Configuración central del sitio.
 */
export const siteConfig = {
  name: "Jherva",
  tagline: "Estudio de desarrollo web y producto digital",
  description:
    "Jherva diseña y construye sitios web, landing pages y productos digitales para negocios en Colombia — diseño moderno, rigor técnico y estrategia de conversión.",
  url: "https://jherva.com",
  locale: "es",
  ogImage: {
    url: "/og.jpg",
    width: 1200,
    height: 630,
  },
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
    { label: "Portafolio", href: "/portafolio" },
    { label: "Precios", href: "/precios" },
    { label: "Preguntas", href: "/preguntas-frecuentes" },
    { label: "Contacto", href: "/contacto" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
