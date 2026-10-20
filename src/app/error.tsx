"use client";

import { useEffect } from "react";
import { MessageCircle, RotateCw } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/** Reintentar: `retry` en Next 16.3 (vuelve a pedir la página); `unstable_retry` y `reset` de respaldo. */
export default function WebError({
  error,
  retry,
  unstable_retry,
  reset,
}: {
  error: Error & { digest?: string };
  retry?: () => void;
  unstable_retry?: () => void;
  reset?: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  const reintentar = retry ?? unstable_retry ?? reset;

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <div role="alert" className="flex flex-col items-center gap-6">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-primary">Algo salió mal</p>
      <h1 className="text-3xl font-semibold sm:text-4xl">No pudimos cargar esta página</h1>
      <p className="max-w-md text-text-secondary">
        Puede ser un problema momentáneo de conexión. Intenta de nuevo o, si es urgente, escríbenos por WhatsApp.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {reintentar && (
          <Button onClick={() => reintentar()}>
            <RotateCw size={16} aria-hidden />
            Intentar de nuevo
          </Button>
        )}
        <Button href="https://wa.me/573021282572" external variant="outline">
          <MessageCircle size={16} aria-hidden />
          Escribir por WhatsApp
        </Button>
      </div>
      {error.digest && <p className="text-xs text-text-secondary">Código para soporte: {error.digest}</p>}
      </div>
    </Container>
  );
}
