import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingFooter from "@/components/landing/LandingFooter";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

type Status =
  | "validating"
  | "valid"
  | "already"
  | "invalid"
  | "confirming"
  | "success"
  | "error";

export default function Unsubscribe() {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [status, setStatus] = useState<Status>("validating");

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON_KEY } }
        );
        const data = await res.json();
        if (data.valid) setStatus("valid");
        else if (data.reason === "already_unsubscribed") setStatus("already");
        else setStatus("invalid");
      } catch {
        setStatus("error");
      }
    })();
  }, [token]);

  const handleConfirm = async () => {
    if (!token) return;
    setStatus("confirming");
    try {
      const { data, error } = await supabase.functions.invoke(
        "handle-email-unsubscribe",
        { body: { token } }
      );
      if (error) throw error;
      if (data?.success) setStatus("success");
      else if (data?.reason === "already_unsubscribed") setStatus("already");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <LandingNavbar />
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-md w-full text-center bg-white border border-gray-200 rounded-[12px] p-10">
          {status === "validating" && (
            <p className="text-[#3F4444]">Verifica in corso…</p>
          )}
          {status === "valid" && (
            <>
              <h1 className="text-2xl font-bold text-[#3F4444] mb-3">
                Annulla iscrizione
              </h1>
              <p className="text-[#3F4444] mb-6">
                Confermi di non voler più ricevere email da Hommi?
              </p>
              <button
                onClick={handleConfirm}
                className="inline-flex items-center justify-center px-6 py-3 rounded-[10px] text-white font-bold"
                style={{ backgroundColor: "#E35210" }}
              >
                Conferma annullamento
              </button>
            </>
          )}
          {status === "confirming" && (
            <p className="text-[#3F4444]">Operazione in corso…</p>
          )}
          {status === "success" && (
            <>
              <h1 className="text-2xl font-bold text-[#3F4444] mb-3">
                Iscrizione annullata ✓
              </h1>
              <p className="text-[#3F4444]">
                Non riceverai più email da Hommi a questo indirizzo.
              </p>
            </>
          )}
          {status === "already" && (
            <>
              <h1 className="text-2xl font-bold text-[#3F4444] mb-3">
                Già annullata
              </h1>
              <p className="text-[#3F4444]">
                Questo indirizzo è già stato disiscritto.
              </p>
            </>
          )}
          {status === "invalid" && (
            <>
              <h1 className="text-2xl font-bold text-[#3F4444] mb-3">
                Link non valido
              </h1>
              <p className="text-[#3F4444]">
                Il link di annullamento non è valido o è scaduto.
              </p>
            </>
          )}
          {status === "error" && (
            <>
              <h1 className="text-2xl font-bold text-[#3F4444] mb-3">
                Si è verificato un errore
              </h1>
              <p className="text-[#3F4444]">Riprova più tardi.</p>
            </>
          )}
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
