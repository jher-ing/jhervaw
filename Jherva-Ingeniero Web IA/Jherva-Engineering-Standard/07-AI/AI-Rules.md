# Reglas Generales de Uso de IA

## Principio general
La IA (Claude, Copilot, etc.) es una herramienta que acelera al equipo, no un reemplazo del juicio técnico. Todo output generado por IA se revisa antes de mergear — nunca se acepta ciegamente.

## Reglas de uso en desarrollo

1. **Revisión humana obligatoria** de todo código generado por IA antes de commit — especialmente lógica de negocio, seguridad y manejo de datos sensibles.
2. **Nunca pegar secretos/credenciales** en prompts a herramientas de IA externas.
3. **Contexto explícito**: dar a la IA acceso al estándar (este repositorio) como contexto para que el código generado siga las convenciones del equipo, no genéricas.
4. **La IA no toma decisiones de arquitectura sola** — propone opciones, el equipo decide.
5. **Datos de usuarios reales nunca se pegan en prompts** a herramientas externas sin anonimizar, salvo en herramientas con garantías contractuales de privacidad/zero-retention.

## Reglas de uso en producto (features con IA para el usuario final)
- Ver `AI-UX.md` para principios de diseño de features con IA.
- Ver `Chatbots.md` y `Agents.md` para patrones específicos.

## Checklist rápido
- [ ] ¿Todo código generado por IA fue revisado por una persona antes de mergear?
- [ ] ¿Se evitó pegar secretos o datos sensibles de usuarios reales en prompts?
- [ ] ¿La IA tuvo contexto del estándar del equipo al generar el código?
