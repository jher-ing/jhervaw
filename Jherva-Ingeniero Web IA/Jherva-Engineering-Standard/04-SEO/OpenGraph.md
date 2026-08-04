# Open Graph y Twitter Cards

## Principio general
Cuando se comparte un link en redes sociales o apps de mensajería, Open Graph controla cómo se ve la preview — título, imagen, descripción. Una preview pobre reduce drásticamente el CTR al compartir.

## Tags obligatorios
```html
<meta property="og:title" content="Título optimizado para compartir" />
<meta property="og:description" content="Descripción persuasiva" />
<meta property="og:image" content="https://ejemplo.com/og-image.jpg" />
<meta property="og:url" content="https://ejemplo.com/pagina" />
<meta property="og:type" content="website" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Título" />
<meta name="twitter:image" content="https://ejemplo.com/og-image.jpg" />
```

## Especificaciones de imagen
- Tamaño recomendado: 1200x630px (ratio 1.91:1).
- Peso menor a 1MB, formato JPG/PNG.
- Texto legible dentro de la imagen incluso en preview pequeña.
- Cada página importante (home, artículos de blog, páginas de producto) tiene su propia imagen OG, no una genérica repetida en todo el sitio.

## Implementación en Next.js
```ts
export const metadata: Metadata = {
  openGraph: {
    title: '...',
    description: '...',
    images: ['/og-image.jpg'],
  },
};
```

## Checklist rápido
- [ ] ¿Cada página relevante tiene su propia imagen OG (1200x630px)?
- [ ] ¿Se probó la preview con una herramienta (Facebook Sharing Debugger, Twitter Card Validator)?
- [ ] ¿El título y descripción OG son específicos, no genéricos del sitio completo?
