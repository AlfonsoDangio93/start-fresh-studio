import { useEffect, useState } from "react";
import LandingFooter from "@/components/landing/LandingFooter";
import Calcolatore from "@/components/calcolatore/Calcolatore";

const ORANGE = "#E8501C";
const ORANGE_HOVER = "#C9410F";
const DARK = "#2C2C2C";
const ACCENT = "#FFF4ED";
const SUCCESS = "#10B981";
const TEXT_BODY = "#4B5563";

export default function LandingCalcolatore() {
  const [calcOpen, setCalcOpen] = useState(false);
  useEffect(() => {
    const id = "google-font-inter";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div
      className="landing-theme min-h-screen bg-white"
      style={{ fontFamily: "'Inter', system-ui, sans-serif", color: DARK }}
    >
      <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-6">
        <div className="w-full max-w-site">
          <div className="flex items-center justify-between bg-white border border-border shadow-sm rounded-xl px-4 md:px-6 py-3">
            <a href="/" className="flex items-center shrink-0">
              <img src="/logos/hommi_logo.png" alt="Hommi" className="h-8 md:h-10 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setCalcOpen(true)}
              className="text-[12px] md:text-[13px] font-semibold text-white bg-primary hover:bg-primary-hover transition-colors duration-200 px-4 md:px-5 py-1.5 md:py-2 rounded-[10px] cursor-pointer"
            >
              Inizia il calcolo
            </button>
          </div>
        </div>
      </nav>
      <div className="h-24" />


      {/* Hero */}
      <section className="min-h-[90vh] flex items-center px-5 sm:px-8 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-10 items-center">
          {/* Left 60% */}
          <div className="lg:col-span-3 space-y-6 lg:space-y-7">
            <div
              className="inline-block text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: ORANGE }}
            >
              Per Property Manager STR
            </div>

            <h1
              className="font-extrabold tracking-tight"
              style={{
                color: DARK,
                fontWeight: 800,
                fontSize: "clamp(40px, 6vw, 72px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Quanto ti costano{" "}
              <span style={{ color: ORANGE }}>davvero</span> i guasti nei tuoi
              immobili in affitto breve?
            </h1>

            <p
              className="text-lg sm:text-xl leading-relaxed max-w-[540px]"
              style={{ color: TEXT_BODY, lineHeight: 1.6 }}
            >
              Calcolalo in 60 secondi. Riceverai un report personalizzato con la
              stima dei tuoi costi nascosti e quanto puoi risparmiare con Hommi.
            </p>

            <div className="pt-2 space-y-3">
              <button
                onClick={() => setCalcOpen(true)}
                className="inline-flex items-center gap-2 text-white font-semibold text-base px-8 py-4 rounded-[12px] transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange-500/20"
                style={{ backgroundColor: ORANGE }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = ORANGE_HOVER)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = ORANGE)
                }
              >
                Inizia il calcolo
                <span aria-hidden>→</span>
              </button>
              <p className="text-sm" style={{ color: "#9CA3AF" }}>
                Gratis. Nessun impegno. 60 secondi del tuo tempo.
              </p>
            </div>
          </div>

          {/* Right 40% — Floating mockup */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Soft background blob */}
              <div
                className="absolute -inset-6 rounded-[32px] -z-10"
                style={{
                  background: `radial-gradient(circle at 70% 30%, ${ACCENT} 0%, transparent 70%)`,
                }}
              />

              {/* Main floating card */}
              <div
                className="bg-white rounded-[12px] p-6 sm:p-7 border border-gray-100"
                style={{
                  boxShadow:
                    "0 20px 50px -12px rgba(232, 80, 28, 0.15), 0 8px 16px -8px rgba(0,0,0,0.06)",
                }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-wider"
                      style={{ color: TEXT_BODY }}
                    >
                      Costo annuo stimato
                    </p>
                    <p
                      className="text-3xl sm:text-4xl font-extrabold mt-1"
                      style={{ color: DARK, letterSpacing: "-0.02em" }}
                    >
                      €19.520
                    </p>
                  </div>
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-lg"
                    style={{ backgroundColor: ACCENT, color: ORANGE }}
                  >
                    📊
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Interventi urgenti", value: "€8.400", pct: "43%" },
                    { label: "Tempo gestione", value: "€6.200", pct: "32%" },
                    { label: "Recensioni perse", value: "€4.920", pct: "25%" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between p-3 rounded-[12px] border border-gray-100"
                      style={{ backgroundColor: "#FAFAFA" }}
                    >
                      <div>
                        <p
                          className="text-sm font-medium"
                          style={{ color: DARK }}
                        >
                          {item.label}
                        </p>
                        <p className="text-xs" style={{ color: TEXT_BODY }}>
                          {item.pct} del totale
                        </p>
                      </div>
                      <p
                        className="text-base font-bold"
                        style={{ color: DARK }}
                      >
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-5 flex items-center gap-2 p-3 rounded-[12px]"
                  style={{ backgroundColor: "#ECFDF5" }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: SUCCESS }}
                  />
                  <p
                    className="text-sm font-medium"
                    style={{ color: SUCCESS }}
                  >
                    Risparmio potenziale: €13.600/anno
                  </p>
                </div>
              </div>

              {/* Floating mini badge */}
              <div
                className="absolute -top-4 -left-4 bg-white rounded-[12px] px-4 py-2.5 border border-gray-100 hidden sm:flex items-center gap-2"
                style={{
                  boxShadow: "0 8px 20px -6px rgba(0,0,0,0.1)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: SUCCESS }}
                />
                <span className="text-xs font-semibold" style={{ color: DARK }}>
                  Report in tempo reale
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LandingFooter />
      {calcOpen && <Calcolatore onExit={() => setCalcOpen(false)} />}
    </div>
  );
}
