import { useEffect, useState } from "react";

import LandingFooter from "@/components/landing/LandingFooter";

const ORANGE = "#E8501C";
const DARK = "#2C2C2C";
const ACCENT = "#FFF4ED";
const TEXT_BODY = "#4B5563";
const BORDER = "#E5E7EB";
const SUCCESS = "#10B981";
const GOOGLE_SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbwH0MP4BcOH22jXkljNKUXNWGeoxCVMfPr1A4kt_nYmnFFevWP3TMFXag4q-NBD1FfjOw/exec";

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

function deliverReportInBackground(reportData: ReportData) {
  const leadId = `${reportData.formData.email}-${reportData.timestamp}`;
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

  fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reportData),
    keepalive: true,
  }).catch((err) => console.error("❌ Errore invio Google Sheets:", err));

  fetch(`${supabaseUrl}/functions/v1/send-transactional-email`, {
    method: "POST",
    keepalive: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${supabaseKey}`,
      apikey: supabaseKey,
    },
    body: JSON.stringify({
      templateName: "report-calcolatore",
      recipientEmail: reportData.formData.email,
      idempotencyKey: `report-calcolatore-${leadId}`,
      templateData: {
        nome: reportData.formData.nome?.split(" ")[0] || "",
        numImmobili: reportData.answers.numImmobili,
        costoGuastiDiretti: reportData.results.costoGuastiDiretti,
        costoTempoPM: reportData.results.costoTempoPM,
        costoRecensioni: reportData.results.costoRecensioni,
        costoTotaleAnnuo: reportData.results.costoTotaleAnnuo,
        costoHommi: reportData.results.costoHommi,
        risparmio: reportData.results.risparmio,
        risparmioPercentuale: reportData.results.risparmioPercentuale,
      },
    }),
  }).catch((err) => console.error("❌ Errore invio email report:", err));
}

function trackLeadFromReport(reportData: ReportData) {
  const fbq = (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq;
  if (typeof fbq !== "function") return;

  const eventID =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random()}`;

  fbq(
    "track",
    "Lead",
    {
      content_name: "Calcolatore Hommi",
      content_category: "Lead Generation",
      value: 0,
      currency: "EUR",
    },
    { eventID }
  );

  if (reportData.answers.numImmobili >= 3) {
    fbq(
      "trackCustom",
      "LeadQualificato",
      {
        num_immobili: reportData.answers.numImmobili,
        citta: reportData.answers.città.join(","),
        costo_stimato: reportData.results.costoTotaleAnnuo,
        content_name: "Lead PM con 3+ immobili",
      },
      { eventID }
    );
  }
}

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
        sessionStorage.removeItem("hommi_report_pending_delivery");
        window.location.href = "/";
        return;
      }
      setData(parsed);

      const pending = sessionStorage.getItem("hommi_report_pending_delivery");
      if (pending) {
        sessionStorage.removeItem("hommi_report_pending_delivery");
        window.setTimeout(() => {
          const pendingReport = JSON.parse(pending) as ReportData;
          deliverReportInBackground(pendingReport);
          trackLeadFromReport(pendingReport);
        }, 0);
      }
    } catch {
      sessionStorage.removeItem("hommi_report_data");
      sessionStorage.removeItem("hommi_report_pending_delivery");
      window.location.href = "/";
    }
  }, []);

  // Meta pixel ViewContent
  useEffect(() => {
    if (!data) return;
    const fbq = (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq;
    if (typeof fbq !== "undefined" && typeof fbq === "function") {
      fbq("track", "ViewContent", {
        content_name: "Report Calcolatore Hommi",
        content_category: "Report Personalizzato",
        content_ids: [`report_${data.timestamp}`],
        value: data.results.costoTotaleAnnuo,
        currency: "EUR",
      });
      console.log("🎯 Pixel: ViewContent fired");
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
        <div className="max-w-[640px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <section
            className="rounded-[16px] p-8 sm:p-10 border-2 text-center animate-fade-in"
            style={{ backgroundColor: ACCENT, borderColor: ORANGE }}
          >
            <div
              className="text-xs font-semibold uppercase tracking-[0.15em]"
              style={{ color: ORANGE }}
            >
              Prossimo passo
            </div>
            <h1
              className="mt-3 font-bold tracking-tight"
              style={{
                color: DARK,
                fontWeight: 700,
                fontSize: "clamp(26px, 4.5vw, 34px)",
                lineHeight: 1.2,
              }}
            >
              {firstName ? `${firstName}, ` : ""}prenota una call con noi
            </h1>
            <p
              className="mt-4 text-base"
              style={{ color: TEXT_BODY, lineHeight: 1.6 }}
            >
              30 minuti, audit gratuito del tuo primo immobile e demo della
              piattaforma. Zero impegno.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href={`https://calendly.com/simone-calderoni-hommi/30min?name=${encodeURIComponent(formData.nome || "")}&email=${encodeURIComponent(formData.email || "")}&a1=${encodeURIComponent(formData.telefono || "")}&a2=${encodeURIComponent(formData.azienda || "")}&utm_source=calcolatore&utm_medium=lovable&utm_campaign=meta-ads`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full md:w-auto px-10 py-5 rounded-[12px] text-white text-lg md:text-xl font-bold shadow-lg transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: ORANGE }}
              >
                📅 Prenota una call
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
