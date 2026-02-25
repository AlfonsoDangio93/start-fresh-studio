"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, User } from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Prodotto",
    comingSoon: false,
    megamenu: {
      columns: [
        {
          title: "Funzionalità",
          links: [
            { name: "Ticketing guasti", desc: "Gestisci segnalazioni e interventi in un unico posto", href: "/ticketing-guasti", comingSoon: false },
            { name: "Dashboard real-time", desc: "Monitora lo stato di tutti i tuoi alloggi", href: "/dashboard-realtime", comingSoon: false },
            { name: "Gestione tecnici", desc: "Assegna e traccia i tecnici sul campo", href: "/gestione-tecnici", comingSoon: false },
            { name: "Report e analytics", desc: "Dati e insight per ottimizzare la manutenzione", href: "/report-analytics", comingSoon: false },
          ],
        },
        {
          title: "Soluzioni",
          links: [
            { name: "Per property manager", desc: "Gestisci decine di alloggi senza stress", href: "/per-property-manager", comingSoon: false },
            { name: "Per agenzie", desc: "Scala le operazioni di manutenzione", href: "/per-agenzie", comingSoon: false },
            { name: "Per host professionali", desc: "Automatizza la gestione degli imprevisti", href: "/per-host-professionali", comingSoon: false },
          ],
        },
      ],
    },
  },
  {
    label: "Risorse",
    comingSoon: true,
    megamenu: {
      columns: [
        {
          title: "Impara",
          links: [
            { name: "Blog", desc: "Guide e best practice per la gestione immobiliare", href: "#", comingSoon: false },
            { name: "Centro assistenza", desc: "Documentazione e tutorial passo-passo", href: "#", comingSoon: false },
            { name: "Webinar", desc: "Sessioni live con esperti del settore", href: "#", comingSoon: false },
          ],
        },
        {
          title: "Community",
          links: [
            { name: "Storie di successo", desc: "Come i nostri clienti usano Hommi", href: "#", comingSoon: true },
            { name: "Partner", desc: "Entra nel programma partner Hommi", href: "#", comingSoon: true },
          ],
        },
      ],
    },
  },
  {
    label: "Prezzi",
    comingSoon: false,
    href: "/prezzi",
  },
  {
    label: "FAQ",
    comingSoon: false,
    href: "/faq",
  },
];

