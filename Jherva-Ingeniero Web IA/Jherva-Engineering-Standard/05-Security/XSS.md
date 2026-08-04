# Cross-Site Scripting (XSS)

## Principio general
XSS ocurre cuando input no confiable del usuario se renderiza como código ejecutable en el navegador. React/Next.js escapan output por defecto — el riesgo real está en las excepciones a esa protección.

## Vectores de riesgo comunes

1. **`dangerouslySetInnerHTML`**: nunca usar con contenido no sanitizado de usuarios.
```tsx
// ❌ Peligroso si `content` viene de un usuario sin sanitizar
<div dangerouslySetInnerHTML={{ __html: content }} />

// ✅ Sanitizar primero con DOMPurify
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />
```

2. **URLs generadas dinámicamente** (`href`, `src`) desde input de usuario — validar que no sean `javascript:` URIs.
3. **Contenido de terceros embebido** (widgets, comentarios) sin sandboxing.
4. **LocalStorage/sessionStorage con datos sensibles** accesibles por cualquier script inyectado.

## Reglas
- Nunca confiar en input del usuario — validar y sanitizar tanto en cliente como en servidor.
- Usar CSP (ver `CSP.md`) como capa de defensa adicional, no como único mecanismo.
- Escapar output en cualquier contexto no manejado automáticamente por el framework (emails HTML generados dinámicamente, PDFs, exports).

## Checklist rápido
- [ ] ¿Se usa `dangerouslySetInnerHTML` solo con contenido sanitizado (DOMPurify)?
- [ ] ¿Las URLs dinámicas se validan contra esquemas peligrosos (`javascript:`)?
- [ ] ¿Existe CSP configurada como capa adicional de defensa?
