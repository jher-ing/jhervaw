# UX para Features con IA

## Principio general
Una feature de IA en el producto debe sentirse confiable y predecible, nunca una caja negra mágica sin control del usuario.

## Principios de diseño

1. **Transparencia**: el usuario sabe cuándo está interactuando con IA (no simular que es un humano sin declararlo).
2. **Control del usuario**: siempre poder editar, deshacer o rechazar el output de la IA antes de que tenga efecto real (enviar un email, ejecutar una acción, guardar datos).
3. **Manejo visible de incertidumbre**: si la IA no está segura, comunicarlo — no presentar todo output con el mismo nivel de confianza aparente.
4. **Estados de carga informativos**: para tareas de IA que toman varios segundos, mostrar progreso o pasos, no solo un spinner genérico indefinido.
5. **Fallback claro ante error**: si la IA falla o da un resultado pobre, ofrecer una salida (reintentar, editar manualmente, contactar soporte) — nunca dejar al usuario atascado.
6. **Explicabilidad mínima**: cuando la IA toma una decisión que afecta al usuario (ej. rechazar una solicitud, clasificar algo), dar algo de contexto de por qué.

## Ejemplo de patrón correcto
```
Usuario pide "generar descripción de producto"
→ IA genera un borrador claramente marcado como sugerencia
→ Usuario puede editar antes de publicar
→ Nunca se publica automáticamente sin revisión
```

## Checklist rápido
- [ ] ¿El usuario puede revisar/editar el output de IA antes de que tenga efecto?
- [ ] ¿Se comunica claramente cuándo algo fue generado por IA?
- [ ] ¿Existe un camino claro cuando la IA falla o da un resultado insatisfactorio?
