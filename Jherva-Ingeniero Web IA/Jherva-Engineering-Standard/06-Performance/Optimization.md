# Optimización General de Performance

## Principio general
Performance se diseña, no se "arregla después". Cada decisión de arquitectura y UI tiene impacto medible en velocidad percibida y real.

## Checklist de optimización end-to-end

### Servidor
- [ ] TTFB (Time to First Byte) < 200ms — server-side rendering eficiente, queries optimizadas.
- [ ] Uso de SSG/ISR sobre SSR puro cuando el contenido no requiere datos en tiempo real por request.
- [ ] Compresión Brotli/Gzip activa en el servidor/CDN.

### Red
- [ ] HTTP/2 o HTTP/3 activo.
- [ ] CDN sirviendo assets estáticos desde el edge más cercano al usuario.
- [ ] Preconnect/dns-prefetch a dominios de terceros críticos (fuentes, analytics).

### Renderizado
- [ ] CSS crítico inline, resto diferido.
- [ ] JS no bloqueante (`defer`/`async`, scripts de terceros diferidos — ver `LazyLoading.md`).
- [ ] Sin layout shifts (dimensiones reservadas — ver `Core-Web-Vitals.md`).

### Assets
- [ ] Imágenes optimizadas (`Images.md`), fuentes optimizadas (`Fonts.md`).
- [ ] Bundle dentro de presupuesto (`Bundle-Size.md`).

### Medición continua
- [ ] Lighthouse CI en el pipeline (`Lighthouse.md`).
- [ ] Monitoreo de Core Web Vitals reales de usuarios en producción (Vercel Analytics, Search Console).

## Regla de oro
Medir antes de optimizar. No optimizar a ciegas — usar el profiler/Lighthouse para identificar el cuello de botella real antes de invertir tiempo en una mejora que no impacta la métrica objetivo.
