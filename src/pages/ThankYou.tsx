import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-6">
          Grazie per aver richiesto informazioni su Hommi 👍
        </h1>

        <div className="text-left bg-surface border border-border rounded-xl p-6 md:p-8 mb-8 space-y-4">
          <p className="text-foreground text-[15px] md:text-base leading-relaxed">
            Lavoriamo con property manager che gestiscono più immobili e li aiutiamo a semplificare completamente la gestione delle manutenzioni (meno tempo perso, meno emergenze).
          </p>
          <p className="text-foreground text-[15px] md:text-base leading-relaxed">
            Se ti va, possiamo fare una call veloce di 15 minuti per capire se ha senso anche per te.
          </p>
          <p className="text-foreground text-[15px] md:text-base leading-relaxed font-semibold">
            👉 Prenota qui quando preferisci:
          </p>
          <a
            href="https://calendly.com/simone-calderoni-hommi/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold text-[15px] rounded-xl px-6 py-3 transition-all duration-200 shadow-lg shadow-primary/20"
          >
            Prenota una call
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <Link
          to="/"
          className="text-[14px] font-semibold text-primary hover:text-primary-hover transition-colors duration-200"
        >
          ← Torna al sito
        </Link>
      </div>
    </div>
  );
}