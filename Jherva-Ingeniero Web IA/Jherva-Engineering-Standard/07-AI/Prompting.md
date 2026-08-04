# Prompting

## Principio general
Un buen prompt es específico, con contexto y ejemplos — no una instrucción vaga esperando que el modelo adivine la intención.

## Estructura recomendada de un prompt técnico

1. **Rol/contexto**: qué es el proyecto, qué stack se usa.
2. **Tarea específica**: qué se necesita, con criterios de aceptación claros.
3. **Restricciones**: qué NO hacer, convenciones a seguir (referenciar este estándar).
4. **Ejemplos** (few-shot) cuando el formato de salida importa.
5. **Formato de salida esperado** si es estructurado (JSON, tabla, etc.).

## Ejemplo débil vs fuerte
```
❌ "Hazme un formulario de contacto"

✅ "Crea un componente de formulario de contacto en React + TypeScript + Tailwind,
   siguiendo 02-UI-UX/Forms.md: labels visibles, validación onBlur, mensajes de
   error específicos. Campos: nombre, email, mensaje. Usa react-hook-form + zod
   para validación. No uses librerías de UI adicionales."
```

## Buenas prácticas
- Pedir explicaciones del razonamiento cuando la tarea es ambigua o de alto impacto.
- Iterar: el primer output rara vez es el final — refinar con feedback específico, no repetir el prompt completo.
- Para tareas complejas, dividir en pasos en vez de pedir todo en un solo prompt gigante.

## Checklist rápido
- [ ] ¿El prompt incluye contexto del stack y restricciones del proyecto?
- [ ] ¿Se especificó el formato de salida esperado?
- [ ] ¿Se evitaron instrucciones ambiguas que dependen de que el modelo "adivine"?
