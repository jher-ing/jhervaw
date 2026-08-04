# Mobile-First

## Principio general
Se diseña y construye primero para mobile, y se expande hacia desktop — nunca al revés. Más del 60% del tráfico web típico es mobile.

## Reglas de diseño

1. **CSS mobile-first**: estilos base para mobile, `min-width` media queries para escalar a tablet/desktop.
```css
/* ✅ Mobile-first */
.card { padding: 1rem; }
@media (min-width: 768px) { .card { padding: 2rem; } }
```
2. **Área táctil mínima de 44x44px** para cualquier elemento interactivo (botones, links, checkboxes).
3. **Thumb zone**: acciones principales en la mitad inferior de la pantalla, alcanzables con el pulgar.
4. **Evitar hover-only interactions**: todo lo que dependa de `:hover` debe tener equivalente táctil.
5. **Performance mobile**: imágenes responsive (`srcset`), lazy loading, JS mínimo en el critical path (ver `06-Performance/`).
6. **Formularios adaptados**: teclados nativos correctos, campos grandes, evitar zoom-in no deseado (`font-size` mínimo 16px en inputs para evitar zoom automático en iOS).
7. **Breakpoints estándar**: 375px (mobile), 768px (tablet), 1024px (desktop), 1440px (large desktop).

## Checklist rápido
- [ ] ¿El diseño se probó primero en viewport de 375px?
- [ ] ¿Todos los elementos táctiles cumplen 44x44px mínimo?
- [ ] ¿Las interacciones no dependen exclusivamente de hover?
- [ ] ¿Los inputs tienen `font-size >= 16px` para evitar zoom en iOS?
