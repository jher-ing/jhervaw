# SEO Técnico

## Principio general
El SEO técnico es la base que permite que el contenido sea indexado y rankeado. Sin fundamentos técnicos sólidos, ni el mejor contenido rankea.

## Checklist técnico fundamental
- **HTTPS** en todo el sitio, sin contenido mixto.
- **Una sola versión canónica** del dominio (www vs no-www, con/sin slash final) con redirects 301 consistentes.
- **Core Web Vitals** dentro de umbrales "Good" (ver `06-Performance/Core-Web-Vitals.md`) — factor de ranking directo.
- **Mobile-first indexing**: Google indexa la versión mobile primero — debe tener el mismo contenido que desktop.
- **URLs limpias y descriptivas**: `/blog/como-elegir-nutricionista` en vez de `/blog?id=123`.
- **Estructura de encabezados jerárquica**: un solo `<h1>` por página, `<h2>`/`<h3>` en orden lógico sin saltos.
- **Sin contenido duplicado**: usar canonical tags cuando el mismo contenido es accesible por múltiples URLs.
- **404 y redirects bien manejados**: página 404 personalizada, redirects 301 (no 302) para URLs movidas permanentemente.
- **Velocidad de carga** — ver `06-Performance/`.
- **Renderizado accesible a crawlers**: contenido crítico no debe depender exclusivamente de JS del lado del cliente sin SSR/SSG.

## Checklist rápido
- [ ] ¿Existe una sola versión canónica indexada del sitio?
- [ ] ¿Cada página tiene un único `<h1>`?
- [ ] ¿Los Core Web Vitals están en verde?
- [ ] ¿El contenido crítico es visible sin depender de JS del cliente?
