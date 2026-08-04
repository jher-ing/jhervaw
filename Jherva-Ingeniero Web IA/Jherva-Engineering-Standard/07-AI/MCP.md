# Model Context Protocol (MCP)

## Principio general
MCP permite que un asistente de IA se conecte a herramientas y fuentes de datos externas (bases de datos, APIs, sistemas internos) de forma estandarizada. Se usa para dar a la IA acceso controlado a contexto real, no simulado.

## Cuándo usar MCP
- Cuando un asistente de IA necesita leer/escribir datos de un sistema real del equipo (ej. tickets de un tracker, documentos internos, base de datos de un proyecto).
- Cuando se quiere estandarizar cómo múltiples herramientas de IA acceden a los mismos datos, en vez de integraciones ad-hoc por herramienta.

## Reglas de seguridad
- **Principio de mínimo privilegio**: un servidor MCP expone solo las operaciones estrictamente necesarias, nunca acceso de escritura/eliminación si solo se necesita lectura.
- **Autenticación explícita** por servidor MCP — nunca credenciales compartidas genéricas.
- **Confirmación humana** para acciones que modifican, envían o eliminan datos — un agente no ejecuta acciones irreversibles sin aprobación.
- **Auditoría**: registrar qué acciones ejecutó un agente vía MCP y cuándo.

## Checklist rápido
- [ ] ¿El servidor MCP expone solo los permisos mínimos necesarios?
- [ ] ¿Las acciones destructivas requieren confirmación humana explícita?
- [ ] ¿Existe registro/auditoría de las acciones ejecutadas por agentes vía MCP?
