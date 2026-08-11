import { Plus } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

/**
 * FAQ organizada por clusters temáticos (SEO) — 04-SEO/.
 * Acordeón con <details>/<summary> nativo: contenido presente en el HTML
 * inicial (crawleable), sin JS, con soporte de teclado/lector de pantalla
 * incluido por el navegador.
 */
type FaqItem = {
  question: string;
  answer: string;
};

type FaqCluster = {
  id: string;
  title: string;
  items: FaqItem[];
};

const clusters: FaqCluster[] = [
  {
    id: "crear-pagina-web",
    title: "Crear una página web para un negocio",
    items: [
      {
        question: "¿Cómo puedo crear una página web para mi negocio desde cero?",
        answer:
          "Implica definir el objetivo del sitio (vender, generar contactos o informar), elegir dominio y hosting, planificar la estructura de páginas, diseñar la interfaz según tu marca, desarrollar el sitio con buenas prácticas de SEO y rendimiento, y probarlo antes de publicarlo. Puedes usar una plataforma de autoservicio o contratar a un desarrollador para un resultado más a medida y escalable.",
      },
      {
        question: "Pasos iniciales para crear una página web de empresa",
        answer:
          "1) Define el objetivo de negocio y el público del sitio. 2) Registra un dominio y elige hosting. 3) Planifica el mapa del sitio. 4) Aplica o diseña la identidad visual. 5) Desarrolla priorizando velocidad, SEO y accesibilidad. 6) Prueba en distintos dispositivos. 7) Publica y monitorea resultados.",
      },
    ],
  },
  {
    id: "plataformas-web",
    title: "Plataformas para crear páginas web",
    items: [
      {
        question: "¿Cuáles son las mejores plataformas para diseñar una página web para mi empresa?",
        answer:
          "Las más usadas son WordPress (flexible, ideal para contenido y blogs), Wix y Squarespace (fáciles de usar, sin conocimientos técnicos), Shopify (especializada en tiendas online) y desarrollo a medida con frameworks como Next.js (mayor rendimiento, seguridad y personalización). La mejor opción depende del presupuesto y los objetivos de conversión del negocio.",
      },
      {
        question: "Plataformas fáciles para construir sitios web de negocios",
        answer:
          "Wix, Squarespace y Webflow ofrecen editores visuales de arrastrar y soltar, ideales si no programas. WordPress con constructores como Elementor también es popular. Son rápidas de usar, pero suelen tener más limitaciones de personalización, rendimiento y escalabilidad que un desarrollo a medida.",
      },
    ],
  },
  {
    id: "costos-pagina-web",
    title: "Costos de una página web",
    items: [
      {
        question: "¿Cuánto cuesta diseñar una página web profesional?",
        answer:
          "El costo varía según la complejidad: un sitio básico en plataformas de autoservicio puede costar desde unos 50-300 USD al año en planes y dominio. Un sitio diseñado y desarrollado a medida, con diseño personalizado, SEO y optimización de rendimiento, suele partir de varios cientos de dólares y crecer según el número de páginas, funcionalidades e integraciones.",
      },
      {
        question: "¿Cuánto cuesta aproximadamente crear una página web para un negocio local?",
        answer:
          "Para un negocio local, una landing page o sitio informativo sencillo (inicio, servicios, contacto) suele ser la opción más económica dentro del desarrollo a medida. Sitios con más páginas, tienda online o funcionalidades específicas incrementan el costo según el alcance definido.",
      },
    ],
  },
  {
    id: "contratar-agencia-web",
    title: "Contratar un diseñador o agencia",
    items: [
      {
        question: "¿Dónde puedo contratar servicios profesionales para desarrollar una página web comercial?",
        answer:
          "Puedes contratar freelancers especializados, agencias de diseño y desarrollo web, o estudios de producto digital. Al elegir, revisa portafolio, casos de éxito, proceso de trabajo y si el SEO, rendimiento y seguridad forman parte del estándar de entrega, no de extras adicionales.",
      },
      {
        question: "Empresas de diseño web en mi ciudad para pymes",
        answer:
          "Búscalas en Google Maps, Google Business, LinkedIn o cámaras de comercio locales, filtrando por reseñas, portafolio y experiencia con negocios de tamaño similar al tuyo. Comparar al menos 2-3 opciones en calidad técnica, diseño, precio y soporte post-lanzamiento ayuda a decidir mejor.",
      },
    ],
  },
  {
    id: "caracteristicas-buena-web",
    title: "Características de una buena página web",
    items: [
      {
        question: "¿Qué características debe tener una página web efectiva para un negocio pequeño?",
        answer:
          "Diseño responsive adaptado a móvil, carga rápida, navegación intuitiva, información de contacto visible, llamados a la acción (CTA) claros, optimización SEO básica, contenido actualizado y certificado SSL. En conjunto, generan confianza y facilitan que el visitante se convierta en cliente.",
      },
    ],
  },
  {
    id: "tienda-online-ecommerce",
    title: "Tiendas online (eCommerce)",
    items: [
      {
        question: "Requisitos técnicos para tener una tienda online",
        answer:
          "Dominio propio y hosting confiable, una plataforma de eCommerce (Shopify, WooCommerce o desarrollo a medida), pasarela de pago segura con cifrado SSL, catálogo de productos con imágenes y descripciones optimizadas, gestión de inventario, integración con envíos y cumplimiento de normativas de protección de datos.",
      },
    ],
  },
];

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: clusters.flatMap((cluster) =>
    cluster.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }))
  ),
};

export function FAQSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <Section id="faq">
      {showHeading ? (
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Todo lo que necesitas saber antes de crear tu página web"
          description="Respuestas directas, organizadas por tema, para resolver las dudas más comunes antes de empezar un proyecto digital."
        />
      ) : (
        // Puente semántico h1 → h2 → h3: el h1 de la página ya cubre este
        // título, pero los h3 de cada cluster (abajo) necesitan un h2
        // ancestro real en el DOM para no saltar de nivel.
        <h2 className="sr-only">Preguntas frecuentes por tema</h2>
      )}

      <nav
        aria-label="Temas de preguntas frecuentes"
        className={showHeading ? "mt-10 flex flex-wrap gap-2" : "flex flex-wrap gap-2"}
      >
        {clusters.map((cluster) => (
          <a
            key={cluster.id}
            href={`#${cluster.id}`}
            className="rounded-full border border-border bg-surface-raised px-4 py-1.5 text-sm font-medium text-text-secondary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:border-border-strong hover:text-text-primary"
          >
            {cluster.title}
          </a>
        ))}
      </nav>

      <div className="mt-12 flex flex-col gap-14">
        {clusters.map((cluster) => (
          <div key={cluster.id} id={cluster.id} className="scroll-mt-24">
            <h3 className="font-display text-xl font-semibold sm:text-2xl">{cluster.title}</h3>

            <div className="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
              {cluster.items.map((item) => {
                const questionId = slugify(item.question);
                return (
                  <details key={questionId} id={questionId} className="group scroll-mt-24 open:bg-surface-raised/40">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-text-primary sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                      {item.question}
                      <span
                        aria-hidden="true"
                        className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-open:rotate-45"
                      >
                        <Plus size={14} />
                      </span>
                    </summary>
                    <div className="px-5 pb-5 text-sm leading-relaxed text-text-secondary sm:px-6 sm:pb-6">
                      <p>{item.answer}</p>
                    </div>
                  </details>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </Section>
  );
}
