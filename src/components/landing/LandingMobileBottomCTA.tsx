


import { useEffect, useState, useCallback } from "react";

const CTA_URL =
"https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw";

const CONTEXTUAL_CTA: Record<string, {label: string;href: string;}> = {
  "come-funziona": { label: "Scopri i piani", href: "#prezzi" },
  servizi: { label: "Richiedi accesso prioritario", href: CTA_URL },
  prezzi: { label: "Richiedi accesso prioritario", href: CTA_URL },
  testimonianze: { label: "Richiedi accesso prioritario", href: CTA_URL },
  faq: { label: "Richiedi accesso prioritario", href: CTA_URL }
};

const DEFAULT_CTA = { label: "Richiedi accesso prioritario", href: CTA_URL };

export default function LandingMobileBottomCTA() {
  const [show, setShow] = useState(false);
  const [cta, setCta] = useState(DEFAULT_CTA);
  const [swapped, setSwapped] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const update = useCallback(() => {
    setShow(window.scrollY > window.innerHeight * 0.7);

    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    let best: {id: string;ratio: number;} = { id: "", ratio: 0 };

    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      const visibleTop = Math.max(0, rect.top);
      const visibleBottom = Math.min(window.innerHeight, rect.bottom);
      const visibleH = Math.max(0, visibleBottom - visibleTop);
      const ratio = visibleH / window.innerHeight;
      if (ratio > best.ratio) best = { id: sec.id, ratio };
    });

    if (best.id && CONTEXTUAL_CTA[best.id]) {
      setCta(CONTEXTUAL_CTA[best.id]);
    } else {
      const heroEnd = document.querySelector("#come-funziona")?.getBoundingClientRect().top ?? 999;
      if (heroEnd > window.innerHeight * 0.5) {
        setCta({ label: "Scopri come funziona", href: "#come-funziona" });
      } else {
        setCta(DEFAULT_CTA);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [update]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) setSwapped((prev) => !prev);
  }, []);

  const isInternal = cta.href.startsWith("#");

  const ctaButton = isInternal ?
  <a href={cta.href} className="flex-[4] flex items-center justify-center bg-primary text-white font-semibold text-[13px] rounded-[10px] py-2.5 shadow-md shadow-primary/15 hover:bg-primary-hover transition-colors duration-200 cursor-pointer">
      {cta.label}
    </a> :

  <a href={cta.href} className="flex-[4] flex items-center justify-center bg-primary text-white font-semibold text-[13px] rounded-[10px] py-2.5 shadow-md shadow-primary/15 hover:bg-primary-hover transition-colors duration-200 cursor-pointer">
      {cta.label}
    </a>;


  const scrollTopButton = (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="flex-[1] flex items-center justify-center bg-white border border-border text-secondary rounded-lg py-2.5 shadow-sm hover:bg-surface transition-colors duration-200 cursor-pointer"
      aria-label="Torna su"
    >
      <ArrowUp size={16} />
    </button>
  );













  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 transition-all duration-300 ${
      show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"}`
      }>
      
      <div ref={barRef} className="flex items-center gap-2 transition-all duration-300" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {swapped ? <>{scrollTopButton}{ctaButton}</> : <>{ctaButton}{scrollTopButton}</>}
      </div>
    </div>);

}