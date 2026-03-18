


import { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";
import TypingHeading from "@/components/TypingHeading";

const CTA_URL =
  "https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw";

const ROWS = [
  {
    feature: "Costo fisso per unità",
    others: "Variabile, imprevedibile",
    hommi: "Da €14,90/mese per immobile",
  },
  {
    feature: "Intervento urgente",
    others: "1–3 giorni",
    hommi: "Entro 4 ore",
  },
  {
    feature: "Coordinamento operativo",
    others: "A carico del property manager",
    hommi: "Gestito al 100% da Hommi",
  },
  {
    feature: "Tecnico assegnato per ogni immobile",
    others: "Ogni volta diverso",
    hommi: "Sempre lo stesso",
  },
  {
    feature: "Tracciabilità (foto, costi, stato lavori)",
    others: "Manuale, se disponibile",
    hommi: "Via app, in tempo reale",
  },
  {
    feature: "Contatto ospiti/personale",
    others: "A carico del PM",
    hommi: "Incluso",
  },
  {
    feature: "Controllo sui costi",
    others: "Variabili, spesso post-servizio",
    hommi: "Prezzi trasparenti, via app",
  },
];

export default function ComparisonSection() {
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
    <section ref={ref} className="py-20 md:py-28 bg-white rounded-[10px]">
      <div className="max-w-site mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-14 reveal ${vis ? "revealed" : ""}`}>
          {vis ? (
            <TypingHeading
              lines={["Confronta Hommi con le alternative", "che già usi."]}
              className="font-display text-[28px] md:text-[40px] lg:text-[46px] font-bold text-dark leading-[1.08] tracking-tight"
              speed={40}
              startDelay={200}
            />
          ) : (
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[46px] font-bold text-dark leading-[1.08] tracking-tight">
              <span className="block invisible">Confronta Hommi con le alternative</span>
              <span className="block invisible">che già usi.</span>
            </h2>
          )}
          <p className="mt-5 text-secondary text-[15px] md:text-[17px] max-w-[580px] mx-auto leading-relaxed">
            Più affidabile di un artigiano freelance, più veloce di un co-host, e senza bisogno di gestire un team.
          </p>
        </div>

        {/* Table */}
        <div className={`max-w-[900px] mx-auto mb-12 reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.1s" }}>
          <div className="overflow-x-auto">
            <div className="grid grid-cols-[1fr_auto_auto] min-w-[600px]">
              {/* Header row */}
              <div className="bg-surface rounded-tl-2xl border-b border-border py-4 px-6">
                <span className="text-[12px] font-bold text-dark uppercase tracking-wider">Caratteristica</span>
              </div>
              <div className="bg-surface border-b border-border py-4 px-6 min-w-[180px]">
                <span className="text-[12px] font-bold text-secondary/40 uppercase tracking-wider">Altri fornitori</span>
              </div>
              <div className="bg-primary rounded-tr-2xl py-4 px-6 min-w-[200px]">
                <span className="text-[12px] font-bold text-white uppercase tracking-wider">Hommi</span>
              </div>

              {/* Data rows */}
              {ROWS.map((row, i) => {
                const isLast = i === ROWS.length - 1;
                const borderClass = !isLast ? "border-b border-border/40" : "";
                return (
                  <div key={row.feature} className="contents">
                    <div className={`${borderClass} ${isLast ? "rounded-bl-2xl" : ""} bg-white py-4 px-6`}>
                      <span className="text-[14px] font-semibold text-dark">{row.feature}</span>
                    </div>
                    <div className={`${borderClass} bg-white py-4 px-6`}>
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-[1px]">
                          <X size={11} className="text-red-400" strokeWidth={2.5} />
                        </div>
                        <span className="text-[14px] text-secondary/50">{row.others}</span>
                      </div>
                    </div>
                    <div className={`${isLast ? "rounded-br-2xl" : ""} bg-primary py-4 px-6`}>
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-[1px]">
                          <Check size={12} className="text-white" strokeWidth={3} />
                        </div>
                        <span className="text-[14px] font-bold text-white">{row.hommi}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.2s" }}>
          <a
            href={CTA_URL}
            className="inline-flex items-center justify-center bg-dark text-white font-semibold text-[14px] rounded-xl px-7 py-3.5 transition-all duration-200 hover:bg-primary hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
          >
            Richiedi accesso prioritario
          </a>
        </div>
      </div>
    </section>
  );
}
