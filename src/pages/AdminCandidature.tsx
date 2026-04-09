import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ADMIN_PASSWORD = "hommi2025hr";

export default function AdminCandidature() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Password errata");
    }
  };

  useEffect(() => {
    if (!authenticated) return;
    setLoading(true);
    supabase
      .from("maintenance_applications")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (error) {
          setError("Errore nel caricamento dei dati");
        } else {
          setApplications(data || []);
        }
        setLoading(false);
      });
  }, [authenticated]);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <form onSubmit={handleLogin} className="bg-card border border-border rounded-2xl p-8 shadow-sm w-full max-w-sm space-y-4">
          <h1 className="text-xl font-bold text-foreground text-center">Area riservata</h1>
          <p className="text-sm text-muted-foreground text-center">Inserisci la password per accedere alle candidature</p>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="rounded-xl"
            />
          </div>
          {error && <p className="text-sm font-medium" style={{ color: "hsl(0, 84%, 50%)" }}>{error}</p>}
          <Button type="submit" className="w-full rounded-xl">Accedi</Button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Candidature Manutentori</h1>
            <p className="text-muted-foreground text-sm">{applications.length} candidature ricevute</p>
          </div>
          <Button variant="outline" onClick={() => setAuthenticated(false)} className="rounded-xl">
            Esci
          </Button>
        </div>

        {loading ? (
          <p className="text-muted-foreground">Caricamento...</p>
        ) : applications.length === 0 ? (
          <div className="bg-card border border-border rounded-2xl p-12 text-center">
            <p className="text-muted-foreground">Nessuna candidatura ricevuta</p>
          </div>
        ) : (
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Cognome</TableHead>
                    <TableHead>Azienda</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Cellulare</TableHead>
                    <TableHead>Specializzazioni</TableHead>
                    <TableHead>Città</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell className="whitespace-nowrap text-sm">
                        {new Date(app.created_at).toLocaleDateString("it-IT", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </TableCell>
                      <TableCell className="font-medium">{app.nome}</TableCell>
                      <TableCell>{app.cognome}</TableCell>
                      <TableCell>{app.azienda || "—"}</TableCell>
                      <TableCell>
                        <a href={`mailto:${app.email}`} className="text-primary underline">{app.email}</a>
                      </TableCell>
                      <TableCell className="whitespace-nowrap">{app.prefisso} {app.cellulare}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {app.specializzazioni?.map((s: string) => (
                            <span key={s} className="inline-block bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">{s}</span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {app.citta?.map((c: string) => (
                            <span key={c} className="inline-block bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full">{c}</span>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
