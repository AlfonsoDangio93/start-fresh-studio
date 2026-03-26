import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import LandingFooter from "@/components/landing/LandingFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const SPECIALIZZAZIONI = [
  "Idraulica",
  "Elettricità",
  "Sicurezza e video-sorveglianza",
  "Riscaldamento / Condizionamento",
  "Fabbro",
  "Installazioni (montaggio arredi/elettrodomestici)",
  "Tinteggiatura",
  "Interventi con certificazioni",
];

const AREE = [
  "Milano Nord",
  "Milano Centro",
  "Milano Sud",
  "Milano Est",
  "Milano Ovest",
  "Como",
  "Monza",
  "Torino",
];

export default function PerManutentoriDomanda() {
  const { toast } = useToast();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cellulare, setCellulare] = useState("");
  const [interventiSettimana, setInterventiSettimana] = useState("");
  const [specializzazioni, setSpecializzazioni] = useState<string[]>([]);
  const [area, setArea] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleSpecializzazione = (s: string) => {
    setSpecializzazioni((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !email.trim() || !cellulare.trim() || !interventiSettimana || specializzazioni.length === 0 || !area) {
      toast({
        title: "Compila tutti i campi",
        description: "Tutti i campi sono obbligatori per procedere.",
        variant: "destructive",
      });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast({
        title: "Email non valida",
        description: "Inserisci un indirizzo email valido.",
        variant: "destructive",
      });
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background pt-28 pb-20">
          <div className="max-w-xl mx-auto px-6 text-center">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Perfetto, ci siamo quasi!
              </h1>
              <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                Prenota una call con il team Hommi per completare la tua candidatura e iniziare a ricevere incarichi nella tua zona.
              </p>
              <a
                href="https://calendar.app.google/vTw7d2fB252MSwL48"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full text-base font-semibold rounded-xl h-12">
                  Prenota la tua call
                </Button>
              </a>
            </div>
          </div>
        </main>
        <LandingFooter />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-28 pb-20">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-10">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Unisciti alla rete Hommi
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed">
              Compila il modulo per candidarti come tecnico manutentore nella tua zona.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm space-y-6 overflow-visible">
            {/* Nome e Cognome */}
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-foreground font-medium">Nome e Cognome *</Label>
              <Input
                id="nome"
                placeholder="Mario Rossi"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                maxLength={100}
                className="rounded-xl"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="mario@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                className="rounded-xl"
              />
            </div>

            {/* Cellulare */}
            <div className="space-y-2">
              <Label htmlFor="cellulare" className="text-foreground font-medium">Cellulare *</Label>
              <Input
                id="cellulare"
                type="tel"
                placeholder="+39 333 1234567"
                value={cellulare}
                onChange={(e) => setCellulare(e.target.value)}
                maxLength={20}
                className="rounded-xl"
              />
            </div>

            {/* Interventi a settimana */}
            <div className="space-y-2">
              <Label htmlFor="interventi" className="text-foreground font-medium">
                Quanti interventi puoi gestire a settimana? *
              </Label>
              <Select value={interventiSettimana} onValueChange={setInterventiSettimana}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Seleziona..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-3">1 – 3</SelectItem>
                  <SelectItem value="4-7">4 – 7</SelectItem>
                  <SelectItem value="8-15">8 – 15</SelectItem>
                  <SelectItem value="15+">Più di 15</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Specializzazioni */}
            <div className="space-y-3">
              <Label className="text-foreground font-medium">Settori di specializzazione *</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SPECIALIZZAZIONI.map((s) => (
                  <label
                    key={s}
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                      specializzazioni.includes(s)
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-muted-foreground/30"
                    }`}
                  >
                    <Checkbox
                      checked={specializzazioni.includes(s)}
                      onCheckedChange={() => toggleSpecializzazione(s)}
                    />
                    <span className="text-sm text-foreground">{s}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Area */}
            <div className="space-y-2">
              <Label htmlFor="area" className="text-foreground font-medium">In quale area operi? *</Label>
              <Select value={area} onValueChange={setArea}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Seleziona la tua zona..." />
                </SelectTrigger>
                <SelectContent>
                  {AREE.map((a) => (
                    <SelectItem key={a} value={a}>{a}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Non trovi la tua città? Hommi non opera ancora nella tua zona, ma stiamo crescendo! Seguici su{" "}
                <a href="https://www.linkedin.com/company/hommi" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">LinkedIn</a>,{" "}
                <a href="https://www.instagram.com/hommi" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">Instagram</a> e{" "}
                <a href="https://www.facebook.com/hommi" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">Facebook</a>{" "}
                per rimanere aggiornato.
              </p>
            </div>

            {/* Submit */}
            <Button type="submit" size="lg" className="w-full text-base font-semibold rounded-xl h-12">
              Invia candidatura
            </Button>
          </form>
        </div>
      </main>
      <LandingFooter />
    </>
  );
}
