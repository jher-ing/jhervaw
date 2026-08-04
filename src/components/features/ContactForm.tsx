"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre completo."),
  email: z.string().trim().email("El correo debe tener un formato válido, ej. nombre@empresa.com."),
  message: z
    .string()
    .trim()
    .min(20, "Cuéntanos un poco más — mínimo 20 caracteres.")
    .max(1000, "Máximo 1000 caracteres."),
});

type FormValues = z.infer<typeof schema>;

/**
 * Sin backend/proveedor de email configurado en la documentación (no se
 * inventa una integración) — el formulario valida en el cliente y, al
 * enviarse, abre WhatsApp con el mensaje pre-cargado hacia el número real
 * de Jherva. Sigue 02-UI-UX/Forms.md y 08-Accessibility/Forms.md.
 */
export function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  function onSubmit(values: FormValues) {
    const text = `Hola Jherva, soy ${values.name} (${values.email}).\n\n${values.message}`;
    const url = `${siteConfig.phone.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-xl border border-border bg-surface-raised p-10 text-center"
      >
        <CheckCircle2 className="text-primary" size={32} aria-hidden />
        <p className="font-semibold">Abrimos WhatsApp con tu mensaje listo</p>
        <p className="text-sm text-text-secondary">
          Si no se abrió automáticamente, escríbenos directo al {siteConfig.phone.display}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          aria-invalid={!!errors.name || undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={cn(
            "h-11 rounded-lg border bg-surface px-4 text-base outline-none transition-colors",
            errors.name ? "border-danger" : "border-border focus:border-primary"
          )}
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="text-sm text-danger">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          aria-invalid={!!errors.email || undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={cn(
            "h-11 rounded-lg border bg-surface px-4 text-base outline-none transition-colors",
            errors.email ? "border-danger" : "border-border focus:border-primary"
          )}
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-sm text-danger">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Cuéntanos sobre tu proyecto
        </label>
        <textarea
          id="message"
          rows={5}
          aria-invalid={!!errors.message || undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            "resize-none rounded-lg border bg-surface px-4 py-3 text-base outline-none transition-colors",
            errors.message ? "border-danger" : "border-border focus:border-primary"
          )}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-sm text-danger">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" loading={isSubmitting} className="mt-2">
        {!isSubmitting && <Send size={16} aria-hidden />}
        Enviar por WhatsApp
      </Button>
      <p className="text-xs text-text-muted">
        Al enviar, se abre WhatsApp con tu mensaje ya escrito hacia Jherva. No se
        almacena ningún dato en este sitio.
      </p>
    </form>
  );
}
