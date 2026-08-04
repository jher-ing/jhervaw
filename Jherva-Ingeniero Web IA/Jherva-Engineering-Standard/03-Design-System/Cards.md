# Cards (Tarjetas)

## Principio general
Una card agrupa información relacionada como una unidad visual escaneable. Debe funcionar como un componente atómico reutilizable, no una composición ad-hoc por página.

## Anatomía estándar
```
┌─────────────────────┐
│ [Imagen/Icono]       │ ← opcional
│ Título               │
│ Descripción corta     │
│ [Metadata / Tags]    │ ← opcional
│ [Acción / CTA]        │ ← opcional
└─────────────────────┘
```

## Reglas de diseño
- Padding interno consistente (usar tokens de `Spacing.md`, típicamente `--space-4` a `--space-6`).
- Border-radius consistente con el resto del sistema (`--radius-md`).
- Sombra sutil en reposo, elevación mayor en hover si la card es clicable (ver `Shadows.md`).
- Si toda la card es clicable, todo el bloque debe tener `cursor: pointer` y estado hover — no solo un link interno.
- Jerarquía tipográfica clara: título > descripción > metadata.

## Variantes comunes
- **Card de contenido**: blog post, producto, artículo.
- **Card de estadística**: número grande + label.
- **Card de acción**: con CTA explícito al fondo.

## Checklist rápido
- [ ] ¿El padding y radius siguen los tokens del sistema?
- [ ] ¿Si la card es clicable, tiene affordance visual (hover, cursor)?
- [ ] ¿La jerarquía de información es clara de un vistazo?
