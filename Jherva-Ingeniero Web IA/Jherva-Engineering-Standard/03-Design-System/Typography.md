# Tipografía

## Principio general
Escala tipográfica limitada y consistente. Máximo 2 familias tipográficas por proyecto (una para headings, opcionalmente otra para body — o la misma para ambas).

## Escala estándar (basada en 1.25 - Major Third)
```css
--text-xs: 0.75rem;   /* 12px */
--text-sm: 0.875rem;  /* 14px */
--text-base: 1rem;    /* 16px */
--text-lg: 1.125rem;  /* 18px */
--text-xl: 1.25rem;   /* 20px */
--text-2xl: 1.5rem;   /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem;  /* 36px */
--text-5xl: 3rem;     /* 48px */
```

## Pesos
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

## Reglas
- `line-height` de 1.5 para body text, 1.1-1.3 para headings grandes.
- Line length óptima: 50-75 caracteres por línea en párrafos largos.
- `font-size` base nunca menor a 16px en body (accesibilidad y evitar zoom automático en mobile).
- Jerarquía clara: H1 > H2 > H3 con saltos de tamaño perceptibles (no 2px de diferencia).
- Usar `font-display: swap` para evitar FOIT (Flash of Invisible Text) — ver `06-Performance/Fonts.md`.

## Checklist rápido
- [ ] ¿Se usan máximo 2 familias tipográficas?
- [ ] ¿La escala de tamaños sigue una proporción consistente?
- [ ] ¿El body text es legible (16px+, line-height 1.5, 50-75 caracteres por línea)?
