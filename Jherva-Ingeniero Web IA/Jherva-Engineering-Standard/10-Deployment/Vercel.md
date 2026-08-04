# Despliegue en Vercel

## Principio general
Vercel es la plataforma de referencia para proyectos Next.js del equipo — despliegue automático por Git, preview deployments por PR, y edge network integrada.

## Configuración estándar

1. **Conexión con Git**: cada push a `main` despliega a producción; cada PR genera un preview deployment único.
2. **Variables de entorno** configuradas por ambiente (Production, Preview, Development) en el dashboard de Vercel — nunca hardcodeadas.
3. **Dominios**: dominio de producción apuntado con DNS correcto, redirect automático de `www` ↔ apex según se defina como canónico.
4. **Protección de branches**: `main` protegida, requiere PR aprobado antes de merge (ver `Git.md`).

## Preview Deployments
- Cada PR obtiene una URL única para revisar cambios antes de mergear — usar siempre para QA visual antes de aprobar.
- Preview deployments deben tener `noindex` y `robots: Disallow: /` para no competir con producción en buscadores.

## Reglas
- **Nunca desplegar directo a producción sin pasar por PR + preview** salvo hotfixes críticos documentados.
- Revisar el build log de cada deploy — un warning ignorado hoy es un error en producción mañana.
- Configurar Vercel Analytics / Speed Insights para monitoreo de Core Web Vitals reales.

## Checklist rápido
- [ ] ¿Las variables de entorno están configuradas por ambiente, no hardcodeadas?
- [ ] ¿`main` está protegida y requiere PR aprobado?
- [ ] ¿Los preview deployments tienen `noindex`?
