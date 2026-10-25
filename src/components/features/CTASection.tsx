import { ArrowRight, MessageCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { whatsappHref, type CanalWhatsApp } from "@/config/whatsapp";

/** Con `canal`, suma un botón de WhatsApp con el mensaje inicial de ese canal. */
export function CTASection({ canal }: { canal?: CanalWhatsApp }) {
  return (
    <Section>
      <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-surface-raised px-6 py-16 text-center sm:px-16">
        <h2 className="max-w-2xl text-3xl font-semibold text-balance sm:text-4xl">
          ¿Listo para construir algo que Jherva firmaría con orgullo?
        </h2>
        <p className="max-w-xl text-lg text-text-secondary text-pretty">
          Cuéntanos sobre tu proyecto y definimos juntos el objetivo, el alcance
          y la mejor forma de construirlo.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button href="/contacto" size="lg">
            Hablemos de tu proyecto
            <ArrowRight size={16} aria-hidden />
          </Button>
          {canal && (
            <Button href={whatsappHref(canal.mensaje)} external size="lg" variant="outline">
              <MessageCircle size={16} aria-hidden />
              Escribir por WhatsApp
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
