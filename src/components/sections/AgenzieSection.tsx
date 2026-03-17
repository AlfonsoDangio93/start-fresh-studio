


import { ArrowRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TypingHeading from "@/components/TypingHeading";

const CTA_URL =
  "https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw";

/* ─── Scaling problems ─── */
const PROBLEMS = [
  {
    before: "5 alloggi",
    after: "50 alloggi",
    pain: "Il volume di segnalazioni cresce 10x ma il tuo team no. Servono processi, non pi\u00F9 persone.",
  },
  {
    before: "1 tecnico di fiducia",
    after: "10 zone da coprire",
    pain: "Non puoi dipendere da un solo professionista. Ti serve una rete affidabile e coordinata.",
  },
  {
    before: "Tutto a memoria",
    after: "Rendicontazione per 20 proprietari",
    pain: "Ogni proprietario vuole trasparenza sui costi. I fogli Excel non scalano.",
  },
];

/* ─── What changes with Hommi ─── */
const FEATURES = [
  {
    title: "Processi standardizzati",
    desc: "Ogni segnalazione segue lo stesso flusso: apertura, assegnazione, intervento, chiusura. Indipendentemente da chi la gestisce.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Rete tecnici scalabile",
    desc: "Non devi costruire tu la rete. Hommi ha gi\u00E0 tecnici verificati in ogni zona. Aggiungi alloggi, la copertura segue.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Dashboard multi-portfolio",
    desc: "Filtra per proprietario, zona o periodo. Ogni account ha la sua vista. Il tuo team vede solo ci\u00F2 che serve.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "Report per proprietario",
    desc: "Genera report PDF personalizzati per ogni proprietario: costi, interventi, tempi. In un click, non in un pomeriggio.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Onboarding in 24h",
    desc: "Aggiungi i tuoi alloggi, assegniamo i tecnici, sei operativo. Nessuna migrazione complessa, nessun setup infinito.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Pricing che scala con te",
    desc: "Pi\u00F9 alloggi gestisci, meno paghi per unit\u00E0. Piani personalizzati per portfolio grandi. Nessun vincolo annuale.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 4-6" />
      </svg>
    ),
  },
];

