


import { ArrowRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TypingHeading from "@/components/TypingHeading";
import AnimatedSteps from "@/components/AnimatedSteps";

/* ─── How-it-works steps ─── */
const STEPS = [
{
  num: "01",
  title: "Collegati alla dashboard",
  desc: "Accedi da browser o app. Tutti i tuoi alloggi, ticket e tecnici in un\u2019unica schermata.",
  icon:
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F16B01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>

},
{
  num: "02",
  title: "Monitora in tempo reale",
  desc: "Ticket aperti, in corso, risolti. Filtra per alloggio, tecnico o priorit\u00E0. Trovi tutto in due click.",
  icon:
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F16B01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 4-6" />
      </svg>

},
{
  num: "03",
  title: "Esporta e condividi",
  desc: "Genera report PDF o CSV con costi, tempi e interventi. Pronti da inviare ai proprietari.",
  icon:
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F16B01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>

}];


/* ─── Benefits ─── */
const BENEFITS = [
{
  title: "Vista panoramica",
  desc: "Tutti i tuoi alloggi in una schermata. Ticket aperti, costi, tempi di risposta a colpo d\u2019occhio.",
  icon:
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>

},
{
  title: "Filtri avanzati",
  desc: "Cerca per alloggio, tecnico, priorit\u00E0 o stato. Trovi quello che cerchi in due click.",
  icon:
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>

},
{
  title: "Aggiornamenti live",
  desc: "Ogni cambio di stato si aggiorna in tempo reale. Sai sempre a che punto \u00E8 ogni intervento.",
  icon:
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>

},
{
  title: "Report PDF automatici",
  desc: "Genera report mensili con costi e interventi per alloggio. Rendicontazione trasparente, zero fatica.",
  icon:
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>

},
{
  title: "KPI e analytics",
  desc: "Tempo medio di risoluzione, costo per intervento, efficienza mensile. Dati veri per decisioni migliori.",
  icon:
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>

},
{
  title: "Multi-propriet\u00E0",
  desc: "5 o 500 alloggi, stessa piattaforma. Gestisci tutto da remoto, ovunque tu sia.",
  icon:
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10.5L12 3l9 7.5" />
        <path d="M5 9.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
        <path d="M9 20v-6h6v6" />
      </svg>

}];


const CTA_URL =
"https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw";

/* ─── Dashboard mockup (browser-style) ─── */
function DashboardMockup() {
  return (
    <div className="relative">
      <div className="relative w-[320px] md:w-[360px] bg-white rounded-xl shadow-2xl shadow-black/15 border border-[#E5E5E5] overflow-hidden mx-auto">
        {/* Browser bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-[#FAFAFA] border-b border-[#EFEFEF]">
          <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
          <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
          <div className="w-2 h-2 rounded-full bg-[#28C840]" />
          <div className="ml-2 flex-1 bg-white rounded px-2 py-0.5 text-[8px] text-secondary/30 border border-[#EFEFEF]">app.hommi.it/dashboard</div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[12px] font-semibold text-dark">Panoramica</p>
              <p className="text-[9px] text-secondary/40">Ultimo aggiornamento: 2 min fa</p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
            { label: "Aperti", val: "12", color: "text-primary" },
            { label: "In corso", val: "5", color: "text-amber-500" },
            { label: "Risolti", val: "28", color: "text-green-600" }].
            map((s) =>
            <div key={s.label} className="bg-[#FAFAFA] rounded-lg p-2 border border-[#F0F0F0] text-center">
                <p className="text-[7px] text-secondary/40 uppercase tracking-wider font-medium mb-0.5">{s.label}</p>
                <p className={`text-[16px] font-bold leading-none ${s.color}`}>{s.val}</p>
              </div>
            )}
          </div>

          {/* Mini chart */}
          <div className="mb-3">
            <p className="text-[8px] font-semibold text-secondary/40 uppercase tracking-wider mb-2">Ticket settimanali</p>
            <div className="flex items-end gap-1.5 h-[50px]">
              {[40, 65, 35, 80, 55, 70, 45].map((h, i) =>
              <div key={i} className="flex-1 rounded-t bg-primary/15 relative" style={{ height: `${h}%` }}>
                  <div className="absolute bottom-0 left-0 right-0 rounded-t bg-primary" style={{ height: "55%" }} />
                </div>
              )}
            </div>
            <div className="flex justify-between mt-1 text-[7px] text-secondary/30">
              <span>Lun</span><span>Mar</span><span>Mer</span><span>Gio</span><span>Ven</span><span>Sab</span><span>Dom</span>
            </div>
          </div>

          {/* Recent activity */}
          <div>
            <p className="text-[8px] font-semibold text-secondary/40 uppercase tracking-wider mb-2">Attivit&agrave; recenti</p>
            <div className="space-y-0">
              {[
              { text: "Ticket #142 risolto", time: "5 min fa", dot: "bg-green-500" },
              { text: "Nuovo: Serratura rotta", time: "12 min fa", dot: "bg-primary" },
              { text: "Tecnico assegnato #139", time: "30 min fa", dot: "bg-blue-500" }].
              map((a, i) =>
              <div key={i} className="flex items-start gap-2 py-1.5 border-b border-[#F5F5F5] last:border-0">
                  <div className={`w-1.5 h-1.5 rounded-full ${a.dot} mt-1 shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] text-dark truncate">{a.text}</p>
                    <p className="text-[7px] text-secondary/30">{a.time}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification */}
      <div className="absolute -bottom-4 -left-8 md:-left-12 w-[190px] bg-white rounded-xl shadow-xl shadow-black/10 border border-[#EBEBEB] p-3.5 z-10">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <p className="text-[10px] font-semibold text-dark">Report pronto</p>
        </div>
        <div className="space-y-2 text-[9px]">
          <div>
            <p className="text-secondary/40">Efficienza</p>
            <p className="text-dark font-medium">+12% vs mese scorso</p>
          </div>
          <div>
            <p className="text-secondary/40">Costo medio</p>
            <p className="text-dark font-medium">&euro;85 per intervento</p>
          </div>
        </div>
      </div>
    </div>);

}

/* ─── Checkmark icon ─── */
function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
      <Check className="w-3 h-3 text-primary" strokeWidth={3} />
    </div>);

}

/* ─── Main Section ─── */
export default function DashboardSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {if (e.isIntersecting) {setVis(true);obs.disconnect();}},
      { threshold: 0.05 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="pt-32 md:pt-40">
      {/* ─── Header ─── */}
      <div className="max-w-site mx-auto px-6 text-center mb-16">
        <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-[0.12em] mb-5">
          Dashboard
        </span>
        <TypingHeading lines={["Tutti i tuoi alloggi.", "Un colpo d'occhio."]} />
        <p className="mt-5 text-secondary text-[16px] md:text-[18px] max-w-[560px] mx-auto leading-relaxed">
          Ticket aperti, costi, tempi di risposta: tutto in una schermata.
          Basta fogli Excel e gruppi WhatsApp.
        </p>
      </div>

      {/* ─── Hero feature: mockup + bullets ─── */}
      <div className="max-w-site mx-auto px-6 mb-24 md:mb-32">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center reveal ${vis ? "revealed" : ""}`}>
          {/* Mockup */}
          <div className="flex justify-center">
            <DashboardMockup />
          </div>

          {/* Copy */}
          <div>
            <h2 className="font-display text-[26px] md:text-[34px] font-bold text-dark leading-[1.15] tracking-tight mb-6">
              La tua centrale operativa.
              <br className="hidden md:block" />
              Sempre aggiornata, ovunque tu sia.
            </h2>

            <div className="space-y-4 mb-8">
              {[
              "Ticket aperti, costi, tempi di risposta: tutto in una schermata. Basta fogli Excel e gruppi WhatsApp.",
              "Filtra per alloggio, tecnico o priorit\u00E0. Trovi quello che cerchi in due click.",
              "Esporta report in PDF per i proprietari. Rendicontazione trasparente, zero fatica."].
              map((b, j) =>
              <div key={j} className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="text-[14px] md:text-[15px] text-secondary leading-relaxed">{b}</p>
                </div>
              )}
            </div>

            <a
              href={CTA_URL}
              className="inline-flex items-center justify-center bg-primary text-white font-semibold text-[14px] rounded-xl px-7 py-3 transition-all duration-200 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
              
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
            Tre passaggi. Dal caos al controllo totale.
          </p>
        </div>

        <AnimatedSteps steps={STEPS} />
      </div>

      {/* ─── Vantaggi ─── */}
      <div className="bg-surface py-20 md:py-28">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-[26px] md:text-[34px] font-bold text-dark leading-[1.1] tracking-tight">
              Tutto quello che serve per avere il controllo
            </h2>
            <p className="mt-3 text-secondary text-[15px] md:text-[16px]">
              Una dashboard pensata per chi gestisce pi&ugrave; immobili.
            </p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.15s" }}>
            {BENEFITS.map((b, i) =>
            <div
              key={b.title}
              className="group flex items-start gap-4"
              style={{ transitionDelay: `${i * 0.04}s` }}>
              
                <div className="w-[52px] h-[52px] rounded-2xl bg-white border border-border flex items-center justify-center text-dark shrink-0 transition-colors duration-200 group-hover:bg-primary group-hover:text-white group-hover:border-primary [&_svg]:transition-colors [&_svg]:duration-200 group-hover:[&_svg]:stroke-white">
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-display text-[15px] font-bold text-dark mb-1">{b.title}</h3>
                  <p className="text-[13px] text-secondary leading-relaxed">{b.desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ─── CTA finale ─── */}
      <div className="max-w-site mx-auto px-6 my-0 py-[31px]">
        <div className="relative rounded-[10px] overflow-hidden px-8 py-20 md:px-16 md:py-24 text-center">
          <img
            src="https://images.unsplash.com/photo-1622266234556-faab3e09f67b?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-dark/75" aria-hidden="true" />

          <div className="relative z-10">
            <h2 className="font-display text-[26px] md:text-[40px] font-bold text-white leading-[1.1] tracking-tight">
              Basta fogli Excel e gruppi WhatsApp.
              <br />
              Passa ad Hommi.
            </h2>
            <p className="mt-5 text-white/60 text-[15px] md:text-[17px] max-w-[460px] mx-auto leading-relaxed">
              Unisciti ai property manager che hanno già scelto Hommi.



            </p>
            <div className="mt-8">
              <a href={CTA_URL} className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-semibold text-[15px] rounded-[10px] px-8 py-3.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/30 cursor-pointer">
                
                Richiedi accesso prioritario
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>);

}