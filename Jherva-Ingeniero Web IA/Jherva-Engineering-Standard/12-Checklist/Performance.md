# Checklist: Performance (Pre-Lanzamiento)

- [ ] Lighthouse Performance ≥ 90 en modo mobile.
- [ ] LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 (Core Web Vitals).
- [ ] Imágenes optimizadas (WebP/AVIF, `next/image`, dimensiones explícitas).
- [ ] Fuentes self-hosted con `font-display: swap`.
- [ ] First Load JS dentro de presupuesto (<150KB gzip).
- [ ] Componentes pesados no críticos con lazy loading/dynamic import.
- [ ] Cache configurado correctamente (assets estáticos, ISR donde aplique).
- [ ] Scripts de terceros no críticos cargando de forma diferida.

Checklist completo en `06-Performance/Optimization.md`.
