# Retrieval-Augmented Generation (RAG)

## Principio general
RAG conecta un modelo de lenguaje con una base de conocimiento específica (documentos, base de datos) para generar respuestas fundamentadas en datos reales y actualizados, reduciendo alucinaciones.

## Cuándo usar RAG (vs fine-tuning vs prompt simple)
- El conocimiento cambia frecuentemente (catálogo de productos, documentación, políticas internas) → RAG.
- Se necesita citar fuentes específicas y verificables → RAG.
- El comportamiento/estilo del modelo necesita cambiar de forma consistente y profunda → fine-tuning (caso menos común).
- La tarea es simple y no depende de conocimiento propietario → prompt simple, sin RAG.

## Componentes de un pipeline RAG
1. **Ingesta**: documentos fuente → chunks (fragmentos manejables, ~300-500 tokens con overlap).
2. **Embeddings**: cada chunk se convierte en vector semántico.
3. **Vector store**: almacena los embeddings para búsqueda por similitud (pgvector, Pinecone, Weaviate).
4. **Retrieval**: dada una pregunta, se buscan los chunks más relevantes.
5. **Generación**: el modelo recibe la pregunta + chunks relevantes como contexto y genera la respuesta.

## Reglas
- Citar la fuente de cada chunk usado en la respuesta cuando sea relevante para el usuario.
- Actualizar el índice cuando la fuente de datos cambia — un RAG con datos desactualizados es peor que no tener RAG.
- Definir un comportamiento explícito cuando no se encuentra información relevante ("no tengo información sobre esto" en vez de inventar).

## Checklist rápido
- [ ] ¿El pipeline cita las fuentes usadas en la respuesta?
- [ ] ¿El índice se actualiza cuando cambian los documentos fuente?
- [ ] ¿Existe manejo explícito para cuando no hay contexto relevante disponible?
