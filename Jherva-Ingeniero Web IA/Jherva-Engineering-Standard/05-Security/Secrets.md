# Manejo de Secretos

## Principio general
Ningún secreto (API keys, tokens, credenciales de DB) vive en el código fuente ni se commitea al repositorio, nunca — ni siquiera en un commit temporal.

## Reglas

1. **Variables de entorno** para todo secreto — `.env.local` en desarrollo, variables de entorno del proveedor (Vercel, etc.) en producción.
2. **`.env*` en `.gitignore`** desde el primer commit del proyecto. Incluir un `.env.example` con las claves (sin valores reales) como referencia.
3. **Nunca loggear secretos** — revisar que logs de error no incluyan tokens, contraseñas o API keys completas.
4. **Rotación de secretos** ante cualquier sospecha de exposición (commit accidental, dependencia comprometida, empleado que sale del equipo).
5. **Secretos del cliente vs servidor**: en Next.js, solo variables prefijadas `NEXT_PUBLIC_` llegan al navegador — cualquier secreto real jamás debe llevar ese prefijo.
6. **Escaneo automático de secretos** en CI (ej. `gitleaks`, GitHub secret scanning) para detectar credenciales commiteadas por error antes del merge.

## Ejemplo
```bash
# .env.example (sí se commitea)
DATABASE_URL=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_ANALYTICS_ID=

# .env.local (nunca se commitea)
DATABASE_URL=postgres://...
STRIPE_SECRET_KEY=sk_live_...
```

## Si un secreto se filtra
1. Rotar/revocar la credencial inmediatamente en el proveedor.
2. Purgar del historial de git si es necesario (`git filter-repo` o BFG).
3. Auditar accesos/uso sospechoso durante la ventana de exposición.

## Checklist rápido
- [ ] ¿`.env*` está en `.gitignore` desde el inicio del proyecto?
- [ ] ¿Existe escaneo automático de secretos en CI?
- [ ] ¿Ningún secreto real usa el prefijo `NEXT_PUBLIC_`?
