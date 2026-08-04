# Optimización de Imágenes

## Principio general
Las imágenes suelen ser el mayor contribuyente al peso total de una página. Se optimizan por defecto, no como ajuste posterior.

## Reglas

1. **Formatos modernos**: WebP o AVIF como formato principal, con fallback a JPG/PNG solo si es necesario.
2. **`next/image` obligatorio** en proyectos Next.js — maneja optimización, lazy loading y `srcset` automáticamente.
```tsx
import Image from 'next/image';
<Image src="/hero.jpg" alt="Descripción" width={1200} height={630} priority />
```
3. **`alt` descriptivo siempre** (accesibilidad + SEO) — nunca vacío salvo imágenes puramente decorativas (`alt=""`).
4. **Lazy loading por defecto** en imágenes fuera del viewport inicial; `priority`/`eager` solo en la imagen principal above-the-fold (LCP).
5. **Dimensiones explícitas** (`width`/`height` o `aspect-ratio`) para prevenir Layout Shift (CLS).
6. **Responsive images**: servir el tamaño adecuado según viewport, no la misma imagen de 4000px en mobile y desktop.
7. **Compresión**: nunca subir imágenes sin comprimir — usar herramientas de build o servicios de optimización automática (Vercel Image Optimization, Cloudinary).

## Checklist rápido
- [ ] ¿Se usa `next/image` (o equivalente) en todas las imágenes de contenido?
- [ ] ¿Todas las imágenes tienen `alt` apropiado?
- [ ] ¿La imagen LCP tiene `priority`, el resto usa lazy loading?
- [ ] ¿Las imágenes están en formato WebP/AVIF y comprimidas?
