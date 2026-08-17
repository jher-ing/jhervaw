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
  {
    slug: "pagina-web-vs-instagram",
    title: "Página web vs Instagram: ¿qué necesita tu negocio primero?",
    metaDescription:
      "Instagram y una página web no compiten: cada uno cumple una función distinta. Te explicamos qué hace cada uno y cuál necesita tu negocio primero.",
    excerpt:
      "No es elegir entre Instagram o página web — es entender qué hace cada uno y qué necesita tu negocio en este momento.",
    publishedAt: "2026-08-13",
    content: [
      {
        type: "p",
        text: "\"Instagram o página web\" es una pregunta que muchos negocios se hacen, pero está mal planteada. No compiten entre sí — cada uno resuelve algo distinto. Para saber qué necesita tu negocio hoy, conviene entender primero qué hace bien cada canal.",
      },
      { type: "h2", text: "Qué hace mejor Instagram" },
      {
        type: "p",
        text: "Instagram es muy bueno para generar atención y mostrar el lado humano del negocio. Sirve para enseñar productos, trabajos realizados, promociones, procesos y testimonios, y para mantener una relación constante con los clientes.",
      },
      {
        type: "p",
        text: "Es especialmente útil para negocios que dependen mucho de lo visual, como [restaurantes](/paginas-web-para/restaurantes), barberías, gimnasios, [tiendas](/paginas-web-para/tiendas-de-ropa) o [salones de belleza](/paginas-web-para/centros-de-estetica).",
      },
      { type: "h2", text: "Qué hace mejor una página web" },
      {
        type: "p",
        text: "Una página web sirve para tener un espacio propio donde organizar toda la información del negocio: servicios, precios o productos, ubicación, horarios, [preguntas frecuentes](/preguntas-frecuentes), formularios, reservas y formas de contacto.",
      },
      { type: "p", text: "Además, puede ayudar a que las personas que buscan un servicio en Google encuentren tu negocio." },
      { type: "h2", text: "Dónde se queda corto cada uno" },
      { type: "h3", text: "Los límites de Instagram" },
      {
        type: "p",
        text: "El problema es que la información queda repartida entre publicaciones, historias, destacados y mensajes. Alguien puede entrar al perfil y todavía tener dudas sobre precios, servicios, ubicación o cómo contratar. Además, el negocio depende de una plataforma que no controla.",
      },
      { type: "h3", text: "Los límites de una página web" },
      {
        type: "p",
        text: "Una web tampoco lo hace todo. No necesariamente genera comunidad ni mantiene una conversación constante con los clientes — ahí las redes tienen una ventaja enorme. Una página puede ser excelente, pero si nadie llega a ella, tampoco genera resultados por sí sola.",
      },
      { type: "h2", text: "¿Cuál deberías tener primero?" },
      {
        type: "p",
        text: "Depende del negocio y de su situación. No todos necesitan empezar creando una página web. Si un emprendimiento está comenzando y todavía está validando su producto o servicio, Instagram puede ser suficiente al inicio.",
      },
      {
        type: "p",
        text: "Pero cuando empieza a necesitar más información, recibir búsquedas desde Google o tener un lugar más profesional donde dirigir a los clientes, **la web empieza a tener mucho más sentido**.",
      },
      { type: "h2", text: "Señales de que tu negocio ya necesita una página web" },
      {
        type: "ul",
        items: [
          "Tus clientes preguntan constantemente cosas que podrían estar explicadas en un solo lugar: precios, servicios, horarios, ubicación, reservas o cómo comprar.",
          "Querés que personas que todavía no te conocen te encuentren a través de Google.",
          "Querés transmitir una imagen más profesional y tener un espacio propio para presentar lo que hacés.",
        ],
      },
      { type: "h2", text: "¿Compiten Instagram y la web?" },
      {
        type: "p",
        text: "No. Lo ideal es que trabajen juntos. Instagram puede llamar la atención y generar confianza; la página web puede recibir a esas personas y darles la información que necesitan para decidir. Una red social lleva tráfico hacia la web, y la web facilita el contacto o la conversión.",
      },
      { type: "h2", text: "El error que más cometen los negocios" },
      {
        type: "p",
        text: "Pensar que tener presencia digital significa simplemente abrir un Instagram. Tener un perfil no garantiza que el cliente encuentre fácilmente toda la información que necesita.",
      },
      {
        type: "p",
        text: "Pero también es un error crear una página web solo porque \"hay que tener una\" — primero hay que saber para qué se va a usar.",
      },
      { type: "h2", text: "\"Ya tengo Instagram, no necesito una web\" — ¿es cierto?" },
      {
        type: "p",
        text: "Probablemente Instagram ya te está funcionando para algunas cosas, pero vale la pena preguntarte qué está dejando de hacer. Si tus clientes encuentran fácilmente tus servicios, precios, ubicación y formas de contacto, quizás todavía no necesites una web.",
      },
      {
        type: "p",
        text: "Pero si constantemente respondés las mismas preguntas por mensaje, o querés captar personas que buscan tu servicio en Google, una web puede complementar muy bien lo que ya tenés.",
      },
      { type: "h2", text: "La pregunta correcta" },
      {
        type: "p",
        text: "No se trata de elegir entre Instagram o una página web. Cada uno cumple una función diferente. Instagram te ayuda a llamar la atención, mostrar lo que hacés y conectar con personas. La web te ayuda a organizar la información, generar confianza y facilitar que un interesado dé el siguiente paso.",
      },
      {
        type: "p",
        text: "**La pregunta no debería ser \"¿cuál es mejor?\", sino \"¿qué necesita mi negocio en este momento?\"**",
      },
    ],
  },
  {
    slug: "senales-que-pierdes-clientes-sin-pagina-web",
    title: "Señales de que tu negocio está perdiendo clientes por no tener página web",
    metaDescription:
      "7 señales de que tu negocio está perdiendo clientes por no tener página web propia, y qué hacer si reconocés dos o tres en el tuyo.",
    excerpt:
      "Si tu negocio depende solo de redes sociales, podrías estar perdiendo clientes sin darte cuenta. Estas son las señales para reconocerlo.",
    publishedAt: "2026-08-17",
    content: [
      {
        type: "p",
        text: "Hoy en día, muchas personas buscan un negocio en Internet antes de decidir si comprar, reservar o contactar. Tener redes sociales ayuda, pero no siempre es suficiente.",
      },
      {
        type: "p",
        text: "Si tu negocio depende únicamente de Instagram, Facebook o WhatsApp, podrías estar perdiendo clientes sin darte cuenta.",
      },
      { type: "p", text: "Estas son algunas señales de que tu negocio necesita una página web." },
      { type: "h2", text: "1. Tus clientes siempre te preguntan lo mismo" },
      { type: "p", text: "Si constantemente recibís preguntas como:" },
      {
        type: "ul",
        items: [
          "¿Cuánto cuestan sus servicios?",
          "¿Dónde están ubicados?",
          "¿Qué servicios ofrecen?",
          "¿Cuál es el horario?",
          "¿Cómo puedo reservar?",
          "¿Tienen algún catálogo?",
        ],
      },
      {
        type: "p",
        text: "Una página web puede responder automáticamente muchas de estas preguntas — como ya hacemos en nuestras [preguntas frecuentes](/preguntas-frecuentes) — y permitir que el cliente encuentre la información sin tener que escribirte primero.",
      },
      { type: "h2", text: "2. Dependes completamente de tus redes sociales" },
      {
        type: "p",
        text: "Las redes sociales son excelentes para atraer personas, pero tienen una desventaja: no tenés el mismo control sobre ellas que sobre una página web.",
      },
      {
        type: "p",
        text: "Los algoritmos cambian, las publicaciones dejan de mostrarse y una persona puede entrar a tu perfil y no encontrar rápidamente lo que está buscando.",
      },
      { type: "p", text: "Una página web funciona como un espacio propio donde podés organizar toda la información de tu negocio." },
      { type: "h2", text: "3. Los clientes no encuentran tu negocio fácilmente en Google" },
      { type: "p", text: "Imaginá que alguien busca:" },
      {
        type: "ul",
        items: ["[\"barbería cerca de mí\"](/paginas-web-para/barberias)", "**\"diseñador gráfico en Bogotá\"**"],
      },
      {
        type: "p",
        text: "Si tu negocio no tiene una presencia web bien estructurada, estás dejando pasar oportunidades de personas que ya están buscando lo que vendés.",
      },
      {
        type: "p",
        text: "Una página web optimizada para SEO puede ayudarte a aparecer en los resultados de búsqueda y atraer personas que todavía no conocen tu negocio.",
      },
      { type: "h2", text: "4. Tu competencia aparece antes que tú" },
      { type: "p", text: "Este es uno de los puntos más importantes." },
      { type: "p", text: "Si un cliente busca un servicio y encuentra primero a tu competencia, esa empresa tiene una ventaja." },
      { type: "p", text: "No necesariamente significa que sea mejor que tu negocio. Simplemente puede estar mejor posicionada en Internet." },
      {
        type: "p",
        text: "Una buena estrategia digital permite que tu negocio tenga más posibilidades de aparecer cuando tus clientes potenciales están buscando lo que ofrecés.",
      },
      { type: "h2", text: "5. Tu negocio parece menos profesional de lo que realmente es" },
      { type: "p", text: "Podés tener excelentes productos, buenos precios y un servicio increíble." },
      {
        type: "p",
        text: "Pero si cuando alguien busca tu negocio solamente encuentra un perfil de redes sociales desactualizado o información incompleta, la percepción puede ser diferente.",
      },
      {
        type: "p",
        text: "Una página web profesional — como los ejemplos de nuestro [portafolio](/portafolio) — puede ayudarte a mostrar:",
      },
      {
        type: "ul",
        items: [
          "Quién sos.",
          "Qué hacés.",
          "Tus servicios o productos.",
          "Fotografías de tu trabajo.",
          "Testimonios.",
          "Ubicación.",
          "Formas de contacto.",
          "Botón directo a WhatsApp.",
        ],
      },
      { type: "p", text: "Todo en un solo lugar." },
      { type: "h2", text: "6. Pierdes clientes fuera del horario de atención" },
      { type: "p", text: "Tu negocio puede cerrar a las 7:00 p. m., pero Internet nunca cierra." },
      { type: "p", text: "Una persona puede descubrir tu negocio a las 10:00 p. m. y querer saber qué servicios ofrecés o cuánto cuesta algo." },
      { type: "p", text: "Si tenés una página web, esa persona puede encontrar la información incluso cuando no estás disponible para responder." },
      { type: "h2", text: "7. No tenés un lugar propio para presentar tu negocio" },
      { type: "p", text: "Instagram, Facebook y TikTok son plataformas excelentes, pero son plataformas de terceros." },
      { type: "p", text: "Tu página web es diferente." },
      { type: "p", text: "Es un espacio digital propio que podés utilizar como centro de toda tu estrategia:" },
      { type: "p", text: "**Redes sociales → Página web → WhatsApp → Cliente**" },
      { type: "p", text: "De esta manera, tus redes no tienen que hacer todo el trabajo." },
      { type: "h2", text: "Entonces, ¿realmente necesitás una página web?" },
      {
        type: "p",
        text: "No todos los negocios necesitan una página web enorme ni una plataforma complicada.",
      },
      {
        type: "p",
        text: "Pero si tu negocio quiere crecer, conseguir clientes desde Google, mostrar sus servicios de forma profesional y tener una presencia digital que no dependa únicamente de las redes sociales, una página web puede convertirse en una herramienta importante.",
      },
      { type: "p", text: "La pregunta no debería ser solamente:" },
      { type: "p", text: "**\"¿Necesito una página web?\"**" },
      { type: "p", text: "Sino:" },
      { type: "p", text: "**\"¿Cuántos clientes podría estar perdiendo porque todavía no tengo una?\"**" },
      { type: "h2", text: "Conclusión" },
      { type: "p", text: "Una página web no garantiza clientes por sí sola." },
      {
        type: "p",
        text: "Pero una página bien estructurada, optimizada para buscadores y conectada con tus redes sociales y canales de contacto puede convertirse en una parte importante de tu estrategia digital.",
      },
      {
        type: "p",
        text: "Si tu negocio ya está creciendo y tus clientes te están buscando en Internet, probablemente sea momento de dejar de depender únicamente de las redes sociales.",
      },
      {
        type: "p",
        text: "**Tu negocio puede estar perdiendo clientes que ya están buscando exactamente lo que vos ofrecés.**",
      },
    ],
  },
];

export function getArticulo(slug: string): Articulo | undefined {
  return articulos.find((a) => a.slug === slug);
}
