


import { ArrowRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TypingHeading from "@/components/TypingHeading";

const CTA_URL =
  "https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw";

/* ─── Pain points ─── */
const PAINS = [
  {
    emoji: "\uD83D\uDCF1",
    title: "Messaggi a qualsiasi ora",
    desc: "WhatsApp che esplode alle 23 di sera. Ospiti che scrivono, staff che chiede, tecnici che non rispondono.",
  },
  {
    emoji: "\uD83D\uDD27",
    title: "Tecnici introvabili",
    desc: "Cerchi un idraulico il sabato mattina? Buona fortuna. E quando lo trovi, il preventivo \u00E8 una sorpresa.",
  },
  {
    emoji: "\uD83D\uDCC9",
    title: "Zero visibilit\u00E0 sui costi",
    desc: "Quanto hai speso per manutenzione questo mese? Nessuno lo sa con certezza. Fogli Excel ovunque.",
  },
  {
    emoji: "\u2B50",
    title: "Recensioni a rischio",
    desc: "Un guasto mal gestito = una recensione negativa. E una recensione negativa ti costa prenotazioni.",
  },
];

/* ─── What Hommi solves ─── */
const SOLUTIONS = [
  {
    title: "Un\u2019unica piattaforma per tutto",
    desc: "Segnalazioni, tecnici, preventivi, report. Tutto in un posto. Basta frammentazione.",
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
    title: "Tecnici gi\u00E0 pronti",
    desc: "Non devi cercare nessuno. Il tecnico dedicato \u00E8 gi\u00E0 assegnato ai tuoi alloggi, con prezzi pre-approvati.",
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
    title: "Costi sotto controllo",
    desc: "Dashboard con spesa per alloggio, tecnico e periodo. Report PDF pronti per i proprietari in un click.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 4-6" />
      </svg>
    ),
  },
  {
    title: "Ospiti soddisfatti",
    desc: "Interventi rapidi, comunicazione trasparente. L\u2019ospite non sa nemmeno che c\u2019era un problema.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

/* ─── Testimonial ─── */
const TESTIMONIAL = {
  quote: "Prima passavo ore al telefono a coordinare tecnici. Ora apro un ticket e ricevo la conferma \u201CProblema risolto\u201D. Hommi mi ha restituito il tempo per far crescere il mio business.",
  name: "Giulia M.",
  role: "Property Manager, 32 alloggi a Milano",
};

/* ─── Numbers ─── */
const NUMBERS = [
  { value: "3.2h", label: "Tempo medio di risoluzione" },
  { value: "97%", label: "Tasso di risoluzione" },
  { value: "-40%", label: "Tempo risparmiato in coordinamento" },
  { value: "4.8/5", label: "Soddisfazione ospiti" },
];

/* ─── Main Section ─── */
export default function PropertyManagerSection() {
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
          Per Property Manager
        </span>
        <TypingHeading lines={["Gestisci decine di alloggi.", "Senza stress."]} />
        <p className="mt-5 text-secondary text-[16px] md:text-[18px] max-w-[580px] mx-auto leading-relaxed">
          Sei tu che tieni in piedi tutto: ospiti, proprietari, fornitori, emergenze.
          Hommi si occupa della manutenzione, cos&igrave; tu puoi occuparti del resto.
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

      {/* ─── Pain points ─── */}
      <div className="max-w-site mx-auto px-6 mb-24 md:mb-32">
        <div className="text-center mb-12">
          <h2 className="font-display text-[22px] md:text-[28px] font-bold text-dark leading-[1.15] tracking-tight">
            Ti suona familiare?
          </h2>
        </div>

        <div className={`grid md:grid-cols-2 gap-4 max-w-[820px] mx-auto reveal ${vis ? "revealed" : ""}`}>
          {PAINS.map((p, i) => (
            <div
              key={p.title}
              className="bg-white rounded-xl border border-border p-6 flex items-start gap-4"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <span className="text-[24px] shrink-0 leading-none mt-0.5">{p.emoji}</span>
              <div>
                <h3 className="font-display text-[15px] font-bold text-dark mb-1">{p.title}</h3>
                <p className="text-[13px] text-secondary leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Numbers ─── */}
      <div className="bg-dark py-16 md:py-20 mb-24 md:mb-32">
        <div className={`max-w-site mx-auto px-6 reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.1s" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {NUMBERS.map((n) => (
              <div key={n.label} className="text-center">
                <p className="font-display text-[32px] md:text-[40px] font-bold text-white leading-none tracking-tight">{n.value}</p>
                <p className="text-[12px] md:text-[13px] text-white/40 mt-2">{n.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Come Hommi ti aiuta ─── */}
      <div className="max-w-site mx-auto px-6 mb-24 md:mb-32">
        <div className="text-center mb-14">
          <h2 className="font-display text-[26px] md:text-[34px] font-bold text-dark leading-[1.1] tracking-tight">
            Come Hommi ti semplifica la vita
          </h2>
          <p className="mt-3 text-secondary text-[15px] md:text-[16px] max-w-[480px] mx-auto">
            Meno coordinamento, pi&ugrave; controllo. Ecco cosa cambia.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-6 max-w-[820px] mx-auto reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.1s" }}>
          {SOLUTIONS.map((s, i) => (
            <div
              key={s.title}
              className="group bg-white rounded-xl border border-border p-6 md:p-7 transition-all duration-200 hover:shadow-md hover:border-primary/20"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-dark mb-4 transition-colors duration-200 group-hover:bg-primary group-hover:border-primary [&_svg]:transition-colors [&_svg]:duration-200 group-hover:[&_svg]:stroke-white">
                {s.icon}
              </div>
              <h3 className="font-display text-[16px] font-bold text-dark mb-2">{s.title}</h3>
              <p className="text-[13px] text-secondary leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Testimonial ─── */}
      <div className="bg-surface py-20 md:py-24">
        <div className={`max-w-[680px] mx-auto px-6 text-center reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.1s" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="mx-auto mb-6 text-primary/20">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor" />
          </svg>
          <p className="font-display text-[18px] md:text-[22px] font-medium text-dark leading-[1.5] italic mb-8">
            &ldquo;{TESTIMONIAL.quote}&rdquo;
          </p>
          <div>
            <p className="text-[14px] font-bold text-dark">{TESTIMONIAL.name}</p>
            <p className="text-[13px] text-secondary/50 mt-0.5">{TESTIMONIAL.role}</p>
          </div>
        </div>
      </div>

      {/* ─── Cosa include ─── */}
      <div className="max-w-site mx-auto px-6 py-20 md:py-28">
        <div className={`max-w-[680px] mx-auto reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.1s" }}>
          <h2 className="font-display text-[26px] md:text-[34px] font-bold text-dark leading-[1.1] tracking-tight text-center mb-10">
            Tutto incluso, da subito
          </h2>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {[
              "Ticketing guasti illimitato",
              "Tecnici verificati nella tua zona",
              "Tecnico dedicato per i tuoi alloggi",
              "Dashboard real-time",
              "Notifiche ad ogni aggiornamento",
              "Report PDF per i proprietari",
              "Storico interventi completo",
              "Calendario manutenzioni",
              "Gestione fornitori avanzata",
              "Supporto dedicato",
            ].map((f) => (
              <div key={f} className="flex items-center gap-3 py-2">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                </div>
                <span className="text-[14px] text-dark">{f}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/prezzi"
              className="text-[14px] font-semibold text-primary hover:text-primary-hover transition-colors duration-200"
            >
              Vedi i piani e i prezzi &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* ─── CTA finale ─── */}
      <div className="max-w-site mx-auto px-6">
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
              Smetti di fare il tuttofare.
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
