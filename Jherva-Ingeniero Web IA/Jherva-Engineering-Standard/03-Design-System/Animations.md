# Animaciones

## Principio general
La animación existe para dar feedback y guiar la atención, no para "verse bonita". Debe ser rápida, sutil y con propósito funcional.

## Duraciones estándar
```css
--duration-fast: 150ms;    /* hover, focus, toggles pequeños */
--duration-base: 250ms;    /* transiciones de componentes (modal, dropdown) */
--duration-slow: 400ms;    /* transiciones de página o elementos grandes */
```

## Easing
```css
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);  /* default para la mayoría de transiciones */
--ease-out: cubic-bezier(0, 0, 0.2, 1);          /* elementos que entran */
--ease-in: cubic-bezier(0.4, 0, 1, 1);           /* elementos que salen */
```

## Reglas
- Animar solo `transform` y `opacity` cuando sea posible (son propiedades que no disparan reflow, mejor performance) — ver `06-Performance/`.
- Respetar `prefers-reduced-motion`: si el usuario lo tiene activado, desactivar o reducir animaciones no esenciales.
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```
- Nunca animaciones que bloqueen la interacción del usuario por más de 400ms.
- Micro-interacciones (hover, focus) en `--duration-fast`; transiciones de layout (modal, drawer) en `--duration-base`.

## Checklist rápido
- [ ] ¿Se respeta `prefers-reduced-motion`?
- [ ] ¿Las animaciones usan `transform`/`opacity` en vez de propiedades que disparan reflow?
- [ ] ¿Ninguna animación bloquea la interacción por más de 400ms?
