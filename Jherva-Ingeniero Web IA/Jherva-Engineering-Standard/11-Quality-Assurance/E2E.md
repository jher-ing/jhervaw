# End-to-End (E2E) Testing

## Principio general
Un test E2E simula el flujo completo de un usuario real en un navegador real, validando que el sistema funciona de punta a punta — la capa de mayor confianza, pero también la más costosa de mantener.

## Herramienta de referencia
Playwright (recomendado) o Cypress.

## Qué cubrir con E2E (con moderación)
- Flujos críticos de negocio: registro → login → acción principal del producto → logout.
- Checkout/pago completo (con proveedor de pago en modo test/sandbox).
- Flujos que involucran múltiples páginas y estado persistente entre pasos.

## Reglas

1. **Pocos pero críticos**: E2E son lentos y frágiles por naturaleza — reservarlos para los flujos que, si se rompen, son catastróficos para el negocio.
2. **Datos de test aislados**: cada corrida usa datos propios (usuario de test creado/eliminado en el mismo test), nunca depende de datos preexistentes frágiles.
3. **Selectores estables**: usar `data-testid` en vez de clases CSS o texto que puede cambiar con el diseño.
```tsx
<button data-testid="submit-checkout">Confirmar pedido</button>
```
4. **Correr en CI antes de cada despliegue a producción** en los flujos más críticos, al menos.
5. **Screenshots/video en fallos** para debugging rápido sin tener que reproducir localmente.

## Checklist rápido
- [ ] ¿Los E2E cubren solo los flujos verdaderamente críticos del negocio?
- [ ] ¿Se usan `data-testid` en vez de selectores frágiles?
- [ ] ¿Corren en CI antes de cada despliegue a producción?
