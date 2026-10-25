/**
 * Proyectos entregados a clientes reales de Jherva.
 *
 * Distintos de `concepts/niches.ts`, que son proyectos de muestra con marcas
 * ficticias. Aquí solo entra un trabajo entregado de verdad, y solo se
 * muestra en la web cuando `publicado` es `true`.
 *
 * Antes de pasar `publicado` a `true`:
 * 1. El cliente autorizó por escrito que aparezca su negocio.
 * 2. Ningún campo dice «PENDIENTE».
 * 3. No hay datos personales (nombre de la persona, teléfono, dirección,
 *    correo): solo el nombre del negocio.
 * 4. No hay testimonios ni cifras que el cliente no haya dado y aprobado.
 * 5. `imagen` existe en /public (captura real del sitio entregado).
 */

export interface CasoReal {
  id: string;
  /** Solo se muestra en la web cuando es `true`. */
  publicado: boolean;
  /** Nombre del negocio, tal como el cliente autorizó que aparezca. */
  negocio: string;
  rubro: string;
  /** Qué se le entregó, en palabras del resultado. */
  entregables: string[];
  /** Una o dos frases: qué problema tenía el negocio y qué tiene ahora. */
  resumen: string;
  /** Captura real del sitio, en /public. */
  imagen?: string;
  /** Dirección pública del sitio entregado, si el cliente la autoriza. */
  url?: string;
}

const PENDIENTE = "PENDIENTE — falta la autorización del cliente";

export const casosReales: CasoReal[] = [
  {
    // Caso real: el nombre del negocio solo se escribe aquí con la autorización del cliente.
    id: "tienda-de-ropa-cliente",
    publicado: false,
    negocio: PENDIENTE,
    rubro: "Tienda de ropa",
    entregables: ["Página web propia", "Catálogo con pedidos por WhatsApp"],
    resumen: PENDIENTE,
  },
];

export const casosPublicados = casosReales.filter((c) => c.publicado);
