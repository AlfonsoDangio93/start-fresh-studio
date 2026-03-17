


import { ArrowRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TypingHeading from "@/components/TypingHeading";
import AnimatedSteps from "@/components/AnimatedSteps";

/* ─── How-it-works steps ─── */
const STEPS = [
  {
    num: "01",
    title: "Apri un ticket",
    desc: "Segnala il guasto dall\u2019app. Noi selezioniamo il tecnico pi\u00F9 adatto per zona e specialit\u00E0.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F16B01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Tecnico assegnato",
    desc: "Il tecnico dedicato riceve l\u2019incarico. Se non disponibile, attiviamo un backup. Coordinamento gestito da noi.",
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
    title: "Intervento completato",
    desc: "Foto, video e report di fine lavoro. Approvi dall\u2019app e chiudi il ticket. Tutto documentato.",
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
    title: "Tecnici verificati",
    desc: "Ogni professionista \u00E8 selezionato tramite verifica documentale, colloquio e feedback continui.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Tecnico dedicato",
    desc: "Ogni propriet\u00E0 ha un tecnico di riferimento che conosce i tuoi alloggi e le tue esigenze.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Backup automatico",
    desc: "Se il tecnico dedicato non \u00E8 disponibile, attiviamo un secondo professionista. Zero ritardi.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
  },
  {
    title: "Prezzi pre-approvati",
    desc: "Nessuna sorpresa. Il preventivo viene sempre approvato dal Property Manager prima dell\u2019intervento.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Copertura completa",
    desc: "Idraulici, elettricisti, fabbri, tuttofare. Qualsiasi tipo di intervento, nella tua zona.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Feedback e valutazioni",
    desc: "Ogni intervento viene valutato. I tecnici migliori restano, quelli sotto standard vengono sostituiti.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const CTA_URL =
  "https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw";

/* ─── Technician card mockup ─── */
function TechnicianMockup() {
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
            <p className="text-[13px] font-bold text-dark">Tecnici assegnati</p>
            <p className="text-[9px] text-secondary/50 mt-0.5">3 tecnici attivi nella tua zona</p>
          </div>

          {/* Technician list */}
          <div className="px-4 py-3 space-y-3">
            {[
              { name: "Marco Bianchi", role: "Idraulico", status: "Disponibile", statusColor: "bg-green-500", rating: "4.9" },
              { name: "Luca Rossi", role: "Elettricista", status: "In intervento", statusColor: "bg-amber-500", rating: "4.8" },
              { name: "Andrea Verdi", role: "Tuttofare", status: "Disponibile", statusColor: "bg-green-500", rating: "4.7" },
            ].map((tech) => (
              <div key={tech.name} className="flex items-center gap-3 py-2 border-b border-[#F5F5F5] last:border-0">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F16B01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-semibold text-dark">{tech.name}</p>
                    <div className="flex items-center gap-0.5">
                      <svg width="8" height="8" viewBox="0 0 20 20" fill="#F16B01"><path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.26 5.06 16.7 6 11.21l-4-3.9 5.53-.8L10 1.5z"/></svg>
                      <span className="text-[8px] font-medium text-dark">{tech.rating}</span>
                    </div>
                  </div>
                  <p className="text-[8px] text-secondary/40">{tech.role}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${tech.statusColor}`} />
                    <span className="text-[8px] text-secondary/50">{tech.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="px-4 pb-4">
            <div className="w-full py-2.5 bg-primary rounded-xl text-center text-[11px] font-semibold text-white">
              Assegna tecnico
            </div>
          </div>
        </div>
      </div>

      {/* Floating card — technician on the way */}
      <div className="absolute -top-4 -right-8 md:-right-12 w-[200px] bg-white rounded-xl shadow-xl shadow-black/10 border border-[#EBEBEB] p-3.5 z-10">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <p className="text-[10px] font-semibold text-dark">Tecnico confermato</p>
        </div>
        <div className="space-y-2 text-[9px]">
          <div>
            <p className="text-secondary/40">Specialit&agrave;</p>
            <p className="text-dark font-medium">Idraulica</p>
          </div>
          <div>
            <p className="text-secondary/40">Tempo medio</p>
            <p className="text-dark font-medium">Intervento in 3.2h</p>
          </div>
          <div className="flex items-center gap-1.5 pt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[8px] text-green-600 font-medium">Disponibile ora</p>
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
export default function GestioneTecniciSection() {
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
          Gestione tecnici
        </span>
        <TypingHeading lines={["Il tecnico giusto, sempre.", "Senza cercarlo tu."]} />
        <p className="mt-5 text-secondary text-[16px] md:text-[18px] max-w-[560px] mx-auto leading-relaxed">
          Professionisti selezionati, verificati e monitorati. Assegnati
          automaticamente per zona e specialit&agrave;. Tu approvi, noi
          coordiniamo.
        </p>
      </div>

      {/* ─── Hero feature: mockup + bullets ─── */}
      <div className="max-w-site mx-auto px-6 mb-24 md:mb-32">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center reveal ${vis ? "revealed" : ""}`}>
          {/* Mockup */}
          <div className="flex justify-center">
            <TechnicianMockup />
          </div>

          {/* Copy */}
          <div>
            <h2 className="font-display text-[26px] md:text-[34px] font-bold text-dark leading-[1.15] tracking-tight mb-6">
              I tuttofare sono nostri.
              <br className="hidden md:block" />
              Gli specialisti, selezionati da noi.
            </h2>

            <div className="space-y-4 mb-8">
              {[
                "I tuttofare sono nostri dipendenti. Gli specialisti esterni seguono i nostri SOP e sono selezionati tramite verifica documentale, colloquio e feedback continui.",
                "Ogni propriet\u00E0 ha un tecnico dedicato. Se non disponibile, attiviamo un backup. Coordinamento e selezione sono gestiti da noi.",
                "Prezzi chiari e pre-approvati. Il costo dell\u2019intervento viene sempre confermato prima di procedere. Zero sorprese.",
              ].map((b, j) => (
                <div key={j} className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="text-[14px] md:text-[15px] text-secondary leading-relaxed">{b}</p>
                </div>
              ))}
            </div>

            <a
              href={CTA_URL}
              className="inline-flex items-center justify-center bg-primary text-white font-semibold text-[14px] rounded-full px-7 py-3 transition-all duration-200 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
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
            Tre passaggi. Dal guasto al tecnico giusto, senza telefonate.
          </p>
        </div>

        <AnimatedSteps steps={STEPS} />
      </div>

      {/* ─── Vantaggi ─── */}
      <div className="bg-surface py-20 md:py-28">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-[26px] md:text-[34px] font-bold text-dark leading-[1.1] tracking-tight">
              Perch&eacute; i nostri tecnici fanno la differenza
            </h2>
            <p className="mt-3 text-secondary text-[15px] md:text-[16px]">
              Selezionati, formati e monitorati. Sempre.
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

      {/* ─── CTA finale ─── */}
      <div className="max-w-site mx-auto px-6 pt-20 md:pt-28">
        <div className="relative rounded-[10px] overflow-hidden px-8 py-20 md:px-16 md:py-24 text-center">
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1622266234556-faab3e09f67b?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-dark/75" aria-hidden="true" />

          <div className="relative z-10">
            <h2 className="font-display text-[26px] md:text-[40px] font-bold text-white leading-[1.1] tracking-tight">
              Smetti di cercare tecnici.
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
