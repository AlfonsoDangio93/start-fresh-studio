


import { ArrowRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TypingHeading from "@/components/TypingHeading";

const CTA_URL =
  "https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw";

/* ─── KPI cards data ─── */
const KPIS = [
  { label: "Tempo medio risoluzione", value: "3.2h", change: "-18%", positive: true, sub: "vs mese scorso" },
  { label: "Costo medio intervento", value: "\u20AC85", change: "-12%", positive: true, sub: "vs mese scorso" },
  { label: "Tasso di risoluzione", value: "97%", change: "+3%", positive: true, sub: "vs mese scorso" },
  { label: "Ticket aperti", value: "12", change: "", positive: true, sub: "da gestire" },
];

/* ─── What you can track ─── */
const TRACKS = [
  {
    title: "Costi per alloggio",
    desc: "Quanto spendi per ogni immobile? Confronta mese per mese, identifica anomalie, ottimizza il budget.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Tempi di intervento",
    desc: "Dalla segnalazione alla chiusura. Monitora le performance dei tecnici e i tempi di risposta per priorit\u00E0.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Tipologia di guasti",
    desc: "Idraulica, elettrica, serrature: scopri i guasti pi\u00F9 frequenti e previeni i problemi ricorrenti.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Performance tecnici",
    desc: "Valutazioni, tempi medi, numero di interventi. Identifica i migliori e ottimizza le assegnazioni.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Trend mensili",
    desc: "Visualizza l\u2019andamento nel tempo. Ticket, costi, risoluzioni: tutto in grafici chiari e confrontabili.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 4-6" />
      </svg>
    ),
  },
  {
    title: "Rendicontazione proprietari",
    desc: "Genera report PDF personalizzati per ogni proprietario. Trasparenza totale, con un click.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

/* ─── Bento-style analytics mockup ─── */
function AnalyticsBento() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      {/* KPI cards */}
      {KPIS.map((kpi) => (
        <div key={kpi.label} className="bg-white rounded-xl border border-border p-4 md:p-5">
          <p className="text-[10px] md:text-[11px] text-secondary/40 uppercase tracking-wider font-medium mb-2">{kpi.label}</p>
          <p className="font-display text-[28px] md:text-[32px] font-bold text-dark leading-none tracking-tight">{kpi.value}</p>
          <div className="flex items-center gap-1.5 mt-2">
            {kpi.change && (
              <span className={`text-[11px] font-semibold ${kpi.positive ? "text-green-600" : "text-red-500"}`}>
                {kpi.change}
              </span>
            )}
            <span className="text-[10px] text-secondary/30">{kpi.sub}</span>
          </div>
        </div>
      ))}

      {/* Chart — spans 2 cols */}
      <div className="col-span-2 bg-white rounded-xl border border-border p-4 md:p-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] font-semibold text-dark">Ticket per settimana</p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[9px] text-secondary/40">Risolti</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-primary/20" />
              <span className="text-[9px] text-secondary/40">Aperti</span>
            </div>
          </div>
        </div>
        <div className="flex items-end gap-2 h-[80px]">
          {[
            { total: 60, resolved: 85 },
            { total: 75, resolved: 80 },
            { total: 45, resolved: 90 },
            { total: 90, resolved: 75 },
            { total: 65, resolved: 88 },
            { total: 80, resolved: 82 },
            { total: 50, resolved: 95 },
          ].map((w, i) => (
            <div key={i} className="flex-1 flex flex-col gap-0.5">
              <div className="rounded-t bg-primary/15 relative" style={{ height: `${w.total}%` }}>
                <div className="absolute bottom-0 left-0 right-0 rounded-t bg-primary transition-all duration-500" style={{ height: `${w.resolved}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-1.5 text-[8px] text-secondary/25 font-medium">
          <span>Lun</span><span>Mar</span><span>Mer</span><span>Gio</span><span>Ven</span><span>Sab</span><span>Dom</span>
        </div>
      </div>

      {/* Donut chart — breakdown */}
      <div className="col-span-2 bg-white rounded-xl border border-border p-4 md:p-5">
        <p className="text-[11px] font-semibold text-dark mb-4">Guasti per tipologia</p>
        <div className="flex items-center gap-6">
          {/* Simple donut via SVG */}
          <div className="relative w-[80px] h-[80px] shrink-0">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <circle cx="18" cy="18" r="14" fill="none" stroke="#F0F0F0" strokeWidth="4" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="#F16B01" strokeWidth="4" strokeDasharray="35 65" strokeDashoffset="0" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="#F59E0B" strokeWidth="4" strokeDasharray="25 75" strokeDashoffset="-35" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="#3B82F6" strokeWidth="4" strokeDasharray="20 80" strokeDashoffset="-60" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="#10B981" strokeWidth="4" strokeDasharray="20 80" strokeDashoffset="-80" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[11px] font-bold text-dark">45</span>
            </div>
          </div>
          <div className="space-y-2 flex-1">
            {[
              { label: "Idraulica", pct: "35%", color: "bg-primary" },
              { label: "Elettrica", pct: "25%", color: "bg-amber-500" },
              { label: "Serrature", pct: "20%", color: "bg-blue-500" },
              { label: "Altro", pct: "20%", color: "bg-green-500" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${item.color}`} />
                  <span className="text-[10px] text-secondary">{item.label}</span>
                </div>
                <span className="text-[10px] font-semibold text-dark">{item.pct}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export default function ReportSection() {
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
    <div ref={ref} className="pt-32 md:pt-40">
      {/* ─── Header ─── */}
      <div className="max-w-site mx-auto px-6 text-center mb-12">
        <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-[0.12em] mb-5">
          Report &amp; Analytics
        </span>
        <TypingHeading lines={["Dati veri.", "Decisioni migliori."]} />
        <p className="mt-5 text-secondary text-[16px] md:text-[18px] max-w-[560px] mx-auto leading-relaxed">
          Costi, tempi, performance: tutto misurato e visualizzato.
          Niente pi&ugrave; sensazioni, solo numeri.
        </p>
      </div>

      {/* ─── Bento analytics preview ─── */}
      <div className={`max-w-site mx-auto px-6 mb-24 md:mb-32 reveal ${vis ? "revealed" : ""}`}>
        <AnalyticsBento />
      </div>

      {/* ─── Value proposition — alternating rows ─── */}
      <div className="max-w-site mx-auto px-6 mb-24 md:mb-32">
        <div className="max-w-[740px] mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left column — problem */}
            <div className={`bg-[#FFF8F3] rounded-2xl border border-primary/10 p-8 reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.05s" }}>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F16B01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <h3 className="font-display text-[18px] font-bold text-dark mb-3">Senza Hommi</h3>
              <ul className="space-y-2.5">
                {[
                  "Fogli Excel sparsi e non aggiornati",
                  "Nessuna visibilit\u00E0 sui costi reali",
                  "Report manuali per i proprietari",
                  "Decisioni basate su sensazioni",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-red-400 mt-0.5 shrink-0 text-[14px]">&times;</span>
                    <span className="text-[13px] text-secondary leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column — solution */}
            <div className={`bg-white rounded-2xl border border-border p-8 shadow-sm reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.1s" }}>
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-display text-[18px] font-bold text-dark mb-3">Con Hommi</h3>
              <ul className="space-y-2.5">
                {[
                  "Dashboard real-time sempre aggiornata",
                  "Costi per alloggio, tecnico e periodo",
                  "Report PDF generati in un click",
                  "Trend e KPI per decisioni informate",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-green-600" strokeWidth={3} />
                    </div>
                    <span className="text-[13px] text-secondary leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Cosa puoi monitorare ─── */}
      <div className="bg-surface py-20 md:py-28">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-[26px] md:text-[34px] font-bold text-dark leading-[1.1] tracking-tight">
              Cosa puoi monitorare
            </h2>
            <p className="mt-3 text-secondary text-[15px] md:text-[16px]">
              Ogni dato che ti serve, in tempo reale ed esportabile.
            </p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.15s" }}>
            {TRACKS.map((t, i) => (
              <div
                key={t.title}
                className="bg-white rounded-xl border border-border p-6 transition-all duration-200 hover:shadow-md hover:border-primary/20 group"
                style={{ transitionDelay: `${i * 0.04}s` }}
              >
                <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-dark mb-4 transition-colors duration-200 group-hover:bg-primary group-hover:border-primary [&_svg]:transition-colors [&_svg]:duration-200 group-hover:[&_svg]:stroke-white">
                  {t.icon}
                </div>
                <h3 className="font-display text-[15px] font-bold text-dark mb-1.5">{t.title}</h3>
                <p className="text-[13px] text-secondary leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Export formats ─── */}
      <div className="max-w-site mx-auto px-6 py-20 md:py-28">
        <div className={`max-w-[740px] mx-auto text-center reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.1s" }}>
          <h2 className="font-display text-[26px] md:text-[34px] font-bold text-dark leading-[1.1] tracking-tight mb-4">
            Esporta come vuoi
          </h2>
          <p className="text-secondary text-[15px] md:text-[16px] mb-10 max-w-[480px] mx-auto">
            Report pronti da inviare ai proprietari o da usare nelle tue analisi.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { format: "PDF", desc: "Report professionali", color: "bg-red-50 text-red-600 border-red-100" },
              { format: "CSV", desc: "Dati grezzi", color: "bg-green-50 text-green-600 border-green-100" },
              { format: "Dashboard", desc: "Vista interattiva", color: "bg-primary/5 text-primary border-primary/10" },
            ].map((f) => (
              <div key={f.format} className={`rounded-xl border px-6 py-4 ${f.color}`}>
                <p className="text-[18px] font-bold leading-none mb-1">{f.format}</p>
                <p className="text-[11px] opacity-60">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── CTA finale ─── */}
      <div className="max-w-site mx-auto px-6">
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
              Smetti di andare a occhio.
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
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-semibold text-[15px] rounded-[10px] px-8 py-3.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/30 cursor-pointer"
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
