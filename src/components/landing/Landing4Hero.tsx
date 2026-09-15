import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const NOTIFY_EMAIL = "simone.calderoni@hommi.it";

function notifyLead(data: Record<string, unknown>, key: string) {
  try {
    supabase.functions
      .invoke("send-transactional-email", {
        body: {
          templateName: "notifica-lead-landing4",
          recipientEmail: NOTIFY_EMAIL,
          idempotencyKey: key,
          templateData: data,
        },
      })
      .catch(() => {});
  } catch {
    /* noop */
  }
}

const GOOGLE_SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbwQurByRRtnLi2dTdLQcH-pTMa6fVYKdkhmOwNDB30BT6yGbLM3BFSmngbo9Kke0Gn-/exec";

const CALENDLY_URL =
  "https://calendly.com/simone-calderoni-hommi/30min?utm_source=landing-4&utm_medium=lovable&utm_campaign=meta-ads";

const IMMOBILI_OPTIONS = ["1-5", "6-15", "16-40", "più di 40"];

function sendToSheets(payload: Record<string, unknown>) {
  try {
    fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    }).catch(() => {});
  } catch {
    /* noop */
  }
}

export default function Landing4Hero() {
  const [mounted, setMounted] = useState(false);
  const [immobili, setImmobili] = useState("");
  const [nome, setNome] = useState("");
  const [telefono, setTelefono] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [citta, setCitta] = useState("");
  const [extraSaved, setExtraSaved] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!immobili || !nome.trim() || !email.trim() || !telefono.trim()) return;

    // --- Tracking: Meta Pixel Lead + LinkedIn (invariato, allo submit del form) ---
    const w = window as unknown as {
      fbq?: (...a: unknown[]) => void;
      lintrk?: (...a: unknown[]) => void;
    };
    if (typeof w.fbq === "function") {
      w.fbq("track", "Lead", {
        content_name: "Landing 4 - Attiva 3 mesi di prova",
        content_category: immobili,
      });
    }
    if (typeof w.lintrk === "function") {
      w.lintrk("track");
    }

    const lead = {
      source: "landing-4-hero",
      nome: nome.trim(),
      email: email.trim(),
      telefono: telefono.trim(),
      numImmobili: immobili,
      citta: "",
      timestamp: new Date().toISOString(),
    };

    sendToSheets(lead);
    notifyLead(lead, `l4-lead-${email.trim().toLowerCase()}-${Date.now()}`);

    // piccolo margine per lasciar partire le richieste prima del redirect
    await new Promise((r) => setTimeout(r, 400));
    window.location.href = "https://www.hommi.it/thank-you";
  };

  const handleExtra = (e: React.FormEvent) => {
    e.preventDefault();
    sendToSheets({
      source: "landing-4-hero-step2",
      nome: nome.trim(),
      telefono: telefono.trim(),
      numImmobili: immobili,
      email: email.trim(),
      citta: citta.trim(),
      timestamp: new Date().toISOString(),
    });
    setExtraSaved(true);
  };

  const inputClass =
    "w-full rounded-[10px] border border-border bg-white px-4 py-3 text-[15px] text-dark placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition";

  return (
    <section className="relative bg-white overflow-hidden rounded-b-[10px]">
      <div className="max-w-site mx-auto px-6 pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-10 lg:gap-14 items-center">
          {/* Left — copy */}
          <div
            className={`text-center lg:text-left hero-text-entrance ${mounted ? "hero-text-visible" : ""}`}
          >
            <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-primary mb-4">
              Milano · Monza · Como · Lecco · Torino
            </p>
            <h1 className="font-display text-[34px] md:text-[48px] lg:text-[54px] font-bold text-dark leading-[1.07] tracking-[-0.025em]">
              Il tuo manutentore
              <br />
              è bravissimo.
              <br />
              Il problema: è uno solo.
            </h1>
            <p className="mt-6 text-secondary text-[15px] md:text-[18px] max-w-[520px] mx-auto lg:mx-0 leading-[1.7]">
              Hommi è la rete di tecnici che non va mai in ferie. Intervento entro 4 ore, prezzo
              chiaro prima di iniziare, tutto tracciato. Tu non alzi il telefono.
            </p>

            <div className="mt-8 hidden lg:block max-w-[460px]">
              <p className="text-[14px] text-secondary leading-relaxed">
                &ldquo;Prima ero io il numero di emergenza. Ora apro solo la notifica di
                chiusura.&rdquo;
              </p>
              <p className="text-[11px] text-secondary/50 mt-1">
                <span className="font-semibold text-dark/70">Davide</span> · Host, 12 appartamenti a
                Milano
              </p>
            </div>
          </div>

          {/* Right — form card */}
          <div id="hero-form" className="scroll-mt-28 w-full">
            <div className="bg-white border border-border rounded-2xl shadow-lg shadow-dark/5 p-6 md:p-7">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="l4-immobili"
                      className="block text-[13px] font-semibold text-dark mb-1.5"
                    >
                      Quanti immobili gestisci?
                    </label>
                    <select
                      id="l4-immobili"
                      required
                      value={immobili}
                      onChange={(e) => setImmobili(e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Seleziona</option>
                      {IMMOBILI_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="l4-nome"
                      className="block text-[13px] font-semibold text-dark mb-1.5"
                    >
                      Nome
                    </label>
                    <input
                      id="l4-nome"
                      type="text"
                      required
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className={inputClass}
                      placeholder="Il tuo nome"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="l4-email"
                      className="block text-[13px] font-semibold text-dark mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="l4-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                      placeholder="La tua email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="l4-telefono"
                      className="block text-[13px] font-semibold text-dark mb-1.5"
                    >
                      Telefono
                    </label>
                    <input
                      id="l4-telefono"
                      type="tel"
                      required
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      className={inputClass}
                      placeholder="+39 ..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-semibold text-[15px] rounded-[10px] py-3.5 hover:bg-primary-hover transition-colors duration-200 cursor-pointer shadow-lg shadow-primary/20"
                  >
                    Attiva 3 mesi di prova
                  </button>
                  <p className="text-[12px] text-secondary/70 text-center leading-relaxed">
                    Nessuna carta di credito. Ti richiamiamo entro un giorno lavorativo.
                  </p>
                </form>
              ) : (
                <div className="space-y-5">
                  <div>
                    <h2 className="font-display text-[20px] font-bold text-dark leading-snug">
                      Ricevuto, {nome.trim()}. Ti richiamiamo entro un giorno lavorativo.
                    </h2>
                  </div>

                  {!extraSaved ? (
                    <form onSubmit={handleExtra} className="space-y-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClass}
                        placeholder="Email"
                      />
                      <input
                        type="text"
                        value={citta}
                        onChange={(e) => setCitta(e.target.value)}
                        className={inputClass}
                        placeholder="Dove si trovano gli immobili?"
                      />
                      <button
                        type="submit"
                        className="w-full border border-border text-dark font-semibold text-[14px] rounded-[10px] py-3 hover:border-dark/30 transition-colors duration-200 cursor-pointer"
                      >
                        Invia
                      </button>
                    </form>
                  ) : (
                    <p className="text-[13px] text-secondary">Grazie, abbiamo tutto.</p>
                  )}

                  <div className="pt-1 border-t border-border">
                    <p className="text-[13px] text-secondary mt-4 mb-3">
                      Se preferisci scegliere tu l&apos;orario, prenota qui sotto.
                    </p>
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-primary text-white font-semibold text-[15px] rounded-[10px] py-3.5 hover:bg-primary-hover transition-colors duration-200 cursor-pointer"
                    >
                      📅 Prenota una call
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
