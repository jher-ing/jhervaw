import { siteConfig } from "@/config/site";

/**
 * Enlaces de WhatsApp por canal.
 *
 * Cada enlace lleva un mensaje inicial distinto para saber de dónde llegó
 * cada cliente: cuando entra un chat, la primera frase dice el canal. Rafa
 * lo anota en el CRM, en el campo «Fuente del prospecto», con el valor de
 * `fuente`.
 *
 * Reglas para editar:
 * - Todo enlace de WhatsApp del sitio sale de `whatsappHref()`. No escribir
 *   `wa.me` a mano en ningún componente.
 * - Cada mensaje debe empezar distinto a los demás (la frase que identifica
 *   el canal va al principio) para que se reconozca de un vistazo.
 * - Si se cambia un mensaje, actualizar también la tabla del documento
 *   privado de la agencia (`agencia/marketing/enlaces-por-canal.md`).
 */

/** Arma el enlace `wa.me` hacia el número de Jherva con el mensaje ya escrito. */
export function whatsappHref(mensaje?: string): string {
  return mensaje
    ? `${siteConfig.phone.whatsapp}?text=${encodeURIComponent(mensaje)}`
    : siteConfig.phone.whatsapp;
}

export interface CanalWhatsApp {
  /** Valor que Rafa escribe en «Fuente del prospecto» en el CRM. */
  fuente: string;
  mensaje: string;
}

/** Canales dentro de la web (www.jherva.com). */
export const canalesWeb = {
  portada: {
    fuente: "web-portada",
    mensaje: "Hola, vengo de la página de Jherva y quiero información.",
  },
  precios: {
    fuente: "web-precios",
    mensaje: "Hola, vi los precios en la web de Jherva y quiero contarte sobre mi proyecto.",
  },
  productos: {
    fuente: "web-productos",
    mensaje: "Hola, vi las apps en la web de Jherva y quiero saber más.",
  },
  portafolio: {
    fuente: "web-portafolio",
    mensaje: "Hola, vi los proyectos de muestra en la web de Jherva y quiero una página así.",
  },
  contacto: {
    fuente: "web-contacto",
    mensaje: "Hola, te escribo desde la sección de contacto de la web de Jherva.",
  },
  /** Formulario de /contacto: el texto lo completa la persona; esto va de primera línea. */
  formulario: {
    fuente: "web-formulario",
    mensaje: "Hola, te escribo desde el formulario de la web de Jherva.",
  },
  /** Pie de página: aparece en todas las páginas, por eso es el más general. */
  pieDePagina: {
    fuente: "web-general",
    mensaje: "Hola, encontré la web de Jherva y quiero información.",
  },
  error: {
    fuente: "web-error",
    mensaje: "Hola, tuve un problema con la web de Jherva y quiero información.",
  },
} as const satisfies Record<string, CanalWhatsApp>;

/** Páginas de nicho (/paginas-web-para/[slug]). `nicho` es el título de la página, p. ej. «Restaurantes». */
export function canalNicho(slug: string, nicho: string): CanalWhatsApp {
  return {
    fuente: `web-nicho-${slug}`,
    mensaje: `Hola, vi la página para ${nicho.toLowerCase()} en la web de Jherva y quiero información.`,
  };
}

/** Artículos del blog (/blog/[slug]). */
export function canalBlog(slug: string, titulo: string): CanalWhatsApp {
  return {
    fuente: `web-blog-${slug}`,
    mensaje: `Hola, leí un artículo de Jherva («${titulo}») y quiero información.`,
  };
}

export interface CanalExterno extends CanalWhatsApp {
  /** Dónde se pega el enlace. */
  dondeVa: string;
  /** Texto sugerido para acompañar el enlace (bio o botón). */
  textoSugerido: string;
}

/**
 * Canales fuera de la web. No se usan en el sitio: son para que Rafa copie el
 * enlace (`whatsappHref(canal.mensaje)`) y lo pegue en cada perfil.
 */
export const canalesExternos = {
  tiktok: {
    fuente: "tiktok",
    mensaje: "Hola, vengo de TikTok y quiero información sobre Jherva.",
    dondeVa: "Bio de TikTok (campo «Sitio web» o enlace en la bio)",
    textoSugerido: "Páginas web y apps para tu negocio 👇 Escríbenos por WhatsApp",
  },
  instagram: {
    fuente: "instagram",
    mensaje: "Hola, vengo de Instagram y quiero información sobre Jherva.",
    dondeVa: "Bio de Instagram (enlaces) y botón de WhatsApp del perfil",
    textoSugerido: "Páginas web y apps para negocios en Colombia. Escríbenos por WhatsApp 👇",
  },
  googleBusiness: {
    fuente: "google-business",
    mensaje: "Hola, encontré a Jherva en Google y quiero información.",
    dondeVa: "Perfil de Google Business: botón de WhatsApp o enlace de contacto",
    textoSugerido: "Escríbenos por WhatsApp",
  },
} as const satisfies Record<string, CanalExterno>;
