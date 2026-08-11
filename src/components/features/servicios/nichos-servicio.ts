import type { LucideIcon } from "lucide-react";
import { UtensilsCrossed, BedDouble, Shirt, Scissors, Dumbbell, Sparkles } from "lucide-react";

export interface ServicioFaqItem {
  question: string;
  answer: string;
}

export interface ServicioNicho {
  slug: string;
  title: string;
  icon: LucideIcon;
  h1: string;
  metaDescription: string;
  painPoint: string;
  benefits: string[];
  /** Solo los nichos con proyecto de portafolio ya construido en /portafolio. */
  mockup?: {
    image: string;
    href: string;
  };
  faq: ServicioFaqItem[];
}

/**
 * Landing pages comerciales por nicho — Fase 2 de la estrategia SEO.
 * Distintas de /portafolio: acá el objetivo es capturar intención de compra
 * ("página web para restaurante"), no mostrar portafolio de diseño. Copy
 * propio, no duplicado de /portafolio, para evitar contenido casi idéntico
 * entre ambas rutas. Sin precios inventados — todo cierra en WhatsApp.
 */
export const nichosServicio: ServicioNicho[] = [
  {
    slug: "restaurantes",
    title: "Restaurantes",
    icon: UtensilsCrossed,
    h1: "Diseño de páginas web para restaurantes en Colombia",
    metaDescription:
      "Páginas web para restaurantes: menú siempre actualizado, reservas sin fricción y una imagen que transmite la experiencia antes de que el cliente llegue.",
    painPoint:
      "Tu carta cambia, tus fotos quedan viejas en Instagram, y reservar sigue siendo un mensaje de WhatsApp que a veces se pierde entre cien conversaciones más.",
    benefits: [
      "Menú siempre actualizado, sin depender de una foto vieja en redes",
      "Reservas con un solo clic, sin ida y vuelta por chat",
      "Fotografía y ambientación que transmiten la experiencia antes de que el cliente llegue",
      "Aparecés en Google cuando alguien busca dónde comer cerca",
    ],
    mockup: { image: "/restaurante.webp", href: "/portafolio/restaurante" },
    faq: [
      {
        question: "¿Puedo incluir reservas online en la página de mi restaurante?",
        answer:
          "Sí — se integra un formulario o enlace de reserva directo, sin que el cliente tenga que escribirte primero para saber si hay disponibilidad.",
      },
      {
        question: "¿Es fácil actualizar el menú cuando cambian platos o precios?",
        answer:
          "Sí, la estructura se construye para que actualizar el menú sea simple y rápido, sin depender de un desarrollador cada vez.",
      },
    ],
  },
  {
    slug: "hoteles",
    title: "Hoteles y alojamientos",
    icon: BedDouble,
    h1: "Diseño de páginas web para hoteles y alojamientos boutique",
    metaDescription:
      "Páginas web para hoteles, posadas y alojamientos boutique en Colombia: reserva directa, sin comisión de plataformas externas.",
    painPoint:
      "Dependés de plataformas de reservas que se quedan con una comisión de cada huésped — y esas plataformas muestran su marca, no la tuya.",
    benefits: [
      "Reserva directa, sin pagar comisión a terceros",
      "Fotografía inmersiva que vende la experiencia, no solo la habitación",
      "Buscador de disponibilidad simple, sin fricción",
      "Una identidad propia, no una ficha más en un listado genérico",
    ],
    mockup: { image: "/hotel.webp", href: "/portafolio/hotel" },
    faq: [
      {
        question: "¿Sirve para posadas o fincas pequeñas, no solo hoteles grandes?",
        answer:
          "Sí — el enfoque es el mismo sin importar el tamaño: mostrar la experiencia y facilitar la reserva directa.",
      },
      {
        question: "¿Puedo seguir usando plataformas como Booking además de mi web?",
        answer:
          "Sí, no son excluyentes. La web suma un canal de reserva directa sin comisión, adicional a los que ya uses.",
      },
    ],
  },
  {
    slug: "tiendas-de-ropa",
    title: "Tiendas de ropa",
    icon: Shirt,
    h1: "Diseño de tiendas online de ropa en Colombia",
    metaDescription:
      "Tiendas online de ropa: catálogo organizado, checkout simple y una imagen de marca que no depende del algoritmo de una red social.",
    painPoint:
      "Vender por Instagram significa mandar catálogo por catálogo en el chat, cada vez, con cada cliente — y perder ventas mientras contestás.",
    benefits: [
      "Catálogo organizado, disponible 24/7, sin responder uno por uno",
      "Checkout simple para cerrar la venta sin salir del sitio",
      "Filtros por talla, color o categoría — algo que Instagram no ofrece",
      "Imagen de marca profesional que no depende del algoritmo de una red social",
    ],
    mockup: { image: "/ropa.webp", href: "/portafolio/tienda-de-ropa" },
    faq: [
      {
        question: "¿Puedo conectar una pasarela de pago colombiana?",
        answer:
          "Sí, se integra la pasarela de pago que mejor se adapte a tu operación y a tus clientes.",
      },
      {
        question: "¿Cuánto se tarda en tener el catálogo completo cargado?",
        answer:
          "Depende del número de productos — se define el alcance exacto antes de empezar, sin sorpresas a mitad de camino.",
      },
    ],
  },
  {
    slug: "barberias",
    title: "Barberías",
    icon: Scissors,
    h1: "Páginas web para barberías en Colombia",
    metaDescription:
      "Páginas web para barberías: reserva de turno visible, galería de trabajos propia y una imagen que compite con las barberías más profesionales.",
    painPoint:
      "Agendás citas por WhatsApp o Instagram, y cuando estás con un cliente en la silla, el resto de los mensajes se acumulan sin respuesta.",
    benefits: [
      "Reserva de turno visible, sin que tengas el celular en la mano",
      "Galería propia de cortes y estilos, no perdida entre historias",
      "Ubicación y horario siempre visibles, sin que pregunten 'a qué hora abren'",
      "Una imagen que compite con las barberías que sí se ven profesionales",
    ],
    mockup: { image: "/barberias.webp", href: "/portafolio/barberia" },
    faq: [
      {
        question: "¿Necesito un sistema de citas complejo?",
        answer:
          "No — empieza simple, con reserva o contacto directo por WhatsApp desde la web, y se puede sumar un sistema más completo más adelante si hace falta.",
      },
      {
        question: "¿Sirve si tengo más de una sede?",
        answer:
          "Sí, la web se estructura para mostrar todas tus sedes con su ubicación y horario propios.",
      },
    ],
  },
  {
    slug: "gimnasios",
    title: "Gimnasios y entrenadores",
    icon: Dumbbell,
    h1: "Páginas web para gimnasios y entrenadores personales",
    metaDescription:
      "Páginas web para gimnasios y entrenadores personales en Colombia: aparecé en Google, mostrá tus planes y recibí inscripciones sin fricción.",
    painPoint:
      "La gente busca 'gimnasio cerca' en Google antes de ir — si no aparecés ahí, ni siquiera llegan a preguntar el precio.",
    benefits: [
      "Aparecés cuando alguien busca gimnasio o entrenador en tu zona",
      "Mostrás planes, horarios y clases sin responder uno por uno",
      "Formulario o WhatsApp directo para inscripciones, sin fricción",
      "Una imagen que refleja resultados reales, no solo fotos sueltas de Instagram",
    ],
    mockup: { image: "/gimnasios.webp", href: "/portafolio/gimnasio" },
    faq: [
      {
        question: "¿Puedo mostrar mis planes de membresía en la página?",
        answer:
          "Sí, se pueden presentar tus planes y horarios con claridad, para que la persona llegue al WhatsApp ya decidida.",
      },
      {
        question: "¿Sirve para un entrenador personal sin local propio?",
        answer:
          "Sí — el enfoque se adapta igual de bien a un entrenador independiente que a un gimnasio con sede física.",
      },
    ],
  },
  {
    slug: "centros-de-estetica",
    title: "Centros de estética",
    icon: Sparkles,
    h1: "Páginas web para centros de estética y spa",
    metaDescription:
      "Páginas web para centros de estética y spa en Colombia: tratamientos claros, agenda simple y una imagen que genera confianza antes de la primera cita.",
    painPoint:
      "Antes de agendar un tratamiento, la gente investiga — y si todo lo que encuentra es un perfil de Instagram sin información clara, elige a la competencia que sí tiene web.",
    benefits: [
      "Explicá cada tratamiento con claridad, sin depender de un carrusel viejo",
      "Agenda de citas simple, sin ida y vuelta por chat",
      "Fotos de antes/después organizadas y presentadas con profesionalismo",
      "Una web genera más confianza que solo una cuenta de Instagram para decidir un tratamiento",
    ],
    mockup: { image: "/centros-de-estetica.webp", href: "/portafolio/centro-de-estetica" },
    faq: [
      {
        question: "¿Puedo mostrar fotos de antes y después?",
        answer:
          "Sí, con una galería organizada y presentada de forma profesional, siempre con el consentimiento correspondiente de cada caso.",
      },
      {
        question: "¿Se pueden agendar citas directamente desde la web?",
        answer:
          "Sí, con un formulario o enlace de agenda directo, para reducir la fricción de ida y vuelta por chat.",
      },
    ],
  },
];

export function getServicioNicho(slug: string): ServicioNicho | undefined {
  return nichosServicio.find((n) => n.slug === slug);
}
