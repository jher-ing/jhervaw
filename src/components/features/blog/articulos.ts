/**
 * Artículos del blog — Fase 3 de la estrategia SEO. Contenido propio del
 * usuario (no generado ni inventado por IA) estructurado en bloques simples
 * para render consistente, sin CMS ni base de datos — ver AGENTS.md /
 * decisión del 2026-08-12: archivos estáticos + rutas dinámicas.
 *
 * Sintaxis liviana soportada en el texto de los bloques `p` y en los items
 * de `ul`: `**negrita**` y `[texto](/ruta)` para enlaces internos.
 */

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export interface Articulo {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string;
  content: ContentBlock[];
}

export const articulos: Articulo[] = [
  {
    slug: "necesito-una-pagina-web-si-ya-tengo-redes-sociales",
    title: "¿Necesito una página web si ya tengo redes sociales?",
    metaDescription:
      "Tu Instagram o TikTok ayudan a que las personas conozcan tu negocio, pero no reemplazan una página web propia. Descubre qué función cumple cada canal y cuándo realmente necesitas una web.",
    excerpt:
      "Las redes y una página web cumplen funciones distintas. Te explicamos cuándo cada una tiene sentido y cómo hacer que trabajen juntas.",
    publishedAt: "2026-08-12",
    content: [
      {
        type: "p",
        text: "Si tu negocio ya tiene una cuenta activa en Instagram o TikTok, es completamente razonable preguntarte: **¿para qué necesito además una página web?**",
      },
      { type: "p", text: "La respuesta corta es que **las redes sociales y una página web cumplen funciones diferentes**." },
      {
        type: "p",
        text: "Las redes sirven para llamar la atención, generar contenido, mostrar lo que haces y construir una comunidad. Una página web, en cambio, te permite tener un espacio propio donde presentar tu negocio, explicar tus servicios y dirigir al visitante hacia una acción concreta.",
      },
      { type: "p", text: "El problema no es tener redes sociales." },
      { type: "p", text: "El problema es **depender únicamente de ellas**." },
      { type: "h2", text: "Tus redes están dentro de una plataforma que no controlás" },
      {
        type: "p",
        text: "Cuando construís la presencia digital de tu negocio en Instagram o TikTok, estás utilizando plataformas que pertenecen a otras empresas.",
      },
      { type: "p", text: "Eso significa que las reglas, el alcance, los formatos y los algoritmos pueden cambiar." },
      {
        type: "p",
        text: "Un contenido que hoy funciona muy bien puede tener mucho menos alcance mañana. Una cuenta puede sufrir una restricción o perder visibilidad. Y si dependés exclusivamente de una plataforma para conseguir clientes, cualquier cambio puede terminar afectando tu negocio.",
      },
      { type: "p", text: "Una página web funciona de otra manera." },
      {
        type: "p",
        text: "Es un espacio propio de tu negocio. Vos decidís qué información mostrar, cómo organizarla y qué acción querés que realice el visitante.",
      },
      { type: "p", text: "No significa que las redes sean malas. **Significa que no deberían ser tu único activo digital.**" },
      { type: "h2", text: "3 cosas que una página web puede aportar a tu negocio" },
      { type: "h3", text: "1. Un lugar propio para presentar tu negocio" },
      { type: "p", text: "En redes sociales tenés que adaptarte al formato de la plataforma." },
      { type: "p", text: "En una web podés estructurar la información pensando específicamente en tu cliente." },
      {
        type: "p",
        text: "Podés explicar tus servicios, mostrar trabajos anteriores, responder [preguntas frecuentes](/preguntas-frecuentes), incluir testimonios, agregar ubicación, horarios y dirigir al visitante hacia WhatsApp, una reserva o una compra.",
      },
      { type: "p", text: "La página no tiene que simplemente verse bonita." },
      { type: "p", text: "**Tiene que tener un propósito.**" },
      { type: "h3", text: "2. Más oportunidades de aparecer en Google" },
      {
        type: "p",
        text: "Cuando una persona busca algo relacionado con tu negocio, tener una presencia web bien estructurada puede ayudarte a aparecer en los resultados de búsqueda.",
      },
      { type: "p", text: "Por ejemplo, alguien puede buscar:" },
      {
        type: "ul",
        items: [
          "[\"barbería cerca de mí\"](/paginas-web-para/barberias)",
          "**\"diseño de páginas web en Bogotá\"**",
          "[\"gimnasio en tu zona\"](/paginas-web-para/gimnasios)",
        ],
      },
      {
        type: "p",
        text: "La página web puede formar parte de esa estrategia de posicionamiento junto con tu Perfil de Empresa de Google, contenido y otros factores de SEO.",
      },
      { type: "p", text: "Por eso una web no debería crearse solamente para que alguien entre directamente a ella." },
      { type: "p", text: "También debería estar preparada para **ser encontrada**." },
      { type: "h3", text: "3. Podés convertir mejor el tráfico que ya tenés" },
      { type: "p", text: "Esta es una de las diferencias que más me interesan cuando diseño una web." },
      { type: "p", text: "Supongamos que alguien descubre tu negocio en Instagram." },
      { type: "p", text: "Le gusta lo que ve y quiere saber más." },
      { type: "p", text: "Podés simplemente decirle \"escribinos por DM\"." },
      { type: "p", text: "O podés llevarlo a una página donde encuentre rápidamente:" },
      {
        type: "ul",
        items: [
          "Qué hace tu negocio.",
          "Qué servicios ofrecés.",
          "Cuánto puede esperar.",
          "Dónde estás.",
          "Qué dicen otros clientes.",
          "Cómo contactarte.",
        ],
      },
      {
        type: "p",
        text: "En ese caso, **las redes generan atención y la página ayuda a convertir esa atención en una acción.**",
      },
      { type: "h2", text: "Entonces, ¿Instagram o página web?" },
      { type: "p", text: "La respuesta no debería ser **\"una o la otra\"**." },
      { type: "p", text: "En muchos negocios, lo más inteligente es utilizar ambas." },
      { type: "p", text: "Las redes pueden ayudarte a generar descubrimiento y confianza." },
      {
        type: "p",
        text: "La página web puede funcionar como el lugar al que llevás a las personas cuando quieren conocer más sobre tu negocio.",
      },
      { type: "p", text: "Pensalo así:" },
      {
        type: "ul",
        items: ["**Redes sociales → atención**", "**Página web → información y conversión**", "**Google → descubrimiento**"],
      },
      {
        type: "p",
        text: "No todos los negocios necesitan exactamente la misma estrategia, pero combinar estos canales puede darte mucho más control que depender únicamente de una red social.",
      },
      { type: "h2", text: "¿Cuándo sí puede ser suficiente empezar solo con redes?" },
      {
        type: "p",
        text: "Si tu negocio está empezando, todavía estás validando la idea y tu presupuesto es prácticamente cero, comenzar con Instagram, TikTok o Facebook puede tener mucho sentido.",
      },
      { type: "p", text: "Primero necesitás comprobar que existe demanda." },
      {
        type: "p",
        text: "Pero cuando ya tenés clientes, servicios definidos y querés construir una presencia digital más profesional, empieza a tener sentido crear un espacio propio.",
      },
      { type: "p", text: "No porque una página web vaya a solucionar automáticamente todos tus problemas." },
      {
        type: "p",
        text: "Sino porque **tu negocio empieza a necesitar un activo digital que puedas controlar y utilizar como parte de una estrategia más grande.**",
      },
      { type: "h2", text: "La página web no reemplaza tus redes" },
      { type: "p", text: "Este es probablemente el punto más importante." },
      { type: "p", text: "No recomiendo crear una página web y abandonar Instagram o TikTok." },
      { type: "p", text: "Al contrario." },
      {
        type: "p",
        text: "Podés utilizar tus redes para atraer personas y tu página web para darles un lugar donde conocer mejor tu negocio y tomar una acción.",
      },
      { type: "p", text: "La pregunta no debería ser:" },
      { type: "p", text: "**\"¿Necesito una web si ya tengo Instagram?\"**" },
      { type: "p", text: "La pregunta correcta es:" },
      { type: "p", text: "**\"¿Cómo puedo hacer que mi web y mis redes trabajen juntas?\"**" },
      {
        type: "p",
        text: "Si tu negocio ya tiene presencia en redes pero todavía no tiene una página web, no necesariamente significa que la necesitás mañana.",
      },
      {
        type: "p",
        text: "Pero sí vale la pena preguntarte si estás construyendo un activo digital propio o si todo tu crecimiento depende de una plataforma que no controlás.",
      },
    ],
  },
];

export function getArticulo(slug: string): Articulo | undefined {
  return articulos.find((a) => a.slug === slug);
}
