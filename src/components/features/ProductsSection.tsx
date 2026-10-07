import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProductoCard } from "@/components/features/productos/ProductoCard";
import { productos } from "@/components/features/productos/productos";

export function ProductsSection() {
  return (
    <Section tone="raised" id="productos">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Productos Jherva"
          title="Apps listas para usar, desde el celular"
          description="Si no necesitas una página a la medida, empieza con una de nuestras apps. Pruébalas 14 días gratis, sin tarjeta."
        />
        <Button href="/productos" variant="outline" className="self-start md:self-auto">
          Ver productos
          <ArrowRight size={16} aria-hidden />
        </Button>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {productos.map((p) => (
          <ProductoCard key={p.id} producto={p} />
        ))}
      </div>
    </Section>
  );
}
