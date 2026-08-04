# SQL Injection

## Principio general
Nunca construir queries SQL concatenando input del usuario directamente. Usar siempre queries parametrizadas o un ORM que las genere automáticamente.

## Ejemplo incorrecto (vulnerable)
```ts
// ❌ Vulnerable a SQL injection
const query = `SELECT * FROM users WHERE email = '${email}'`;
db.raw(query);
```

## Ejemplo correcto
```ts
// ✅ Query parametrizada
db.query('SELECT * FROM users WHERE email = $1', [email]);

// ✅ Con ORM (Prisma) — parametrización automática
prisma.user.findUnique({ where: { email } });
```

## Reglas
- Con un ORM moderno (Prisma, Drizzle) el riesgo se reduce drásticamente si se evita el uso de `$queryRawUnsafe` o equivalentes con input directo del usuario.
- Si se requiere SQL raw por performance/complejidad, usar siempre placeholders parametrizados (`$1`, `?`), nunca interpolación de strings.
- Validar y sanear también en la capa de aplicación (tipos correctos, longitud, formato) como defensa en profundidad, no solo confiar en la parametrización.
- Aplicar principio de mínimo privilegio también a nivel de base de datos: el usuario de conexión de la app no debe tener permisos de `DROP`/`ALTER` si no los necesita.

## Checklist rápido
- [ ] ¿Todas las queries usan parametrización (ORM o placeholders), nunca concatenación de strings?
- [ ] ¿Se evita `$queryRawUnsafe` o equivalentes con input no sanitizado?
- [ ] ¿El usuario de base de datos de la app tiene permisos mínimos necesarios?
