


import { ArrowRight, Check } from "lucide-react";
import TypingHeading from "@/components/TypingHeading";

/* ─── Feature data ─── */
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
    label: ' con "cartella clinica dell\'immobile", report, preventivi, stato lavori e apertura ticket',
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

const PLANS = [
  { name: "Base", price: "€ 14,90", popular: false, key: "base" as const },
  { name: "Premium", price: "€ 29,90", popular: true, key: "premium" as const },
  { name: "Plus", price: "€ 39,90", popular: false, key: "plus" as const },
];

/* ─── FAQ data ─── */
const FAQS = [
{
  q: "C\u2019\u00E8 un vincolo annuale?",
  a: "No. Paghi mese per mese, puoi disdire quando vuoi senza penali."
},
{
  q: "Come funziona l\u2019accesso?",
  a: "Richiedi l\u2019accesso prioritario e ti contatteremo per attivare il tuo account. Nessun vincolo, paghi solo quando inizi a usare la piattaforma."
},
{
  q: "Cosa include il prezzo per immobile?",
  a: "Tutto: ticketing illimitato, coordinamento tecnici, dashboard, report, notifiche. Nessun costo nascosto."
},
{
  q: "E se ho pi\u00F9 di 50 immobili?",
  a: "Contattaci per un piano personalizzato. Offriamo pricing dedicato per portfolio grandi con account manager assegnato."
},
{
  q: "I tecnici sono inclusi nel prezzo?",
  a: "La piattaforma \u00E8 inclusa. Il costo dell\u2019intervento del tecnico \u00E8 separato, con prezzi pre-approvati e trasparenti."
},
{
  q: "Posso passare da Starter a Pro?",
  a: "Certo, puoi fare upgrade in qualsiasi momento. Il cambio \u00E8 immediato e viene calcolato pro-rata."
}];


/* ─── FAQ Accordion Item ─── */
function FaqItem({ q, a }: {q: string;a: string;}) {
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
          className="shrink-0 text-secondary/30 transition-transform duration-200 group-open:rotate-45">
          
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </summary>
      <p className="text-[14px] text-secondary leading-relaxed pb-5 pr-8">
        {a}
      </p>
    </details>);

}

/* ─── Main Section ─── */
export default function PricingSection() {
  return (
    <div className="pt-32 md:pt-40 pb-20 md:pb-28">
      {/* Header */}
      <div className="max-w-site mx-auto px-6 text-center mb-16">
        <TypingHeading lines={["Un servizio su misura per chi", "gestisce più immobili."]} />
        <p className="mt-5 text-secondary text-[16px] md:text-[18px] max-w-[560px] mx-auto leading-relaxed py-[15px]">
          Tutto incluso: tecnico dedicato, sopralluogo iniziale, gestione
          end-to-end e report dettagliati via app.
        </p>
        <p className="mt-4 text-[11px] md:text-[12px] font-semibold text-secondary/40 uppercase tracking-[0.12em]">
          Nessun vincolo annuale. Prezzo fisso, zero sorprese.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-site mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto mb-24">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-6 flex flex-col ${
                plan.popular
                  ? "border-2 border-primary shadow-xl shadow-primary/8"
                  : "border border-border shadow-sm hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] font-bold uppercase tracking-[0.1em] px-4 py-1.5 rounded-full">
                  Più popolare
                </span>
              )}

              <h3 className="font-display text-[18px] font-bold text-primary uppercase mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className={`text-[32px] font-display font-bold leading-none ${plan.popular ? "text-primary" : "text-dark"}`}>
                  {plan.price}
                </span>
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

              <a
                href="https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center font-semibold text-[14px] py-3.5 rounded-xl transition-colors duration-200 cursor-pointer ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary-hover"
                    : "bg-dark text-white hover:bg-dark/90"
                }`}
              >
                RICHIEDI ACCESSO PRIORITARIO
              </a>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-[680px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-[26px] md:text-[34px] font-bold text-dark leading-[1.1] tracking-tight">
              Domande sui prezzi
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-border px-6 md:px-8">
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/faq"
              className="text-[14px] font-semibold text-primary hover:text-primary-hover transition-colors duration-200"
            >
              Vedi tutte le domande frequenti &rarr;
            </a>
          </div>

          <div className="text-center mt-10">
            <p className="text-[15px] text-secondary mb-4">
              Hai altre domande? Parliamone.
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
    </div>);

}