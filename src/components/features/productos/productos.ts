import { FileText, UtensilsCrossed, type LucideIcon } from "lucide-react";

/**
 * Productos propios de Jherva (micro-apps por suscripción). Los precios salen de
 * `src/config/legal.ts` de cada app: si cambian allá, hay que cambiarlos aquí.
 */
export type Producto = {
  id: string;
  name: string;
  url: string;
  icon: LucideIcon;
  /** Color de marca de la app (su ícono y su botón principal). */
  brand: string;
  forWho: string;
  headline: string;
  description: string;
  outcomes: string[];
  price: string;
  founderPrice: string;
  founderSeats: number;
  trialDays: number;
};

export const productos: Producto[] = [
  {
    id: "pedidos",
    name: "Jherva Pedidos",
    url: "https://pedidos.jherva.com",
    icon: UtensilsCrossed,
    brand: "#ea580c",
    forWho: "Restaurantes, cafeterías y comidas rápidas",
    headline: "Tus clientes piden desde la mesa y la cocina lo recibe al instante.",
    description:
      "El cliente escanea el QR, ve tu menú con fotos y pide desde su celular, sin instalar nada. El pedido aparece en tu panel en tiempo real.",
    outcomes: [
      "Menos errores al tomar pedidos",
      "Meseros con más tiempo para atender",
      "Pedidos para la mesa o para llevar",
      "Cambias precios y platos agotados en segundos",
    ],
    price: "$35.000",
    founderPrice: "$29.000",
    founderSeats: 10,
    trialDays: 14,
  },
  {
    id: "cotizaciones",
    name: "Jherva Cotizaciones",
    url: "https://cotizaciones.jherva.com",
    icon: FileText,
    brand: "#18181b",
    forWho: "Negocios que cotizan antes de vender",
    headline: "Cotizaciones profesionales por WhatsApp, en minutos.",
    description:
      "Envía una cotización con tu logo, totales exactos y un PDF que tu cliente abre en su celular. Te ves más serio y sabes cuáles te falta cerrar.",
    outcomes: [
      "Tu logo y tus datos en cada cotización",
      "Cero errores en cantidades, descuentos e IVA",
      "Se envía por WhatsApp con un enlace y PDF",
      "Ves cuáles están pendientes, aceptadas o vencidas",
    ],
    price: "$24.900",
    founderPrice: "$19.900",
    founderSeats: 10,
    trialDays: 14,
  },
];
