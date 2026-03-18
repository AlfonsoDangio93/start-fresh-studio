


import { useEffect, useRef, useState, useCallback } from "react";
import TypingHeading from "@/components/TypingHeading";

const CTA_URL =
  "https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw";

/* ─── Illustrated SVG icons ─── */

function PhoneClickIcon() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Phone body */}
      <rect x="22" y="10" width="34" height="58" rx="7" fill="#6B7280" />
      <rect x="22" y="10" width="34" height="58" rx="7" stroke="#4B5563" strokeWidth="1.5" />
      <rect x="26" y="18" width="26" height="40" rx="3" fill="#E5E7EB" />
      {/* Screen content lines */}
      <rect x="30" y="24" width="14" height="2" rx="1" fill="#D1D5DB" />
      <rect x="30" y="29" width="18" height="2" rx="1" fill="#D1D5DB" />
      <rect x="30" y="34" width="10" height="2" rx="1" fill="#D1D5DB" />
      {/* Home indicator */}
      <rect x="34" y="62" width="10" height="2" rx="1" fill="#9CA3AF" />
      {/* Cursor pointer */}
      <path d="M56 38L63 46L58.5 47L61 53L57.5 54.5L55 48.5L51.5 51.5L56 38Z" fill="#E35210" />
      {/* Click spark lines */}
      <line x1="65" y1="34" x2="70" y2="30" stroke="#E35210" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="68" y1="42" x2="74" y2="42" stroke="#E35210" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="65" y1="50" x2="70" y2="54" stroke="#E35210" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function ClockCheckIcon() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Clock face */}
      <circle cx="40" cy="44" r="28" fill="#E5E7EB" stroke="#6B7280" strokeWidth="3" />
      <circle cx="40" cy="44" r="24" fill="white" />
      {/* Hour marks */}
      <rect x="39" y="22" width="2" height="6" rx="1" fill="#9CA3AF" />
      <rect x="39" y="60" width="2" height="6" rx="1" fill="#9CA3AF" />
      <rect x="56" y="43" width="6" height="2" rx="1" fill="#9CA3AF" />
      <rect x="18" y="43" width="6" height="2" rx="1" fill="#9CA3AF" />
      {/* Clock hands */}
      <line x1="40" y1="44" x2="40" y2="30" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="44" x2="52" y2="44" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" />
      {/* Center dot */}
      <circle cx="40" cy="44" r="2.5" fill="#4B5563" />
      {/* Checkmark badge */}
      <circle cx="62" cy="24" r="13" fill="#E35210" />
      <path d="M56 24L60 28L69 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TechHouseIcon() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Person body */}
      <circle cx="32" cy="24" r="10" fill="#6B7280" />
      {/* Hard hat */}
      <path d="M22 22C22 16.5 26.5 12 32 12C37.5 12 42 16.5 42 22H22Z" fill="#FCD34D" />
      <rect x="20" y="21" width="24" height="3" rx="1.5" fill="#F59E0B" />
      {/* Shoulders/body */}
      <path d="M18 56C18 44 24 38 32 38C40 38 46 44 46 56" fill="#6B7280" />
      {/* Shirt collar */}
      <path d="M28 38L32 44L36 38" fill="#4B5563" />
      {/* House */}
      <path d="M58 42L72 32L86 42" fill="none" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="60" y="42" width="24" height="22" rx="2" fill="#E5E7EB" stroke="#6B7280" strokeWidth="1.5" />
      {/* Door */}
      <rect x="68" y="50" width="8" height="14" rx="1" fill="#D1D5DB" />
      <circle cx="74" cy="57" r="1" fill="#9CA3AF" />
      {/* Window */}
      <rect x="63" y="46" width="6" height="5" rx="1" fill="#BFDBFE" stroke="#6B7280" strokeWidth="0.8" />
      {/* Checkmark badge */}
      <circle cx="62" cy="24" r="13" fill="#E35210" />
      <path d="M56 24L60 28L69 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneReportIcon() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Phone body */}
      <rect x="22" y="10" width="38" height="62" rx="7" fill="#6B7280" />
      <rect x="22" y="10" width="38" height="62" rx="7" stroke="#4B5563" strokeWidth="1.5" />
      <rect x="26" y="18" width="30" height="44" rx="3" fill="#E5E7EB" />
      {/* Screen: photo placeholder */}
      <rect x="30" y="22" width="22" height="14" rx="2" fill="#D1D5DB" />
      {/* Mountain/image icon in photo */}
      <path d="M33 33L38 27L42 31L46 25L49 33H33Z" fill="#9CA3AF" />
      <circle cx="36" cy="26" r="2" fill="#9CA3AF" />
      {/* Dollar/cost line */}
      <rect x="30" y="40" width="10" height="2.5" rx="1" fill="#6B7280" />
      <rect x="42" y="40" width="10" height="2.5" rx="1" fill="#22C55E" />
      {/* Status bar */}
      <rect x="30" y="46" width="22" height="2" rx="1" fill="#D1D5DB" />
      <rect x="30" y="51" width="16" height="2" rx="1" fill="#D1D5DB" />
      <rect x="30" y="56" width="12" height="2" rx="1" fill="#D1D5DB" />
      {/* Home indicator */}
      <rect x="36" y="66" width="10" height="2" rx="1" fill="#9CA3AF" />
      {/* Checkmark badge */}
      <circle cx="64" cy="20" r="13" fill="#E35210" />
      <path d="M58 20L62 24L71 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const BENEFITS = [
  {
    visual: <PhoneClickIcon />,
    title: "Zero telefonate. Un solo click.",
    desc: "Segnala il guasto, noi lo gestiamo dall\u2019intervento alla supervisione alla chiusura. Tu ricevi solo il report finale.",
  },
  {
    visual: <ClockCheckIcon />,
    title: "Interveniamo entro 4 ore. Anche con ospiti in casa.",
    desc: "Evita recensioni negative e cancellazioni. Priorit\u00e0 garantita su ogni intervento.",
  },
  {
    visual: <TechHouseIcon />,
    title: "Tecnico dedicato per ogni immobile.",
    desc: "Lo stesso professionista, gi\u00e0 formato sul tuo appartamento. Niente imprevisti, niente sorprese.",
  },
  {
    visual: <PhoneReportIcon />,
    title: "Foto, costi e aggiornamenti in tempo reale.",
    desc: "Controlla tutto tramite la piattaforma. Approvazione solo quando necessario. Nessuna sorpresa, mai.",
  },
];

