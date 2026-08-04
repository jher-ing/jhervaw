# Principios de UX

## Principio general
El usuario nunca debe pensar "¿y ahora qué hago?". Cada pantalla tiene un objetivo claro y un siguiente paso evidente.

## Principios clave

1. **Jerarquía clara**: lo más importante es lo más visible (tamaño, contraste, posición).
2. **Consistencia**: mismo patrón de interacción para acciones similares en todo el producto.
3. **Feedback inmediato**: toda acción del usuario tiene una respuesta visual (loading, success, error) en menos de 100ms percibido.
4. **Reducir carga cognitiva**: máximo 5-7 opciones visibles a la vez; agrupar y ocultar lo secundario.
5. **Prevenir errores antes que corregirlos**: validación en tiempo real, botones deshabilitados cuando la acción no es válida, confirmaciones en acciones destructivas.
6. **Ley de Fitts**: elementos interactivos importantes deben ser grandes y estar cerca de donde el usuario ya tiene el foco/cursor.
7. **Ley de Hick**: menos opciones = decisiones más rápidas. No mostrar todo, mostrar lo relevante al contexto.

## Heurísticas de Nielsen aplicadas
- Visibilidad del estado del sistema (loaders, progress bars).
- Coincidencia entre el sistema y el mundo real (lenguaje del usuario, no jerga técnica).
- Control y libertad del usuario (deshacer, cancelar, salir sin perder datos).
- Reconocer antes que recordar (mostrar opciones, no obligar a memorizar comandos).

## Checklist rápido
- [ ] ¿El usuario sabe qué hacer en los primeros 3 segundos en cada pantalla?
- [ ] ¿Toda acción tiene feedback visual?
- [ ] ¿Las acciones destructivas piden confirmación?
- [ ] ¿Se usó lenguaje del usuario, no jerga interna?
