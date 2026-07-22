import { defineMcp } from "@lovable.dev/mcp-js";
import getPricing from "./tools/get-pricing";
import getServiceInfo from "./tools/get-service-info";
import getContactInfo from "./tools/get-contact-info";
import stimaCostoManutenzione from "./tools/stima-costo-manutenzione";
import listFaq from "./tools/list-faq";

export default defineMcp({
  name: "hommi-mcp",
  title: "Hommi MCP",
  version: "0.1.0",
  instructions:
    "Tool pubblici per informarsi su Hommi, piattaforma italiana di gestione manutenzione immobili (Milano, Monza, Como, Torino, Lecco). Usa get_service_info per una panoramica, get_pricing per i piani, stima_costo_manutenzione per una stima costi annuale, list_faq per le domande frequenti, get_contact_info per i link utili (sito, calcolatore, prenotazione call).",
  tools: [getServiceInfo, getPricing, stimaCostoManutenzione, listFaq, getContactInfo],
});
