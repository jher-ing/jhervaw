# Enlazado Interno

## Principio general
El enlazado interno distribuye "autoridad" (link equity) entre páginas y ayuda a los crawlers a descubrir y entender la jerarquía del sitio. También mejora la experiencia de navegación del usuario.

## Reglas
- Toda página importante debe ser alcanzable en máximo 3 clics desde la home.
- Usar **anchor text descriptivo** con la keyword relevante, nunca "click aquí" o "leer más" genérico.
- Enlazar contenido relacionado dentro del cuerpo del artículo/página (ej. un blog post enlaza a otros posts relacionados y a páginas de servicio relevantes).
- Páginas huérfanas (sin ningún enlace interno apuntando a ellas) son un problema — revisar periódicamente.
- Enlaces desde páginas de alta autoridad (home, páginas más visitadas) hacia páginas que se quieren posicionar.
- Breadcrumbs cuentan como enlazado interno estructurado — ver `Schema.md` para `BreadcrumbList`.

## Ejemplo correcto vs incorrecto
```html
<!-- ✅ Correcto -->
<a href="/servicios/nutricion-deportiva">planes de nutrición deportiva</a>

<!-- ❌ Incorrecto -->
<a href="/servicios/nutricion-deportiva">click aquí</a>
```

## Checklist rápido
- [ ] ¿Toda página clave es alcanzable en 3 clics desde la home?
- [ ] ¿Los anchor text son descriptivos, no genéricos?
- [ ] ¿Existen páginas huérfanas sin enlaces internos entrantes?
