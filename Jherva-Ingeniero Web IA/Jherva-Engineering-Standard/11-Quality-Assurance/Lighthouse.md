# Lighthouse en QA

## Principio general
Lighthouse se corre como parte del proceso de QA antes de cada lanzamiento y release importante — no es una auditoría única al inicio del proyecto, es continua.

## Proceso de QA con Lighthouse
1. Correr Lighthouse en el preview deployment del PR (modo Mobile primero).
2. Comparar contra el baseline del proyecto — ¿algún score bajó significativamente respecto a la última medición?
3. Si Performance cae por debajo de 90 o Accessibility por debajo de 95, el PR no se aprueba hasta corregir (ver umbrales en `06-Performance/Lighthouse.md`).
4. Documentar excepciones justificadas (ej. una librería de terceros pesada pero necesaria) en el PR.

## Integración en CI
Lighthouse CI configurado para correr automáticamente en cada PR y fallar el build si los scores caen por debajo del umbral definido — evita depender de que alguien lo corra manualmente.

## Checklist rápido
- [ ] ¿Se corrió Lighthouse en el preview deployment antes de aprobar el PR?
- [ ] ¿Los scores se compararon contra el baseline, no evaluados de forma aislada?
- [ ] ¿Lighthouse CI está integrado en el pipeline automático?
