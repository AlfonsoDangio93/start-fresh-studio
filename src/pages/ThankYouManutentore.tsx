import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useSeo } from "@/hooks/useSeo";

export default function ThankYouManutentore() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      (window as any).fbq("track", "Lead");
    }
  }, []);

  useSeo({
    title: "Grazie per la candidatura | Hommi",
    description:
      "La tua candidatura come manutentore partner Hommi è stata ricevuta. Ti contatteremo presto per i prossimi passi.",
    canonical: "https://www.hommi.it/grazie-manutentore",
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="w-full py-6 px-6">
        <div className="max-w-site mx-auto">
          <Link to="/" className="inline-block">
            <img
              src="/logos/hommi_logo.png"
              alt="Hommi"
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="text-center max-w-lg">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
            Grazie per la tua candidatura!
          </h1>
          <p className="text-dark/80 text-[15px] md:text-base leading-relaxed mb-6">
            Abbiamo ricevuto la tua richiesta per entrare nella rete Hommi come manutentore partner.
          </p>

          <div className="text-left bg-surface border border-border rounded-xl p-6 md:p-8 mb-8 space-y-4">
            <p className="text-foreground text-[15px] md:text-base leading-relaxed">
              Ti contatteremo entro 24-48 ore per verificare i requisiti e attivare il tuo profilo.
            </p>
            <p className="text-foreground text-[15px] md:text-base leading-relaxed">
              Nel frattempo, se hai dubbi o vuoi accelerare la verifica, puoi scriverci a{" "}
              <a
                href="mailto:info@hommi.it"
                className="text-primary hover:text-primary-hover font-medium underline"
              >
                info@hommi.it
              </a>
              .
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold text-[15px] rounded-xl px-6 py-3 transition-all duration-200 shadow-lg shadow-primary/20"
          >
            Torna al sito
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <footer className="w-full py-6 text-center text-dark/60 text-[13px]">
        © {new Date().getFullYear()} Hommi — S9 s.r.l. SB
      </footer>
    </div>
  );
}
