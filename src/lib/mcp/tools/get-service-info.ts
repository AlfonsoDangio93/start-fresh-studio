import { defineTool } from "@lovable.dev/mcp-js";

const INFO = {
  company: "Hommi (S9 s.r.l. SB)",
  tagline:
    "Piattaforma di gestione manutenzione per immobili in affitto: ticketing su WhatsApp, tecnici verificati, costi trasparenti.",
  target_audience: [
    "Property manager",
    "Agenzie immobiliari",
    "Host Airbnb e case vacanza professionali",
  ],
  services: [
    "Ticketing guasti (apertura via WhatsApp o piattaforma)",
    "Rete di tecnici e manutentori verificati",
    "Coordinamento interventi end-to-end",
    "Dashboard multi-portfolio",
    "Report costi per proprietario",
  ],
  geographic_scope: {
    cities: ["Milano", "Monza", "Como", "Torino", "Lecco"],
    note: "Il servizio operativo Hommi è disponibile solo in queste 5 città. Non sono coperte altre zone d'Italia.",
  },
  operations_channels: ["WhatsApp", "Piattaforma web Hommi"],
  website: "https://hommi.it",
};

export default defineTool({
  name: "get_service_info",
  title: "Get Hommi service info",
  description:
    "Restituisce informazioni generali sul servizio Hommi: descrizione, target, servizi offerti, città coperte (Milano, Monza, Como, Torino, Lecco) e canali operativi.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(INFO, null, 2) }],
    structuredContent: INFO,
  }),
});
