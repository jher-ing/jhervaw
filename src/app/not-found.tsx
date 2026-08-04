import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-primary">
        Error 404
      </p>
      <h1 className="text-3xl font-semibold sm:text-4xl">Esta página no existe</h1>
      <p className="max-w-md text-text-secondary">
        Puede que el enlace esté roto o que la página se haya movido. Vuelve al
        inicio para seguir navegando.
      </p>
      <Button href="/" variant="outline">
        <ArrowLeft size={16} aria-hidden />
        Volver al inicio
      </Button>
    </Container>
  );
}
