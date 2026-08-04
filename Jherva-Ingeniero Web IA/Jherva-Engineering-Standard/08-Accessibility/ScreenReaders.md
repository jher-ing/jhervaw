# Lectores de Pantalla

## Principio general
El HTML semántico correcto resuelve la mayoría de la accesibilidad para lectores de pantalla automáticamente. ARIA se usa para completar lo que el HTML nativo no puede expresar, no para reemplazarlo.

## Reglas

1. **HTML semántico primero**: usar `<button>`, `<nav>`, `<main>`, `<header>`, `<footer>`, `<article>` en vez de `<div>` genéricos con roles ARIA simulados.
2. **Regla de oro de ARIA**: "No ARIA is better than bad ARIA" — si un elemento nativo ya tiene el comportamiento/semántica correcta, no agregar ARIA innecesario.
3. **`alt` en imágenes**: descriptivo para imágenes con contenido informativo; `alt=""` (vacío, no ausente) para imágenes puramente decorativas.
4. **Landmarks**: estructura la página con `<main>`, `<nav>`, `<aside>` para que el usuario pueda saltar entre secciones con el lector de pantalla.
5. **Textos de enlaces/botones descriptivos fuera de contexto**: "Descargar informe de ventas Q3", no "Descargar" (un usuario de lector de pantalla puede navegar por lista de links sin contexto circundante).
6. **`aria-live`** para contenido que cambia dinámicamente y debe anunciarse (notificaciones, resultados de búsqueda) sin que el foco cambie.
```html
<div aria-live="polite">{mensaje de confirmación}</div>
```
7. **Formularios**: cada input asociado a su label vía `htmlFor`/`id`, errores anunciados con `role="alert"` o `aria-live`.

## Checklist rápido
- [ ] ¿Se usó HTML semántico antes de recurrir a ARIA?
- [ ] ¿Las imágenes decorativas tienen `alt=""` y las informativas `alt` descriptivo?
- [ ] ¿Se probó el flujo crítico con un lector de pantalla real (VoiceOver, NVDA)?
