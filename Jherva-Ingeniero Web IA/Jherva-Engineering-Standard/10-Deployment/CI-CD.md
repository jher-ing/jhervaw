# CI/CD

## Principio general
Ningún cambio llega a producción sin pasar automáticamente por lint, tests y build exitoso. La automatización previene errores humanos antes de que lleguen a usuarios reales.

## Pipeline estándar (GitHub Actions / equivalente)
```yaml
on: [pull_request]
jobs:
  ci:
    steps:
      - lint          # ESLint, Prettier check
      - type-check    # tsc --noEmit
      - test          # unit + integration tests
      - build         # verifica que el build de producción no falle
      - lighthouse-ci # (opcional) auditoría de performance en preview
```

## Reglas
- **Todo PR debe pasar CI en verde** antes de poder mergear — configurado como required check en la protección de branch.
- **Tests fallando bloquean el merge**, no se "arreglan después" en un commit posterior.
- **Build de producción se corre en CI**, no se asume que funciona solo porque corre en local.
- **Secret scanning** en el pipeline (ver `05-Security/Secrets.md`).
- **Despliegue automático** solo tras CI exitoso — nunca deploy manual que se salte el pipeline.

## Checklist rápido
- [ ] ¿CI corre automáticamente en cada PR (lint, types, tests, build)?
- [ ] ¿El merge está bloqueado si CI falla?
- [ ] ¿Existe escaneo de secretos en el pipeline?
