


import { ArrowRight, Check } from "lucide-react";
import TypingHeading from "@/components/TypingHeading";

/* ─── Plan data ─── */
const PLANS = [
{
  name: "Starter",
  range: "Fino a 14 immobili",
  price: 39,
  popular: false,
  tagline: "Il miglior alleato per scalare.",
  desc: "Tutto sotto controllo, anche quando hai 6 check-in contemporanei.",
  features: [
  "Ticketing guasti illimitato",
  "Tecnici verificati nella tua zona",
  "Dashboard real-time",
  "Notifiche in tempo reale",
  "Report mensili PDF",
  "Storico interventi completo",
  "Supporto email prioritario"]

},
{
  name: "Pro",
  range: "Da 15 immobili in su",
  price: 29,
  popular: true,
  tagline: "Il tuo superpotere operativo.",
  desc: "Zero coordinamento, interventi rapidi, gestione professionale. A meno di 1\u20AC/giorno per unit\u00E0.",
  features: [
  "Tutto incluso in Starter",
  "Tecnico dedicato",
  "Sopralluogo iniziale incluso",
  "Gestione end-to-end",
  "Report dettagliati via app",
  "Calendario interventi condiviso",
  "Gestione fornitori avanzata",
  "Supporto WhatsApp dedicato"]

}];


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
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-[820px] mx-auto mb-24">
          {PLANS.map((plan) =>
          <div
            key={plan.name}
            className={`relative bg-white rounded-2xl p-8 md:p-10 transition-shadow duration-200 ${
            plan.popular ?
            "border-2 border-primary shadow-xl shadow-primary/8" :
            "border border-border shadow-sm hover:shadow-md"}`
            }>
            
              {plan.popular &&
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] font-bold uppercase tracking-[0.1em] px-4 py-1.5 rounded-full">
                  Pi&ugrave; popolare
                </span>
            }

              <p className="text-[14px] text-secondary/60 font-medium mb-2">
                {plan.range}
              </p>

              <div className="flex items-baseline gap-1.5 mb-4">
                <span className="font-display text-[48px] md:text-[56px] font-bold text-dark leading-none tracking-tight">
                  &euro;{plan.price}
                </span>
                <span className="text-[15px] text-secondary/50">
                  / mese per immobile
                </span>
              </div>

              <p className="text-[15px] text-dark leading-relaxed mb-6">
                 {plan.desc}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) =>
              <li key={f} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-[14px] text-secondary leading-snug">
                      {f}
                    </span>
                  </li>
              )}
              </ul>

              {/* CTA */}
              <a
              href="https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw"
              className={`w-full inline-flex items-center justify-center font-semibold text-[15px] rounded-xl px-8 py-4 transition-all duration-200 cursor-pointer ${
              plan.popular ?
              "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-[0.99]" :
              "bg-dark text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/20"}`
              }>
              
                Richiedi accesso prioritario
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Comparison / What's included */}
        <div className="max-w-[820px] mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-[26px] md:text-[34px] font-bold text-dark leading-[1.1] tracking-tight">
              Cosa &egrave; incluso in ogni piano
            </h2>
            <p className="mt-3 text-secondary text-[15px] md:text-[16px]">
              Nessun costo nascosto. Tutto quello che serve per gestire la manutenzione.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            {/* Column headers */}
            <div className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] items-center px-5 md:px-6 py-3 bg-[#FAFAFA] border-b border-[#F0F0F0]">
              <span className="text-[12px] font-semibold text-secondary/40 uppercase tracking-wider">
                Funzionalit&agrave;
              </span>
              <span className="text-[12px] font-semibold text-secondary/40 uppercase tracking-wider text-center">
                Starter
              </span>
              <span className="text-[12px] font-semibold text-primary uppercase tracking-wider text-center">
                Pro
              </span>
            </div>
            {[
            { feature: "Ticketing guasti illimitato", starter: true, pro: true },
            { feature: "Tecnici verificati", starter: true, pro: true },
            { feature: "Dashboard real-time", starter: true, pro: true },
            { feature: "Notifiche in tempo reale", starter: true, pro: true },
            { feature: "Report PDF mensili", starter: true, pro: true },
            { feature: "Storico interventi", starter: true, pro: true },
            { feature: "Calendario interventi", starter: true, pro: true },
            { feature: "Tecnico dedicato", starter: false, pro: true },
            { feature: "Sopralluogo iniziale", starter: false, pro: true },
            { feature: "Gestione end-to-end", starter: false, pro: true },
            { feature: "Report dettagliati via app", starter: false, pro: true },
            { feature: "Gestione fornitori avanzata", starter: false, pro: true },
            { feature: "Supporto WhatsApp dedicato", starter: false, pro: true }].
            map((row, i) =>
            <div
              key={row.feature}
              className={`grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] items-center px-5 md:px-6 py-3.5 ${
              i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"} ${
              i > 0 ? "border-t border-[#F0F0F0]" : ""}`}>
              
                <span className="text-[13px] md:text-[14px] text-dark">
                  {row.feature}
                </span>
                <span className="text-center">
                  {row.starter ?
                <Check className="w-4 h-4 text-primary mx-auto" strokeWidth={3} /> :

                <span className="text-secondary/20">&mdash;</span>
                }
                </span>
                <span className="text-center">
                  {row.pro ?
                <Check className="w-4 h-4 text-primary mx-auto" strokeWidth={3} /> :

                <span className="text-secondary/20">&mdash;</span>
                }
                </span>
              </div>
            )}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-[680px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-[26px] md:text-[34px] font-bold text-dark leading-[1.1] tracking-tight">
              Domande sui prezzi
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-border px-6 md:px-8">
            {FAQS.map((faq) =>
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            )}
          </div>

          {/* Link to full FAQ */}
          <div className="text-center mt-8">
            <a
              href="/faq"
              className="text-[14px] font-semibold text-primary hover:text-primary-hover transition-colors duration-200">
              
              Vedi tutte le domande frequenti &rarr;
            </a>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10">
            <p className="text-[15px] text-secondary mb-4">
              Hai altre domande? Parliamone.
            </p>
            <a
              href="https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw"
              className="inline-flex items-center justify-center bg-primary text-white font-semibold text-[15px] rounded-xl px-8 py-3.5 transition-all duration-200 hover:bg-primary-hover shadow-lg shadow-primary/20 cursor-pointer">
              
              Richiedi accesso prioritario
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>);

}