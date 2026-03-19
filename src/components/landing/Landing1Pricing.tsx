import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import TypingHeading from "@/components/TypingHeading";

const CTA_URL =
  "https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw";

const KEY_SERVICES = [
  "Accesso alla rete: manutentori, idraulici, elettricisti, fabbri, caldaisti",
  "Piattaforma digitale con report, preventivi e stato lavori",
  "Sopralluogo iniziale con mappatura impianti e punti critici",
  "Preventivi trasparenti con costo materiale e manodopera",
  "Interventi garantiti entro 6 ore",
  "Ticket annuali per interventi di riparazione o prevenzione",
];

export default function Landing1Pricing() {
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
        <div className={`text-center mb-14 reveal ${vis ? "revealed" : ""}`}>
          <span className="inline-block text-[12px] font-semibold text-primary uppercase tracking-[0.15em] mb-3">Piani</span>
          <div key={vis ? "typing" : "placeholder"}>
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
          </div>
          <p className="mt-5 text-secondary text-[15px] md:text-[17px] max-w-[560px] mx-auto leading-relaxed">
            Tutto incluso: tecnico dedicato, sopralluogo iniziale, gestione end-to-end e report dettagliati via app.
          </p>
        </div>

        <div className={`max-w-[480px] mx-auto reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.1s" }}>
          <div className="relative bg-white rounded-2xl border-2 border-primary p-8 flex flex-col items-center">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-full px-4 py-1.5">Il tuo piano</span>
            </div>

            <p className="text-[13px] text-secondary mb-1">A partire da</p>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-[42px] font-display font-bold text-primary leading-none">€ 14,90</span>
            </div>
            <p className="text-[12px] text-secondary mb-8">/ mese per immobile · IVA esclusa</p>

            <div className="w-full space-y-3 mb-8">
              {KEY_SERVICES.map((service, i) => (
                <div key={i} className="flex items-start gap-2 text-[13px]">
                  <Check size={14} className="text-green-600 mt-0.5 shrink-0" />
                  <span className="font-semibold text-dark/90">{service}</span>
                </div>
              ))}
            </div>

            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-primary text-white font-semibold text-[14px] py-3.5 rounded-xl hover:bg-primary-hover transition-colors duration-200 cursor-pointer"
            >
              RICHIEDI ACCESSO PRIORITARIO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
