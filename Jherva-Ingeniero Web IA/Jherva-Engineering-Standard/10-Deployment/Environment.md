# Gestión de Ambientes

## Principio general
Development, Preview/Staging y Production son ambientes claramente separados con sus propios datos, credenciales y configuración — nunca comparten base de datos de producción.

## Ambientes estándar
| Ambiente | Propósito | Datos |
|---|---|---|
| **Development** | Desarrollo local | Base de datos local o de desarrollo compartida con datos ficticios |
| **Preview/Staging** | QA de PRs antes de mergear | Base de datos de staging, réplica de esquema de producción con datos de prueba |
| **Production** | Usuarios reales | Datos reales, acceso restringido |

## Reglas
- **Nunca apuntar un ambiente de desarrollo/preview a la base de datos de producción**, ni siquiera "solo para leer rápido algo".
- Variables de entorno específicas por ambiente (ver `Vercel.md`), nunca compartir credenciales de producción en `.env.local` de desarrollo.
- Feature flags para probar funcionalidad nueva en producción de forma controlada antes de un rollout completo, cuando el riesgo lo amerite.
- Los datos de staging deben parecerse a producción en estructura pero nunca contener datos reales de usuarios sin anonimizar.

## Checklist rápido
- [ ] ¿Cada ambiente tiene su propia base de datos y credenciales?
- [ ] ¿Ningún desarrollador tiene acceso directo de escritura a la base de datos de producción por defecto?
- [ ] ¿Los datos de staging están anonimizados si provienen de producción?
