import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Phone, MessageCircle, Clock } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

/**
 * react-hook-form + zod son pesados y solo se usan en esta ruta — se
 * cargan en un chunk propio en vez de inflar el bundle compartido por
 * todas las páginas (06-Performance/LazyLoading.md, Bundle-Size.md).
 */
const ContactForm = dynamic(
  () => import("@/components/features/ContactForm").then((mod) => mod.ContactForm),
  {
    loading: () => (
      <div className="flex h-[420px] animate-pulse flex-col gap-5">
        <div className="h-11 rounded-lg bg-surface-raised" />
        <div className="h-11 rounded-lg bg-surface-raised" />
        <div className="h-28 rounded-lg bg-surface-raised" />
        <div className="h-12 rounded-full bg-surface-raised" />
      </div>
    ),
  }
);

export const metadata: Metadata = pageMetadata({
  title: "Contacto",
  description:
    "Cuéntanos sobre tu proyecto. Escríbenos por WhatsApp, llámanos o completa el formulario y definimos juntos el objetivo, el alcance y cómo construirlo.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="flex flex-col gap-6">
          <Eyebrow>Contacto</Eyebrow>
          <h1 className="text-4xl font-semibold text-balance sm:text-5xl">
            Hablemos de tu proyecto
          </h1>
          <p className="text-lg text-text-secondary text-pretty">
            Cuéntanos qué necesitas construir. Definimos juntos el objetivo, el
            público y el alcance antes de tocar una sola pantalla — así es como
            trabajamos.
          </p>

          <div className="mt-4 flex flex-col gap-4">
            <Card className="flex items-center gap-4 p-5">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone size={18} aria-hidden />
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">Teléfono</p>
                <a
                  href={siteConfig.phone.href}
                  className="text-sm text-text-secondary hover:text-primary"
                >
                  {siteConfig.phone.display}
                </a>
              </div>
            </Card>

            <Card className="flex items-center gap-4 p-5">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MessageCircle size={18} aria-hidden />
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">WhatsApp</p>
                <a
                  href={siteConfig.phone.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-primary"
                >
                  Escríbenos directo
                </a>
              </div>
            </Card>

            <Card className="flex items-center gap-4 p-5">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Clock size={18} aria-hidden />
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">Tiempo de respuesta</p>
                <p className="text-sm text-text-secondary">Respondemos por WhatsApp lo antes posible</p>
              </div>
            </Card>
          </div>
        </div>

        <Card className="p-6 sm:p-10">
          <ContactForm />
        </Card>
      </div>
    </Section>
  );
}
