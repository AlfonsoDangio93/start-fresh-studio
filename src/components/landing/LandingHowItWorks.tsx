"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import TypingHeading from "@/components/TypingHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CTA_URL =
  "https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw";

const FEATURES = [
  {
    title: "Tecnico dedicato, davvero.",
    desc: "Ogni proprietà ha sempre lo stesso professionista assegnato. Se è assente, subentra un backup che conosce già l\u2019immobile.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=680&h=440&fit=crop&crop=center",
    alt: "Tecnico professionista dedicato all'immobile",
  },
  {
    title: "Ogni casa ha il suo manuale tecnico.",
    desc: "Creiamo un profilo dettagliato con sopralluogo iniziale e mappatura degli impianti. Quando c\u2019è un problema, non si parte mai da zero.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=680&h=440&fit=crop&crop=center",
    alt: "Interno di un appartamento moderno mappato e ispezionato",
  },
  {
    title: "Apri un ticket in 10 secondi.",
    desc: "Scegli la proprietà, scrivi due righe, aggiungi una foto. Fatto. Nessuna telefonata, nessun follow-up.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=680&h=440&fit=crop&crop=center",
    alt: "Mano che usa lo smartphone per segnalare un guasto",
  },
  {
    title: "Gestiamo noi l\u2019accesso.",
    desc: "Contattiamo ospiti o referenti per entrare nell\u2019immobile. Tu puoi restare offline.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=680&h=440&fit=crop&crop=center",
    alt: "Mano con chiavi davanti alla porta di un appartamento",
  },
  {
    title: "Risolviamo in giornata.",
    desc: "Il tecnico arriva entro 4 ore. Se serve uno specialista, ricevi un preventivo via app prima di approvare.",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=680&h=440&fit=crop&crop=center",
    alt: "Idraulico che ripara un lavandino in cucina",
  },
  {
    title: "Controllo totale, senza muovere un dito.",
    desc: "Foto, stato lavori, costi e tempi: tutto tracciato. Ricevi conferma finale e report. Fine.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=680&h=440&fit=crop&crop=center",
    alt: "Persona rilassata che controlla il report sul telefono",
  },
];

export default function LandingHowItWorks() {
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
      behavior: "smooth",
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
        <div className={`text-center mb-14 reveal ${vis ? "revealed" : ""}`}>
          <span className="inline-block text-[12px] font-semibold text-primary uppercase tracking-[0.15em] mb-3">
            Come funziona
          </span>
          {vis ? (
            <TypingHeading
              lines={["La gestione di 10 appartamenti.", "Con la semplicità di 1."]}
              className="font-display text-[28px] md:text-[40px] lg:text-[46px] font-bold text-dark leading-[1.08] tracking-tight"
              speed={40}
              startDelay={200}
            />
          ) : (
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[46px] font-bold text-dark leading-[1.08] tracking-tight">
              <span className="block invisible">La gestione di 10 appartamenti.</span>
              <span className="block invisible">Con la semplicità di 1.</span>
            </h2>
          )}
        </div>

        <div
          className={`relative mb-12 reveal ${vis ? "revealed" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <button
            onClick={() => scroll("left")}
            className={`hidden md:flex absolute -left-5 top-[110px] z-10 w-10 h-10 rounded-full bg-white border border-border shadow-md items-center justify-center transition-opacity duration-200 ${
              canScrollLeft ? "opacity-100 hover:border-primary/30" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scorri a sinistra"
          >
            <ChevronLeft size={18} className="text-dark" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`hidden md:flex absolute -right-5 top-[110px] z-10 w-10 h-10 rounded-full bg-white border border-border shadow-md items-center justify-center transition-opacity duration-200 ${
              canScrollRight ? "opacity-100 hover:border-primary/30" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scorri a destra"
          >
            <ChevronRight size={18} className="text-dark" />
          </button>

          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 -mx-6 px-6 md:-mx-10 md:px-10"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  data-card
                  className="flex-shrink-0 w-[280px] md:w-[340px] snap-center md:snap-start"
                >
                  <div className="h-[200px] md:h-[220px] rounded-2xl overflow-hidden mb-5">
                    <img
                      src={f.image}
                      alt={f.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-[16px] md:text-[18px] font-bold text-dark leading-snug mb-2">
                    {f.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-secondary leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex md:hidden justify-center gap-2 mt-6">
            {FEATURES.map((f, i) => (
              <button
                key={f.title}
                onClick={() => scrollToIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-border hover:bg-secondary/30"
                }`}
                aria-label={`Vai a ${f.title}`}
              />
            ))}
          </div>
        </div>

        <div
          className={`text-center reveal ${vis ? "revealed" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <Link
            href={CTA_URL}
            className="inline-flex items-center justify-center bg-primary text-white font-semibold text-[14px] rounded-xl px-7 py-3.5 transition-all duration-200 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
          >
            Richiedi accesso prioritario
          </Link>
        </div>
      </div>
    </section>
  );
}
