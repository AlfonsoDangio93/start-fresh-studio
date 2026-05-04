import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  X,
  Loader2,
  Lock,
  CheckCircle2,
} from "lucide-react";

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

  // guastiMese, oreSettimana e recensioniNegative sono già totali
  // aggregati su tutti gli immobili dichiarati: NON moltiplicare per numImmobili.
  const guastiAnno = (answers.guastiMese ?? 0) * 12;
  const costoGuastiDiretti = Math.round(guastiAnno * costoMedioIntervento);

  const oreAnnoPM = (answers.oreSettimana ?? 0) * 52;
  const costoTempoPM = Math.round(oreAnnoPM * valoreOraPM);

  const costoRecensioni = Math.round(
    (answers.recensioniNegative ?? 0) * impattoRecensione
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

type ContactForm = {
  nome: string;
  email: string;
  telefono: string;
  azienda: string;
};

const SUCCESS = "#10B981";

const contactSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, "Inserisci nome e cognome")
    .max(100, "Massimo 100 caratteri"),
  email: z
    .string()
    .trim()
    .email("Email non valida")
    .max(255, "Massimo 255 caratteri"),
  telefono: z
    .string()
    .trim()
    .min(8, "Numero non valido")
    .max(20, "Numero troppo lungo")
    .regex(/^[+\d\s().-]+$/, "Solo numeri e simboli telefonici"),
  azienda: z.string().trim().max(150, "Massimo 150 caratteri").optional(),
  consent: z
    .boolean()
    .refine((v) => v === true, "Devi accettare la Privacy Policy"),
});

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
  const [formData, setFormData] = useState<ContactForm | null>(null);

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
          <a href="/calcolatore" className="flex items-center shrink-0">
            <img src="/logos/hommi_logo.png" alt="Hommi" className="h-8 sm:h-9 w-auto" />
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
              <Step7Gate
                results={results}
                answers={answers}
                onSubmitted={(data) => {
                  setFormData(data);
                  setStep(8);
                }}
              />
            )}
            {step === 8 && results && (
              <Step8Report
                results={results}
                answers={answers}
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

/* ---------- Step 7: Hard-gated form ---------- */

function Step7Gate({
  results,
  answers,
  onSubmitted,
}: {
  results: Results;
  answers: Answers;
  onSubmitted: (data: ContactForm) => void;
}) {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefono: "",
    azienda: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as string;
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    const data: ContactForm = {
      nome: form.nome.trim(),
      email: form.email.trim(),
      telefono: form.telefono.trim(),
      azienda: (form.azienda || "").trim(),
    };
    console.log("Lead submitted:", { formData: data, results, answers });
    setTimeout(() => {
      setSubmitting(false);
      onSubmitted(data);
    }, 1500);
  };

  const teaserCards = [
    { icon: "💸", title: "Costo annuo guasti" },
    { icon: "⏱️", title: "Tempo perso valorizzato" },
    { icon: "⭐", title: "Impatto recensioni" },
    { icon: "💰", title: "Risparmio con Hommi", highlight: true },
  ];

  return (
    <div className="max-w-[600px] mx-auto space-y-8 animate-fade-in">
      {/* TOP teaser */}
      <div className="text-center">
        <div
          className="text-xs font-semibold uppercase tracking-[0.15em]"
          style={{ color: ORANGE }}
        >
          Il tuo report è pronto
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
          Abbiamo <span style={{ color: ORANGE }}>calcolato</span> il tuo
          profilo costi
        </h1>
        <p
          className="mt-4 text-base sm:text-lg max-w-[480px] mx-auto"
          style={{ color: TEXT_BODY, lineHeight: 1.6 }}
        >
          Lascia i tuoi contatti per accedere al report personalizzato con la
          stima dei costi annui dei guasti nei tuoi {answers.numImmobili}{" "}
          {answers.numImmobili === 1 ? "immobile" : "immobili"}.
        </p>
      </div>

      {/* Teaser cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {teaserCards.map((c) => (
          <div
            key={c.title}
            className="rounded-[12px] p-4 border"
            style={{
              backgroundColor: c.highlight ? ACCENT : "#fff",
              borderColor: c.highlight ? "rgba(232,80,28,0.3)" : BORDER,
            }}
          >
            <div className="text-xl mb-1.5" aria-hidden>
              {c.icon}
            </div>
            <div
              className="text-sm font-semibold"
              style={{ color: DARK }}
            >
              {c.title}
            </div>
            <div
              className="mt-1 text-2xl tracking-widest"
              style={{
                color: "#D1D5DB",
                fontFamily:
                  "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontWeight: 600,
              }}
              aria-hidden
            >
              € • • • • •
            </div>
          </div>
        ))}
      </div>

      {/* Form */}
      <div
        className="rounded-[16px] p-6 sm:p-8 border bg-white"
        style={{
          borderColor: BORDER,
          boxShadow: "0 10px 30px -12px rgba(0,0,0,0.08)",
        }}
      >
        <h3
          className="text-[22px] font-bold"
          style={{ color: DARK, fontWeight: 700 }}
        >
          Sblocca il tuo report
        </h3>
        <p className="mt-2 text-[15px]" style={{ color: TEXT_BODY }}>
          Ricevilo via email entro 5 minuti. Niente spam, promesso.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
          <FormField
            id="nome"
            label="Nome e cognome"
            placeholder="Mario Rossi"
            value={form.nome}
            onChange={(v) => update("nome", v)}
            error={errors.nome}
            required
          />
          <FormField
            id="email"
            type="email"
            label="Email aziendale"
            placeholder="mario@tuaazienda.it"
            value={form.email}
            onChange={(v) => update("email", v)}
            error={errors.email}
            required
          />
          <FormField
            id="telefono"
            type="tel"
            label="Telefono"
            placeholder="+39 333 1234567"
            value={form.telefono}
            onChange={(v) => update("telefono", v)}
            error={errors.telefono}
            required
          />
          <FormField
            id="azienda"
            label="Nome azienda (opzionale)"
            placeholder="Es. Rossi Property Management"
            value={form.azienda}
            onChange={(v) => update("azienda", v)}
            error={errors.azienda}
          />

          <label
            className="flex items-start gap-2.5 cursor-pointer text-xs"
            style={{ color: DARK }}
          >
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => update("consent", e.target.checked)}
              className="mt-0.5 w-4 h-4 cursor-pointer accent-[color:var(--orange,#E8501C)]"
            />
            <span>
              Acconsento al trattamento dei dati personali secondo la{" "}
              <a
                href="#"
                className="font-semibold underline"
                style={{ color: ORANGE }}
              >
                Privacy Policy
              </a>
              .
            </span>
          </label>
          {errors.consent && (
            <p className="text-xs" style={{ color: "#EF4444" }}>
              {errors.consent}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full min-h-[56px] flex items-center justify-center gap-2 text-white px-6 py-4 rounded-[12px] transition-all duration-200 disabled:opacity-70 enabled:hover:-translate-y-0.5"
            style={{
              backgroundColor: ORANGE,
              fontSize: 18,
              fontWeight: 600,
            }}
            onMouseEnter={(e) => {
              if (submitting) return;
              e.currentTarget.style.backgroundColor = ORANGE_HOVER;
            }}
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = ORANGE)
            }
          >
            {submitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sblocco in corso...
              </>
            ) : (
              <>🔓 Sblocca il report personalizzato →</>
            )}
          </button>
          <p className="text-xs text-center" style={{ color: TEXT_BODY }}>
            I tuoi dati restano riservati. Mai venduti.
          </p>
        </form>
      </div>
    </div>
  );
}

