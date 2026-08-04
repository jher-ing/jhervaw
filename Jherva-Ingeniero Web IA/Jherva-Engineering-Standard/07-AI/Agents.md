# Agentes de IA

## Principio general
Un agente ejecuta tareas de forma autónoma usando herramientas (tools), a diferencia de un chatbot que solo conversa. Mayor autonomía requiere mayores controles de seguridad.

## Niveles de autonomía (de menor a mayor riesgo)
1. **Solo lectura**: el agente consulta información, no modifica nada.
2. **Escritura con confirmación**: el agente propone una acción, el humano aprueba antes de ejecutar.
3. **Escritura autónoma en dominio acotado**: el agente ejecuta sin confirmación, pero solo dentro de un alcance muy limitado y reversible.
4. **Autonomía amplia**: el agente encadena múltiples acciones sin supervisión — usar con extrema cautela y solo con guardrails robustos.

## Reglas de diseño
- Empezar siempre en el nivel de autonomía más bajo posible y escalar solo con evidencia de que es seguro.
- Acciones irreversibles (eliminar datos, enviar comunicaciones a clientes, cobros) **siempre** requieren confirmación humana, sin importar el nivel de autonomía general del agente.
- Definir límites explícitos de alcance (qué herramientas puede usar, qué datos puede tocar) — nunca acceso ilimitado "por si acaso".
- Logging detallado de cada acción del agente para poder auditar y revertir si algo sale mal.
- Timeouts y límites de iteración — un agente no debe poder ejecutar en loop indefinido consumiendo recursos.

## Checklist rápido
- [ ] ¿El agente opera en el nivel de autonomía mínimo necesario para la tarea?
- [ ] ¿Las acciones irreversibles requieren confirmación humana explícita?
- [ ] ¿Existen límites de alcance y logging de auditoría?
