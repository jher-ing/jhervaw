# Testing — Principios Generales

## Principio general
Los tests existen para dar confianza de que el sistema funciona y seguirá funcionando tras cambios futuros — no para alcanzar un porcentaje de cobertura arbitrario.

## Pirámide de testing
```
        /\
       /E2E\          ← pocos, cubren flujos críticos de negocio
      /------\
     /Integr. \       ← moderados, cubren interacción entre módulos
    /----------\
   /   Unit     \     ← muchos, rápidos, cubren lógica de negocio aislada
  /--------------\
```

## Reglas generales
- **Priorizar lógica de negocio y flujos críticos** (checkout, autenticación, pagos) sobre cobertura del 100% de código trivial.
- **Tests rápidos y deterministas**: un test que falla intermitentemente sin razón real ("flaky") se arregla o se elimina, nunca se ignora.
- **Tests como documentación viva**: un test bien nombrado explica qué comportamiento se espera del sistema.
- **No testear implementación, testear comportamiento**: los tests no deben romperse por refactors internos que no cambian el resultado observable.

## Qué SÍ testear siempre
- Lógica de negocio en `use-cases/` (unit tests).
- Endpoints/Server Actions críticos (integration tests).
- Flujos de conversión principales: registro, login, checkout (E2E).

## Checklist rápido
- [ ] ¿Los flujos de negocio críticos tienen cobertura de test?
- [ ] ¿Los tests fallan solo cuando hay un problema real, no por implementación interna?
- [ ] ¿Existen tests flaky sin resolver en el pipeline?
