


import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Menu, X, ChevronDown, User, ArrowRight,
  Ticket, LayoutDashboard, UserCog, BarChart3,
  Building2, Landmark, Home, Wrench,
  BookOpen, HelpCircle, Video,
  Trophy, Users } from
"lucide-react";

/* ─── Types ─── */
type MegamenuLink = {
  name: string;
  desc: string;
  href: string;
  comingSoon: boolean;
  icon: LucideIcon;
};

type MegamenuPromo = {
  title: string;
  desc: string;
  cta: string;
  href: string;
  visual: "dashboard" | "risorse";
};

type NavItem = {
  label: string;
  comingSoon: boolean;
  href?: string;
  megamenu?: {
    columns: {title: string;links: MegamenuLink[];}[];
    promo: MegamenuPromo;
  };
};

/* ─── Data ─── */
const NAV_ITEMS: NavItem[] = [
{
  label: "Home",
  comingSoon: false,
  href: "/"
},
{
  label: "Prodotto",
  comingSoon: false,
  megamenu: {
    columns: [
    {
      title: "Funzionalità",
      links: [
      { name: "Ticketing guasti", desc: "Gestisci segnalazioni e interventi in un unico posto", href: "/ticketing-guasti", comingSoon: false, icon: Ticket },
      { name: "Dashboard real-time", desc: "Monitora lo stato di tutti i tuoi alloggi", href: "/dashboard-realtime", comingSoon: false, icon: LayoutDashboard },
      { name: "Gestione tecnici", desc: "Assegna e traccia i tecnici sul campo", href: "/gestione-tecnici", comingSoon: false, icon: UserCog },
      { name: "Report e analytics", desc: "Dati e insight per ottimizzare la manutenzione", href: "/report-analytics", comingSoon: false, icon: BarChart3 }]

    },
    {
      title: "Soluzioni",
      links: [
      { name: "Per property manager", desc: "Gestisci decine di alloggi senza stress", href: "/per-property-manager", comingSoon: false, icon: Building2 },
      { name: "Per agenzie", desc: "Scala le operazioni di manutenzione", href: "/per-agenzie", comingSoon: false, icon: Landmark },
      { name: "Per host professionali", desc: "Automatizza la gestione degli imprevisti", href: "/per-host-professionali", comingSoon: false, icon: Home },
      { name: "Per manutentori", desc: "Entra nella rete e ricevi incarichi", href: "/per-manutentori", comingSoon: false, icon: Wrench }]

    }],

    promo: {
      title: "Gestisci tutto da un'unica dashboard",
      desc: "Ticket, tecnici, alloggi e report: tutto sotto controllo in tempo reale.",
      cta: "Scopri la piattaforma",
      href: "/dashboard-realtime",
      visual: "dashboard"
    }
  }
},
{
  label: "Risorse",
  comingSoon: true,
  megamenu: {
    columns: [
    {
      title: "Impara",
      links: [
      { name: "Blog", desc: "Guide e best practice per la gestione immobiliare", href: "#", comingSoon: false, icon: BookOpen },
      { name: "Centro assistenza", desc: "Documentazione e tutorial passo-passo", href: "#", comingSoon: false, icon: HelpCircle },
      { name: "Webinar", desc: "Sessioni live con esperti del settore", href: "#", comingSoon: false, icon: Video }]

    },
    {
      title: "Community",
      links: [
      { name: "Storie di successo", desc: "Come i nostri clienti usano Hommi", href: "#", comingSoon: true, icon: Trophy },
      { name: "Partner", desc: "Entra nel programma partner Hommi", href: "#", comingSoon: true, icon: Users }]

    }],

    promo: {
      title: "Risorse in arrivo",
      desc: "Stiamo preparando guide, webinar e storie per aiutarti a crescere.",
      cta: "Resta aggiornato",
      href: "#",
      visual: "risorse"
    }
  }
},
{
  label: "Prezzi",
  comingSoon: false,
  href: "/prezzi"
},
{
  label: "FAQ",
  comingSoon: false,
  href: "/faq"
}];


