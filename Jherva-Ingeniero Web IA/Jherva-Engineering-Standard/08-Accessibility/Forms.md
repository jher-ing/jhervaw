# Accesibilidad en Formularios

## Principio general
Un formulario accesible puede completarse íntegramente con teclado y lector de pantalla, con errores anunciados claramente.

## Reglas

1. **Label asociado explícitamente** a cada input vía `htmlFor`/`id` — nunca solo un placeholder o texto visualmente cercano sin asociación programática.
```html
<label for="email">Correo electrónico</label>
<input id="email" type="email" />
```
2. **Campos requeridos marcados** tanto visualmente como con `aria-required="true"` o atributo `required`.
3. **Errores anunciados**: usar `aria-describedby` para vincular el mensaje de error al input, y `role="alert"` o `aria-live="assertive"` para que el lector de pantalla lo anuncie al aparecer.
```html
<input id="email" aria-invalid="true" aria-describedby="email-error" />
<span id="email-error" role="alert">El correo no es válido</span>
```
4. **Agrupación de campos relacionados** con `<fieldset>` y `<legend>` (ej. radio buttons de un mismo grupo).
5. **Orden de tabulación lógico**, sin `tabIndex` positivo manual que rompa el flujo natural del DOM.
6. **Mensajes de éxito/confirmación también anunciados** para usuarios que no pueden ver el cambio visual.

## Checklist rápido
- [ ] ¿Cada input tiene label asociado programáticamente?
- [ ] ¿Los errores se anuncian a lectores de pantalla, no solo se muestran visualmente?
- [ ] ¿El formulario es completable 100% por teclado sin trampas de foco?
