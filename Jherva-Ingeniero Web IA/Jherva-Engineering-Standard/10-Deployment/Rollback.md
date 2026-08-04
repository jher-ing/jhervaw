# Rollback

## Principio general
Todo despliegue debe poder revertirse rápido y sin drama. Un rollback no es un fracaso — es parte normal del proceso cuando algo sale mal.

## Estrategia

1. **Despliegues inmutables**: cada deploy en Vercel genera una versión única con su propia URL — revertir es simplemente promover el deploy anterior a producción, sin rebuild.
2. **Feature flags** para funcionalidad riesgosa: permite desactivar una feature específica sin hacer rollback de todo el despliegue.
3. **Migraciones de base de datos reversibles**: toda migración de esquema debe tener su contraparte de rollback (`down` migration) probada antes de aplicar en producción.
4. **Rollback rápido documentado**: el equipo debe saber en menos de 2 minutos cómo revertir un deploy sin tener que investigar el proceso en el momento de la crisis.

## Cuándo hacer rollback vs. hotfix
- **Rollback inmediato**: el sitio está caído, hay un error crítico visible para usuarios, o una vulnerabilidad de seguridad expuesta.
- **Hotfix hacia adelante**: el bug es menor, no afecta a la mayoría de usuarios, y un fix rápido es más simple que revertir (especialmente si hubo migraciones de datos entre medio).

## Checklist rápido
- [ ] ¿Se puede revertir el último deploy en menos de 2 minutos?
- [ ] ¿Las migraciones de base de datos tienen rollback probado?
- [ ] ¿El equipo sabe el procedimiento de rollback sin tener que investigarlo en el momento de la crisis?
