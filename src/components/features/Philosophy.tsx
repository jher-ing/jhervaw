import { Eye, ShieldAlert, LineChart, Lock, FileText } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";

/**
 * Fuente: IDENTITY.md — "Personalidad de marca" (cita textual adaptada) +
 * README.md — "Principios rectores" (5 puntos textuales).
 */
const principles = [
  {
    icon: Eye,
    title: "Claridad sobre cleverness",
    description: "Código y diseño que cualquier persona del equipo pueda entender en 5 minutos.",
  },
  {
    icon: ShieldAlert,
    title: "Performance y accesibilidad no son opcionales",
    description: "Se diseñan desde el día uno, no se arreglan después.",
  },
  {
    icon: LineChart,
    title: "Todo output medible",
    description: "Si no se puede medir (Lighthouse, Web Vitals, tasa de conversión), no se puede mejorar.",
  },
  {
    icon: Lock,
    title: "Seguridad por defecto",
    description: "Nunca confiar en el input del usuario; nunca exponer secretos.",
  },
  {
    icon: FileText,
    title: "Documentar decisiones, no solo código",
    description: "El por qué importa tanto como el qué.",
  },
];

export function Philosophy() {
  return (
    <Section tone="ink">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="flex flex-col gap-6">
          <Eyebrow className="text-accent">Filosofía</Eyebrow>
          <h2 className="text-3xl font-semibold text-balance sm:text-4xl">
            Moderna. Minimalista. Tech. Directa.
          </h2>
          <p className="text-lg leading-relaxed text-white/70 text-pretty">
            Alguien que sabe exactamente lo que hace, no necesita explicarlo de más,
            y deja que el trabajo hable. Nada de exceso decorativo, nada de jerga
            corporativa vacía, nada de &ldquo;soluciones sinérgicas innovadoras&rdquo;.
            Precisión antes que ruido.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2">
          {principles.map((principle) => (
            <li key={principle.title} className="flex flex-col gap-3">
              <principle.icon size={20} className="text-accent" aria-hidden />
              <h3 className="text-sm font-semibold text-white">{principle.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{principle.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
