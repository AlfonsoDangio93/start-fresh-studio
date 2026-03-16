

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

        <div className="flex flex-col md:flex-row items-center justify-between pt-6 gap-4">
          <p className="text-[13px] text-secondary/50">
            &copy; {new Date().getFullYear()} Hommi | S9 srl SB | Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-3 text-[13px]">
            <a href="#" className="text-secondary/50 hover:text-dark transition-colors duration-200 cursor-pointer">Privacy Policy</a>
            <span className="text-secondary/20">|</span>
            <a href="#" className="text-secondary/50 hover:text-dark transition-colors duration-200 cursor-pointer">Cookie Policy</a>
            <span className="text-secondary/20">|</span>
            <a href="#" className="text-secondary/50 hover:text-dark transition-colors duration-200 cursor-pointer">Termini e Condizioni</a>
          </div>
        </div>

        {/* Powered by Mamazen */}
        <div className="flex justify-center mt-8">
          <a
            href="https://www.mamazen.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-200"
          >
            <img src="/powered-by-mamazen.png" alt="Powered by Mamazen" className="h-12 w-auto" />
          </a>
        </div>
      </div>
    </footer>
  );
}
