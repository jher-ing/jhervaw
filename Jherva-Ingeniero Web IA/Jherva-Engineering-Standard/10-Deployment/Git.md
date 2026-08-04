# Git y Control de Versiones

## Principio general
El historial de git debe ser legible y confiable — cada commit cuenta una unidad de cambio coherente, cada PR es revisable en un tiempo razonable.

## Flujo de trabajo (Trunk-based / GitHub Flow)
```
main (protegida, siempre desplegable)
  ↑
feature/nombre-descriptivo (rama corta, se mergea rápido vía PR)
```

## Reglas

1. **`main` siempre desplegable** — nunca commits directos, siempre vía PR.
2. **Ramas de corta duración**: features grandes se dividen en PRs pequeños e incrementales en vez de una rama gigante por semanas.
3. **Commits siguiendo Conventional Commits** (ver `01-Architecture/Naming-Conventions.md`): `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`.
4. **PRs con descripción clara**: qué cambia, por qué, cómo probarlo. Screenshots/GIFs para cambios de UI.
5. **Al menos 1 revisión aprobada** antes de mergear a `main`.
6. **Squash merge** para mantener el historial de `main` limpio (un commit por PR, con mensaje descriptivo del feature completo).
7. **Nunca force-push a `main`** ni a ramas compartidas por el equipo.

## Checklist rápido
- [ ] ¿`main` está protegida contra push directo?
- [ ] ¿Los commits siguen Conventional Commits?
- [ ] ¿Cada PR tiene al menos una revisión aprobada?
