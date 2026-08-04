# Mantenimiento

## Principio general
Un proyecto lanzado no está "terminado" — requiere mantenimiento continuo: dependencias, seguridad, performance y contenido se degradan si no se atienden activamente.

## Tareas de mantenimiento recurrentes

| Frecuencia | Tarea |
|---|---|
| Semanal | Revisar alertas de errores/monitoreo (`Monitoring.md`) |
| Quincenal | Revisar y aplicar actualizaciones de dependencias no-breaking (`npm outdated`, Dependabot) |
| Mensual | Auditoría de Lighthouse/Core Web Vitals — comparar contra baseline |
| Mensual | Revisar Search Console: errores de indexación, cambios de posicionamiento |
| Trimestral | Auditoría de seguridad (dependencias vulnerables, revisión de accesos y permisos) |
| Trimestral | Revisión de contenido desactualizado (precios, información de contacto, testimonios) |
| Anual | Actualización de versiones mayores de framework/librerías core, con testing exhaustivo |

## Reglas
- Actualizaciones de dependencias con vulnerabilidades críticas (`npm audit` alto/crítico) se aplican de inmediato, no se posponen al ciclo regular.
- Todo cambio de mantenimiento pasa por el mismo proceso de PR + CI que cualquier otro cambio — el mantenimiento no se salta el pipeline de calidad.
- Documentar deuda técnica identificada durante el mantenimiento en un backlog visible, no solo mentalmente.

## Checklist rápido
- [ ] ¿Existe un calendario/proceso definido de mantenimiento recurrente?
- [ ] ¿Las vulnerabilidades críticas se atienden de inmediato, no en el próximo ciclo?
- [ ] ¿La deuda técnica identificada se documenta y prioriza?
