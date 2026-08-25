
import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import TypingHeading from "@/components/TypingHeading";

const CTA_URL = "https://prenota.hommi.it/richiedi-accesso";

const INCLUDED: string[] = [
  "Accesso alla rete di tecnici: manutentori, idraulici, elettricisti, fabbri, caldaisti.",
  "Tecnico assegnato che conosce già l'impianto del tuo alloggio.",
  "Interventi garantiti in poche ore, anche con ospiti presenti.",
  "Sopralluogo iniziale con mappatura di impianti, dispositivi e punti critici.",
  "\"Cartella clinica dell'immobile\": storico interventi sempre aggiornato.",
  "Apertura ticket via WhatsApp, 7 giorni su 7.",
  "Preventivi trasparenti: materiale e manodopera separati, approvi tu prima di procedere.",
  "Report tracciabile con foto, costi e tempi da girare al proprietario.",
  "Ticket di manutenzione inclusi ogni anno.",
  "Gestione da remoto su portafogli distribuiti, senza team interno.",
];

export default function PricingHomeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="prezzi" ref={ref} className="py-20 md:py-28">
      <div className="max-w-site mx-auto px-6">
        <div className={`text-center mb-12 reveal ${vis ? "revealed" : ""}`}>
          <span className="inline-block text-[12px] font-semibold text-primary uppercase tracking-[0.15em] mb-3">Prezzi</span>
          {vis ? (
            <TypingHeading
              lines={["Un servizio su misura per chi", "gestisce più immobili."]}
              className="font-display text-[28px] md:text-[40px] lg:text-[46px] font-bold text-dark leading-[1.08] tracking-tight"
              speed={40}
              startDelay={200}
            />
          ) : (
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[46px] font-bold text-dark leading-[1.08] tracking-tight">
              <span className="block invisible">Un servizio su misura per chi</span>
              <span className="block invisible">gestisce più immobili.</span>
            </h2>
          )}
          <p className="mt-5 text-secondary text-[15px] md:text-[17px] max-w-[560px] mx-auto leading-relaxed">
            Un canone mensile per immobile, tutto incluso. La configurazione giusta per il tuo portafoglio la definiamo insieme in call.
          </p>
        </div>

        <div
          className={`max-w-[820px] mx-auto bg-white border border-border rounded-2xl p-7 md:p-10 reveal ${vis ? "revealed" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <div className="text-center">
            <p className="text-[13px] font-semibold text-secondary uppercase tracking-[0.12em]">A partire da</p>
            <div className="mt-2 flex items-end justify-center gap-2">
              <span className="font-display text-[46px] md:text-[56px] font-bold text-primary leading-none">€ 14,90</span>
              <span className="text-[13px] text-secondary mb-1.5">/ mese per immobile</span>
            </div>
            <p className="mt-2 text-secondary/70 text-[13px]">IVA esclusa · nessun costo di attivazione</p>
          </div>

          <div className="mt-9 grid sm:grid-cols-2 gap-x-8 gap-y-3.5">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed">
                <Check size={16} className="text-green-600 mt-[3px] shrink-0" />
                <span className="text-dark/90">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col items-center gap-3">
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-primary text-white font-semibold text-[15px] px-10 py-3.5 rounded-[10px] hover:bg-primary-hover transition-colors duration-200 cursor-pointer"
            >
              Prenota una call
            </a>
            <p className="text-[12.5px] text-secondary/70 text-center">
              In 15 minuti capiamo il tuo portafoglio e ti diciamo il piano più adatto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
