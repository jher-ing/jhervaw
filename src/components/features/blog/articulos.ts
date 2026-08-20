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
  {
    slug: "como-elegir-quien-te-haga-tu-pagina-web",
    title: "Cómo elegir quién te haga tu página web, sin que te vendan humo",
    metaDescription:
      "Guía para elegir bien quién te desarrolle la página web de tu negocio: qué preguntar, qué debería incluir la propuesta, y las señales de alerta a evitar.",
    excerpt:
      "Elegir a quién le encargás tu página web no debería depender solo del precio. Estas son las señales para reconocer a un profesional serio.",
    publishedAt: "2026-08-20",
    content: [
      { type: "p", text: "Elegir quién va a crear la página web de tu negocio parece sencillo." },
      { type: "p", text: "Buscás a alguien, preguntás cuánto cuesta, ves algunos diseños y, si el precio te convence, empezás." },
      { type: "p", text: "El problema es que una página web no es solamente un diseño bonito." },
      {
        type: "p",
        text: "Detrás de una buena página hay estrategia, estructura, desarrollo, experiencia de usuario y, sobre todo, una comprensión clara de lo que el negocio necesita.",
      },
      { type: "p", text: "Por eso, antes de contratar a alguien para crear tu página web, hay algunas cosas que deberías revisar." },

      { type: "h2", text: "1. No te dejes convencer solamente por las promesas" },
      { type: "p", text: "Una de las primeras señales de alerta es cuando todo suena demasiado bueno para ser verdad." },
      { type: "p", text: "**\"Tu página aparecerá de primera en Google.\"**" },
      { type: "p", text: "**\"Vas a conseguir muchos clientes.\"**" },
      { type: "p", text: "**\"Con esta página tus ventas van a aumentar.\"**" },
      { type: "p", text: "El problema no es que una página web pueda ayudar a conseguir clientes. Claro que puede." },
      { type: "p", text: "El problema es prometer resultados que dependen de muchos factores diferentes." },
      {
        type: "p",
        text: "Un profesional debería explicarte qué puede hacer la página, qué estrategia se va a utilizar y qué resultados se pueden medir, en lugar de garantizar algo que no puede controlar completamente.",
      },
      { type: "p", text: "También es importante prestar atención a algo:" },
      { type: "p", text: "¿Te está preguntando sobre tu negocio o solamente te está hablando de tecnología?" },
      {
        type: "p",
        text: "Antes de empezar a hablar de código, herramientas o plataformas, debería existir una conversación sobre tus clientes, tus servicios, tus objetivos y lo que querés conseguir con la página.",
      },

      { type: "h2", text: "2. Mirá más allá de los diseños bonitos" },
      { type: "p", text: "Ver un [portafolio](/portafolio) es importante, pero no solamente para decir:" },
      { type: "p", text: "\"Qué página tan bonita.\"" },
      { type: "p", text: "También deberías preguntarte:" },
      { type: "p", text: "¿Esta persona sabe construir páginas para diferentes tipos de negocios?" },
      { type: "p", text: "Un buen trabajo no consiste únicamente en que una web se vea bien." },
      { type: "p", text: "También debería tener:" },
      {
        type: "ul",
        items: [
          "Una estructura clara.",
          "Buena experiencia en celular.",
          "Información fácil de encontrar.",
          "Llamados a la acción.",
          "Formularios o medios de contacto.",
          "Buen rendimiento.",
          "Una base preparada para SEO.",
          "Una estructura pensada para el objetivo del negocio.",
        ],
      },
      {
        type: "p",
        text: "El diseño importa, pero el diseño por sí solo no convierte una página en una buena página web. Ese conjunto de cosas es justo lo que cubre el [estándar](/estandares) que aplicamos en cada proyecto.",
      },

      { type: "h2", text: "3. Un profesional debería hacerte preguntas" },
      { type: "p", text: "Esto puede parecer algo pequeño, pero dice muchísimo." },
      { type: "p", text: "Antes de empezar, deberían preguntarte cosas como:" },
      {
        type: "ul",
        items: [
          "¿Qué hace tu negocio?",
          "¿Quiénes son tus clientes?",
          "¿Qué servicios querés destacar?",
          "¿Qué querés conseguir con la página?",
          "¿Cómo llegan actualmente tus clientes?",
          "¿Qué querés que haga una persona cuando entre a tu web?",
          "¿Tenés alguna referencia de diseño?",
          "¿Qué diferencia a tu negocio de la competencia?",
        ],
      },
      { type: "p", text: "¿Por qué?" },
      { type: "p", text: "Porque no podés construir una buena solución para un negocio que no entendés." },
      {
        type: "p",
        text: "Si alguien puede empezar tu página sin saber prácticamente nada sobre tu negocio, probablemente está usando una solución genérica.",
      },

      { type: "h2", text: "4. Preguntá qué incluye realmente el proyecto" },
      { type: "p", text: "Una de las cosas que más problemas puede evitar es tener claro qué estás comprando." },
      { type: "p", text: "Una propuesta debería dejar claro, por ejemplo:" },
      {
        type: "ul",
        items: [
          "Cuántas páginas tendrá el sitio.",
          "Qué funcionalidades incluye.",
          "Si el diseño es personalizado.",
          "Si incluye adaptación para celulares.",
          "Si incluye SEO básico.",
          "Si incluye dominio.",
          "Si incluye hosting.",
          "Cuánto tiempo aproximadamente tomará.",
          "Cuántas revisiones o cambios incluye.",
          "Qué soporte tendrás después de la entrega.",
        ],
      },
      { type: "p", text: "No basta con leer:" },
      { type: "p", text: "\"Página web profesional — $900.000.\"" },
      { type: "p", text: "La pregunta importante es:" },
      { type: "p", text: "¿Qué incluye esos $900.000?" },
      {
        type: "p",
        text: "Mientras más claro esté desde el principio, menos posibilidades habrá de tener malentendidos después. Nosotros dejamos esto explícito en nuestra propia [página de precios](/precios) — qué incluye cada tarifa, sin letra chiquita.",
      },

      { type: "h2", text: "5. Desconfiá tanto de lo demasiado barato como de lo exageradamente caro" },
      { type: "p", text: "El precio por sí solo no determina si una página web es buena o mala." },
      { type: "p", text: "Una página sencilla puede costar menos que una tienda online con sistemas personalizados." },
      { type: "p", text: "Por eso, comparar solamente números puede ser engañoso." },
      {
        type: "p",
        text: "Si alguien ofrece una página extremadamente barata, pero incluye supuestamente diseño personalizado, SEO, dominio, hosting, soporte ilimitado y muchas funcionalidades, vale la pena preguntar cómo se va a realizar todo eso.",
      },
      { type: "p", text: "Pero también sucede lo contrario." },
      { type: "p", text: "Cobrar más no significa automáticamente entregar más valor." },
      { type: "p", text: "Lo importante es entender qué estás pagando y qué problema va a solucionar el proyecto." },
      { type: "p", text: "No busques simplemente:" },
      { type: "p", text: "**\"La página más barata.\"**" },
      { type: "p", text: "Buscá:" },
      { type: "p", text: "**\"La solución que realmente necesita mi negocio.\"**" },

      { type: "h2", text: "6. La comunicación también forma parte del servicio" },
      { type: "p", text: "Hay algo que podés comprobar incluso antes de contratar:" },
      { type: "p", text: "cómo se comunica la persona con vos." },
      { type: "p", text: "No significa que tenga que responderte inmediatamente a cualquier hora." },
      { type: "p", text: "Pero sí debería existir cierta organización." },
      { type: "p", text: "Deberías saber:" },
      {
        type: "ul",
        items: [
          "Cómo se van a comunicar.",
          "Cuándo vas a recibir avances.",
          "Cuáles son los tiempos aproximados.",
          "Cómo se solicitan los cambios.",
          "Qué sucede si surge un problema.",
        ],
      },
      { type: "p", text: "Porque desarrollar una página web no es simplemente entregar un archivo." },
      { type: "p", text: "Es un proceso en el que el cliente y el desarrollador tienen que trabajar juntos." },
      {
        type: "p",
        text: "Y la comunicación que existe antes de comenzar muchas veces es una pequeña muestra de cómo va a ser trabajar durante el proyecto.",
      },

      { type: "h2", text: "7. El error más común: elegir solamente por precio" },
      { type: "p", text: "Probablemente este sea uno de los errores más frecuentes." },
      { type: "p", text: "Un negocio recibe tres precios:" },
      { type: "ul", items: ["$400.000", "$900.000", "$1.500.000"] },
      { type: "p", text: "Y automáticamente piensa:" },
      { type: "p", text: "**\"Me voy con el de $400.000.\"**" },
      { type: "p", text: "Pero todavía no sabe qué está recibiendo." },
      { type: "p", text: "No sabe cómo se va a desarrollar." },
      { type: "p", text: "No sabe si va a tener acceso a su página." },
      { type: "p", text: "No sabe qué incluye el mantenimiento." },
      { type: "p", text: "No sabe qué ocurre si necesita cambios." },
      { type: "p", text: "No sabe si la página va a estar optimizada para celulares." },
      { type: "p", text: "Y tampoco sabe si la persona que la está construyendo realmente entendió su negocio." },
      { type: "p", text: "El precio es importante, pero no debería ser el único criterio." },

      { type: "h2", text: "8. Una buena página debería empezar antes de abrir el editor de código" },
      { type: "p", text: "Para construir una página web profesional, el primer paso no debería ser escribir código." },
      { type: "p", text: "Debería ser entender el problema." },
      { type: "p", text: "Primero se analiza el negocio y lo que necesita." },
      { type: "p", text: "Después se define la estructura." },
      { type: "p", text: "Luego se piensa en el contenido y la experiencia del usuario." },
      { type: "p", text: "Después viene el diseño." },
      { type: "p", text: "Y finalmente el desarrollo, las pruebas y la publicación. Así estructuramos nuestro propio [proceso](/proceso)." },
      { type: "p", text: "Ese proceso permite que cada elemento de la página tenga una razón de existir." },
      { type: "p", text: "Porque una página web no debería tener un botón simplemente porque \"se ve bonito\"." },
      { type: "p", text: "Debería existir porque ayuda al usuario a dar el siguiente paso." },

      { type: "h2", text: "Entonces, ¿cómo sabés si estás trabajando con un profesional?" },
      { type: "p", text: "No necesitás saber programar para darte cuenta." },
      { type: "p", text: "Simplemente observá si la persona:" },
      {
        type: "ul",
        items: [
          "Entiende tu negocio.",
          "Te hace preguntas.",
          "Puede mostrarte trabajos reales.",
          "Te explica su proceso.",
          "Te dice claramente qué incluye el proyecto.",
          "No te promete resultados mágicos.",
          "Mantiene una comunicación clara.",
          "Y, sobre todo, puede explicarte por qué está construyendo la página de determinada manera.",
        ],
      },
      { type: "p", text: "Eso es mucho más importante que saber cuántas tecnologías puede mencionar." },

      { type: "h2", text: "Conclusión" },
      { type: "p", text: "Una página web puede ser una de las herramientas digitales más importantes de un negocio." },
      { type: "p", text: "Pero para que realmente aporte valor, no debería empezar con:" },
      { type: "p", text: "**\"¿Cuánto cuesta?\"**" },
      { type: "p", text: "Debería empezar con:" },
      { type: "p", text: "**\"¿Qué necesita mi negocio y cómo puede ayudarme una página web a conseguirlo?\"**" },
      { type: "p", text: "Elegir quién va a desarrollar tu página no consiste simplemente en buscar a alguien que sepa programar." },
      {
        type: "p",
        text: "Se trata de encontrar a un profesional capaz de entender el negocio, convertir esa información en una estrategia y después transformarla en una página funcional.",
      },
      { type: "p", text: "Porque al final, una página web no debería existir solamente para que tu negocio \"tenga presencia en internet\"." },
      { type: "p", text: "**Debería tener un propósito.**" },
    ],
  },
];

export function getArticulo(slug: string): Articulo | undefined {
  return articulos.find((a) => a.slug === slug);
}
