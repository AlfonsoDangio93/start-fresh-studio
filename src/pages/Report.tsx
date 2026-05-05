import { useEffect, useRef, useState } from "react";
import { InlineWidget } from "react-calendly";
import LandingFooter from "@/components/landing/LandingFooter";

const ORANGE = "#E8501C";
const DARK = "#2C2C2C";
const ACCENT = "#FFF4ED";
const TEXT_BODY = "#4B5563";
const BORDER = "#E5E7EB";
const SUCCESS = "#10B981";

type ContactForm = {
  nome: string;
  email: string;
  telefono: string;
  azienda: string;
};

type Answers = {
  numImmobili: number;
  città: string[];
  guastiMese: number | null;
  recensioniNegative: number | null;
  oreSettimana: number | null;
};

type Results = {
  costoGuastiDiretti: number;
  costoTempoPM: number;
  costoRecensioni: number;
  costoTotaleAnnuo: number;
  costoHommi: number;
  risparmio: number;
  risparmioPercentuale: number;
};

type ReportData = {
  formData: ContactForm;
  answers: Answers;
  results: Results;
  timestamp: number;
};

const formatEuro = (n: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);

function useCountUp(target: number, durationMs = 1500) {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);
  useEffect(() => {
    let raf = 0;
    startRef.current = null;
    const tick = (t: number) => {
      if (startRef.current === null) startRef.current = t;
      const elapsed = t - startRef.current;
      const progress = Math.min(1, elapsed / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);
  return value;
}

export default function Report() {
  const [data, setData] = useState<ReportData | null>(null);

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

  useEffect(() => {
    const stored = sessionStorage.getItem("hommi_report_data");
    if (!stored) {
      window.location.href = "/";
      return;
    }
    try {
      const parsed = JSON.parse(stored) as ReportData;
      const oneHour = 60 * 60 * 1000;
      if (Date.now() - parsed.timestamp > oneHour) {
        sessionStorage.removeItem("hommi_report_data");
        window.location.href = "/";
        return;
      }
      setData(parsed);
    } catch {
      sessionStorage.removeItem("hommi_report_data");
      window.location.href = "/";
    }
  }, []);

  // Meta pixel ViewContent
  useEffect(() => {
    if (!data) return;
    const fbq = (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq;
    if (typeof fbq === "function") {
      fbq("track", "ViewContent", {
        content_name: "Report Calcolatore Hommi",
        content_category: "Report",
        value: 0,
        currency: "EUR",
      });
    }
  }, [data]);

  if (!data) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ fontFamily: "'Inter', system-ui, sans-serif", color: DARK }}
      >
        <p style={{ color: TEXT_BODY }}>Caricamento report...</p>
      </div>
    );
  }

  const { formData, answers, results } = data;
  const firstName = formData.nome.split(" ")[0] ?? "";
  const lastName = formData.nome.split(" ").slice(1).join(" ");
  const guastiAnno = (answers.guastiMese ?? 0) * 12;
  const oreAnnoPM = (answers.oreSettimana ?? 0) * 52;

  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ fontFamily: "'Inter', system-ui, sans-serif", color: DARK }}
    >
      <ReportContent
        firstName={firstName}
        lastName={lastName}
        formData={formData}
        answers={answers}
        results={results}
        guastiAnno={guastiAnno}
        oreAnnoPM={oreAnnoPM}
      />
      <LandingFooter />
    </div>
  );
}