function FormField({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold mb-1.5"
        style={{ color: DARK }}
      >
        {label}
        {required && " *"}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full min-h-[48px] px-4 py-3 rounded-[12px] border bg-white text-base outline-none transition-colors focus:border-[#E8501C]"
        style={{ borderColor: error ? "#EF4444" : BORDER }}
      />
      {error && (
        <p className="mt-1 text-xs" style={{ color: "#EF4444" }}>
          {error}
        </p>
      )}
    </div>
  );
}

/* ---------- Step 8: Full report ---------- */

function Step8Report({
  results,
  answers,
  email,
}: {
  results: Results;
  answers: Answers;
  email: string;
}) {
  const animatedTotal = useCountUp(results.costoTotaleAnnuo, 1500);
  const guastiAnno = (answers.guastiMese ?? 0) * 12;
  const oreAnnoPM = (answers.oreSettimana ?? 0) * 52;

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
    {
      icon: "💰",
      title: "Risparmio con Hommi",
      value: `${formatEuro(results.risparmio)}/anno (${results.risparmioPercentuale}%)`,
      micro: `Costo Hommi: ${formatEuro(results.costoHommi)}/anno`,
      highlight: true,
    },
  ];

  return (
    <div className="max-w-[720px] mx-auto space-y-10 animate-fade-in">
      {/* Banner success */}
      <div
        className="-mx-5 sm:-mx-8 px-5 sm:px-8 py-3 text-sm sm:text-base text-center font-medium"
        style={{ backgroundColor: "#D1FAE5", color: "#065F46" }}
      >
        ✓ Report sbloccato. Ti abbiamo inviato una copia via email.
      </div>

      {/* Hero result */}
      <section className="text-center">
        <div
          className="text-xs font-semibold uppercase tracking-[0.15em]"
          style={{ color: ORANGE }}
        >
          Il tuo risultato personalizzato
        </div>
        <h1
          className="mt-3 font-bold tracking-tight"
          style={{
            color: DARK,
            fontWeight: 700,
            fontSize: "clamp(26px, 4vw, 32px)",
            lineHeight: 1.2,
          }}
        >
          Ecco quanto ti costano davvero i guasti
        </h1>
        <div
          className="mt-6 font-extrabold leading-none"
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
          className="mt-4 text-base max-w-[520px] mx-auto"
          style={{ color: TEXT_BODY, lineHeight: 1.6 }}
        >
          Stima personalizzata sui tuoi {answers.numImmobili} immobili
          {answers.città.length > 0 && <> a {answers.città.join(", ")}</>}.
        </p>
      </section>

      {/* Breakdown */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-[12px] p-5 border"
            style={{
              backgroundColor: c.highlight ? ACCENT : "#fff",
              borderColor: c.highlight ? ORANGE : BORDER,
            }}
          >
            <div className="text-xl mb-1.5" aria-hidden>
              {c.icon}
            </div>
            <div
              className="text-sm font-semibold"
              style={{ color: c.highlight ? ORANGE : DARK }}
            >
              {c.title}
            </div>
            <div
              className="mt-1.5 text-2xl font-bold"
              style={{
                color: c.highlight ? ORANGE : DARK,
                fontWeight: 700,
              }}
            >
              {c.value}
            </div>
            <div className="mt-1.5 text-xs" style={{ color: TEXT_BODY }}>
              {c.micro}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Demo */}
      <section
        className="rounded-[16px] p-7 sm:p-10 border-2 text-center"
        style={{
          backgroundColor: ACCENT,
          borderColor: ORANGE,
        }}
      >
        <h2
          className="font-bold tracking-tight"
          style={{
            color: DARK,
            fontWeight: 700,
            fontSize: "clamp(22px, 3vw, 28px)",
            lineHeight: 1.2,
          }}
        >
          🚀 Vuoi azzerare questi costi?
        </h2>
        <p
          className="mt-3 text-base max-w-[520px] mx-auto"
          style={{ color: TEXT_BODY, lineHeight: 1.6 }}
        >
          Ti facciamo un audit gratuito del tuo primo immobile e ti mostriamo
          esattamente come Hommi funzionerebbe nel tuo caso specifico.
        </p>
        <a
          href="https://calendly.com/hommi/demo"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 w-full sm:max-w-md mx-auto flex items-center justify-center gap-2 text-white font-semibold text-base sm:text-lg px-6 py-4 rounded-[12px] transition-all duration-200 hover:-translate-y-0.5"
          style={{ backgroundColor: ORANGE }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = ORANGE_HOVER)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = ORANGE)
          }
        >
          Prenota la tua demo gratuita →
        </a>
        <p
          className="mt-4 text-sm"
          style={{ color: TEXT_BODY }}
        >
          ✓ 6 property manager ci hanno scelto · ✓ 90 immobili gestiti · ✓ 4
          città attive
        </p>
      </section>

      {/* Reassurance */}
      <p className="text-sm text-center pb-6" style={{ color: TEXT_BODY }}>
        Il report dettagliato in PDF è arrivato all'indirizzo{" "}
        <span style={{ color: DARK, fontWeight: 600 }}>{email}</span>. Controlla
        anche lo spam.
      </p>
    </div>
  );
}

export { formatEuro };
