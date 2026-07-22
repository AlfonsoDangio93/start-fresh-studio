import { defineTool } from "@lovable.dev/mcp-js";

const PLANS = [
  {
    id: "base",
    name: "Base",
    price_eur_per_month: 14.9,
    description:
      "Ticketing guasti su WhatsApp, dashboard immobili, tecnici verificati Hommi.",
    best_for: "Piccoli portfolio (1-14 alloggi) che vogliono iniziare.",
  },
  {
    id: "premium",
    name: "Premium",
    price_eur_per_month: 29.9,
    description:
      "Tutto di Base + tecnico dedicato, gestione end-to-end degli interventi, sopralluogo incluso.",
    best_for: "Property manager e agenzie con 15-50 alloggi.",
  },
  {
    id: "plus",
    name: "Plus",
    price_eur_per_month: 39.9,
    description:
      "Tutto di Premium + account manager dedicato, report per proprietario, SLA garantiti.",
    best_for: "Portfolio grandi (50+ alloggi) e operazioni multi-cliente.",
  },
];

export default defineTool({
  name: "get_pricing",
  title: "Get Hommi pricing plans",
  description:
    "Restituisce i piani di abbonamento Hommi (Base, Premium, Plus) con prezzo mensile in euro per immobile, descrizione e profilo target.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(PLANS, null, 2) }],
    structuredContent: { plans: PLANS, currency: "EUR", billing: "monthly_per_property" },
  }),
});
