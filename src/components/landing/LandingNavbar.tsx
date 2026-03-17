


import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const CTA_URL =
  "https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw";

const NAV_LINKS = [
  { label: "Servizi", href: "#servizi" },
  { label: "Piani", href: "#prezzi" },
  { label: "Dicono di noi", href: "#testimonianze" },
  { label: "FAQ", href: "#faq" },
];

const LOGO = "/logos/hommi_logo.png";

export default function LandingNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4" role="navigation" aria-label="Navigazione principale">
      {/* Mobile navbar */}
      <div className="md:hidden flex items-center justify-between bg-white border border-border shadow-sm rounded-xl px-4 py-3 w-full z-[60]">
        <button
          className="p-1.5 text-secondary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <div className="absolute left-1/2 -translate-x-1/2">
          <img src={LOGO} alt="Hommi" className="h-10 w-auto" />
        </div>

        <a
          href={CTA_URL} target="_blank" rel="noopener noreferrer"
          className="text-[12px] font-semibold text-white bg-primary hover:bg-primary-hover transition-colors duration-200 px-3.5 py-1.5 rounded-lg cursor-pointer"
        >
          Inizia ora
        </a>
      </div>

      {/* Desktop navbar */}
      <div ref={navRef} className="hidden md:block w-full z-[60]">
        <div className="flex items-center bg-white border border-border shadow-sm rounded-xl px-6 py-3">
          <div className="flex items-center shrink-0">
            <img src={LOGO} alt="Hommi" className="h-8 w-auto" />
          </div>

          <div className="flex items-center gap-8 ml-auto">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link nav-link-light text-[13px] font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href={CTA_URL} target="_blank" rel="noopener noreferrer"
              className="text-[13px] font-semibold text-white bg-primary hover:bg-primary-hover transition-colors duration-200 px-5 py-2 rounded-lg cursor-pointer ml-2"
            >
              Inizia ora
            </a>
          </div>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-dark/60 backdrop-blur-sm z-40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="md:hidden fixed top-[80px] left-6 right-6 z-50 bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-2">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-[15px] font-semibold text-dark py-3.5 px-4 rounded-xl hover:bg-surface/80 transition-colors duration-200 cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="p-3 pt-0">
              <a
                href={CTA_URL} target="_blank" rel="noopener noreferrer"
                className="block w-full text-center bg-primary text-white font-semibold text-[14px] py-3 rounded-xl hover:bg-primary-hover transition-colors duration-200 cursor-pointer"
                onClick={() => setMobileOpen(false)}
              >
                Inizia ora
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