const LOGOS = ["/logos/logo1.png", "/logos/logo2.png"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [merged, setMerged] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(null);
  const [logoIdx, setLogoIdx] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);

  // Alternate logo on each page load, persist with localStorage
  useEffect(() => {
    const stored = localStorage.getItem("hommi-logo-idx");
    const next = stored === "1" ? 0 : 1;
    setLogoIdx(next);
    localStorage.setItem("hommi-logo-idx", String(next));
  }, []);

  const toggleLogo = () => {
    setLogoIdx((prev) => {
      const next = prev === 0 ? 1 : 0;
      localStorage.setItem("hommi-logo-idx", String(next));
      return next;
    });
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setMobileAccordion(null);
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Scroll detection — merge after hero, split again on dark sections
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const heroEl = document.querySelector("section");
        const heroEnd = heroEl ? heroEl.offsetTop + heroEl.offsetHeight - 100 : 500;
        const darkEl = document.getElementById("come-funziona");
        const scrollY = window.scrollY;

        if (scrollY <= heroEnd) {
          // Still in hero — split
          setMerged(false);
        } else if (darkEl) {
          const darkTop = darkEl.offsetTop - 80;
          const darkBottom = darkEl.offsetTop + darkEl.offsetHeight - 80;
          if (scrollY >= darkTop && scrollY <= darkBottom) {
            // Inside dark section — split
            setMerged(false);
          } else {
            setMerged(true);
          }
        } else {
          setMerged(true);
        }

        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <nav className="fixed top-4 left-6 right-6 z-50 flex justify-center" role="navigation" aria-label="Navigazione principale">
      {/* ─── Mobile navbar ─── */}
      <div className="md:hidden flex items-center justify-between bg-white/90 backdrop-blur-md border border-border shadow-sm rounded-xl px-4 py-3 w-full z-[60]">
        <button
          className="p-1.5 text-secondary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <button onClick={toggleLogo} className="absolute left-1/2 -translate-x-1/2 cursor-pointer" aria-label="Cambia logo Hommi">
          <img src={LOGOS[logoIdx]} alt="Hommi" className="h-9 w-auto" />
        </button>

        <Link href="#" className="p-1.5 text-secondary hover:text-dark transition-colors duration-200 cursor-pointer" aria-label="Accedi">
          <User size={18} />
        </Link>
      </div>

      {/* ─── Desktop pill system ─── */}
      <div ref={navRef} className="hidden md:flex items-stretch max-w-site w-full relative z-[60]">
        {/* Outer spacer left — expands when merged to push pills to center */}
        <div className={`nav-spacer-outer ${merged ? "" : "nav-spacer-outer-hidden"}`} />

        {/* ─── Left pill ─── */}
        <div
          className={`
            relative flex items-center bg-white/90 backdrop-blur-md border border-border shadow-sm px-5 py-3
            nav-pill transition-all duration-500 ease-out
            ${merged ? "rounded-l-xl rounded-r-none nav-merged-left" : "rounded-xl"}
          `}
        >
          <button onClick={toggleLogo} className="flex items-center cursor-pointer shrink-0" aria-label="Cambia logo Hommi">
            <img src={LOGOS[logoIdx]} alt="Hommi" className="h-10 w-auto" />
          </button>

          <div className="flex items-center gap-8 ml-10 text-[13px] font-medium">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.megamenu && handleEnter(item.label)}
                onMouseLeave={handleLeave}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="nav-link nav-link-light flex items-center gap-1"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className="nav-link nav-link-light flex items-center gap-1"
                    onClick={() => setActiveMenu(activeMenu === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${activeMenu === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* ─── Mega menu dropdown ─── */}
          {NAV_ITEMS.map((item) =>
            item.megamenu && activeMenu === item.label ? (
              <div
                key={item.label}
                className={`absolute top-full left-0 mt-2 bg-white rounded-xl border border-border shadow-xl p-5 min-w-[480px] z-50 ${item.comingSoon ? "cursor-none" : ""}`}
                onMouseEnter={() => handleEnter(item.label)}
                onMouseLeave={() => { handleLeave(); if (item.comingSoon) setCursorPos(null); }}
                onMouseMove={item.comingSoon ? (e) => setCursorPos({ x: e.clientX, y: e.clientY }) : undefined}
              >
                <div className={`grid gap-8 ${item.megamenu.columns.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                  {item.megamenu.columns.map((col) => (
                    <div key={col.title}>
                      <p className="text-[11px] font-semibold text-secondary/40 uppercase tracking-wider mb-3">{col.title}</p>
                      <div className="space-y-1">
                        {col.links.map((link) =>
                          item.comingSoon ? (
                            <div
                              key={link.name}
                              className="block px-3 py-2.5 rounded-lg cursor-none"
                            >
                              <p className="text-[13px] font-medium text-dark">{link.name}</p>
                              <p className="text-[12px] text-secondary/50 mt-0.5 leading-relaxed">{link.desc}</p>
                            </div>
                          ) : (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="block px-3 py-2.5 rounded-lg hover:bg-surface transition-colors duration-150 cursor-pointer group"
                              onClick={() => setActiveMenu(null)}
                            >
                              <p className="text-[13px] font-medium text-dark group-hover:text-primary transition-colors duration-150">{link.name}</p>
                              <p className="text-[12px] text-secondary/50 mt-0.5 leading-relaxed">{link.desc}</p>
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>

        {/* Middle spacer — collapses to merge */}
        <div className={`nav-spacer ${merged ? "nav-spacer-collapsed" : ""}`} />

        {/* ─── Right pill ─── */}
        <div
          className={`
            flex items-center gap-2 bg-white/90 backdrop-blur-md border border-border shadow-sm px-5 py-3
            nav-pill transition-all duration-500 ease-out
            ${merged ? "rounded-r-xl rounded-l-none nav-merged-right" : "rounded-xl"}
          `}
        >
          <Link href="#" className="text-[13px] font-bold text-secondary hover:text-dark transition-colors duration-200 px-3 py-1.5 cursor-pointer">
            Accedi
          </Link>
          <Link href="https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw" className="nav-cta-primary">
            Richiedi accesso
          </Link>
        </div>

        {/* Outer spacer right — expands when merged to push pills to center */}
        <div className={`hidden md:block nav-spacer-outer ${merged ? "" : "nav-spacer-outer-hidden"}`} />
      </div>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-dark/60 backdrop-blur-sm z-40"
            onClick={() => setMobileOpen(false)}
          />
          {/* Panel */}
          <div className="md:hidden fixed top-[80px] left-6 right-6 z-50 bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[calc(100vh-100px)] overflow-y-auto">
            <div className="p-2">
              {NAV_ITEMS.map((item) =>
                item.megamenu ? (
                  <div key={item.label}>
                    {item.comingSoon ? (
                      <div
                        className="w-full flex items-center justify-between text-[15px] text-dark font-semibold py-3.5 px-4 rounded-xl cursor-not-allowed"
                      >
                        {item.label}
                        <ChevronDown size={14} className="text-secondary/40" />
                      </div>
                    ) : (
                    <button
                      className="w-full flex items-center justify-between text-[15px] text-dark font-semibold py-3.5 px-4 rounded-xl hover:bg-surface/80 transition-colors duration-200 cursor-pointer"
                      onClick={() => setMobileAccordion(mobileAccordion === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`text-secondary/40 transition-transform duration-300 ${mobileAccordion === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    )}
                    {!item.comingSoon && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        mobileAccordion === item.label ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="mx-3 mb-2 bg-surface/50 rounded-xl p-3">
                        {item.megamenu.columns.map((col, colIdx) => (
                          <div key={col.title} className={colIdx > 0 ? "mt-4 pt-3 border-t border-border/50" : ""}>
                            <p className="text-[10px] font-bold text-secondary/30 uppercase tracking-[0.1em] px-2 mb-2">{col.title}</p>
                            {col.links.map((link) => (
                                <Link
                                  key={link.name}
                                  href={link.href}
                                  className="flex items-start gap-3 px-2 py-2 rounded-lg hover:bg-white transition-colors duration-150 cursor-pointer group"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  <div className="w-1 h-1 rounded-full bg-primary/40 mt-[7px] shrink-0 group-hover:bg-primary transition-colors duration-150" />
                                  <div>
                                    <p className="text-[13px] font-medium text-dark group-hover:text-primary transition-colors duration-150">{link.name}</p>
                                    <p className="text-[11px] text-secondary/40 leading-relaxed">{link.desc}</p>
                                  </div>
                                </Link>
                              )
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href || "#"}
                    className="block text-[15px] text-dark font-semibold py-3.5 px-4 rounded-xl hover:bg-surface/80 transition-colors duration-200 cursor-pointer"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA */}
            <div className="p-3 pt-0">
              <Link
                href="https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw"
                className="block w-full text-center bg-dark text-white font-semibold text-[14px] py-3 rounded-xl hover:bg-dark/90 transition-colors duration-200 cursor-pointer"
                onClick={() => setMobileOpen(false)}
              >
                Richiedi accesso prioritario
              </Link>
            </div>
          </div>
        </>
      )}
      {/* Floating "IN ARRIVO" cursor label */}
      {cursorPos && (
        <div
          className="fixed z-[9999] pointer-events-none"
          style={{ left: cursorPos.x + 12, top: cursorPos.y - 14 }}
        >
          <span className="block text-[10px] font-bold uppercase tracking-wider text-white bg-dark rounded-full px-3 py-1.5 shadow-lg whitespace-nowrap">
            In arrivo
          </span>
        </div>
      )}
    </nav>
  );
}