export default function FeatureShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [headerVis, setHeaderVis] = useState(false);
  const [cardVis, setCardVis] = useState<boolean[]>(new Array(BENEFITS.length).fill(false));
  const [ctaVis, setCtaVis] = useState(false);

  // Header: one-time reveal
  useEffect(() => {
    if (!headerRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHeaderVis(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  // Cards: reversible scroll-triggered on mobile, one-time on desktop
  const updateCardVisibility = useCallback(() => {
    const isMobile = window.innerWidth < 768;
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (isMobile) {
        const visible = rect.top < windowH * 0.85 && rect.bottom > windowH * 0.1;
        setCardVis((prev) => {
          if (prev[i] === visible) return prev;
          const next = [...prev];
          next[i] = visible;
          return next;
        });
      } else {
        if (rect.top < windowH * 0.85) {
          setCardVis((prev) => {
            if (prev[i]) return prev;
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }
      }
    });
  }, []);

  useEffect(() => {
    updateCardVisibility();
    window.addEventListener("scroll", updateCardVisibility, { passive: true });
    window.addEventListener("resize", updateCardVisibility);
    return () => {
      window.removeEventListener("scroll", updateCardVisibility);
      window.removeEventListener("resize", updateCardVisibility);
    };
  }, [updateCardVisibility]);

  // CTA: one-time reveal
  useEffect(() => {
    if (!ctaRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setCtaVis(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(ctaRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28">
      <div className="max-w-site mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 reveal ${headerVis ? "revealed" : ""}`}>
          {headerVis ? (
            <TypingHeading
              lines={["Dimentica lo stress degli imprevisti.", "Affidati a Hommi."]}
              className="font-display text-[28px] md:text-[40px] lg:text-[46px] font-bold text-dark leading-[1.08] tracking-tight"
              speed={40}
              startDelay={200}
            />
          ) : (
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[46px] font-bold text-dark leading-[1.08] tracking-tight">
              <span className="block invisible">Dimentica lo stress degli imprevisti.</span>
              <span className="block invisible">Affidati a Hommi.</span>
            </h2>
          )}
          <p className="mt-5 text-secondary text-[15px] md:text-[17px] mx-auto leading-relaxed whitespace-nowrap">
            Gestione della casa senza stress: un click, un tecnico, zero complicazioni.
          </p>
        </div>

        {/* 4 benefit columns — like the old design */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-[1100px] mx-auto mb-14">
          {BENEFITS.map((b, i) => (
            <div
              key={b.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="text-center transition-all duration-500 ease-out"
              style={{
                opacity: cardVis[i] ? 1 : 0,
                transform: cardVis[i] ? "translateY(0)" : "translateY(32px)",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              {/* Illustrated icon */}
              <div className="flex justify-center mb-5">
                {b.visual}
              </div>
              <h3 className="font-display text-[16px] md:text-[18px] font-bold text-dark leading-snug mb-3">
                {b.title}
              </h3>
              <p className="text-[13px] md:text-[14px] text-secondary leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className={`text-center reveal ${ctaVis ? "revealed" : ""}`}>
          <a
            href={CTA_URL}
            className="inline-flex items-center justify-center bg-primary text-white font-semibold text-[14px] rounded-xl px-7 py-3.5 transition-all duration-200 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
          >
            Richiedi accesso prioritario
          </a>
        </div>
      </div>
    </section>
  );
}
