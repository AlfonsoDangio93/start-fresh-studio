import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, X, Loader2 } from "lucide-react";

const ORANGE = "#E8501C";
const ORANGE_HOVER = "#C9410F";
const DARK = "#2C2C2C";
const ACCENT = "#FFF4ED";
const TEXT_BODY = "#4B5563";
const BORDER = "#E5E7EB";

const formatEuro = (n: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);

function calculateResults(answers: Answers): Results {
  const costoMedioIntervento = 130;
  const valoreOraPM = 35;
  const impattoRecensione = 400;

  const guastiAnno = (answers.guastiMese ?? 0) * 12;
  const costoGuastiDiretti = Math.round(
    guastiAnno * costoMedioIntervento * answers.numImmobili
  );

  const oreAnnoPM = (answers.oreSettimana ?? 0) * 52;
  const costoTempoPM = Math.round(oreAnnoPM * valoreOraPM);

  const costoRecensioni = Math.round(
    (answers.recensioniNegative ?? 0) * impattoRecensione * answers.numImmobili
  );

  const costoTotaleAnnuo =
    costoGuastiDiretti + costoTempoPM + costoRecensioni;
  const costoHommi = Math.round(29.9 * 12 * answers.numImmobili);
  const risparmio = costoTotaleAnnuo - costoHommi;
  const risparmioPercentuale =
    costoTotaleAnnuo > 0
      ? Math.round((risparmio / costoTotaleAnnuo) * 100)
      : 0;

  return {
    costoGuastiDiretti,
    costoTempoPM,
    costoRecensioni,
    costoTotaleAnnuo,
    costoHommi,
    risparmio,
    risparmioPercentuale,
  };
}

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

interface Props {
  onExit: () => void;
}

const TOTAL_QUESTION_STEPS = 5;

export default function Calcolatore({ onExit }: Props) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>({
    numImmobili: 5,
    città: [],
    guastiMese: null,
    recensioniNegative: null,
    oreSettimana: null,
  });
  const [results, setResults] = useState<Results | null>(null);

  const canAdvance = (() => {
    switch (step) {
      case 1:
        return answers.numImmobili > 0;
      case 2:
        return answers.città.length > 0;
      case 3:
        return answers.guastiMese !== null;
      case 4:
        return answers.recensioniNegative !== null;
      case 5:
        return answers.oreSettimana !== null;
      default:
        return false;
    }
  })();

  const handleCalculate = () => {
    const calculatedResults = calculateResults(answers);
    console.log("Risposte utente:", answers);
    console.log("Risultati calcolati:", calculatedResults);
    setResults(calculatedResults);
    setStep(6);
    setTimeout(() => setStep(7), 2500);
  };

  const goNext = () => {
    if (!canAdvance) return;
    if (step === 5) {
      handleCalculate();
      return;
    }
    if (step < 5) setStep(step + 1);
  };
  const goBack = () => {
    if (step > 1 && step <= 5) setStep(step - 1);
  };

  const handleRestart = () => {
    setAnswers({
      numImmobili: 5,
      città: [],
      guastiMese: null,
      recensioniNegative: null,
      oreSettimana: null,
    });
    setResults(null);
    setStep(1);
  };

  const progressPct =
    (Math.min(step, TOTAL_QUESTION_STEPS) / TOTAL_QUESTION_STEPS) * 100;

  return (
    <div
      className="fixed inset-0 z-[100] bg-white flex flex-col animate-fade-in"
      style={{ fontFamily: "'Inter', system-ui, sans-serif", color: DARK }}
    >
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center gap-4">
          <a
            href="/"
            className="text-xl font-extrabold tracking-tight shrink-0"
            style={{ color: ORANGE }}
          >
            hommi
          </a>

          {step <= TOTAL_QUESTION_STEPS && (
            <div className="flex-1 max-w-md mx-auto flex items-center gap-3">
              <span
                className="text-xs font-semibold whitespace-nowrap hidden sm:inline"
                style={{ color: TEXT_BODY }}
              >
                Step {step} di {TOTAL_QUESTION_STEPS}
              </span>
              <div
                className="flex-1 h-1.5 rounded-full overflow-hidden"
                style={{ backgroundColor: "#F3F4F6" }}
              >
                <div
                  className="h-full transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${progressPct}%`, backgroundColor: ORANGE }}
                />
              </div>
            </div>
          )}

          <button
            onClick={onExit}
            className="ml-auto flex items-center gap-1.5 text-sm font-medium hover:opacity-70 transition-opacity shrink-0"
            style={{ color: TEXT_BODY }}
          >
            <X size={16} />
            Esci
          </button>
        </div>
      </header>

      {/* Body */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8 py-12 sm:py-20">
          <div key={step} className="animate-fade-in">
            {step === 1 && <Step1 answers={answers} setAnswers={setAnswers} />}
            {step === 2 && <Step2 answers={answers} setAnswers={setAnswers} />}
            {step === 3 && <Step3 answers={answers} setAnswers={setAnswers} />}
            {step === 4 && <Step4 answers={answers} setAnswers={setAnswers} />}
            {step === 5 && <Step5 answers={answers} setAnswers={setAnswers} />}
            {step === 6 && <Step6Loading />}
            {step === 7 && results && (
              <Step7Result
                results={results}
                answers={answers}
                onSubmitted={(data) => {
                  setFormData(data);
                  setStep(8);
                }}
              />
            )}
            {step === 8 && (
              <Step8ThankYou
                firstName={formData?.nome.split(" ")[0] ?? ""}
                email={formData?.email ?? ""}
              />
            )}
          </div>
        </div>
      </main>

      {/* Footer nav */}
      {step <= TOTAL_QUESTION_STEPS && (
        <footer className="sticky bottom-0 bg-white border-t border-gray-100">
          <div className="max-w-[720px] mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
            <button
              onClick={goBack}
              disabled={step === 1}
              className="flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-[12px] transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50"
              style={{ color: TEXT_BODY }}
            >
              <ArrowLeft size={16} />
              Indietro
            </button>

            <button
              onClick={goNext}
              disabled={!canAdvance}
              className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-[12px] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:-translate-y-0.5"
              style={{ backgroundColor: ORANGE }}
              onMouseEnter={(e) => {
                if (!canAdvance) return;
                e.currentTarget.style.backgroundColor = ORANGE_HOVER;
              }}
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = ORANGE)
              }
            >
              {step === TOTAL_QUESTION_STEPS ? "Calcola il risultato" : "Avanti"}
              <ArrowRight size={16} />
            </button>
          </div>
        </footer>
      )}
    </div>
  );
}

