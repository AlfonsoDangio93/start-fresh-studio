
import { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";
import TypingHeading from "@/components/TypingHeading";

const CTA_URL =
  "https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw";

type FeatureValue = "incluso" | "non-incluso" | string;

interface PlanFeature {
  label: string;
  highlight?: string;
  base: FeatureValue;
  premium: FeatureValue;
  plus: FeatureValue;
}

const FEATURES: PlanFeature[] = [
  {
    highlight: "Accesso alla rete",
    label: ": manutentori, idraulici, elettricisti, fabbri, caldaisti ecc..",
    base: "incluso",
    premium: "incluso",
    plus: "incluso",
  },
  {
    highlight: "Piattaforma digitale",
    label: " con "cartella clinica dell'immobile", report, preventivi, stato lavori e apertura ticket",
    base: "incluso",
    premium: "incluso",
    plus: "incluso",
  },
  {
    label: "Interventi ",
    highlight: "garantiti entro 4 ore.",
    base: "incluso",
    premium: "incluso",
    plus: "incluso",
  },
  {
    highlight: "Sopralluogo iniziale con mappatura",
    label: " impianti, dispositivi e punti critici.",
    base: "incluso",
    premium: "incluso",
    plus: "incluso",
  },
  {
    highlight: "Preventivi trasparenti",
    label: " con costo materiale e manodopera indicati, lo approvi sempre prima di procedere.",
    base: "incluso",
    premium: "incluso",
    plus: "incluso",
  },
  {
    highlight: "Ticket di 1 ora ciascuno di interventi di manutenzione",
    label: " da utilizzare anche per check up di manutenzione preventiva in caso di non interventi",
    base: "Incluso uno all'anno",
    premium: "Incluso due all'anno",
    plus: "Incluso quattro all'anno",
  },
  {
    highlight: "Diritto di chiamata incluso nell'abbonamento per gli interventi extra.",
    label: "",
    base: "incluso",
    premium: "incluso",
    plus: "incluso",
  },
  {
    highlight: "Customer care manutenzioni",
    label: " da remoto e gestione ticket degli ospiti",
    base: "non-incluso",
    premium: "incluso",
    plus: "incluso",
  },
];

function FeatureCell({ value }: { value: FeatureValue }) {
  if (value === "incluso") {
    return (
      <span className="inline-flex items-center gap-1.5 text-[13px] text-green-700">
        <span className="text-base">✅</span> Incluso
      </span>
    );
  }
  if (value === "non-incluso") {
    return (
      <span className="inline-flex items-center gap-1.5 text-[13px] text-red-500">
        <span className="text-base">⛔</span> Non incluso
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-[13px] text-green-700">
      <span className="text-base">✅</span> {value}
    </span>
  );
}

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
        <div className={`text-center mb-14 reveal ${vis ? "revealed" : ""}`}>
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

        {/* ── Desktop: comparison table ── */}
        <div className={`hidden lg:block reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.1s" }}>
          <div className="overflow-x-auto rounded-2xl border border-border bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/60">
                  <th className="p-5 text-primary font-bold text-[16px] uppercase tracking-wide w-[34%]">
                    Abbonamento Hommi
                  </th>
                  <th className="p-5 text-primary font-bold text-[16px] uppercase tracking-wide border-l border-border w-[22%]">
                    Base
                  </th>
                  <th className="p-5 text-primary font-bold text-[16px] uppercase tracking-wide border-l border-border w-[22%]">
                    Premium
                  </th>
                  <th className="p-5 text-primary font-bold text-[16px] uppercase tracking-wide border-l border-border w-[22%]">
                    Plus
                  </th>
                </tr>
                <tr className="border-t border-border bg-muted/40">
                  <td className="p-5 text-dark font-bold text-[14px]">*esclusa IVA - ad immobile mensile</td>
                  <td className="p-5 text-dark font-bold text-[22px] border-l border-border">€ 14,90</td>
                  <td className="p-5 text-dark font-bold text-[22px] border-l border-border">€ 29,90</td>
                  <td className="p-5 text-dark font-bold text-[22px] border-l border-border">€ 39,90</td>
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((f, i) => (
                  <tr key={i} className="border-t border-border hover:bg-muted/20 transition-colors">
                    <td className="p-5 text-[14px] text-dark/80 leading-relaxed">
                      {f.highlight && f.label.startsWith(":") ? (
                        <><span className="text-primary font-semibold">{f.highlight}</span>{f.label}</>
                      ) : f.highlight && f.label.startsWith(" ") ? (
                        <><span className="text-primary font-semibold">{f.highlight}</span>{f.label}</>
                      ) : f.label.endsWith(".") || f.label === "" ? (
                        <>{f.label}<span className="text-primary font-semibold">{f.highlight}</span></>
                      ) : (
                        <>{f.label}<span className="text-primary font-semibold">{f.highlight}</span></>
                      )}
                    </td>
                    <td className="p-5 border-l border-border"><FeatureCell value={f.base} /></td>
                    <td className="p-5 border-l border-border"><FeatureCell value={f.premium} /></td>
                    <td className="p-5 border-l border-border"><FeatureCell value={f.plus} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-8">
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-white font-semibold text-[14px] py-3.5 px-10 rounded-xl hover:bg-primary-hover transition-colors duration-200 cursor-pointer">
              RICHIEDI ACCESSO PRIORITARIO
            </a>
          </div>
        </div>

        {/* ── Mobile: stacked cards ── */}
        <div className={`lg:hidden grid gap-6 reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.1s" }}>
          {[
            { name: "Base", price: "€ 14,90", popular: false, key: "base" as const },
            { name: "Premium", price: "€ 29,90", popular: true, key: "premium" as const },
            { name: "Plus", price: "€ 39,90", popular: false, key: "plus" as const },
          ].map((plan) => (
            <div key={plan.name} className={`relative bg-white rounded-2xl p-6 flex flex-col ${plan.popular ? "border-2 border-primary" : "border border-border"}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-full px-4 py-1.5">Più popolare</span>
                </div>
              )}
              <h3 className="font-display text-[18px] font-bold text-primary uppercase mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className={`text-[32px] font-display font-bold leading-none ${plan.popular ? "text-primary" : "text-dark"}`}>{plan.price}</span>
              </div>
              <p className="text-[12px] text-secondary mb-5">/ mese per immobile · *esclusa IVA</p>
              <div className="space-y-3 mb-6 flex-1">
                {FEATURES.map((f, i) => {
                  const val = f[plan.key];
                  return (
                    <div key={i} className="flex items-start gap-2 text-[13px]">
                      {val === "non-incluso" ? (
                        <X size={14} className="text-red-400 mt-0.5 shrink-0" />
                      ) : (
                        <Check size={14} className="text-green-600 mt-0.5 shrink-0" />
                      )}
                      <span className="text-dark/70">
                        {f.highlight && <span className="font-semibold text-dark/90">{f.highlight}</span>}
                        {val !== "incluso" && val !== "non-incluso" ? ` — ${val}` : ""}
                      </span>
                    </div>
                  );
                })}
              </div>
              <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className={`block w-full text-center font-semibold text-[14px] py-3.5 rounded-xl transition-colors duration-200 cursor-pointer ${plan.popular ? "bg-primary text-white hover:bg-primary-hover" : "bg-dark text-white hover:bg-dark/90"}`}>
                RICHIEDI ACCESSO PRIORITARIO
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
