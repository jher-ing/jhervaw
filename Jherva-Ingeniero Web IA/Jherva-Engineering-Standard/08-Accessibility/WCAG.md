# WCAG (Web Content Accessibility Guidelines)

## Principio general
Todo proyecto cumple como mínimo **WCAG 2.1 nivel AA** — no es opcional, es requisito de lanzamiento, tanto por ética como por marco legal en muchas jurisdicciones.

## Los 4 principios (POUR)
1. **Perceptible**: la información se presenta de forma que los usuarios puedan percibirla (alt text, contraste, subtítulos).
2. **Operable**: la interfaz es utilizable con teclado, sin límites de tiempo imposibles, sin contenido que cause convulsiones.
3. **Comprensible**: contenido y operación de la UI son claros y predecibles.
4. **Robusto**: el contenido funciona con tecnologías asistivas actuales y futuras (HTML semántico, ARIA correcto).

## Criterios AA más relevantes para web
- Contraste de texto mínimo 4.5:1 (texto normal), 3:1 (texto grande) — ver `Contrast.md`.
- Navegación completa por teclado — ver `Keyboard.md`.
- Todo contenido no textual tiene alternativa textual.
- Los formularios tienen labels e instrucciones claras — ver `Forms.md`.
- El foco es visible en todo momento.
- No hay contenido que parpadee más de 3 veces por segundo.

## Checklist rápido
- [ ] ¿Se auditó el sitio con una herramienta automatizada (axe, Lighthouse) y prueba manual?
- [ ] ¿Se probó con navegación 100% por teclado?
- [ ] ¿Se probó con un lector de pantalla al menos en los flujos críticos?
