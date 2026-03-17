import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
          Grazie per la richiesta
        </h1>
        <p className="text-muted-foreground text-base md:text-lg mb-8">
          Ti ricontatteremo nelle prossime 24h per confermarti se sei entrato nella lista prioritaria.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold text-sm md:text-base px-6 py-3 rounded-lg transition-colors duration-200"
        >
          Torna al sito
        </Link>
      </div>
    </div>
  );
}
