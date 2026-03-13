


import { ArrowRight } from "lucide-react";
import TypingHeading from "@/components/TypingHeading";

/* ─── FAQ data ─── */
const FAQS = [
  {
    q: "Posso gestire più immobili con un solo account?",
    a: "Certo. Ogni immobile ha il suo profilo, e puoi aprire ticket in parallelo.",
  },
  {
    q: "Come vengono scelti i tecnici?",
    a: "I tuttofare sono nostri dipendenti. Gli specialisti esterni seguono i nostri SOP e sono selezionati tramite verifica documentale, colloquio e feedback continui.",
  },
  {
    q: "Quanto costa?",
    a: "L\u2019abbonamento base \u00E8 di 39\u20AC/mese per immobile. Piani personalizzati disponibili. Il costo degli interventi viene sempre approvato dal Property Manager prima di procedere.",
  },
  {
    q: "Cosa succede se il guasto \u00E8 grave?",
    a: "Organizziamo l\u2019intervento specialistico, ti inviamo preventivo e coordiniamo tutto fino alla risoluzione.",
  },
  {
    q: "Posso attivare il servizio solo in alta stagione?",
    a: "S\u00EC, offriamo piani flessibili pensati anche per chi lavora solo nei mesi estivi. Puoi attivare l\u2019abbonamento solo quando ti serve, senza penali o costi di riattivazione.",
  },
  {
    q: "Quanto tempo serve per risolvere un problema?",
    a: "Il nostro obiettivo \u00E8 intervenire entro 4 ore. In base alla complessit\u00E0 o alla disponibilit\u00E0 dello specialista, potremmo richiedere un tempo maggiore. In ogni caso, ti aggiorniamo in tempo reale.",
  },
  {
    q: "E se il problema si presenta di notte o nei festivi?",
    a: "Stiamo lavorando per offrire una copertura completa 24 ore su 24, 7 giorni su 7. Al momento il nostro servizio \u00E8 attivo dal luned\u00EC al sabato, dalle 8:00 alle 20:00, con chiusura nei giorni festivi.",
  },
  {
    q: "Cosa succede se il tecnico non pu\u00F2 intervenire subito?",
    a: "Ogni propriet\u00E0 ha un tecnico dedicato, in base alle proprie aree di competenza. Se non disponibile, attiviamo un secondo tecnico di backup. Coordinamento e selezione sono gestiti da noi.",
  },
  {
    q: "Chi garantisce che il lavoro sia stato fatto bene?",
    a: "Tutti gli interventi sono documentati con foto, video e check di fine lavoro. Puoi approvare o richiedere chiarimenti direttamente dall\u2019app prima della chiusura.",
  },
  {
    q: "Come viene gestito un guasto coperto da garanzia?",
    a: "Se un guasto riguarda un elettrodomestico ancora in garanzia, ti aiutiamo a contattare l\u2019assistenza ufficiale. In alternativa, puoi affidarci l\u2019intervento diretto.",
  },
  {
    q: "Posso usare i miei ricambi o materiali?",
    a: "S\u00EC, se hai gi\u00E0 i ricambi in casa o in magazzino, il nostro tecnico li utilizzer\u00E0 dopo verifica. In alternativa, li procuriamo noi e li fatturiamo a parte.",
  },
  {
    q: "Chi paga l\u2019intervento? Io o il proprietario dell\u2019immobile?",
    a: "Decidi tu come vuoi gestire il pagamento. Puoi saldare tu o inviarci i dati del proprietario. Il pagamento avviene sempre via app, in modo tracciato.",
  },
];

/* ─── FAQ Accordion Item ─── */
function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-border last:border-0">
      <summary className="flex items-center justify-between py-5 cursor-pointer list-none">
        <span className="text-[15px] font-semibold text-dark pr-4">{q}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 text-secondary/30 transition-transform duration-200 group-open:rotate-45"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </summary>
      <p className="text-[14px] text-secondary leading-relaxed pb-5 pr-8">
        {a}
      </p>
    </details>
  );
}

/* ─── Main Section ─── */
export default function FAQSection() {
  return (
    <div className="pt-32 md:pt-40 pb-20 md:pb-28">
      {/* Header */}
      <div className="max-w-site mx-auto px-6 text-center mb-16">
        <TypingHeading lines={["Domande frequenti"]} />
        <p className="mt-5 text-secondary text-[16px] md:text-[18px] max-w-[560px] mx-auto leading-relaxed">
          Tutto quello che devi sapere su Hommi, dalla gestione dei guasti ai
          costi. Se non trovi la risposta, scrivici.
        </p>
      </div>

      {/* FAQ list */}
      <div className="max-w-[680px] mx-auto px-6">
        <div className="bg-white rounded-2xl border border-border px-6 md:px-8">
          {FAQS.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-[15px] text-secondary mb-4">
            Non hai trovato la risposta? Parliamone.
          </p>
          <a
            href="https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw"
            className="inline-flex items-center justify-center bg-primary text-white font-semibold text-[15px] rounded-xl px-8 py-3.5 transition-all duration-200 hover:bg-primary-hover shadow-lg shadow-primary/20 cursor-pointer"
          >
            Richiedi accesso prioritario
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
