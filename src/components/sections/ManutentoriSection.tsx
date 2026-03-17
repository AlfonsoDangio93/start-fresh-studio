


import { ArrowRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TypingHeading from "@/components/TypingHeading";

const CTA_URL =
  "https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw";

/* ─── Pain points ─── */
const PAINS = [
  {
    emoji: "\uD83D\uDCF2",
    title: "Clienti a singhiozzo",
    desc: "Una settimana piena, la successiva vuota. Dipendi dal passaparola e non sai mai cosa arriva domani.",
  },
  {
    emoji: "\uD83D\uDCB8",
    title: "Pagamenti che ritardano",
    desc: "Fai il lavoro, mandi la fattura, poi aspetti. Solleciti, rincorri, speri. Ogni mese uguale.",
  },
  {
    emoji: "\uD83D\uDCCB",
    title: "Burocrazia infinita",
    desc: "Preventivi, foto, report, fatture. Passi pi\u00F9 tempo a scrivere che a riparare.",
  },
  {
    emoji: "\uD83D\uDCE3",
    title: "Zero visibilit\u00E0",
    desc: "Sei bravo nel tuo lavoro, ma nessuno ti trova. Farti conoscere costa tempo e soldi che non hai.",
  },
];

/* ─── What Hommi offers ─── */
const SOLUTIONS = [
  {
    title: "Lavoro costante, senza cercarlo",
    desc: "Ricevi richieste di intervento da property manager verificati nella tua zona. Niente pi\u00F9 passaparola.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Pagamenti puntuali e garantiti",
    desc: "Hommi gestisce i pagamenti. Tu completi l\u2019intervento, noi ci occupiamo del resto. Niente pi\u00F9 solleciti.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: "Meno carta, pi\u00F9 lavoro",
    desc: "L\u2019app gestisce ticket, foto, stato intervento e reportistica. Tu ti concentri solo sulla riparazione.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Costruisci la tua reputazione",
    desc: "Ogni intervento completato costruisce il tuo profilo. Pi\u00F9 lavori bene, pi\u00F9 lavori ricevi.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

/* ─── Testimonial ─── */
const TESTIMONIAL = {
  quote: "Prima perdevo giornate a cercare nuovi clienti e a rincorrere pagamenti. Con Hommi ricevo le richieste direttamente sull\u2019app, intervengo e vengo pagato. Finalmente posso concentrarmi sul mio mestiere.",
  name: "Marco T.",
  role: "Idraulico, zona Milano e hinterland",
};

/* ─── Numbers ─── */
const NUMBERS = [
  { value: "250+", label: "Manutentori nella rete" },
  { value: "48h", label: "Tempo medio primo incarico" },
  { value: "98%", label: "Pagamenti entro i termini" },
  { value: "4.9/5", label: "Valutazione media dai PM" },
];

/* ─── Main Section ─── */
export default function ManutentoriSection() {
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
          Per Manutentori
        </span>
        <TypingHeading lines={["Fai il lavoro che ami.", "Al resto pensiamo noi."]} />
        <p className="mt-5 text-secondary text-[16px] md:text-[18px] max-w-[580px] mx-auto leading-relaxed">
          Entra nella rete Hommi: ricevi incarichi da property manager verificati,
          gestisci tutto dall&apos;app e vieni pagato puntualmente.
        </p>
        <div className="mt-8">
          <a
            href={CTA_URL}
            className="inline-flex items-center justify-center bg-primary text-white font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all duration-200 hover:bg-primary-hover shadow-lg shadow-primary/20 cursor-pointer"
          >
            Diventa manutentore Hommi
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>

      {/* ─── Pain points ─── */}
      <div className="max-w-site mx-auto px-6 mb-24 md:mb-32">
        <div className="text-center mb-12">
          <h2 className="font-display text-[22px] md:text-[28px] font-bold text-dark leading-[1.15] tracking-tight">
            Fare il manutentore non dovrebbe essere cos&igrave; complicato
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
            Tu ripari. Hommi porta tutto il resto.
          </h2>
          <p className="mt-3 text-secondary text-[15px] md:text-[16px] max-w-[480px] mx-auto">
            Clienti, pagamenti, burocrazia. Ci pensiamo noi.
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

      {/* ─── Cosa ottieni ─── */}
      <div className="max-w-site mx-auto px-6 py-20 md:py-28">
        <div className={`max-w-[680px] mx-auto reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.1s" }}>
          <h2 className="font-display text-[26px] md:text-[34px] font-bold text-dark leading-[1.1] tracking-tight text-center mb-10">
            Cosa ottieni entrando nella rete
          </h2>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {[
              "Incarichi da property manager verificati",
              "Pagamenti garantiti e puntuali",
              "App per gestire ticket e interventi",
              "Profilo pubblico con recensioni",
              "Nessun costo di iscrizione",
              "Supporto dedicato Hommi",
              "Visibilit\u00E0 nella tua zona",
              "Calendario interventi integrato",
              "Report automatici per ogni lavoro",
              "Accesso a una rete in crescita",
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
            src="https://images.unsplash.com/photo-1749532125405-70950966b0e5?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/75" aria-hidden="true" />

          <div className="relative z-10">
            <h2 className="font-display text-[26px] md:text-[40px] font-bold text-white leading-[1.1] tracking-tight">
              Smetti di rincorrere clienti.
              <br />
              Fai arrivare il lavoro a te.
            </h2>
            <p className="mt-5 text-white/60 text-[15px] md:text-[17px] max-w-[460px] mx-auto leading-relaxed">
              250+ manutentori lavorano gi&agrave; con Hommi.
              Iscrizione gratuita, primi incarichi entro 48 ore.
            </p>
            <div className="mt-8">
              <a
                href={CTA_URL}
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/30 cursor-pointer"
              >
                Diventa manutentore Hommi
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