const LOGO = "/logos/hommi_logo.png";
const CTA_URL =
"https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw";

/* ─── Mini CSS illustrations for promo cards ─── */

function DashboardPromoVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-3">
      <div className="w-full">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="h-1.5 w-16 bg-border rounded-full" />
          <div className="ml-auto flex gap-1">
            <div className="w-1 h-1 rounded-full bg-border" />
            <div className="w-1 h-1 rounded-full bg-border" />
            <div className="w-1 h-1 rounded-full bg-border" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1.5 mb-2">
          {[
          { label: "Aperti", val: "12", color: "text-primary" },
          { label: "In corso", val: "5", color: "text-amber-500" },
          { label: "Risolti", val: "48", color: "text-green-500" }].
          map((s) =>
          <div key={s.label} className="bg-surface rounded px-2 py-1.5 text-center">
              <div className={`text-[11px] font-bold ${s.color}`}>{s.val}</div>
              <div className="text-[7px] text-secondary/40">{s.label}</div>
            </div>
          )}
        </div>
        <div className="space-y-1">
          {[
          { dot: "bg-primary", w: "w-20" },
          { dot: "bg-amber-400", w: "w-16" },
          { dot: "bg-green-500", w: "w-24" }].
          map((row, i) =>
          <div key={i} className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${row.dot}`} />
              <div className={`h-1.5 ${row.w} bg-border/70 rounded-full`} />
              <div className="ml-auto h-1.5 w-6 bg-border/40 rounded-full" />
            </div>
          )}
        </div>
      </div>
    </div>);

}

function RisorsePromoVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-3">
      <div className="w-full space-y-2">
        {[1, 2, 3].map((i) =>
        <div key={i} className="flex items-center gap-2.5">
            <div className={`w-8 h-8 rounded-lg shrink-0 ${i === 1 ? "bg-primary/15" : "bg-border/60"}`} />
            <div className="flex-1 space-y-1">
              <div className={`h-1.5 rounded-full ${i === 1 ? "w-3/4 bg-dark/15" : i === 2 ? "w-2/3 bg-border" : "w-1/2 bg-border"}`} />
              <div className={`h-1 rounded-full ${i === 1 ? "w-full bg-border" : i === 2 ? "w-5/6 bg-border/60" : "w-3/4 bg-border/60"}`} />
            </div>
          </div>
        )}
      </div>
    </div>);

}

/* ─── Main component ─── */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState<{x: number;y: number;} | null>(null);

  const [showLoginTooltip, setShowLoginTooltip] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  const isActive = (item: NavItem) => {
    if (item.href) return pathname === item.href;
    if (item.megamenu) {
      return item.megamenu.columns.some((col) =>
      col.links.some((link) => pathname === link.href)
      );
    }
    return false;
  };


  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setMobileAccordion(null);
    }
    return () => {document.body.style.overflow = "";};
  }, [mobileOpen]);

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
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMenu(null);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  // Find the active megamenu item
  const activeMegamenuItem = NAV_ITEMS.find(
    (item) => item.megamenu && activeMenu === item.label
  );

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-6" role="navigation" aria-label="Navigazione principale">
      <div className="w-full max-w-site">
      {/* ─── Mobile navbar ─── */}
      <div className="md:hidden flex items-center justify-between bg-white border border-border shadow-sm rounded-xl px-4 py-3 w-full z-[60]">
        <button
            className="p-1.5 text-secondary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileOpen}>
            
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <div className="absolute left-1/2 -translate-x-1/2">
          <img src={LOGO} alt="Hommi" className="h-12 w-auto" />
        </div>

        <a
            href="https://app.hommi.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-secondary hover:text-dark transition-colors duration-200 cursor-pointer"
            aria-label="Accedi">
          <User size={18} />
        </a>
      </div>

      {/* ─── Desktop navbar ─── */}
      <div
          ref={navRef}
          className="hidden md:block w-full relative z-[60]"
          onMouseLeave={handleLeave}>
          
        {/* Bar */}
        <div className="flex items-center bg-white border border-border shadow-sm rounded-xl px-6 py-3">
          {/* Logo — left */}
          <div className="flex items-center shrink-0">
            <img src={LOGO} alt="Hommi" className="h-10 w-auto" />
          </div>

          {/* Nav items — center */}
          <div className="flex-1 flex items-center justify-center gap-8 text-[13px] font-medium">
            {NAV_ITEMS.map((item) =>
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.megamenu && handleEnter(item.label)}>
                
                {item.href ?
                <Link
                  to={item.href}
                  className={`nav-link nav-link-light flex items-center gap-1 ${isActive(item) ? "text-primary border-b-2 border-primary pb-0.5" : ""}`}>
                  
                    {item.label}
                  </Link> :

                <button
                  className={`nav-link nav-link-light flex items-center gap-1 ${isActive(item) ? "text-primary border-b-2 border-primary pb-0.5" : ""}`}
                  onClick={() => setActiveMenu(activeMenu === item.label ? null : item.label)}>
                  
                    {item.label}
                    <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${activeMenu === item.label ? "rotate-180" : ""}`} />
                  
                  </button>
                }
              </div>
              )}
          </div>

          {/* Actions — right */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="relative">
              <a
                  href="https://app.hommi.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-semibold text-secondary hover:text-dark transition-colors duration-200 px-3 py-1.5 border border-border cursor-pointer rounded no-underline">
                Accedi
              </a>
              {showLoginTooltip &&
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-dark text-white text-[11px] font-bold uppercase tracking-wider rounded-lg px-3 py-1.5 shadow-lg whitespace-nowrap">
                  In arrivo
                </div>
                }
            </div>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="text-[13px] font-semibold text-white bg-primary hover:bg-primary-hover transition-colors duration-200 px-4 py-1.5 cursor-pointer rounded">
              Richiedi accesso
            </a>
          </div>
        </div>

        {/* ─── Full-width megamenu panel ─── */}
        {activeMegamenuItem?.megamenu &&
          <div
            className={`absolute top-full left-0 right-0 mt-3 megamenu-enter ${activeMegamenuItem.comingSoon ? "cursor-none" : ""}`}
            onMouseEnter={() => handleEnter(activeMegamenuItem.label)}
            onMouseLeave={() => {
              handleLeave();
              if (activeMegamenuItem.comingSoon) setCursorPos(null);
            }}
            onMouseMove={activeMegamenuItem.comingSoon ? (e) => setCursorPos({ x: e.clientX, y: e.clientY }) : undefined}>
            
            <div className="bg-white rounded-xl border border-border shadow-xl p-8">
              <div className="grid grid-cols-[1fr_1px_1fr_320px] gap-0">
                {/* Column 1 */}
                {(() => {
                  const col = activeMegamenuItem.megamenu.columns[0];
                  return (
                    <div className="pr-8">
                      <p className="text-[11px] font-semibold text-secondary/40 uppercase tracking-wider mb-4">
                        {col.title}
                      </p>
                      <div className="space-y-1">
                        {col.links.map((link) => {
                          const Icon = link.icon;
                          if (activeMegamenuItem.comingSoon) {
                            return (
                              <div key={link.name} className="flex items-start gap-3 px-3 py-3 rounded-lg cursor-none">
                                <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center text-primary shrink-0 mt-0.5">
                                  <Icon size={18} />
                                </div>
                                <div>
                                  <p className="text-[13px] font-medium text-dark">{link.name}</p>
                                  <p className="text-[12px] text-secondary/50 mt-0.5 leading-relaxed">{link.desc}</p>
                                </div>
                              </div>);

                          }
                          return (
                            <Link
                              key={link.name}
                              to={link.href}
                              className={`flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-surface transition-colors duration-150 cursor-pointer group ${pathname === link.href ? "bg-primary/5" : ""}`}
                              onClick={() => setActiveMenu(null)}>
                              
                              <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-150 ${
                              pathname === link.href ?
                              "bg-primary/15 text-primary" :
                              "bg-primary/8 text-primary group-hover:bg-primary/15"}`
                              }>
                                <Icon size={18} />
                              </div>
                              <div>
                                <p className={`text-[13px] font-medium transition-colors duration-150 ${pathname === link.href ? "text-primary" : "text-dark group-hover:text-primary"}`}>
                                  {link.name}
                                </p>
                                <p className="text-[12px] text-secondary/50 mt-0.5 leading-relaxed">{link.desc}</p>
                              </div>
                            </Link>);

                        })}
                      </div>
                    </div>);

                })()}

                {/* Vertical divider */}
                <div className="bg-border/50 my-2" />

                {/* Column 2 */}
                {(() => {
                  const col = activeMegamenuItem.megamenu.columns[1];
                  return (
                    <div className="pl-8 pr-8">
                      <p className="text-[11px] font-semibold text-secondary/40 uppercase tracking-wider mb-4">
                        {col.title}
                      </p>
                      <div className="space-y-1">
                        {col.links.map((link) => {
                          const Icon = link.icon;
                          if (activeMegamenuItem.comingSoon) {
                            return (
                              <div key={link.name} className="flex items-start gap-3 px-3 py-3 rounded-lg cursor-none">
                                <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center text-primary shrink-0 mt-0.5">
                                  <Icon size={18} />
                                </div>
                                <div>
                                  <p className="text-[13px] font-medium text-dark">{link.name}</p>
                                  <p className="text-[12px] text-secondary/50 mt-0.5 leading-relaxed">{link.desc}</p>
                                </div>
                              </div>);

                          }
                          return (
                            <Link
                              key={link.name}
                              to={link.href}
                              className={`flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-surface transition-colors duration-150 cursor-pointer group ${pathname === link.href ? "bg-primary/5" : ""}`}
                              onClick={() => setActiveMenu(null)}>
                              
                              <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-150 ${
                              pathname === link.href ?
                              "bg-primary/15 text-primary" :
                              "bg-primary/8 text-primary group-hover:bg-primary/15"}`
                              }>
                                <Icon size={18} />
                              </div>
                              <div>
                                <p className={`text-[13px] font-medium transition-colors duration-150 ${pathname === link.href ? "text-primary" : "text-dark group-hover:text-primary"}`}>
                                  {link.name}
                                </p>
                                <p className="text-[12px] text-secondary/50 mt-0.5 leading-relaxed">{link.desc}</p>
                              </div>
                            </Link>);

                        })}
                      </div>
                    </div>);

                })()}

                {/* Promo card */}
                <div className="bg-surface rounded-xl p-5 flex flex-col border border-border/50 ml-2">
                  <div className="flex-1 bg-white rounded-lg border border-border/40 mb-4 overflow-hidden min-h-[150px]">
                    {activeMegamenuItem.megamenu.promo.visual === "dashboard" ?
                    <DashboardPromoVisual /> :

                    <RisorsePromoVisual />
                    }
                  </div>
                  <div>
                    <h4 className="font-display text-[15px] font-bold text-dark leading-snug mb-1.5">
                      {activeMegamenuItem.megamenu.promo.title}
                    </h4>
                    <p className="text-[12px] text-secondary/60 leading-relaxed mb-4">
                      {activeMegamenuItem.megamenu.promo.desc}
                    </p>
                    {!activeMegamenuItem.comingSoon ?
                    <Link
                      to={activeMegamenuItem.megamenu.promo.href}
                      className="inline-flex items-center gap-2 text-[13px] font-bold text-white bg-primary hover:bg-primary-hover rounded-lg px-4 py-2 transition-colors duration-150"
                      onClick={() => setActiveMenu(null)}>
                      
                        {activeMegamenuItem.megamenu.promo.cta}
                        <ArrowRight size={14} />
                      </Link> :

                    <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-secondary/40">
                        {activeMegamenuItem.megamenu.promo.cta}
                      </span>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          }
      </div>

      {/* ─── Mobile overlay menu ─── */}
      {mobileOpen &&
        <>
          <div
            className="md:hidden fixed inset-0 bg-dark/60 backdrop-blur-sm z-40"
            onClick={() => setMobileOpen(false)} />
          
          <div className="md:hidden fixed top-[80px] left-6 right-6 z-50 bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[calc(100vh-100px)] overflow-y-auto">
            <div className="p-2">
              {NAV_ITEMS.map((item) =>
              item.megamenu ?
              <div key={item.label}>
                    {item.comingSoon ?
                <div className="w-full flex items-center justify-between text-[15px] text-dark font-semibold py-3.5 px-4 rounded-xl cursor-not-allowed">
                        {item.label}
                        <ChevronDown size={14} className="text-secondary/40" />
                      </div> :

                <button
                  className={`w-full flex items-center justify-between text-[15px] font-semibold py-3.5 px-4 rounded-xl hover:bg-surface/80 transition-colors duration-200 cursor-pointer ${isActive(item) ? "text-primary" : "text-dark"}`}
                  onClick={() => setMobileAccordion(mobileAccordion === item.label ? null : item.label)}>
                  
                        {item.label}
                        <ChevronDown
                    size={14}
                    className={`text-secondary/40 transition-transform duration-300 ${mobileAccordion === item.label ? "rotate-180" : ""}`} />
                  
                      </button>
                }
                    {!item.comingSoon &&
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                  mobileAccordion === item.label ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`
                  }>
                  
                        <div className="mx-3 mb-2 bg-surface/50 rounded-xl p-3">
                          {item.megamenu.columns.map((col, colIdx) =>
                    <div key={col.title} className={colIdx > 0 ? "mt-4 pt-3 border-t border-border/50" : ""}>
                              <p className="text-[10px] font-bold text-secondary/30 uppercase tracking-[0.1em] px-2 mb-2">{col.title}</p>
                              {col.links.map((link) => {
                        const Icon = link.icon;
                        return (
                          <Link
                            key={link.name}
                            to={link.href}
                            className={`flex items-start gap-3 px-2 py-2 rounded-lg hover:bg-white transition-colors duration-150 cursor-pointer group ${pathname === link.href ? "bg-white" : ""}`}
                            onClick={() => setMobileOpen(false)}>
                            
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-150 ${
                            pathname === link.href ?
                            "bg-primary/15 text-primary" :
                            "bg-primary/8 text-primary group-hover:bg-primary/15"}`
                            }>
                                      <Icon size={16} />
                                    </div>
                                    <div>
                                      <p className={`text-[13px] font-medium transition-colors duration-150 ${pathname === link.href ? "text-primary" : "text-dark group-hover:text-primary"}`}>{link.name}</p>
                                      <p className="text-[11px] text-secondary/40 leading-relaxed">{link.desc}</p>
                                    </div>
                                  </Link>);

                      })}
                            </div>
                    )}
                        </div>
                      </div>
                }
                  </div> :

              <Link
                key={item.label}
                to={item.href || "#"}
                className={`block text-[15px] font-semibold py-3.5 px-4 rounded-xl hover:bg-surface/80 transition-colors duration-200 cursor-pointer ${isActive(item) ? "text-primary" : "text-dark"}`}
                onClick={() => setMobileOpen(false)}>
                
                    {item.label}
                  </Link>

              )}
            </div>

            {/* CTA */}
            <div className="p-3 pt-0">
              <Link
                to={CTA_URL}
                className="block w-full text-center bg-dark text-white font-semibold text-[14px] py-3 rounded-xl hover:bg-dark/90 transition-colors duration-200 cursor-pointer"
                onClick={() => setMobileOpen(false)}>
                
                Richiedi accesso prioritario
              </Link>
            </div>
          </div>
        </>
        }

      {/* Floating "IN ARRIVO" cursor label */}
      {cursorPos &&
        <div
          className="fixed z-[9999] pointer-events-none"
          style={{ left: cursorPos.x + 12, top: cursorPos.y - 14 }}>
          
          <span className="block text-[10px] font-bold uppercase tracking-wider text-white bg-dark rounded-full px-3 py-1.5 shadow-lg whitespace-nowrap">
            In arrivo
          </span>
        </div>
        }
      </div>
    </nav>);

}