/* ---------- Reusable bits ---------- */

function Question({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <h2
        className="text-2xl sm:text-[32px] font-bold tracking-tight"
        style={{ color: DARK, fontWeight: 700, lineHeight: 1.2 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base" style={{ color: TEXT_BODY }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function OptionCard({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative text-left p-5 sm:p-6 rounded-[12px] border-2 transition-all duration-150 hover:-translate-y-0.5"
      style={{
        borderColor: selected ? ORANGE : BORDER,
        backgroundColor: selected ? ACCENT : "#fff",
        color: DARK,
      }}
    >
      <span className="font-medium text-base sm:text-lg">{children}</span>
      {selected && (
        <span
          className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center"
          style={{ backgroundColor: ORANGE, color: "#fff" }}
        >
          <Check size={14} strokeWidth={3} />
        </span>
      )}
    </button>
  );
}

/* ---------- Steps ---------- */

function Step1({
  answers,
  setAnswers,
}: {
  answers: Answers;
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>;
}) {
  const value = answers.numImmobili;
  const pct = ((value - 1) / (50 - 1)) * 100;
  return (
    <>
      <Question title="Quanti immobili gestisci attualmente?" />
      <div className="text-center mb-8">
        <div
          className="font-extrabold leading-none"
          style={{
            color: ORANGE,
            fontSize: "clamp(72px, 12vw, 96px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
          }}
        >
          {value}
          {value === 50 && "+"}
        </div>
        <div
          className="mt-2 text-2xl"
          style={{ color: TEXT_BODY }}
        >
          immobili
        </div>
      </div>

      <div className="px-2">
        <input
          type="range"
          min={1}
          max={50}
          value={value}
          onChange={(e) =>
            setAnswers((a) => ({ ...a, numImmobili: Number(e.target.value) }))
          }
          className="calc-slider w-full"
          style={
            {
              background: `linear-gradient(to right, ${ORANGE} 0%, ${ORANGE} ${pct}%, #F3F4F6 ${pct}%, #F3F4F6 100%)`,
            } as React.CSSProperties
          }
        />
        <div
          className="flex justify-between mt-3 text-sm font-medium"
          style={{ color: TEXT_BODY }}
        >
          <span>1</span>
          <span>50+</span>
        </div>
      </div>

      <style>{`
        .calc-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 8px;
          border-radius: 999px;
          outline: none;
        }
        .calc-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: ${ORANGE};
          cursor: pointer;
          border: 4px solid #fff;
          box-shadow: 0 4px 12px rgba(232, 80, 28, 0.35);
          transition: transform 0.15s ease;
        }
        .calc-slider::-webkit-slider-thumb:hover { transform: scale(1.1); }
        .calc-slider::-moz-range-thumb {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: ${ORANGE};
          cursor: pointer;
          border: 4px solid #fff;
          box-shadow: 0 4px 12px rgba(232, 80, 28, 0.35);
        }
      `}</style>
    </>
  );
}

const CITTA = ["Milano", "Torino", "Como", "Monza", "Roma", "Altre città"];

function Step2({
  answers,
  setAnswers,
}: {
  answers: Answers;
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>;
}) {
  const toggle = (c: string) =>
    setAnswers((a) => ({
      ...a,
      città: a.città.includes(c)
        ? a.città.filter((x) => x !== c)
        : [...a.città, c],
    }));

  return (
    <>
      <Question
        title="In quali città operi principalmente?"
        subtitle="Seleziona tutte quelle in cui hai immobili"
      />
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {CITTA.map((c) => (
          <OptionCard
            key={c}
            selected={answers.città.includes(c)}
            onClick={() => toggle(c)}
          >
            {c}
          </OptionCard>
        ))}
      </div>
    </>
  );
}

function Step3({
  answers,
  setAnswers,
}: {
  answers: Answers;
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>;
}) {
  const opts = [
    { label: "1-2 guasti", value: 1.5 },
    { label: "3-5 guasti", value: 4 },
    { label: "6-10 guasti", value: 8 },
    { label: "Più di 10 guasti", value: 12 },
  ];
  return (
    <>
      <Question title="Quanti guasti gestisci in media al mese sui tuoi immobili?" />
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {opts.map((o) => (
          <OptionCard
            key={o.label}
            selected={answers.guastiMese === o.value}
            onClick={() => setAnswers((a) => ({ ...a, guastiMese: o.value }))}
          >
            {o.label}
          </OptionCard>
        ))}
      </div>
    </>
  );
}

function Step4({
  answers,
  setAnswers,
}: {
  answers: Answers;
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>;
}) {
  const opts = [
    { label: "Sì, è un problema ricorrente", value: 4 },
    { label: "Sì, ma raramente", value: 1.5 },
    { label: "Non che io sappia", value: 0 },
  ];
  return (
    <>
      <Question title="Hai mai ricevuto recensioni negative legate a guasti non gestiti in tempo?" />
      <div className="flex flex-col gap-3 sm:gap-4">
        {opts.map((o) => (
          <OptionCard
            key={o.label}
            selected={answers.recensioniNegative === o.value}
            onClick={() =>
              setAnswers((a) => ({ ...a, recensioniNegative: o.value }))
            }
          >
            {o.label}
          </OptionCard>
        ))}
      </div>
    </>
  );
}

function Step5({
  answers,
  setAnswers,
}: {
  answers: Answers;
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>;
}) {
  const opts = [
    { label: "1-2 ore", value: 1.5 },
    { label: "3-5 ore", value: 4 },
    { label: "6-10 ore", value: 8 },
    { label: "Più di 10 ore", value: 12 },
  ];
  return (
    <>
      <Question title="Quante ore alla settimana dedichi alla gestione tecnica e ai guasti?" />
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {opts.map((o) => (
          <OptionCard
            key={o.label}
            selected={answers.oreSettimana === o.value}
            onClick={() => setAnswers((a) => ({ ...a, oreSettimana: o.value }))}
          >
            {o.label}
          </OptionCard>
        ))}
      </div>
    </>
  );
}

function Step6Loading() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 animate-fade-in">
      <Loader2
        size={64}
        className="animate-spin mb-8"
        style={{ color: ORANGE }}
      />
      <h2
        className="text-2xl sm:text-[32px] font-bold tracking-tight"
        style={{ color: DARK, lineHeight: 1.2 }}
      >
        Stiamo calcolando il tuo report personalizzato...
      </h2>
      <p className="mt-3 text-base sm:text-lg" style={{ color: TEXT_BODY }}>
        60 secondi e ci siamo.
      </p>
    </div>
  );
}

function Step7Placeholder({
  results,
  onRestart,
}: {
  results: Results;
  onRestart: () => void;
}) {
  return (
    <div className="text-center py-12 animate-fade-in">
      <h1
        className="text-3xl sm:text-5xl font-extrabold tracking-tight"
        style={{ color: "#10B981", lineHeight: 1.1 }}
      >
        ✅ Calcolo completato!
      </h1>
      <p
        className="mt-6 text-xl sm:text-2xl font-semibold"
        style={{ color: DARK }}
      >
        Costo totale annuo stimato:{" "}
        <span style={{ color: ORANGE }}>
          {formatEuro(results.costoTotaleAnnuo)}
        </span>
      </p>
      <button
        onClick={onRestart}
        className="mt-10 inline-flex items-center gap-2 text-white font-semibold text-base px-8 py-3.5 rounded-[12px] transition-all duration-200 hover:-translate-y-0.5"
        style={{ backgroundColor: ORANGE }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = ORANGE_HOVER)
        }
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ORANGE)}
      >
        Ricomincia
      </button>
    </div>
  );
}

export { formatEuro };
