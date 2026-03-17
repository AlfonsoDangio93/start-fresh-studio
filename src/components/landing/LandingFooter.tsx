

import { Link } from "react-router-dom";

export default function LandingFooter() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-site mx-auto px-6 pt-14 pb-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pb-10 border-b border-border">
          <div className="shrink-0">
            <Link to="/" className="flex items-center cursor-pointer">
              <img src="/logos/hommi_logo.png" alt="Hommi" className="h-8 w-auto" />
            </Link>
          </div>

          <div className="text-[12px] text-secondary/50 leading-relaxed max-w-[400px] md:text-right">
            <p className="font-semibold text-dark/60 mb-1">S9 srl Società Benefit</p>
            <p>Partita IVA 13291110016 | REA TO-1352856</p>
            <p>Corso Unione Sovietica, 612/15/C | 10135 Torino | TO</p>
            <p>Capitale Sociale &euro; 10.000 i.v.</p>
          </div>
        </div>

        <div className="border-t border-border py-6 space-y-4">
          <p className="text-sm text-[#6B7280] text-center">
            © 2026 Hommi · Tutti i diritti riservati · S9 srl Società Benefit · P.IVA 13291110016 · REA TO-1352856 · Corso Unione Sovietica, 612/15/C · 10135 Torino (TO) · Capitale Sociale € 10.000 i.v.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-2 text-sm text-[#6B7280]">
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <span className="text-red-500">❤️</span>
              <span>by</span>
              <Link to="/" className="flex items-center">
                <img src="/logos/hommi_logo.png" alt="Hommi" className="h-7 w-auto" />
              </Link>
            </div>
            <span className="hidden md:inline mx-1 text-[#D1D5DB]">|</span>
            <div className="flex items-center gap-2">
              
              <a href="https://www.mamazen.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <img src="/powered-by-mamazen.png" alt="Mamazen" className="h-7 w-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>);

}