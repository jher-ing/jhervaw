# Monitoreo

## Principio general
No se puede arreglar lo que no se mide. Todo proyecto en producción tiene monitoreo activo de errores, performance y disponibilidad — no se espera a que el usuario reporte el problema.

## Qué monitorear

1. **Errores de aplicación**: Sentry o equivalente — captura excepciones no manejadas en cliente y servidor, con contexto (usuario, ruta, stack trace).
2. **Uptime/disponibilidad**: verificación periódica de que el sitio/API responde (ej. UptimeRobot, Vercel monitoring).
3. **Performance real de usuarios (RUM)**: Core Web Vitals de campo — Vercel Speed Insights, Google Search Console.
4. **Logs de servidor**: accesibles y buscables, sin loggear datos sensibles (ver `05-Security/Secrets.md`).
5. **Alertas configuradas**: notificación automática (Slack, email) ante error rate elevado o caída del servicio — no depender de revisar dashboards manualmente.

## Reglas
- Alertas con umbral razonable — ni tan sensibles que generen fatiga de alertas, ni tan laxas que un problema real pase desapercibido.
- Cada error crítico en producción se revisa y se le da seguimiento (issue creado), no se ignora si aparece una sola vez.
- Dashboards accesibles a todo el equipo técnico, no solo a quien lo configuró.

## Checklist rápido
- [ ] ¿Existe tracking de errores en producción con alertas activas?
- [ ] ¿Se monitorea uptime del sitio/API?
- [ ] ¿Se monitorean Core Web Vitals reales de usuarios, no solo de laboratorio?
