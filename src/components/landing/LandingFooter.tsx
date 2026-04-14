import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook } from "lucide-react";

export default function LandingFooter() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-site mx-auto px-6 pt-14 pb-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pb-10 border-b border-border">
          <div className="shrink-0 space-y-3">
            <Link to="/" className="flex items-center cursor-pointer">
              <img src="/logos/hommi_logo.png" alt="Hommi" className="h-8 w-auto" />
            </Link>
            <div className="flex items-center gap-2 -ml-2 my-[18px]">
              <a href="https://www.linkedin.com/company/hommi-it/?originalSubdomain=it" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-8 h-8 rounded-full border border-transparent text-dark hover:bg-primary hover:border-primary transition-all duration-200">
                <Linkedin size={16} className="transition-colors duration-200 group-hover:text-primary-foreground" />
              </a>
              <a href="https://www.instagram.com/hommi.it/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-8 h-8 rounded-full border border-transparent text-dark hover:bg-primary hover:border-primary transition-all duration-200">
                <Instagram size={16} className="transition-colors duration-200 group-hover:text-primary-foreground" />
              </a>
              <a href="https://www.facebook.com/hommi.it/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-8 h-8 rounded-full border border-transparent text-dark hover:bg-primary hover:border-primary transition-all duration-200">
                <Facebook size={16} className="transition-colors duration-200 group-hover:text-primary-foreground" />
              </a>
            </div>
            <p className="text-[12px] text-secondary/50 leading-relaxed">
              <a href="mailto:info@hommi.it" className="hover:text-primary transition-colors">info@hommi.it</a>
              <span> | s9srl@pec.it</span>
            </p>
          </div>

          <div className="text-[12px] text-secondary/50 leading-relaxed max-w-[400px] md:text-right">
            <p className="font-semibold text-dark/60 mb-1">S9 srl Società Benefit</p>
            <p>Partita IVA 13291110016 | REA TO-1352856</p>
            <p>Corso Unione Sovietica, 612/15/C | 10135 Torino | TO</p>
            
          </div>
        </div>

        <div className="border-t border-border py-6 space-y-3">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground/60">
              <span>Made with</span>
              <span className="text-primary">♥</span>
              <span>by</span>
              <a href="https://www.alfonsodangio.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                alfonsodangio.com
              </a>
            </div>
            <span className="hidden md:inline mx-1 text-border">|</span>
            <div className="flex items-center gap-2">
              <span>Powered by</span>
              <a href="https://www.mamazen.it" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <img alt="Mamazen" className="h-9 w-auto" src="/lovable-uploads/c0246aaf-5d46-4899-8294-5e44ae8569d7.jpg" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground/60 flex-wrap">
            <span>© 2026 Hommi | All rights reserved</span>
            <span>|</span>
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="/termini-e-condizioni" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">Termini e Condizioni</a>
            <span>|</span>
            <a href="/cookie-policy" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>);

}