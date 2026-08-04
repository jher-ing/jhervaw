# Metadata

## Principio general
Cada página tiene metadata única, descriptiva y optimizada para CTR en resultados de búsqueda — no genérica ni duplicada entre páginas.

## Elementos obligatorios por página

```html
<title>Título único de la página (50-60 caracteres)</title>
<meta name="description" content="Descripción única y persuasiva (150-160 caracteres)" />
<link rel="canonical" href="https://ejemplo.com/pagina" />
```

## Reglas
- `<title>`: incluye la keyword principal cerca del inicio, marca al final. Ej: `Nutrición Deportiva en Bogotá | Jherva Nutrición`.
- `meta description`: no es factor de ranking directo, pero afecta CTR — debe ser persuasiva, con propuesta de valor clara.
- Nunca duplicar title/description entre páginas distintas.
- En Next.js, usar el sistema de Metadata API (`generateMetadata`) por página/ruta.

```ts
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: `${params.slug} | Jherva`,
    description: "...",
    alternates: { canonical: `https://ejemplo.com/${params.slug}` },
  };
}
```

## Checklist rápido
- [ ] ¿Cada página tiene title y description únicos?
- [ ] ¿El title está dentro de 50-60 caracteres?
- [ ] ¿La description está dentro de 150-160 caracteres y es persuasiva?
- [ ] ¿Existe canonical tag en cada página?
