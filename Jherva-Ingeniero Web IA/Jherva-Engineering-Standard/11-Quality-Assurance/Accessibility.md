# Accesibilidad en QA

## Principio general
La accesibilidad se verifica como parte del proceso normal de QA en cada feature nueva, no como una auditoría aislada al final del proyecto.

## Proceso de QA de accesibilidad por feature
1. Auditoría automatizada: correr axe DevTools o Lighthouse Accessibility en la nueva UI.
2. Prueba manual de teclado: completar el flujo nuevo usando solo Tab/Enter/Escape.
3. Verificar contraste de cualquier color nuevo introducido (ver `08-Accessibility/Contrast.md`).
4. Para features complejas (modales, componentes custom interactivos), prueba con lector de pantalla.

## Criterio de aceptación
Ninguna feature nueva se aprueba en review si introduce una regresión de accesibilidad detectable con las herramientas automatizadas estándar del equipo.

## Checklist rápido
- [ ] ¿Se corrió una auditoría automatizada en la feature nueva?
- [ ] ¿Se probó el flujo nuevo con navegación por teclado?
- [ ] ¿Se verificó contraste de cualquier color/componente nuevo?
