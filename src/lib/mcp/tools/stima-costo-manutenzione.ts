import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

/**
 * Stima costi manutenzione: euristica basata sui dati pubblicati sul calcolatore Hommi.
 * Costo medio per intervento: ~180€. Frequenza media: ~4 interventi/anno per unità
 * (breve termine) o ~2 interventi/anno (medio-lungo termine).
 */

export default defineTool({
  name: "stima_costo_manutenzione",
  title: "Stima costo manutenzione annuo",
  description:
    "Fornisce una stima indicativa del costo annuo di manutenzione di un portfolio immobiliare, in base al numero di immobili e al tipo di locazione (breve termine o medio-lungo termine). I risultati sono approssimativi e riflettono medie di mercato Hommi.",
  inputSchema: {
    numero_immobili: z
      .number()
      .int()
      .min(1)
      .max(500)
      .describe("Numero di immobili gestiti"),
    tipo_locazione: z
      .enum(["breve_termine", "medio_lungo_termine"])
      .describe("Tipo di locazione: breve termine (Airbnb) o medio-lungo termine"),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ numero_immobili, tipo_locazione }) => {
    const costoMedioIntervento = 180;
    const interventiPerImmobile = tipo_locazione === "breve_termine" ? 4 : 2;
    const totaleInterventi = numero_immobili * interventiPerImmobile;
    const costoTotaleAnnuo = totaleInterventi * costoMedioIntervento;

    const result = {
      input: { numero_immobili, tipo_locazione },
      stima: {
        interventi_annui_stimati: totaleInterventi,
        costo_medio_intervento_eur: costoMedioIntervento,
        costo_totale_annuo_eur: costoTotaleAnnuo,
        costo_medio_per_immobile_eur: Math.round(costoTotaleAnnuo / numero_immobili),
      },
      note:
        "Stima indicativa basata su medie di mercato. Per una stima personalizzata usare https://hommi.it/calcolatore",
    };

    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: result,
    };
  },
});
