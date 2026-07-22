import { defineTool } from "@lovable.dev/mcp-js";

const CONTACTS = {
  website: "https://hommi.it",
  calcolatore_costi: "https://hommi.it/calcolatore",
  prenota_call: "https://prenota.hommi.it/richiedi-accesso",
  candidature_manutentori: "https://hommi.it/per-manutentori-domanda",
  ticket_supporto: "https://hommi.it/ticket",
  company: "S9 s.r.l. SB",
};

export default defineTool({
  name: "get_contact_info",
  title: "Get Hommi contact links",
  description:
    "Restituisce i principali link di contatto Hommi: sito, calcolatore costi, prenotazione call demo, form candidatura manutentori, apertura ticket.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(CONTACTS, null, 2) }],
    structuredContent: CONTACTS,
  }),
});
