# Formularios

## Principio general
Un formulario es la mayor fuente de fricción en cualquier flujo. Cada campo debe justificar su existencia.

## Reglas de diseño

1. **Labels siempre visibles** (no solo placeholder — el placeholder desaparece al escribir y el usuario pierde contexto).
2. **Validación en tiempo real**, no solo al enviar. Mostrar el error apenas el campo pierde foco (`onBlur`), no en cada tecla.
3. **Mensajes de error específicos**: "El correo debe incluir un @" en vez de "Campo inválido".
4. **Agrupar campos relacionados** visualmente (dirección: calle, ciudad, código postal juntos).
5. **Autocompletar y autofocus** cuando aplique (`autoComplete="email"`, foco en el primer campo).
6. **Botón de submit deshabilitado con estado claro** mientras el formulario es inválido o se está enviando (loading state, no doble submit).
7. **Formularios largos → dividir en pasos** con progreso visible, en vez de un muro de campos.
8. **Inputs con el tipo correcto**: `type="email"`, `type="tel"`, `inputmode="numeric"` para mostrar el teclado adecuado en mobile.

## Ejemplo correcto
```tsx
<label htmlFor="email">Correo electrónico</label>
<input id="email" type="email" autoComplete="email" aria-describedby="email-error" />
{error && <p id="email-error" role="alert">{error}</p>}
```

## Checklist rápido
- [ ] ¿Cada campo tiene un label visible y asociado por `htmlFor`/`id`?
- [ ] ¿Los errores son específicos y aparecen cerca del campo?
- [ ] ¿Se usa el tipo de input correcto para el teclado mobile?
- [ ] ¿El botón de envío previene doble submit?
