# Respuesta a Incidentes de Seguridad

## Principio general
Un incidente de seguridad (brecha de datos, credenciales filtradas, vulnerabilidad explotada) se maneja mejor con un plan definido de antemano que improvisando bajo presión. La velocidad y claridad de la respuesta importan tanto como la causa raíz.

## Plan de respuesta (fases)

### 1. Detección
- Vía monitoreo activo (`10-Deployment/Monitoring.md`), reporte de un usuario, o descubrimiento interno.
- Toda sospecha de incidente se toma en serio hasta descartarse — no se asume "seguro es un falso positivo" sin verificar.

### 2. Contención
- Rotar/revocar inmediatamente cualquier credencial comprometida (ver `Secrets.md`).
- Si hay una vulnerabilidad activa siendo explotada: desactivar la funcionalidad afectada o aplicar rate-limiting agresivo mientras se prepara el fix, antes que dejarla abierta mientras se investiga con calma.
- Aislar sistemas comprometidos si aplica (revocar sesiones activas, forzar re-login de todos los usuarios si hubo compromiso de sesiones).

### 3. Erradicación
- Identificar y corregir la causa raíz (no solo el síntoma).
- Desplegar el fix siguiendo el proceso normal de CI/CD, priorizado como crítico.

### 4. Recuperación
- Restaurar servicio normal, verificando que la vulnerabilidad esté efectivamente cerrada (no solo mitigada).
- Monitoreo reforzado temporal tras el incidente para detectar reintentos de explotación.

### 5. Comunicación
- Notificar internamente de inmediato al equipo/responsable del proyecto.
- Si hay datos de usuarios comprometidos: notificar al cliente sin demora injustificada, y evaluar obligación legal de notificar a los usuarios afectados/autoridades según la jurisdicción (ver `Data-Privacy.md`).
- Comunicación honesta y clara — nunca minimizar ni ocultar el alcance real del incidente.

### 6. Post-mortem
- Documento sin culpar personas: qué pasó, cómo se detectó, qué se hizo, qué se va a cambiar para que no vuelva a pasar.
- Actualizar este estándar si el incidente reveló un gap en las prácticas documentadas.

## Checklist rápido
- [ ] ¿Existe claridad sobre quién es responsable de responder ante un incidente en este proyecto?
- [ ] ¿Las credenciales se rotan inmediatamente ante cualquier sospecha de compromiso?
- [ ] ¿Se documenta un post-mortem sin culpar personas, enfocado en causa raíz y prevención?
- [ ] ¿Se evaluó la obligación legal de notificar a usuarios/autoridades si hubo datos comprometidos?