function ReportContent({
  firstName,
  lastName,
  formData,
  answers,
  results,
  guastiAnno,
  oreAnnoPM,
}: {
  firstName: string;
  lastName: string;
  formData: ContactForm;
  answers: Answers;
  results: Results;
  guastiAnno: number;
  oreAnnoPM: number;
}) {
  const animatedTotal = useCountUp(results.costoTotaleAnnuo, 1500);

  const cards = [
    {
      icon: "💸",
      title: "Costi diretti guasti",
      value: `${formatEuro(results.costoGuastiDiretti)}/anno`,
      micro: `${guastiAnno} interventi × €130 medio`,
    },
    {
      icon: "⏱️",
      title: "Tempo perso valorizzato",
      value: `${formatEuro(results.costoTempoPM)}/anno`,
      micro: `${oreAnnoPM} ore × €35/h`,
    },
    {
      icon: "⭐",
      title: "Impatto recensioni negative",
      value: `${formatEuro(results.costoRecensioni)}/anno`,
      micro: `${answers.recensioniNegative ?? 0} recensioni × €400`,
    },
  ];

  return (
    <>
      {/* Sticky success banner */}
      <div
        className="sticky top-0 z-40 text-center text-sm sm:text-base font-medium px-4 py-3"
        style={{ backgroundColor: "#D1FAE5", color: "#065F46" }}
      >
        ✓ Report sbloccato. Te ne abbiamo inviato una copia via email a{" "}
        <span className="font-semibold">{formData.email}</span>
      </div>

      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/logos/hommi_logo.png"
              alt="Hommi"
              className="h-8 sm:h-9 w-auto"
            />
          </a>
          <a
            href="/"
            className="text-sm font-medium hover:opacity-70 transition-opacity"
            style={{ color: TEXT_BODY }}
          >
            ← Torna alla home
          </a>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8 py-12 sm:py-16 space-y-12">
          {/* SECTION 1 — Hero */}
          <section className="text-center animate-fade-in">
            <div
              className="text-xs font-semibold uppercase tracking-[0.15em]"
              style={{ color: ORANGE }}
            >
              Il tuo report personalizzato
            </div>
            <h1
              className="mt-3 font-bold tracking-tight"
              style={{
                color: DARK,
                fontWeight: 700,
                fontSize: "clamp(28px, 5vw, 40px)",
                lineHeight: 1.15,
              }}
            >
              {firstName ? `${firstName}, ` : ""}ecco quanto ti costano davvero
              i guasti
            </h1>
            <div
              className="mt-8 font-extrabold leading-none"
              style={{
                color: ORANGE,
                fontWeight: 800,
                fontSize: "clamp(56px, 11vw, 96px)",
                letterSpacing: "-0.04em",
              }}
            >
              {formatEuro(animatedTotal)}
            </div>
            <div className="mt-2 text-2xl" style={{ color: TEXT_BODY }}>
              all'anno
            </div>
            <p
              className="mt-5 text-base max-w-[520px] mx-auto"
              style={{ color: TEXT_BODY, lineHeight: 1.6 }}
            >
              Stima personalizzata sui tuoi {answers.numImmobili} immobili
              {answers.città.length > 0 && (
                <> a {answers.città.join(", ")}</>
              )}
              .
            </p>
          </section>

          {/* SECTION 2 — CTA + Calendly (in alto) */}
          <section
            className="rounded-[16px] p-6 sm:p-8 border-2"
            style={{
              backgroundColor: ACCENT,
              borderColor: ORANGE,
            }}
          >
            <div
              className="text-xs font-semibold uppercase tracking-[0.15em]"
              style={{ color: ORANGE }}
            >
              Prossimo passo
            </div>
            <h2
              className="mt-3 font-bold tracking-tight"
              style={{
                color: DARK,
                fontWeight: 700,
                fontSize: "clamp(24px, 4vw, 32px)",
                lineHeight: 1.2,
              }}
            >
              Vuoi azzerare questi{" "}
              <span style={{ color: ORANGE }}>
                {formatEuro(results.costoTotaleAnnuo)}
              </span>{" "}
              di costi nascosti?
            </h2>
            <p
              className="mt-3 text-base max-w-[540px]"
              style={{ color: TEXT_BODY, lineHeight: 1.6 }}
            >
              Prenota 30 minuti con noi. Audit gratuito del tuo primo immobile,
              demo della piattaforma, zero impegno.
            </p>

            <ul className="mt-6 space-y-2.5">
              {[
                "Audit gratuito del tuo primo immobile (valore €150)",
                "Stima personalizzata risparmio annuo",
                "Demo della piattaforma in tempo reale",
                "Ti presentiamo la nostra offerta in modo dettagliato",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-sm sm:text-base"
                  style={{ color: DARK }}
                >
                  <span
                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                    style={{ backgroundColor: SUCCESS }}
                  >
                    ✓
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Calendly CTA */}
            <div className="mt-8 flex justify-center">
              <a
                href={`https://calendly.com/simone-calderoni-hommi/30min?name=${encodeURIComponent(formData.nome || "")}&email=${encodeURIComponent(formData.email || "")}&a1=${encodeURIComponent(formData.telefono || "")}&a2=${encodeURIComponent(formData.azienda || "")}&utm_source=calcolatore&utm_medium=lovable&utm_campaign=meta-ads`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full md:w-auto px-10 py-5 rounded-[12px] text-white text-lg md:text-xl font-bold shadow-lg transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: "#E35210" }}
              >
                📅 Prenota una demo
              </a>
            </div>

            <p
              className="mt-6 text-sm text-center"
              style={{ color: TEXT_BODY }}
            >
              💬 Preferisci parlarci direttamente? Chiamaci al{" "}
              <a
                href="tel:+393759752657"
                className="font-semibold"
                style={{ color: ORANGE }}
              >
                +39 375 975 2657
              </a>{" "}
              (Simone) o{" "}
              <a
                href="tel:+393759752688"
                className="font-semibold"
                style={{ color: ORANGE }}
              >
                +39 375 975 2688
              </a>{" "}
              (Alessandro)
            </p>
          </section>

          {/* SECTION 3 — Breakdown */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {cards.map((c) => (
              <div
                key={c.title}
                className="rounded-[12px] p-6 border bg-white"
                style={{ borderColor: BORDER }}
              >
                <div className="text-2xl mb-2" aria-hidden>
                  {c.icon}
                </div>
                <div
                  className="text-sm font-semibold"
                  style={{ color: DARK }}
                >
                  {c.title}
                </div>
                <div
                  className="mt-1.5 text-2xl font-bold"
                  style={{ color: DARK, fontWeight: 700 }}
                >
                  {c.value}
                </div>
                <div className="mt-1.5 text-xs" style={{ color: TEXT_BODY }}>
                  {c.micro}
                </div>
              </div>
            ))}

            {/* Highlight card */}
            <div
              className="rounded-[12px] p-6 border-2 sm:col-span-2"
              style={{
                backgroundColor: ACCENT,
                borderColor: ORANGE,
              }}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="text-2xl mb-2" aria-hidden>
                    💰
                  </div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: ORANGE }}
                  >
                    Risparmio con Hommi
                  </div>
                  <div
                    className="mt-1.5 text-3xl font-extrabold"
                    style={{ color: ORANGE, fontWeight: 800 }}
                  >
                    {formatEuro(results.risparmio)}/anno
                  </div>
                  <div
                    className="mt-1.5 text-xs"
                    style={{ color: TEXT_BODY }}
                  >
                    Costo Hommi: {formatEuro(results.costoHommi)}/anno
                  </div>
                </div>
                <span
                  className="text-xs font-bold px-3 py-1.5 rounded-full text-white whitespace-nowrap"
                  style={{ backgroundColor: ORANGE }}
                >
                  {results.risparmioPercentuale}% di risparmio
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
