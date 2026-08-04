# Chatbots

## Principio general
Un chatbot bien diseñado resuelve el problema del usuario rápido y sabe cuándo escalar a un humano — no intenta responder todo a toda costa.

## Reglas de diseño

1. **Alcance definido y comunicado**: el usuario debe entender qué puede y no puede resolver el bot (ej. "Puedo ayudarte con pedidos y devoluciones").
2. **Escalación clara a humano** cuando el bot no puede resolver, detecta frustración del usuario, o el tema es sensible (quejas serias, temas legales, salud).
3. **Memoria de contexto dentro de la conversación** — no hacer que el usuario repita información ya dada.
4. **Respuestas verificables**: para datos factuales específicos del negocio (precios, políticas, disponibilidad), usar RAG sobre fuente real, no que el modelo "recuerde" o invente.
5. **Tono consistente con la marca**, definido explícitamente en el system prompt.
6. **Nunca simular ser humano** cuando se le pregunta directamente — transparencia sobre ser un asistente de IA.

## Métricas a monitorear
- Tasa de resolución sin escalar a humano.
- Tasa de abandono de conversación.
- Feedback explícito del usuario (thumbs up/down) por respuesta.

## Checklist rápido
- [ ] ¿El bot comunica claramente su alcance?
- [ ] ¿Existe una ruta clara de escalación a humano?
- [ ] ¿Los datos factuales del negocio vienen de una fuente verificada (RAG), no de memoria del modelo?
