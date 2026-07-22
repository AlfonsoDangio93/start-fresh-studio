import { defineTool } from "@lovable.dev/mcp-js";

const FAQ = [
  {
    q: "In quali città opera Hommi?",
    a: "Hommi opera esclusivamente a Milano, Monza, Como, Torino e Lecco. Non copriamo altre città italiane.",
  },
  {
    q: "Come si apre un ticket di manutenzione?",
    a: "I ticket si aprono direttamente via WhatsApp o dalla piattaforma web Hommi. Non c'è un'app dedicata.",
  },
  {
    q: "Quanto costa Hommi?",
    a: "Tre piani per immobile/mese: Base €14.90, Premium €29.90, Plus €39.90. Nessun vincolo annuale.",
  },
  {
    q: "Come vengono selezionati i tecnici?",
    a: "I manutentori Hommi passano un processo di selezione (verifica documenti, referenze, prove pratiche). Vengono valutati continuamente in base a puntualità, qualità del lavoro e feedback dei clienti.",
  },
  {
    q: "Cosa succede se un intervento non è risolutivo?",
    a: "Hommi garantisce il ripristino: se un intervento non risolve il problema, viene rifatto senza costi aggiuntivi entro i termini di garanzia previsti.",
  },
  {
    q: "Posso vedere i costi in anticipo?",
    a: "Sì. Hommi lavora con costi trasparenti: preventivo prima dell'intervento e rendicontazione dettagliata per ogni ticket.",
  },
];

export default defineTool({
  name: "list_faq",
  title: "List Hommi FAQ",
  description:
    "Restituisce le domande frequenti pubbliche su Hommi: città coperte, ticketing, prezzi, selezione tecnici, garanzie, trasparenza costi.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(FAQ, null, 2) }],
    structuredContent: { faq: FAQ },
  }),
});