/* ─── Main Section ─── */
export default function AgenzieSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="pt-32 md:pt-40 pb-20 md:pb-28">
      {/* ─── Header ─── */}
      <div className="max-w-site mx-auto px-6 text-center mb-16">
        <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-[0.12em] mb-5">
          Per Agenzie
        </span>
        <TypingHeading lines={["Scala le operazioni.", "Non il caos."]} />
        <p className="mt-5 text-secondary text-[16px] md:text-[18px] max-w-[580px] mx-auto leading-relaxed">
          Passare da 10 a 100 alloggi non dovrebbe significare 10x il
          coordinamento. Hommi ti d&agrave; i processi e la rete per scalare
          senza assumere.
        </p>
        <div className="mt-8">
          <a
            href={CTA_URL}
            className="inline-flex items-center justify-center bg-primary text-white font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all duration-200 hover:bg-primary-hover shadow-lg shadow-primary/20 cursor-pointer"
          >
            Richiedi accesso prioritario
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>

      {/* ─── Scaling problem visualization ─── */}
      <div className="max-w-site mx-auto px-6 mb-24 md:mb-32">
        <div className="text-center mb-12">
          <h2 className="font-display text-[22px] md:text-[28px] font-bold text-dark leading-[1.15] tracking-tight">
            Il problema della crescita
          </h2>
          <p className="mt-2 text-secondary text-[14px] md:text-[15px]">
            Quello che funzionava con pochi alloggi, non funziona pi&ugrave;.
          </p>
        </div>

        <div className={`space-y-4 max-w-[720px] mx-auto reveal ${vis ? "revealed" : ""}`}>
          {PROBLEMS.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-border p-6 md:p-7"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[12px] font-semibold text-secondary/40 bg-surface rounded-full px-3 py-1">{p.before}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F16B01" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
                <span className="text-[12px] font-bold text-primary bg-primary/8 rounded-full px-3 py-1">{p.after}</span>
              </div>
              <p className="text-[14px] text-secondary leading-relaxed">{p.pain}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Numbers bar ─── */}
      <div className="bg-dark py-16 md:py-20 mb-24 md:mb-32">
        <div className={`max-w-site mx-auto px-6 reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.1s" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {[
              { value: "100+", label: "Alloggi gestiti per agenzia" },
              { value: "24h", label: "Tempo di onboarding" },
              { value: "0", label: "Persone da assumere" },
              { value: "\u20AC29", label: "Per immobile da 15 unit\u00E0" },
            ].map((n) => (
              <div key={n.label} className="text-center">
                <p className="font-display text-[32px] md:text-[40px] font-bold text-white leading-none tracking-tight">{n.value}</p>
                <p className="text-[12px] md:text-[13px] text-white/40 mt-2">{n.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── What changes ─── */}
      <div className="max-w-site mx-auto px-6 mb-24 md:mb-32">
        <div className="text-center mb-14">
          <h2 className="font-display text-[26px] md:text-[34px] font-bold text-dark leading-[1.1] tracking-tight">
            Cosa cambia con Hommi
          </h2>
          <p className="mt-3 text-secondary text-[15px] md:text-[16px] max-w-[480px] mx-auto">
            Strumenti pensati per chi deve gestire volumi, non singoli alloggi.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.1s" }}>
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="group bg-white rounded-xl border border-border p-6 transition-all duration-200 hover:shadow-md hover:border-primary/20"
              style={{ transitionDelay: `${i * 0.04}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-dark mb-4 transition-colors duration-200 group-hover:bg-primary group-hover:border-primary [&_svg]:transition-colors [&_svg]:duration-200 group-hover:[&_svg]:stroke-white">
                {f.icon}
              </div>
              <h3 className="font-display text-[15px] font-bold text-dark mb-1.5">{f.title}</h3>
              <p className="text-[13px] text-secondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Use case timeline ─── */}
      <div className="bg-surface py-20 md:py-28">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-[26px] md:text-[34px] font-bold text-dark leading-[1.1] tracking-tight">
              Dal primo alloggio ai primi 100
            </h2>
            <p className="mt-3 text-secondary text-[15px] md:text-[16px] max-w-[480px] mx-auto">
              Hommi cresce con te. Ecco come.
            </p>
          </div>

          <div className={`max-w-[600px] mx-auto reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.1s" }}>
            {[
              { phase: "Fase 1", range: "1\u201314 alloggi", desc: "Attivi il piano Starter. Ticketing, dashboard, tecnici verificati. Tutto subito operativo.", color: "bg-primary/10 text-primary" },
              { phase: "Fase 2", range: "15\u201350 alloggi", desc: "Passi al piano Pro. Tecnico dedicato, gestione end-to-end, sopralluogo incluso. Meno di 1\u20AC/giorno per unit\u00E0.", color: "bg-primary/20 text-primary" },
              { phase: "Fase 3", range: "50+ alloggi", desc: "Piano personalizzato con account manager dedicato. Pricing su misura, supporto prioritario, SLA garantiti.", color: "bg-primary text-white" },
            ].map((step, i) => (
              <div key={step.phase} className="flex gap-5 mb-8 last:mb-0" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full ${step.color} flex items-center justify-center shrink-0 text-[11px] font-bold`}>
                    {i + 1}
                  </div>
                  {i < 2 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-8 last:pb-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-primary uppercase tracking-wider">{step.phase}</span>
                    <span className="text-[11px] text-secondary/40">&mdash; {step.range}</span>
                  </div>
                  <p className="text-[14px] text-secondary leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}

            <div className="text-center mt-6">
              <a
                href="/prezzi"
                className="text-[14px] font-semibold text-primary hover:text-primary-hover transition-colors duration-200"
              >
                Vedi tutti i piani &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ─── CTA finale ─── */}
      <div className="max-w-site mx-auto px-6 pt-20 md:pt-28">
        <div className="relative rounded-[10px] overflow-hidden px-8 py-20 md:px-16 md:py-24 text-center">
          <img
            src="https://images.unsplash.com/photo-1622266234556-faab3e09f67b?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/75" aria-hidden="true" />

          <div className="relative z-10">
            <h2 className="font-display text-[26px] md:text-[40px] font-bold text-white leading-[1.1] tracking-tight">
              Scala il portfolio, non il caos.
              <br />
              Passa ad Hommi.
            </h2>
            <p className="mt-5 text-white/60 text-[15px] md:text-[17px] max-w-[460px] mx-auto leading-relaxed">
              2.000+ property manager hanno gi&agrave; scelto Hommi.
              Nessun vincolo annuale, prezzo fisso, zero sorprese.
            </p>
            <div className="mt-8">
              <a
                href={CTA_URL}
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/30 cursor-pointer"
              >
                Richiedi accesso prioritario
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
