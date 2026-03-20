


import { ArrowRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TypingHeading from "@/components/TypingHeading";
import AnimatedSteps from "@/components/AnimatedSteps";

/* ─── How-it-works steps ─── */
const STEPS = [
  {
    num: "01",
    title: "Segnala il guasto",
    desc: "Il tuo staff o addetto apre un ticket dall\u2019app in pochi tap: foto, descrizione e priorit\u00E0. Tu ricevi la notifica.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F16B01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Coordiniamo l\u2019intervento",
    desc: "Assegniamo il tecnico pi\u00F9 adatto nella tua zona. Tu approvi il preventivo, noi ci occupiamo del resto.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F16B01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Problema risolto",
    desc: "Foto, video e report di fine lavoro. Approvi dall\u2019app e chiudi il ticket. Tutto tracciato, zero telefonate.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F16B01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

/* ─── Benefits ─── */
const BENEFITS = [
  {
    title: "Tracciamento in tempo reale",
    desc: "Segui ogni ticket dallo stato \u201CAperto\u201D a \u201CRisolto\u201D. Sai sempre a che punto \u00E8 l\u2019intervento.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Foto e video allegati",
    desc: "Lo staff documenta il guasto con immagini. Il tecnico arriva gi\u00E0 preparato, riducendo i tempi.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
  },
  {
    title: "Priorit\u00E0 automatiche",
    desc: "Ogni segnalazione viene classificata per urgenza: alta, media, bassa. Gli interventi critici partono subito.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "Notifiche istantanee",
    desc: "Ogni aggiornamento di stato ti arriva in tempo reale. Nessun messaggio perso, nessuna telefonata da fare.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    title: "Storico completo",
    desc: "Ogni intervento registrato per alloggio. Cerca per data, tecnico o tipo di guasto in un secondo.",
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
    title: "Report PDF automatici",
    desc: "Genera report mensili con costi, tempi e interventi per alloggio. Pronti da inviare ai proprietari.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 4-6" />
      </svg>
    ),
  },
];

const CTA_URL =
  "https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw";

/* ─── Ticket mockup (phone-style) ─── */
function TicketMockup() {
  return (
    <div className="relative">
      {/* Phone frame */}
      <div className="relative w-[260px] md:w-[280px] bg-white rounded-[2rem] shadow-2xl shadow-black/15 border border-[#E5E5E5] p-2 mx-auto">
        <div className="bg-[#FAFAFA] rounded-[1.5rem] overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-2">
            <span className="text-[9px] font-semibold text-dark">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-3.5 h-2 rounded-sm border border-dark/30" />
            </div>
          </div>

          {/* Header */}
          <div className="px-4 pb-3 border-b border-[#EFEFEF]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-[10px] font-semibold text-dark">Alta priorit&agrave;</span>
            </div>
            <p className="text-[13px] font-bold text-dark mt-1.5">Perdita rubinetto bagno</p>
            <p className="text-[9px] text-secondary/50 mt-0.5">Via Roma 12, Milano</p>
          </div>

          {/* Details */}
          <div className="px-4 py-3 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-secondary/40">Stato</span>
              <span className="text-[9px] font-semibold text-white bg-primary rounded px-2 py-0.5">In corso</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-secondary/40">Priorit&agrave;</span>
              <span className="text-[9px] font-medium text-amber-600">Media</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-secondary/40">Tecnico</span>
              <span className="text-[9px] font-medium text-dark">Marco Bianchi</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-secondary/40">Creato</span>
              <span className="text-[9px] font-medium text-dark">18 Feb 2026, 10:30</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-secondary/40">Scadenza</span>
              <span className="text-[9px] font-medium text-red-500">Oggi, 16:00</span>
            </div>
          </div>

          {/* Photo */}
          <div className="px-4 pb-3">
            <div className="w-full h-[80px] rounded-lg bg-gradient-to-br from-primary/8 to-primary/3 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F16B01" strokeWidth="1.5" opacity="0.4">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
          </div>

          {/* CTA */}
          <div className="px-4 pb-4">
            <div className="w-full py-2.5 bg-primary rounded-xl text-center text-[11px] font-semibold text-white">
              Segnala problema
            </div>
          </div>
        </div>
      </div>

      {/* Floating card — intervention status */}
      <div className="absolute -top-4 -right-8 md:-right-12 w-[200px] bg-white rounded-xl shadow-xl shadow-black/10 border border-[#EBEBEB] p-3.5 z-10">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <p className="text-[10px] font-semibold text-dark">Intervento in corso</p>
        </div>
        <div className="space-y-2 text-[9px]">
          <div>
            <p className="text-secondary/40">Tecnico</p>
            <p className="text-dark font-medium">Marco Bianchi</p>
          </div>
          <div>
            <p className="text-secondary/40">ETA</p>
            <p className="text-dark font-medium">15 minuti</p>
          </div>
          <div className="flex items-center gap-1.5 pt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[8px] text-green-600 font-medium">In arrivo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Checkmark icon ─── */
function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
      <Check className="w-3 h-3 text-primary" strokeWidth={3} />
    </div>
  );
}

/* ─── Main Section ─── */
export default function TicketingSection() {
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
          Ticketing guasti
        </span>
        <TypingHeading lines={["Un guasto mal gestito ti brucia", "recensioni e fatturato."]} />
        <p className="mt-5 text-secondary text-[16px] md:text-[18px] max-w-[560px] mx-auto leading-relaxed">
          Un&apos;unica piattaforma per segnalare, coordinare e chiudere ogni
          guasto. Senza telefonate, senza rincorse, senza sorprese.
        </p>
      </div>

      {/* ─── Hero feature: mockup + bullets ─── */}
      <div className="max-w-site mx-auto px-6 mb-24 md:mb-32">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center reveal ${vis ? "revealed" : ""}`}>
          {/* Mockup */}
          <div className="flex justify-center">
            <TicketMockup />
          </div>

          {/* Copy */}
          <div>
            <h2 className="font-display text-[26px] md:text-[34px] font-bold text-dark leading-[1.15] tracking-tight mb-6">
              Dal guasto alla soluzione.
              <br className="hidden md:block" />
              In un unico flusso.
            </h2>

            <div className="space-y-4 mb-8">
              {[
                "Non devi pi\u00F9 fare il coordinatore. Il tuo staff segnala, noi gestiamo, tu approvi a lavoro finito.",
                "Sai sempre chi interviene, entro quando e a che costo. Niente pi\u00F9 rimbalzi tra WhatsApp e telefonate.",
                "Ogni guasto diventa un record. Costi, tempi, foto: tutto pronto per il proprietario.",
              ].map((b, j) => (
                <div key={j} className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="text-[14px] md:text-[15px] text-secondary leading-relaxed">{b}</p>
                </div>
              ))}
            </div>

            <a
              href={CTA_URL}
              className="inline-flex items-center justify-center bg-primary text-white font-semibold text-[14px] rounded-xl px-7 py-3 transition-all duration-200 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
            >
              Richiedi accesso prioritario
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* ─── Come funziona ─── */}
      <div className="max-w-site mx-auto px-6 mb-24 md:mb-32">
        <div className="text-center mb-14">
          <h2 className="font-display text-[26px] md:text-[34px] font-bold text-dark leading-[1.1] tracking-tight">
            Come funziona
          </h2>
          <p className="mt-3 text-secondary text-[15px] md:text-[16px] max-w-[480px] mx-auto">
            Tre passaggi. Zero telefonate, zero WhatsApp, zero sorprese.
          </p>
        </div>

        <AnimatedSteps steps={STEPS} />
      </div>

      {/* ─── Vantaggi ─── */}
      <div className="bg-surface py-20 md:py-28">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-[26px] md:text-[34px] font-bold text-dark leading-[1.1] tracking-tight">
              Ogni funzione pensata per farti risparmiare tempo
            </h2>
            <p className="mt-3 text-secondary text-[15px] md:text-[16px]">
              Meno telefonate, meno coordinamento, pi&ugrave; controllo su ogni immobile.
            </p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.15s" }}>
            {BENEFITS.map((b, i) => (
              <div
                key={b.title}
                className="group flex items-start gap-4"
                style={{ transitionDelay: `${i * 0.04}s` }}
              >
                <div className="w-[52px] h-[52px] rounded-2xl bg-white border border-border flex items-center justify-center text-dark shrink-0 transition-colors duration-200 group-hover:bg-primary group-hover:text-white group-hover:border-primary [&_svg]:transition-colors [&_svg]:duration-200 group-hover:[&_svg]:stroke-white">
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-display text-[15px] font-bold text-dark mb-1">{b.title}</h3>
                  <p className="text-[13px] text-secondary leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
}
