


import { useEffect, useRef, useState, useCallback } from "react";
import TypingHeading from "@/components/TypingHeading";
import {
  UserCheck,
  BookOpen,
  Timer,

  Zap,
  Eye,
  ChevronLeft,
  ChevronRight } from
"lucide-react";

const CTA_URL =
"https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw";

const FEATURES = [
{
  icon: UserCheck,
  title: "Tecnico dedicato, davvero.",
  desc: "Ogni proprietà ha sempre lo stesso professionista assegnato. Se è assente, subentra un backup che conosce già l\u2019immobile.",
  visual: "technician"
},
{
  icon: BookOpen,
  title: "Ogni casa ha il suo manuale tecnico.",
  desc: "Creiamo un profilo dettagliato con sopralluogo iniziale e mappatura degli impianti. Quando c’è un problema, non si parte mai da zero.",
  visual: "dashboard"
},
{
  icon: Timer,
  title: "Apri un ticket tramite whatsapp.",
  desc: "Scegli la proprietà, scrivi due righe, aggiungi una foto. Fatto. Nessuna telefonata, nessun follow-up.",
  visual: "ticket"
},
{
  icon: Zap,
  title: "Risolviamo in giornata.",
  desc: "Il tecnico arriva entro 4 ore. Se serve uno specialista, ricevi un preventivo prima di approvare.",
  visual: "speed"
},
{
  icon: Eye,
  title: "Controllo totale, senza muovere un dito.",
  desc: "Foto, stato lavori, costi e tempi: tutto tracciato. Ricevi conferma finale e report. Fine.",
  visual: "control"
}];


/* ── Mini CSS-only mockup illustrations ── */

function TechnicianVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
          <UserCheck size={32} className="text-primary" />
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">&#10003;</span>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex gap-2 justify-center">
        {["App. Milano 1", "App. Roma 3", "App. Torino"].map((name) =>
        <div
          key={name}
          className="bg-white/80 backdrop-blur-sm rounded-lg px-2.5 py-1.5 text-[9px] font-medium text-dark shadow-sm border border-white/50">
          
            {name}
          </div>
        )}
      </div>
    </div>);

}

function DashboardVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg border border-border/60 w-full max-w-[220px] overflow-hidden">
        <div className="bg-primary/10 px-3 py-2 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-[10px] font-semibold text-dark">Dashboard Tecnica</span>
        </div>
        <div className="p-3 space-y-2">
          <div className="text-[9px] font-semibold text-dark uppercase tracking-wide">Tutto ok</div>
          <div className="bg-surface rounded-lg p-2 space-y-1.5">
            {[
            { label: "Impianto idraulico", ok: true },
            { label: "Impianto elettrico", ok: true },
            { label: "Caldaia", ok: true }].
            map((item) =>
            <div key={item.label} className="flex items-center justify-between">
                <span className="text-[8px] text-secondary">{item.label}</span>
                <div className="w-3.5 h-3.5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-[7px]">&#10003;</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>);

}

function TicketVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-2">
      <div className="bg-[#F0F0F0] rounded-xl shadow-lg w-full max-w-[230px] overflow-hidden">
        {/* Chat */}
        <div className="px-3 py-3 space-y-2">
          {/* User message */}
          <div className="bg-white rounded-tr-none px-3 py-2 max-w-[88%] ml-auto shadow-sm rounded">
            <p className="text-[9px] text-dark leading-relaxed">Lavandino intasato in Appartamento Milano 2 🔧</p>
            <span className="text-[6px] text-secondary/40 block text-right mt-0.5">10:02 ✓✓</span>
          </div>
          {/* Bot reply */}
          <div className="bg-primary/10 rounded-tl-none px-3 py-2 max-w-[88%] shadow-sm rounded">
            <p className="text-[9px] text-dark leading-relaxed">Ticket aperto ✅ Marco arriva entro le 14:00!</p>
            <span className="text-[6px] text-secondary/40 block text-right mt-0.5">10:03</span>
          </div>
          {/* Typing indicator */}
          



          
        </div>
      </div>
    </div>);

}


function SpeedVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-20 h-20">
        <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
          <circle cx="40" cy="40" r="35" fill="none" stroke="#F7F7F7" strokeWidth="4" />
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="none"
            stroke="#F16B01"
            strokeWidth="4"
            strokeDasharray="220"
            strokeDashoffset="55"
            strokeLinecap="round" />
          
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[18px] font-bold text-dark leading-none">4h</span>
          <span className="text-[8px] text-secondary mt-0.5">max</span>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex justify-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm border border-white/50 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-[9px] font-medium text-dark">Tecnico in arrivo</span>
        </div>
      </div>
    </div>);

}

function ControlVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg border border-border/60 w-full max-w-[200px] overflow-hidden">
        <div className="px-3 pt-3 pb-1">
          <span className="text-[10px] font-bold text-dark">Report intervento</span>
        </div>
        <div className="px-3 pb-3 space-y-1.5">
          {[
          { label: "Foto prima", status: "\u2713" },
          { label: "Intervento", status: "\u2713" },
          { label: "Foto dopo", status: "\u2713" },
          { label: "Costo finale", status: "\u20AC85" }].
          map((item) =>
          <div
            key={item.label}
            className="flex items-center justify-between bg-surface rounded-lg px-2.5 py-1.5">
            
              <span className="text-[8px] text-secondary">{item.label}</span>
              <span className="text-[8px] font-semibold text-primary">{item.status}</span>
            </div>
          )}
        </div>
      </div>
    </div>);

}

const VISUAL_MAP: Record<string, React.FC> = {
  technician: TechnicianVisual,
  dashboard: DashboardVisual,
  ticket: TicketVisual,

  speed: SpeedVisual,
  control: ControlVisual
};

export default function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    // Track active card index
    const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 10;
    if (atEnd) {
      setActiveIndex(FEATURES.length - 1);
    } else {
      const card = el.querySelector<HTMLElement>("[data-card]");
      if (card) {
        const cardW = card.offsetWidth + 24;
        const idx = Math.round(el.scrollLeft / cardW);
        setActiveIndex(Math.min(idx, FEATURES.length - 1));
      }
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 340;
    el.scrollBy({
      left: dir === "right" ? cardWidth + 24 : -(cardWidth + 24),
      behavior: "smooth"
    });
  };

  const scrollToIndex = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const cardW = card.offsetWidth + 24;
    el.scrollTo({ left: cardW * idx, behavior: "smooth" });
  };

  return (
    <section id="come-funziona" className="py-20 md:py-28 bg-white rounded-[10px]" ref={ref}>
      <div className="max-w-site mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-14 reveal ${vis ? "revealed" : ""}`}>
          <span className="inline-block text-[12px] font-semibold text-primary uppercase tracking-[0.15em] mb-3">
            Come funziona
          </span>
          {vis ?
          <TypingHeading
            lines={["La gestione di 10 appartamenti.", "Con la semplicità di 1."]}
            className="font-display text-[28px] md:text-[40px] lg:text-[46px] font-bold text-dark leading-[1.08] tracking-tight"
            speed={40}
            startDelay={200} /> :


          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[46px] font-bold text-dark leading-[1.08] tracking-tight">
              <span className="block invisible">La gestione di 10 appartamenti.</span>
              <span className="block invisible">Con la semplicità di 1.</span>
            </h2>
          }
        </div>

        {/* Carousel */}
        <div
          className={`relative mb-12 reveal ${vis ? "revealed" : ""}`}
          style={{ transitionDelay: "0.1s" }}>
          
          {/* Nav arrows */}
          {canScrollLeft &&
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-5 top-[110px] z-10 w-10 h-10 rounded-full bg-white border border-border shadow-md items-center justify-center hover:border-primary/30"
            aria-label="Scorri a sinistra">
            
              <ChevronLeft size={18} className="text-dark" />
            </button>
          }
          {canScrollRight &&
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-5 top-[110px] z-10 w-10 h-10 rounded-full bg-white border border-border shadow-md items-center justify-center hover:border-primary/30"
            aria-label="Scorri a destra">
            
              <ChevronRight size={18} className="text-dark" />
            </button>
          }

          {/* Scrollable row + fade hint */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              
              {/* scrollbar hidden via inline style above */}
              {FEATURES.map((f) => {
                const Visual = VISUAL_MAP[f.visual];
                return (
                  <div
                    key={f.title}
                    data-card
                    className="flex-shrink-0 w-[280px] md:w-[340px] snap-center md:snap-start">
                    
                    {/* Visual area */}
                    <div className="h-[200px] md:h-[220px] bg-surface rounded-2xl border border-border/60 mb-5 overflow-hidden">
                      <Visual />
                    </div>
                    {/* Text */}
                    <h3 className="font-display text-[16px] md:text-[18px] font-bold text-dark leading-snug mb-2">
                      {f.title}
                    </h3>
                    <p className="text-[13px] md:text-[14px] text-secondary leading-relaxed">
                      {f.desc}
                    </p>
                  </div>);

              })}
            </div>

          </div>

          {/* Dot indicators (mobile only) */}
          <div className="flex md:hidden justify-center gap-2 mt-6">
            {FEATURES.map((f, i) =>
            <button
              key={f.title}
              onClick={() => scrollToIndex(i)}
              className={`rounded-full transition-all duration-300 ${
              i === activeIndex ?
              "w-6 h-2 bg-primary" :
              "w-2 h-2 bg-border hover:bg-secondary/30"}`
              }
              aria-label={`Vai a ${f.title}`} />

            )}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center reveal ${vis ? "revealed" : ""}`}
          style={{ transitionDelay: "0.2s" }}>
          
          <a
            href={CTA_URL}
            className="inline-flex items-center justify-center bg-primary text-white font-semibold text-[14px] rounded-xl px-7 py-3.5 transition-all duration-200 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
            
            Richiedi accesso prioritario
          </a>
        </div>
      </div>
    </section>);

}