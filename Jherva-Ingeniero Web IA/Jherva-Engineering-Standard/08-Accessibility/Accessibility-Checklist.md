# Checklist General de Accesibilidad

## Antes de lanzar

### Estructura
- [ ] HTML semántico (`<main>`, `<nav>`, `<button>`, etc.) usado correctamente.
- [ ] Un solo `<h1>` por página, jerarquía de encabezados sin saltos.
- [ ] Landmarks (`<main>`, `<nav>`, `<footer>`) presentes.

### Teclado
- [ ] Toda la funcionalidad es operable solo con teclado.
- [ ] Foco siempre visible (`:focus-visible` definido).
- [ ] Modales atrapan y devuelven el foco correctamente.
- [ ] Existe skip link al contenido principal.

### Visual
- [ ] Contraste de texto cumple 4.5:1 (normal) / 3:1 (grande) — ver `Contrast.md`.
- [ ] La información no depende solo del color.
- [ ] El sitio es usable con zoom al 200% sin pérdida de funcionalidad.

### Contenido
- [ ] Imágenes con `alt` apropiado (descriptivo o vacío si es decorativo).
- [ ] Videos con subtítulos si tienen audio relevante.
- [ ] Enlaces y botones con texto descriptivo fuera de contexto.

### Formularios
- [ ] Labels asociados programáticamente a cada input.
- [ ] Errores anunciados a tecnologías asistivas (`aria-live`/`role="alert"`).

### Pruebas
- [ ] Auditoría automatizada corrida (axe DevTools o Lighthouse Accessibility).
- [ ] Prueba manual de navegación completa por teclado.
- [ ] Prueba con al menos un lector de pantalla real en flujos críticos (registro, checkout, formularios principales).

## Meta
Cumplimiento WCAG 2.1 AA como mínimo no negociable en todo proyecto lanzado a producción.
