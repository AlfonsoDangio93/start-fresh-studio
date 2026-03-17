


import { useEffect, useRef, useState } from "react";
import { Flame, Zap, Wrench, WashingMachine, Lock } from "lucide-react";
import TypingHeading from "@/components/TypingHeading";

const SERVICES = [
  {
    icon: <Flame size={22} />,
    title: "Caldaie, climatizzatori e scaldabagni",
    desc: "Tecnici abilitati per impianti termici. Interveniamo anche in alta stagione.",
  },
  {
    icon: <Zap size={22} />,
    title: "Guasti elettrici e riparazioni rapide",
    desc: "Cortocircuiti, blackout, salvavita. Ripristino in giornata garantito.",
  },
  {
    icon: <Wrench size={22} />,
    title: "Piccole manutenzioni",
    desc: "Scarichi intasati, docce che perdono, porte che non chiudono. Risolti senza stress.",
  },
  {
    icon: <WashingMachine size={22} />,
    title: "Elettrodomestici guasti",
    desc: "Lavastoviglie, lavatrici, forni: se si rompe, lo aggiustiamo o ti proponiamo la sostituzione.",
  },
  {
    icon: <Lock size={22} />,
    title: "Serrature e sicurezza",
    desc: "Chiavi rotte, accessi compromessi, serrature difettose. Intervento urgente senza danneggiare l\u2019ingresso.",
  },
];

export default function ServicesSection() {
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
    <section id="servizi" className="py-20 md:py-28 bg-surface" ref={ref}>
      <div className="max-w-site mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy + services */}
          <div className={`reveal ${vis ? "revealed" : ""}`}>
            <span className="inline-block text-[11px] font-semibold text-dark uppercase tracking-[0.08em] border border-border rounded-full px-3.5 py-1.5 mb-5">
              Servizi
            </span>
            {vis ? (
              <TypingHeading
                lines={["Sempre il tecnico giusto.", "Nessuna improvvisazione."]}
                className="font-display text-[28px] md:text-[38px] font-bold text-dark leading-[1.1] tracking-tight mb-4"
                speed={40}
                startDelay={200}
              />
            ) : (
              <h2 className="font-display text-[28px] md:text-[38px] font-bold text-dark leading-[1.1] tracking-tight mb-4">
                <span className="block invisible">Sempre il tecnico giusto.</span>
                <span className="block invisible">Nessuna improvvisazione.</span>
              </h2>
            )}
            <p className="text-secondary text-[15px] leading-relaxed mb-8 max-w-[480px]">
              Da caldaie a serrature, ogni problema ha il suo specialista. Nessuna attesa, nessun tecnico sbagliato, mai.
            </p>

            <div className="space-y-4 mb-8">
              {SERVICES.map((s) => (
                <div key={s.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center text-primary shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-[15px] font-bold text-dark mb-0.5">{s.title}</h3>
                    <p className="text-[13px] text-secondary leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw"
              className="inline-flex items-center justify-center bg-dark text-white font-semibold text-[14px] rounded-full px-7 py-3.5 transition-all duration-200 hover:bg-primary hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
            >
              Inizia ora
            </a>
          </div>

          {/* Right — app mockup */}
          <div className={`flex justify-center reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.15s" }}>
            <div className="relative w-[280px] md:w-[300px]">
              {/* Phone frame */}
              <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-black/15 border border-[#E5E5E5] p-3">
                <div className="bg-[#FAFAFA] rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 pt-3 pb-2">
                    <span className="text-[10px] font-semibold text-dark">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2.5 rounded-sm border border-dark/30" />
                    </div>
                  </div>

                  {/* App header */}
                  <div className="px-5 pb-4 border-b border-[#EFEFEF]">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                          <path d="M3 10.5L12 3l9 7.5" />
                          <path d="M5 9.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
                        </svg>
                      </div>
                      <span className="text-[13px] font-bold text-dark">Hommi</span>
                    </div>
                    <p className="text-[11px] text-secondary/60">I tuoi interventi</p>
                  </div>

                  {/* Ticket list */}
                  <div className="px-4 py-3 space-y-2.5">
                    {[
                      { title: "Caldaia guasta", addr: "Via Roma 12", status: "Risolto", sColor: "bg-green-500", time: "2h fa" },
                      { title: "Serratura bloccata", addr: "Corso Italia 8", status: "In corso", sColor: "bg-amber-500", time: "30 min fa" },
                      { title: "Perdita bagno", addr: "P.za Duomo 5", status: "Assegnato", sColor: "bg-blue-500", time: "5 min fa" },
                    ].map((t, i) => (
                      <div key={i} className="bg-white rounded-xl p-3 border border-[#F0F0F0]">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-[11px] font-semibold text-dark">{t.title}</p>
                          <span className="text-[8px] text-secondary/40">{t.time}</span>
                        </div>
                        <p className="text-[9px] text-secondary/50 mb-2">{t.addr}</p>
                        <div className="flex items-center gap-1.5">
                          <div className={`w-1.5 h-1.5 rounded-full ${t.sColor}`} />
                          <span className="text-[9px] font-medium text-secondary/60">{t.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom CTA */}
                  <div className="px-4 pb-4">
                    <div className="w-full py-2.5 bg-primary rounded-xl text-center text-[11px] font-semibold text-white">
                      + Nuovo ticket
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -top-3 -right-6 w-[170px] bg-white rounded-xl shadow-xl shadow-black/10 border border-[#EBEBEB] p-3 z-10">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-[9px] text-green-600 font-medium">Intervento completato</p>
                </div>
                <p className="text-[10px] text-dark font-medium">Caldaia riparata</p>
                <p className="text-[8px] text-secondary/40 mt-0.5">Report con foto disponibile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
