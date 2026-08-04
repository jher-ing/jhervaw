# Navegación por Teclado

## Principio general
Toda funcionalidad debe ser accesible y operable usando solo el teclado — sin depender del mouse/touch.

## Reglas

1. **Orden de tabulación lógico**: sigue el orden visual/de lectura de la página, sin saltos confusos.
2. **Foco visible siempre**: nunca usar `outline: none` sin reemplazarlo con un indicador de foco visible propio.
```css
/* ❌ Nunca hacer esto sin alternativa */
:focus { outline: none; }

/* ✅ Reemplazo con indicador visible */
:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
```
3. **Todos los elementos interactivos son alcanzables por Tab**: botones, links, inputs, elementos custom con `role="button"` necesitan `tabIndex="0"`.
4. **Modales y dropdowns**: al abrir, el foco se mueve dentro del componente (focus trap); al cerrar, el foco regresa al elemento que lo abrió.
5. **Escape cierra modales/dropdowns**, Enter/Space activa botones custom.
6. **Skip link** al inicio de la página ("Saltar al contenido principal") para evitar que el usuario tenga que tabular por todo el header en cada página.

## Checklist rápido
- [ ] ¿Se puede completar cualquier flujo crítico usando solo Tab, Enter, Escape y flechas?
- [ ] ¿El foco es siempre visible?
- [ ] ¿Los modales atrapan el foco y lo devuelven correctamente al cerrar?
- [ ] ¿Existe skip link al contenido principal?
