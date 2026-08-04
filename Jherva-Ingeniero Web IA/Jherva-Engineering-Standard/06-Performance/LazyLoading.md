# Lazy Loading

## Principio general
Cargar solo lo que el usuario necesita ver/usar en este momento. Todo lo demás se difiere hasta que sea relevante.

## Qué diferir

1. **Imágenes fuera del viewport inicial** — `loading="lazy"` nativo o `next/image` (lazy por defecto salvo `priority`).
2. **Componentes pesados no críticos** — modales, gráficos complejos, editores de texto enriquecido — con `dynamic import`.
```tsx
import dynamic from 'next/dynamic';
const HeavyChart = dynamic(() => import('./HeavyChart'), { ssr: false, loading: () => <Skeleton /> });
```
3. **Rutas/código no usado en el bundle inicial** — code splitting automático por ruta (Next.js ya lo hace por página).
4. **Scripts de terceros no críticos** (chat widgets, analytics secundarios) — cargar después de que la página sea interactiva, con `next/script` y estrategia `lazyOnload`.
```tsx
<Script src="https://widget.example.com/chat.js" strategy="lazyOnload" />
```

## Qué NO diferir
- El contenido/imagen principal above-the-fold (LCP) — debe cargar lo antes posible, nunca lazy.
- CSS crítico para el primer render.

## Checklist rápido
- [ ] ¿Los componentes pesados no críticos usan dynamic import?
- [ ] ¿Los scripts de terceros no esenciales cargan de forma diferida?
- [ ] ¿El contenido above-the-fold NO está marcado como lazy por error?
