

import { useEffect, useRef, useState, useCallback } from "react";
import TypingHeading from "@/components/TypingHeading";

const FAQS = [
{ q: "Posso gestire più immobili con un solo account?", a: "Certo. Ogni immobile ha il suo profilo, e puoi aprire ticket in parallelo." },
{ q: "Come vengono scelti i tecnici?", a: "I nostri collaboratori sono selezionati con attenzione meticolosa e verificati in ogni fase: verifica documentale, colloquio, prove pratiche, feedback continui e aderenza ai nostri standard qualitativi ed alle nostre procedure operative." },
{ q: "Quanto costa?", a: "Hommi offre 3 piani di abbonamento disponibili. Il costo degli interventi è fisso e trasparente. Ogni extra viene sempre approvato dal Property Manager prima di procedere." },
{ q: "Cosa succede se il guasto è grave?", a: "Organizziamo l\u2019intervento specialistico, ti inviamo preventivo e coordiniamo tutto fino alla risoluzione." },

{ q: "Quanto tempo serve per risolvere un problema?", a: "Il nostro obiettivo è intervenire entro 4 ore. In base alla complessità o alla disponibilità dello specialista, potremmo richiedere un tempo maggiore. In ogni caso, ti aggiorniamo in tempo reale." },
{ q: "E se il problema si presenta di notte o nei festivi?", a: "Stiamo lavorando per offrire una copertura completa 24 ore su 24, 7 giorni su 7. Al momento il nostro servizio è attivo dal lunedì al sabato, dalle 8:00 alle 20:00, con chiusura nei giorni festivi." },
{ q: "Cosa succede se il tecnico non può intervenire subito?", a: "Ogni proprietà ha un tecnico dedicato, in base alle proprie aree di competenza. Se non disponibile, attiviamo un secondo tecnico di backup. Coordinamento e selezione sono gestiti da noi." },
{ q: "Chi garantisce che il lavoro sia stato fatto bene?", a: "Tutti gli interventi sono documentati con foto, video e check di fine lavoro. Puoi approvare o richiedere chiarimenti direttamente dall\u2019app prima della chiusura." },
{ q: "Come viene gestito un guasto coperto da garanzia?", a: "Se un guasto riguarda un elettrodomestico ancora in garanzia, ti aiutiamo a contattare l\u2019assistenza ufficiale. In alternativa, puoi affidarci l\u2019intervento diretto." },
{ q: "Posso usare i miei ricambi o materiali?", a: "Sì, se hai già i ricambi in casa o in magazzino, il nostro tecnico li utilizzerà dopo verifica. In alternativa, li procuriamo noi e li fatturiamo a parte." },
{ q: "Chi paga l\u2019intervento? Io o il proprietario dell\u2019immobile?", a: "Decidi tu come vuoi gestire il pagamento. Puoi saldare tu o inviarci i dati del proprietario. Il pagamento avviene sempre via app, in modo tracciato." }];


function FaqItem({ q, a, isOpen, onToggle }: {q: string;a: string;isOpen: boolean;onToggle: () => void;}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) setHeight(contentRef.current.scrollHeight);
  }, [a]);

  return (
    <div className="border-b border-border last:border-0">
      <button onClick={onToggle} className="flex items-center justify-between w-full py-5 cursor-pointer text-left group" aria-expanded={isOpen}>
        <span className={`text-[15px] font-semibold pr-4 transition-colors duration-200 ${isOpen ? "text-primary" : "text-dark group-hover:text-dark/70"}`}>{q}</span>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-primary rotate-45" : "bg-surface group-hover:bg-primary/10"}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors duration-300 ${isOpen ? "text-white" : "text-secondary/40 group-hover:text-primary"}`}>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </button>
      <div className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ maxHeight: isOpen ? height : 0, opacity: isOpen ? 1 : 0 }}>
        <div ref={contentRef}>
          <p className="text-[14px] text-secondary leading-relaxed pb-5 pr-10">{a}</p>
        </div>
      </div>
    </div>);

}

export default function LandingFAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {if (e.isIntersecting) {setVis(true);obs.disconnect();}},
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const toggle = useCallback((idx: number) => {
    setOpenIdx((prev) => prev === idx ? null : idx);
  }, []);

  return (
    <section id="faq" className="py-20 md:py-[89px]" ref={ref}>
      <div className="max-w-site mx-auto px-6">
        <div className={`text-center mb-14 reveal ${vis ? "revealed" : ""}`}>
          <span className="inline-block text-[12px] font-semibold text-primary uppercase tracking-[0.15em] mb-3">FAQ</span>
          {vis ?
          <TypingHeading
            lines={["Scopri le risposte alle", "domande più frequenti."]}
            className="font-display text-[28px] md:text-[40px] lg:text-[46px] font-bold text-dark leading-[1.08] tracking-tight"
            speed={40}
            startDelay={200} /> :


          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[46px] font-bold text-dark leading-[1.08] tracking-tight">
              <span className="block invisible">Scopri le risposte alle</span>
              <span className="block invisible">domande più frequenti.</span>
            </h2>
          }
        </div>

        <div className={`max-w-[680px] mx-auto reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.1s" }}>
          <div className="bg-white rounded-2xl border border-border px-6 md:px-8">
            {FAQS.map((faq, i) =>
            <FaqItem key={faq.q} q={faq.q} a={faq.a} isOpen={openIdx === i} onToggle={() => toggle(i)} />
            )}
          </div>
        </div>
      </div>
    </section>);

}