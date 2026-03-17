

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const COLUMNS: Record<string, {label: string;href?: string;}[]> = {
  Prodotto: [
  { label: "Come funziona" },
  { label: "Servizi" },
  { label: "Prezzi" },
  { label: "Integrazioni" }],

  Risorse: [
  { label: "App Hommi" },
  { label: "Blog" },
  { label: "Documentazione" },
  { label: "Partnerships" }],

  Impresa: [
  { label: "Chi siamo" },
  { label: "Termini e condizioni", href: "/termini-e-condizioni" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" }],

  Prezzi: [
  { label: "Piani" },
  { label: "Centro di aiuto" }]

};

const SOCIALS = [
{
  name: "Instagram",
  icon:
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>

},
{
  name: "Linkedin",
  icon:
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>

},
{
  name: "Facebook",
  icon:
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>

},
{
  name: "TikTok",
  icon:
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>

}];


const LANGUAGES = [
{ flag: "\u{1F1EE}\u{1F1F9}", label: "Italia", active: true },
{ flag: "\u{1F1EC}\u{1F1E7}", label: "English", active: false },
{ flag: "\u{1F1EA}\u{1F1F8}", label: "Espa\u00f1ol", active: false }];


/* ─── Language selector with popup ─── */
function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [wip, setWip] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setWip(null);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => {setOpen(!open);setWip(null);}}
        className="inline-flex items-center gap-2 border border-border rounded-lg px-4 py-2.5 text-[14px] font-medium text-dark hover:border-dark/30 transition-colors duration-200 cursor-pointer">
        
        <span className="text-[16px]" aria-hidden="true">{LANGUAGES[0].flag}</span>
        Italia
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open &&
      <div className="absolute bottom-full mb-2 right-0 w-[180px] bg-white rounded-xl border border-border shadow-lg shadow-black/8 py-1.5 z-50">
          {LANGUAGES.map((lang) =>
        <button
          key={lang.label}
          onClick={() => {
            if (lang.active) {
              setOpen(false);
              setWip(null);
            } else {
              setWip(lang.label);
            }
          }}
          className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] transition-colors duration-150 cursor-pointer ${
          lang.active ?
          "text-dark font-semibold bg-surface" :
          "text-secondary/60 hover:bg-surface hover:text-dark"}`
          }>
          
              <span className="text-[15px]">{lang.flag}</span>
              {lang.label}
              {lang.active &&
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F16B01" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-auto">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
          }
            </button>
        )}

          {wip &&
        <div className="mx-3 mt-1.5 mb-1 px-3 py-2 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-[11px] font-semibold text-amber-700">Work in progress</p>
              <p className="text-[10px] text-amber-600/70 mt-0.5">
                {wip} coming soon!
              </p>
            </div>
        }
        </div>
      }
    </div>);

}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-site mx-auto px-6 pt-14 pb-8">
        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 pb-12">
          {Object.entries(COLUMNS).map(([title, items]) =>
          <nav key={title}>
              <h4 className="text-[14px] font-bold text-dark mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) =>
              <li key={item.label}>
                    {item.href ?
                <a
                  href={item.href}
                  className="text-[14px] text-secondary/60 hover:text-dark transition-colors duration-200 cursor-pointer">
                  
                        {item.label}
                      </a> :

                <a
                  href="#"
                  className="text-[14px] text-secondary/60 hover:text-dark transition-colors duration-200 cursor-pointer">
                  
                        {item.label}
                      </a>
                }
                  </li>
              )}
              </ul>
            </nav>
          )}

          {/* Social */}
          <nav>
            <ul className="space-y-2.5">
              {SOCIALS.map((s) =>
              <li key={s.name}>
                  <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[14px] text-secondary/60 hover:text-dark transition-colors duration-200 cursor-pointer">
                  
                    {s.icon}
                    {s.name}
                  </a>
                </li>
              )}
            </ul>
          </nav>

          {/* Language selector */}
          <div className="flex items-start">
            <LanguageSelector />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6 space-y-4">
          {/* Riga 1 — dati legali */}
          <p className="text-sm text-[#6B7280] text-center">© 2026 Hommi · Tutti i diritti riservati · S9 srl Società Benefit · P.IVA 13291110016 · REA TO-1352856 
Corso Unione Sovietica, 612/15/C · 10135 Torino (TO) · Capitale Sociale € 10.000 i.v.
          </p>

          {/* Riga 2 — credits */}
          <div className="flex items-center justify-center gap-2 text-sm text-[#6B7280] py-[12px]">
            <span>Made with</span>
            <span className="text-red-500">❤️</span>
            <span>by</span>
            <Link to="/" className="flex items-center">
              <img src="/logos/hommi_logo.png" alt="Hommi" className="h-7 w-auto" />
            </Link>
            <span className="mx-1 text-[#D1D5DB]">|</span>
            <span>Powered by</span>
            <a
              href="https://www.mamazen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center">
              
              <img src="/powered-by-mamazen.png" alt="Mamazen" className="h-7 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </footer>);

}