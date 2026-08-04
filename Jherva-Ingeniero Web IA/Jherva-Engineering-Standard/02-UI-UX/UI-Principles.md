# Principios de UI

## Principio general
La interfaz debe ser invisible: el usuario recuerda lo que logró hacer, no el diseño en sí. Consistencia y contraste antes que "creatividad" que rompe patrones.

## Principios clave

1. **Grid y alineación**: todo elemento se alinea a una grilla base (4px u 8px). Nada "a ojo".
2. **Contraste funcional**: el color/tamaño comunica jerarquía e interactividad, no solo estética.
3. **Espaciado consistente**: usar la escala de espaciado del sistema de diseño (`03-Design-System/Spacing.md`), nunca valores arbitrarios (`margin: 13px`).
4. **Estados completos**: todo componente interactivo define estado default, hover, active/pressed, focus, disabled y loading.
5. **Máximo 2-3 fuentes/pesos** por proyecto (ver `Typography.md`).
6. **Affordance**: los elementos clicables se ven clicables (cursor, hover, sombra o color diferenciador).

## Ejemplo correcto vs incorrecto
```css
/* ✅ Correcto: usa tokens del sistema */
padding: var(--space-4);
color: var(--color-text-primary);

/* ❌ Incorrecto: valores mágicos */
padding: 13px;
color: #4a4a4a;
```

## Checklist rápido
- [ ] ¿Todos los espaciados usan la escala definida?
- [ ] ¿Cada componente interactivo tiene sus 5 estados definidos?
- [ ] ¿Hay más de 3 tamaños de fuente distintos en una misma pantalla sin justificación?
- [ ] ¿Los elementos clicables se distinguen visualmente de los que no lo son?
