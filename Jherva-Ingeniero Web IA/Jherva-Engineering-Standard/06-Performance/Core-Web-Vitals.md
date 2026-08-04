# Core Web Vitals

## Principio general
Los Core Web Vitals son las métricas de experiencia real de usuario que Google usa como factor de ranking. Se miden con datos de campo (CrUX), no solo de laboratorio.

## Métricas y umbrales "Good"
| Métrica | Qué mide | Umbral Good |
|---|---|---|
| **LCP** (Largest Contentful Paint) | Tiempo hasta que el elemento más grande visible carga | ≤ 2.5s |
| **INP** (Interaction to Next Paint) | Latencia de respuesta a interacciones del usuario | ≤ 200ms |
| **CLS** (Cumulative Layout Shift) | Estabilidad visual (elementos que "saltan") | ≤ 0.1 |

## Cómo mejorar cada métrica

### LCP
- Optimizar la imagen/elemento principal (formato moderno, tamaño correcto, `priority`/preload).
- Reducir tiempo de respuesta del servidor (TTFB).
- Eliminar render-blocking resources (CSS/JS que bloquean el primer render).

### INP
- Reducir JavaScript en el hilo principal — dividir tareas largas (`code splitting`).
- Evitar handlers de eventos pesados sin debounce/throttle.
- Usar `startTransition`/concurrent features de React para actualizaciones no urgentes.

### CLS
- Siempre definir `width`/`height` (o `aspect-ratio`) en imágenes y videos.
- Reservar espacio para anuncios, embeds o contenido cargado async.
- Evitar insertar contenido dinámicamente por encima de contenido existente sin reservar espacio.

## Checklist rápido
- [ ] ¿LCP ≤ 2.5s en mobile?
- [ ] ¿INP ≤ 200ms?
- [ ] ¿CLS ≤ 0.1?
- [ ] ¿Se validó con datos de campo reales (Search Console / CrUX), no solo de laboratorio?
