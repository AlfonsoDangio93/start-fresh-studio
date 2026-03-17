


import { ArrowRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TypingHeading from "@/components/TypingHeading";

const CTA_URL =
  "https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw";

/* ─── Day in the life ─── */
const SCENARIOS = [
  {
    time: "08:15",
    title: "L\u2019ospite segnala una perdita",
    without: "Ti scrive su WhatsApp. Tu cerchi un idraulico, chiami 3 numeri, nessuno risponde. L\u2019ospite ti riscrive.",
    with: "Lo staff apre un ticket con foto. Il tecnico dedicato riceve l\u2019incarico. Tu ricevi solo la conferma.",
  },
  {
    time: "11:30",
    title: "Check-in tra 2 ore, la serratura non funziona",
    without: "Panico. Chiami il fabbro, non \u00E8 disponibile. Chiedi a un amico. L\u2019ospite aspetta fuori.",
    with: "Ticket urgente. Il tecnico di backup \u00E8 gi\u00E0 in zona. Intervento in 45 minuti. Check-in regolare.",
  },
  {
    time: "22:00",
    title: "Salta la corrente nell\u2019alloggio",
    without: "Messaggi alle 22. Cerchi un elettricista disponibile di sera. Domani \u00E8 troppo tardi, la recensione \u00E8 gi\u00E0 scritta.",
    with: "Il tuo staff segnala dall\u2019app. Noi coordiniamo l\u2019intervento per la mattina successiva e aggiorniamo l\u2019ospite.",
  },
];

/* ─── What you get ─── */
const BENEFITS = [
  {
    title: "Interventi rapidi",
    desc: "Obiettivo: intervento entro 4 ore. Il tecnico \u00E8 gi\u00E0 assegnato ai tuoi alloggi, non devi cercarlo.",
    stat: "3.2h",
    statLabel: "tempo medio",
  },
  {
    title: "Recensioni protette",
    desc: "Un guasto gestito bene \u00E8 invisibile all\u2019ospite. Nessun impatto sulle recensioni, nessuna prenotazione persa.",
    stat: "4.8/5",
    statLabel: "soddisfazione",
  },
  {
    title: "Zero coordinamento",
    desc: "Non devi pi\u00F9 fare da intermediario tra ospite, tecnico e proprietario. Ci pensiamo noi, tu approvi.",
    stat: "-40%",
    statLabel: "tempo risparmiato",
  },
  {
    title: "Costi trasparenti",
    desc: "Preventivo pre-approvato prima di ogni intervento. Nessuna sorpresa in fattura, mai.",
    stat: "\u20AC0",
    statLabel: "costi nascosti",
  },
];

/* ─── Main Section ─── */
export default function HostSection() {
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
          Per Host Professionali
        </span>
        <TypingHeading lines={["L'imprevisto fa parte del gioco.", "Gestirlo male, no."]} />
        <p className="mt-5 text-secondary text-[16px] md:text-[18px] max-w-[580px] mx-auto leading-relaxed">
          Sei un host professionale. Ogni minuto perso a coordinare tecnici
          &egrave; un minuto tolto alla crescita del tuo business.
          Hommi automatizza la gestione degli imprevisti.
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

      {/* ─── A day in the life ─── */}
      <div className="max-w-site mx-auto px-6 mb-24 md:mb-32">
        <div className="text-center mb-12">
          <h2 className="font-display text-[22px] md:text-[28px] font-bold text-dark leading-[1.15] tracking-tight">
            Una giornata tipo. Due scenari.
          </h2>
          <p className="mt-2 text-secondary text-[14px] md:text-[15px]">
            Lo stesso imprevisto, due modi di gestirlo.
          </p>
        </div>

        <div className={`space-y-5 max-w-[820px] mx-auto reveal ${vis ? "revealed" : ""}`}>
          {SCENARIOS.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-border overflow-hidden"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Scenario header */}
              <div className="px-6 py-4 border-b border-border/50 flex items-center gap-3">
                <span className="text-[12px] font-mono font-bold text-primary bg-primary/8 rounded-md px-2.5 py-1">{s.time}</span>
                <h3 className="font-display text-[15px] font-bold text-dark">{s.title}</h3>
              </div>

              {/* Two columns */}
              <div className="grid md:grid-cols-2">
                {/* Without */}
                <div className="px-6 py-5 md:border-r border-b md:border-b-0 border-border/50">
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider">Senza Hommi</span>
                  </div>
                  <p className="text-[13px] text-secondary leading-relaxed">{s.without}</p>
                </div>

                {/* With */}
                <div className="px-6 py-5 bg-green-50/30">
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-green-600" strokeWidth={3} />
                    </div>
                    <span className="text-[11px] font-bold text-green-600 uppercase tracking-wider">Con Hommi</span>
                  </div>
                  <p className="text-[13px] text-secondary leading-relaxed">{s.with}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Results in numbers ─── */}
      <div className="max-w-site mx-auto px-6 mb-24 md:mb-32">
        <div className="text-center mb-14">
          <h2 className="font-display text-[26px] md:text-[34px] font-bold text-dark leading-[1.1] tracking-tight">
            I risultati, in numeri
          </h2>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[900px] mx-auto reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.1s" }}>
          {BENEFITS.map((b, i) => (
            <div
              key={b.title}
              className="bg-white rounded-xl border border-border p-6 text-center"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <p className="font-display text-[36px] font-bold text-primary leading-none tracking-tight">{b.stat}</p>
              <p className="text-[10px] text-secondary/30 uppercase tracking-wider font-medium mt-1 mb-4">{b.statLabel}</p>
              <h3 className="font-display text-[14px] font-bold text-dark mb-1.5">{b.title}</h3>
              <p className="text-[12px] text-secondary leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── How it fits your workflow ─── */}
      <div className="bg-surface py-20 md:py-28">
        <div className="max-w-site mx-auto px-6">
          <div className={`max-w-[680px] mx-auto reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.1s" }}>
            <div className="text-center mb-12">
              <h2 className="font-display text-[26px] md:text-[34px] font-bold text-dark leading-[1.1] tracking-tight">
                Si integra nel tuo flusso
              </h2>
              <p className="mt-3 text-secondary text-[15px] md:text-[16px]">
                Non devi cambiare il modo in cui lavori. Hommi si adatta.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { q: "Usi Airbnb, Booking o un channel manager?", a: "Lo staff segnala dall\u2019app Hommi. Le tue piattaforme di prenotazione restano invariate." },
                { q: "Hai gi\u00E0 un tecnico di fiducia?", a: "Possiamo integrarlo nella rete. Oppure affianchiamo i nostri tecnici verificati ai tuoi." },
                { q: "Gestisci da remoto?", a: "Perfetto. Dashboard e notifiche ovunque. Non devi essere fisicamente presente per nulla." },
                { q: "Hai solo 3\u20134 alloggi?", a: "Hommi funziona anche per chi inizia. Il piano Starter parte da 39\u20AC/mese per immobile." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-border p-5 md:p-6">
                  <p className="text-[14px] font-bold text-dark mb-1.5">{item.q}</p>
                  <p className="text-[13px] text-secondary leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="/faq"
                className="text-[14px] font-semibold text-primary hover:text-primary-hover transition-colors duration-200"
              >
                Altre domande? Vai alle FAQ &rarr;
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
              Torna a fare l&apos;host.
              <br />
              Ai guasti ci pensa Hommi.
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
