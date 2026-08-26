import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const DEFAULT_CTA_URL = "https://prenota.hommi.it/richiedi-accesso";

interface LandingNavbarProps {
  ctaLabel?: string;
  ctaHref?: string;
}


const NAV_LINKS = [
{ label: "Servizi", href: "#servizi" },
{ label: "Piani", href: "#prezzi" },
{ label: "Dicono di noi", href: "#testimonianze" },
{ label: "FAQ", href: "#faq" }];


const LOGO = "/logos/hommi_logo.png";

export default function LandingNavbar({ ctaLabel = "Prenota una call gratuita", ctaHref = DEFAULT_CTA_URL }: LandingNavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {document.body.style.overflow = "";}
  }, [mobileOpen]);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-6" role="navigation" aria-label="Navigazione principale">
      <div className="w-full max-w-site">
      {/* Mobile navbar */}
      <div className="md:hidden grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 bg-white border border-border shadow-sm rounded-xl px-3 sm:px-4 py-3 w-full z-[60]">
        <button
            className="p-1.5 text-secondary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileOpen}>
            
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <div className="flex justify-center min-w-0 px-1">
          <img src={LOGO} alt="Hommi" className="h-7 sm:h-8 w-auto max-w-full object-contain" />
        </div>

        <a
            href={ctaHref} target="_blank" rel="noopener noreferrer"
            className="text-[11px] sm:text-[12px] font-semibold text-white bg-primary hover:bg-primary-hover transition-colors duration-200 px-2 sm:px-3 py-1.5 rounded-[10px] cursor-pointer truncate max-w-[110px] sm:max-w-[150px] leading-none">
            
          {ctaLabel}
        </a>
      </div>

      {/* Desktop navbar */}
      <div ref={navRef} className="hidden md:block w-full z-[60]">
        <div className="flex items-center bg-white border border-border shadow-sm rounded-xl px-6 py-3">
          <div className="flex items-center shrink-0">
            <img src={LOGO} alt="Hommi" className="h-8 w-auto" />
          </div>

          <div className="flex items-center gap-8 ml-auto">
            {NAV_LINKS.map((item) =>
              <a
                key={item.label}
                href={item.href}
                className="nav-link nav-link-light text-[13px] font-medium">
                
                {item.label}
              </a>
              )}
            <a
                href={ctaHref} target="_blank" rel="noopener noreferrer"
                className="text-[13px] font-semibold text-white bg-primary hover:bg-primary-hover transition-colors duration-200 px-5 py-2 rounded-[10px] cursor-pointer ml-2">
                
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {mobileOpen &&
        <>
          <div
            className="md:hidden fixed inset-0 bg-dark/60 backdrop-blur-sm z-40"
            onClick={() => setMobileOpen(false)} />
          
          <div className="md:hidden fixed top-[80px] left-6 right-6 z-50 bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-2">
              {NAV_LINKS.map((item) =>
              <a
                key={item.label}
                href={item.href}
                className="block text-[15px] font-semibold text-dark py-3.5 px-4 rounded-xl hover:bg-surface/80 transition-colors duration-200 cursor-pointer"
                onClick={() => setMobileOpen(false)}>
                
                  {item.label}
                </a>
              )}
            </div>
            <div className="p-3 pt-0">
              <a
                href={ctaHref} target="_blank" rel="noopener noreferrer"
                className="block w-full text-center bg-primary text-white font-semibold text-[14px] py-3 rounded-xl hover:bg-primary-hover transition-colors duration-200 cursor-pointer"
                onClick={() => setMobileOpen(false)}>
                
                {ctaLabel}
              </a>
            </div>
          </div>
        </>
        }
      </div>
    </nav>);

}
