import type { Metadata } from "next";
import {
  Search,
  ClipboardList,
  MessageCircleQuestion,
  Compass,
  Map,
  PenTool,
  Code2,
  SearchCheck,
  Gauge,
  Accessibility,
  ShieldCheck,
  PackageCheck,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/features/CTASection";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Metodología",
  description:
    "El flujo de trabajo de 12 fases que sigue Jherva en cada proyecto — desde el descubrimiento hasta la entrega. Sin atajos, sin improvisación.",
  path: "/proceso",
});

interface Phase {
  n: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Fuente: IDENTITY.md — tabla "Flujo de Trabajo Profesional" (12 fases, textual). */
const phases: Phase[] = [
  { n: 0, icon: Search, title: "Descubrimiento", description: "Analizar el prompt del usuario, identificar qué información ya existe y cuál falta." },
  { n: 1, icon: ClipboardList, title: "Analizar requerimientos", description: "Confirmar tipo de proyecto, alcance y contexto de negocio." },
  { n: 2, icon: MessageCircleQuestion, title: "Detectar información faltante", description: "Comparar contra el checklist mínimo de información." },
  { n: 3, icon: MessageCircleQuestion, title: "Preguntar solo lo necesario", description: "Una sola ronda de preguntas agrupadas — nunca preguntas dispersas una por una." },
  { n: 4, icon: Compass, title: "Definir estrategia", description: "Objetivo de conversión, mensaje central, propuesta de valor." },
  { n: 5, icon: Map, title: "Planificar estructura", description: "Mapa del sitio, secciones, jerarquía de contenido." },
  { n: 6, icon: PenTool, title: "Diseñar", description: "Aplicar identidad visual (propia o del cliente) y sistema de diseño." },
  { n: 7, icon: Code2, title: "Desarrollar", description: "Arquitectura limpia, código de calidad." },
  { n: 8, icon: SearchCheck, title: "Optimizar SEO", description: "Metadata, datos estructurados, fundamentos técnicos." },
  { n: 9, icon: Gauge, title: "Optimizar rendimiento", description: "Core Web Vitals, presupuesto de bundle, carga de assets." },
  { n: 10, icon: Accessibility, title: "Revisar accesibilidad", description: "WCAG 2.1 AA como mínimo no negociable." },
  { n: 11, icon: ShieldCheck, title: "Verificar estándares Jherva", description: "Checklist completo del estándar antes de considerar el trabajo terminado." },
  { n: 12, icon: PackageCheck, title: "Entregar", description: "Presentar el proyecto con el mismo criterio con que se entregaría a un cliente real." },
];

const imageScenarios = [
  { scenario: "El usuario proporciona todas las imágenes", action: "Se dejan los espacios y la estructura listos para recibirlas, con especificaciones de tamaño y formato." },
  { scenario: "Se usan imágenes de stock", action: "Se seleccionan bancos coherentes con la identidad visual y el rubro del proyecto." },
  { scenario: "Se generan con IA", action: "Se redactan prompts específicos, alineados a la identidad visual del proyecto." },
  { scenario: "Placeholders temporales", action: "Placeholders neutros, claramente identificables como temporales — nunca contenido que pueda confundirse con final." },
];

export default function ProcesoPage() {
  return (
    <>
      <Section className="pb-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <Eyebrow>Metodología</Eyebrow>
          <h1 className="max-w-3xl text-4xl font-semibold text-balance sm:text-5xl">
            Un proceso, no una improvisación
          </h1>
          <p className="max-w-2xl text-lg text-text-secondary text-pretty">
            Jherva no genera un sitio cuando alguien lo pide — sigue un proceso,
            igual que lo haría cualquier agencia seria. Saltarse fases es la forma
            más común de terminar con un entregable genérico o desalineado del
            negocio del cliente.
          </p>
        </div>
      </Section>

      <Section tone="raised">
        <ol className="mx-auto flex max-w-3xl flex-col gap-3">
          {phases.map((phase) => (
            <li key={phase.n}>
              <Card className="flex flex-row items-start gap-5 p-5 sm:p-6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-semibold text-primary">
                  {phase.n}
                </span>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <phase.icon size={16} className="text-primary" aria-hidden />
                    <h2 className="text-base font-semibold">{phase.title}</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {phase.description}
                  </p>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Fase 0"
          title="El descubrimiento es obligatorio, siempre primero"
          description="Antes de diseñar o escribir una sola línea de código, se analiza el prompt completo del usuario — no solo el último mensaje — para determinar qué información ya existe, qué falta y es bloqueante, y qué se puede asumir con criterio propio."
        />
        <div className="mt-10 rounded-xl border border-border bg-surface-raised p-6 sm:p-8">
          <p className="text-sm font-medium text-text-primary">Regla de oro</p>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            Nunca se pregunta lo que ya se puede inferir del prompt. Las preguntas
            necesarias se agrupan en una sola ronda, nunca se hacen una por una en
            mensajes separados — así opera un equipo profesional, no un
            formulario interminable.
          </p>
        </div>
      </Section>

      <Section tone="raised">
        <SectionHeading
          eyebrow="Manejo de imágenes"
          title="Nunca asumimos el origen de una imagen sin confirmarlo"
          description="Uno de los puntos donde más se asume incorrectamente. Antes de avanzar con cualquier entregable visual, se identifica cuál escenario aplica."
        />
        <div className="mt-10 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th scope="col" className="p-4 font-semibold">Escenario</th>
                <th scope="col" className="p-4 font-semibold">Qué hacemos</th>
              </tr>
            </thead>
            <tbody>
              {imageScenarios.map((row, i) => (
                <tr
                  key={row.scenario}
                  className={i !== imageScenarios.length - 1 ? "border-b border-border" : undefined}
                >
                  <td className="p-4 font-medium text-text-primary">{row.scenario}</td>
                  <td className="p-4 text-text-secondary">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
