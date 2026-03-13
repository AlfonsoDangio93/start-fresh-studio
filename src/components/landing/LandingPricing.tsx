


import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import TypingHeading from "@/components/TypingHeading";

const CTA_URL =
  "https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw";

const INCLUDED = [
  "Tecnico dedicato",
  "Sopralluogo iniziale",
  "Gestione end-to-end",
  "Report dettagliati via app",
];

export default function LandingPricing() {
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
        <div className={`text-center mb-6 reveal ${vis ? "revealed" : ""}`}>
          <span className="inline-block text-[11px] font-semibold text-dark uppercase tracking-[0.08em] border border-border rounded-full px-3.5 py-1.5 mb-5">Prezzi</span>
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
            Tutto incluso: tecnico dedicato, sopralluogo iniziale, gestione end-to-end e report dettagliati via app.
          </p>
          <p className="mt-2 text-[14px] text-dark font-semibold">Nessun vincolo annuale. Prezzo fisso, zero sorprese.</p>
        </div>

        <div className={`flex flex-wrap items-center justify-center gap-4 mb-12 reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.05s" }}>
          {INCLUDED.map((item) => (
            <div key={item} className="flex items-center gap-2 text-[13px] text-secondary">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                <Check size={12} className="text-primary" />
              </div>
              {item}
            </div>
          ))}
        </div>

        <div className={`grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.1s" }}>
          <div className="bg-white rounded-2xl border border-border p-8 flex flex-col">
            <h3 className="font-display text-[18px] font-bold text-dark mb-2">Fino a 14 immobili</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-[40px] font-display font-bold text-dark leading-none">&euro;39</span>
              <span className="text-[15px] text-secondary">/ mese per immobile</span>
            </div>
            <p className="text-[14px] text-secondary leading-relaxed mb-8 flex-1">Il miglior alleato per scalare. Tutto sotto controllo, anche quando hai 6 check-in contemporanei.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-dark text-white font-semibold text-[14px] py-3.5 rounded-xl hover:bg-dark/90 transition-colors duration-200 cursor-pointer">
              RICHIEDI ACCESSO PRIORITARIO
            </a>
          </div>

          <div className="relative bg-white rounded-2xl border-2 border-primary p-8 flex flex-col">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-full px-4 py-1.5">Più popolare</span>
            </div>
            <h3 className="font-display text-[18px] font-bold text-dark mb-2">Da 15 immobili in su</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-[40px] font-display font-bold text-primary leading-none">&euro;29</span>
              <span className="text-[15px] text-secondary">/ mese per immobile</span>
            </div>
            <p className="text-[14px] text-secondary leading-relaxed mb-8 flex-1">Il tuo superpotere operativo. Zero coordinamento, interventi rapidi, gestione professionale. A meno di 1&euro;/giorno per unità.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-primary text-white font-semibold text-[14px] py-3.5 rounded-xl hover:bg-primary-hover transition-colors duration-200 cursor-pointer">
              RICHIEDI ACCESSO PRIORITARIO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
