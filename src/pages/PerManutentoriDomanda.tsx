import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import LandingFooter from "@/components/landing/LandingFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  Droplets,
  Zap,
  ShieldCheck,
  Thermometer,
  KeyRound,
  Wrench,
  Paintbrush,
  FileCheck,
} from "lucide-react";

import cityMilano from "@/assets/city-milano.png";
import cityMonza from "@/assets/city-monza.png";
import cityComo from "@/assets/city-como.png";
import cityTorino from "@/assets/city-torino.png";
import cityLecco from "@/assets/city-lecco.png";

const SPECIALIZZAZIONI = [
  { label: "Idraulica", icon: Droplets },
  { label: "Elettricità", icon: Zap },
  { label: "Sicurezza e video-sorveglianza", icon: ShieldCheck },
  { label: "Riscaldamento / Condizionamento", icon: Thermometer },
  { label: "Fabbro", icon: KeyRound },
  { label: "Installazioni (montaggio arredi/elettrodomestici)", icon: Wrench },
  { label: "Tinteggiatura", icon: Paintbrush },
  { label: "Interventi con certificazioni", icon: FileCheck },
];

const CITTA = [
  { label: "Milano", img: cityMilano },
  { label: "Monza", img: cityMonza },
  { label: "Como", img: cityComo },
  { label: "Torino", img: cityTorino },
  { label: "Lecco", img: cityLecco },
];

export default function PerManutentoriDomanda() {
  const { toast } = useToast();
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [azienda, setAzienda] = useState("");
  const [email, setEmail] = useState("");
  const [cellulare, setCellulare] = useState("");
  const [specializzazioni, setSpecializzazioni] = useState<string[]>([]);
  const [citta, setCitta] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleSpec = (s: string) => {
    setSpecializzazioni((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const toggleCitta = (c: string) => {
    setCitta((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !nome.trim() ||
      !cognome.trim() ||
      !email.trim() ||
      !cellulare.trim() ||
      specializzazioni.length === 0 ||
      citta.length === 0
    ) {
      toast({
        title: "Compila tutti i campi",
        description: "Tutti i campi obbligatori devono essere compilati.",
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-foreground font-medium">Nome *</Label>
                <Input
                  id="nome"
                  placeholder="Mario"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  maxLength={50}
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cognome" className="text-foreground font-medium">Cognome *</Label>
                <Input
                  id="cognome"
                  placeholder="Rossi"
                  value={cognome}
                  onChange={(e) => setCognome(e.target.value)}
                  maxLength={50}
                  className="rounded-xl"
                />
              </div>
            </div>

            {/* Azienda */}
            <div className="space-y-2">
              <Label htmlFor="azienda" className="text-foreground font-medium">Azienda</Label>
              <Input
                id="azienda"
                placeholder="Nome azienda (opzionale)"
                value={azienda}
                onChange={(e) => setAzienda(e.target.value)}
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

            {/* Specializzazioni */}
            <div className="space-y-3">
              <Label className="text-foreground font-medium">Che tipo di manutentore sei? *</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SPECIALIZZAZIONI.map(({ label, icon: Icon }) => (
                  <label
                    key={label}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      specializzazioni.includes(label)
                        ? "border-primary bg-primary/5 shadow-sm"
                        : "border-border hover:border-muted-foreground/30"
                    }`}
                  >
                    <Checkbox
                      checked={specializzazioni.includes(label)}
                      onCheckedChange={() => toggleSpec(label)}
                    />
                    <Icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground leading-tight">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Città */}
            <div className="space-y-3">
              <Label className="text-foreground font-medium">Quali aree geografiche riesci a coprire? *</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {CITTA.map(({ label, img }) => (
                  <label
                    key={label}
                    onClick={() => toggleCitta(label)}
                    className={`relative flex flex-col items-center gap-2 p-4 rounded-xl border cursor-pointer transition-all ${
                      citta.includes(label)
                        ? "border-primary bg-primary/5 shadow-sm ring-2 ring-primary/20"
                        : "border-border hover:border-muted-foreground/30"
                    }`}
                  >
                    <img
                      src={img}
                      alt={label}
                      loading="lazy"
                      className="w-16 h-16 object-contain"
                    />
                    <span className="text-sm font-medium text-foreground">{label}</span>
                    {citta.includes(label) && (
                      <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </label>
                ))}
              </div>
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
