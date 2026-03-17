

import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useTypingEffect } from "@/components/TypingHeading";

/* ─── Notion-style navigable dashboard mockup ─── */

type SectionKey = "home" | "alloggi" | "ticket" | "tecnici" | "calendario" | "report";

const SIDEBAR_ITEMS: {key: SectionKey;label: string;}[] = [
{ key: "home", label: "Home" },
{ key: "alloggi", label: "Alloggi" },
{ key: "ticket", label: "Ticket guasti" },
{ key: "tecnici", label: "Tecnici" },
{ key: "calendario", label: "Calendario" },
{ key: "report", label: "Report" }];


/* ─── Notification cards per section ─── */
function NotificationCard({ section }: {section: SectionKey;}) {
  const cards: Record<SectionKey, React.ReactNode> = {
    home:
    <>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <p className="text-[11px] font-semibold text-dark">Riepilogo giornaliero</p>
        </div>
        <div className="space-y-2.5 text-[10px]">
          <div>
            <p className="text-secondary/40 text-[9px]">Nuovi ticket</p>
            <p className="text-dark font-medium">+4 oggi</p>
          </div>
          <div>
            <p className="text-secondary/40 text-[9px]">Risolti</p>
            <p className="text-dark font-medium">8 completati</p>
          </div>
          <div>
            <p className="text-secondary/40 text-[9px]">Tempo medio</p>
            <p className="text-dark font-medium">43 minuti</p>
          </div>
          <div className="flex items-center gap-1.5 pt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[9px] text-green-600 font-medium">Aggiornato · 14:32</p>
          </div>
        </div>
      </>,

    alloggi:
    <>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
          </div>
          <p className="text-[11px] font-semibold text-dark">Nuovo check-out</p>
        </div>
        <div className="space-y-2.5 text-[10px]">
          <div>
            <p className="text-secondary/40 text-[9px]">Alloggio</p>
            <p className="text-dark font-medium">Via Dante 23, Firenze</p>
          </div>
          <div>
            <p className="text-secondary/40 text-[9px]">Check-out</p>
            <p className="text-dark font-medium">Oggi, 11:00</p>
          </div>
          <div>
            <p className="text-secondary/40 text-[9px]">Prossimo check-in</p>
            <p className="text-dark font-medium">Domani, 15:00</p>
          </div>
          <div className="flex items-center gap-1.5 pt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <p className="text-[9px] text-amber-600 font-medium">Ispezione in attesa</p>
          </div>
        </div>
      </>,

    ticket:
    <>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded-full bg-amber-50 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
          </div>
          <p className="text-[11px] font-semibold text-dark">Intervento in corso</p>
        </div>
        <div className="space-y-2.5 text-[10px]">
          <div>
            <p className="text-secondary/40 text-[9px]">Alloggio</p>
            <p className="text-dark font-medium">Via Roma 12, Milano</p>
          </div>
          <div>
            <p className="text-secondary/40 text-[9px]">Problema</p>
            <p className="text-dark font-medium">Perdita rubinetto bagno</p>
          </div>
          <div>
            <p className="text-secondary/40 text-[9px]">Tecnico</p>
            <p className="text-dark font-medium">Marco Bianchi</p>
          </div>
          <div className="flex items-center gap-1.5 pt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[9px] text-green-600 font-medium">In arrivo · 15 min</p>
          </div>
        </div>
      </>,

    tecnici:
    <>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <p className="text-[11px] font-semibold text-dark">Tecnico disponibile</p>
        </div>
        <div className="space-y-2.5 text-[10px]">
          <div>
            <p className="text-secondary/40 text-[9px]">Nome</p>
            <p className="text-dark font-medium">Luca Verdi</p>
          </div>
          <div>
            <p className="text-secondary/40 text-[9px]">Specialità</p>
            <p className="text-dark font-medium">Idraulica · Elettrica</p>
          </div>
          <div>
            <p className="text-secondary/40 text-[9px]">Zona</p>
            <p className="text-dark font-medium">Milano Nord</p>
          </div>
          <div className="flex items-center gap-1.5 pt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[9px] text-green-600 font-medium">Disponibile ora</p>
          </div>
        </div>
      </>,

    calendario:
    <>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded-full bg-violet-50 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-violet-500" />
          </div>
          <p className="text-[11px] font-semibold text-dark">Prossimo intervento</p>
        </div>
        <div className="space-y-2.5 text-[10px]">
          <div>
            <p className="text-secondary/40 text-[9px]">Orario</p>
            <p className="text-dark font-medium">Oggi, 15:30</p>
          </div>
          <div>
            <p className="text-secondary/40 text-[9px]">Intervento</p>
            <p className="text-dark font-medium">Manutenzione caldaia</p>
          </div>
          <div>
            <p className="text-secondary/40 text-[9px]">Alloggio</p>
            <p className="text-dark font-medium">Corso Italia 8, Roma</p>
          </div>
          <div className="flex items-center gap-1.5 pt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            <p className="text-[9px] text-violet-600 font-medium">Tra 2 ore</p>
          </div>
        </div>
      </>,

    report:
    <>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <p className="text-[11px] font-semibold text-dark">Report settimanale</p>
        </div>
        <div className="space-y-2.5 text-[10px]">
          <div>
            <p className="text-secondary/40 text-[9px]">Efficienza</p>
            <p className="text-dark font-medium">+12% vs settimana scorsa</p>
          </div>
          <div>
            <p className="text-secondary/40 text-[9px]">Costi manutenzione</p>
            <p className="text-dark font-medium">-8% risparmio</p>
          </div>
          <div>
            <p className="text-secondary/40 text-[9px]">Soddisfazione</p>
            <p className="text-dark font-medium">4.9 / 5 stelle</p>
          </div>
          <div className="flex items-center gap-1.5 pt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <p className="text-[9px] text-primary font-medium">Report pronto</p>
          </div>
        </div>
      </>

  };
  return (
    <div className="absolute -top-8 -right-4 w-[210px] h-[200px] bg-white rounded-xl shadow-xl shadow-black/12 border border-[#EBEBEB] p-4 z-10 transition-all duration-300">
      {cards[section]}
    </div>);

}

/* ─── Section content views ─── */
function SectionContent({ section }: {section: SectionKey;}) {
  switch (section) {
    case "home":
      return (
        <>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-[15px] font-semibold text-dark">Buongiorno, Marco</h3>
              <p className="text-[11px] text-secondary/50 mt-0.5">Ecco cosa succede oggi nei tuoi alloggi</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
            { label: "Ticket aperti", val: "12", color: "text-primary" },
            { label: "In corso", val: "5", color: "text-amber-500" },
            { label: "Risolti oggi", val: "8", color: "text-green-600" }].
            map((s) =>
            <div key={s.label} className="bg-[#FAFAFA] rounded-lg p-3 border border-[#F0F0F0]">
                <p className="text-[9px] text-secondary/50 uppercase tracking-wider font-medium mb-1">{s.label}</p>
                <p className={`text-[20px] font-bold leading-none ${s.color}`}>{s.val}</p>
              </div>
            )}
          </div>
          <div>
            <p className="text-[10px] font-semibold text-secondary/50 uppercase tracking-wider mb-3">Attività recenti</p>
            <div className="space-y-0">
              {[
              { text: "Ticket #142 assegnato a M. Bianchi", time: "2 min fa", dot: "bg-blue-500" },
              { text: "Caldaia riparata — Via Manzoni 3", time: "18 min fa", dot: "bg-green-500" },
              { text: "Nuovo ticket: Perdita bagno", time: "43 min fa", dot: "bg-primary" },
              { text: "Check-out completato — Via Dante 23", time: "1h fa", dot: "bg-secondary/30" },
              { text: "Report settimanale disponibile", time: "2h fa", dot: "bg-violet-500" }].
              map((a, i) =>
              <div key={i} className="flex items-start gap-2.5 py-2 border-b border-[#F5F5F5] last:border-0">
                  <div className={`w-1.5 h-1.5 rounded-full ${a.dot} mt-1.5 shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-dark truncate">{a.text}</p>
                    <p className="text-[9px] text-secondary/35">{a.time}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>);


    case "alloggi":
      return (
        <>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-[15px] font-semibold text-dark">Alloggi</h3>
              <p className="text-[11px] text-secondary/50 mt-0.5">47 alloggi attivi</p>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-primary text-white text-[10px] font-semibold">+ Aggiungi</div>
          </div>
          <div className="space-y-2">
            {[
            { name: "Via Roma 12", city: "Milano", rooms: 3, status: "Occupato", sColor: "bg-green-500" },
            { name: "Corso Italia 8", city: "Roma", rooms: 2, status: "Libero", sColor: "bg-blue-500" },
            { name: "Via Dante 23", city: "Firenze", rooms: 4, status: "Manutenzione", sColor: "bg-amber-500" },
            { name: "P.za Duomo 5", city: "Torino", rooms: 2, status: "Occupato", sColor: "bg-green-500" },
            { name: "Via Manzoni 3", city: "Bologna", rooms: 3, status: "Libero", sColor: "bg-blue-500" },
            { name: "Via Garibaldi 15", city: "Napoli", rooms: 5, status: "Occupato", sColor: "bg-green-500" },
            { name: "Via Veneto 42", city: "Roma", rooms: 2, status: "Libero", sColor: "bg-blue-500" }].
            map((p, i) =>
            <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#FAFAFA] transition-colors border border-transparent hover:border-[#F0F0F0]">
                <div className="w-8 h-8 rounded-lg bg-[#F5F5F5] flex items-center justify-center text-[11px]">🏠</div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-medium text-dark">{p.name}, {p.city}</p>
                  <p className="text-[9px] text-secondary/40">{p.rooms} stanze</p>
                </div>
                <span className={`inline-block px-1.5 py-0.5 rounded text-[8px] font-semibold text-white ${p.sColor}`}>{p.status}</span>
              </div>
            )}
          </div>
        </>);


    case "ticket":
      return (
        <>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-[15px] font-semibold text-dark">Ticket guasti</h3>
              <p className="text-[11px] text-secondary/50 mt-0.5">12 aperti · 4 urgenti</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-[#FAFAFA] border border-[#EBEBEB] text-[10px] text-secondary">Filtra</div>
              <div className="px-3 py-1.5 rounded-lg bg-primary text-white text-[10px] font-semibold">+ Nuovo</div>
            </div>
          </div>
          <div className="rounded-lg border border-[#EBEBEB] overflow-hidden">
            <div className="grid grid-cols-6 gap-2 px-3 py-2 bg-[#FAFAFA] text-[8px] font-semibold text-secondary/40 uppercase tracking-wider border-b border-[#EBEBEB]">
              <span>Alloggio</span><span>Problema</span><span>Priorità</span><span>Stato</span><span>Tecnico</span><span>Tempo</span>
            </div>
            {[
            { addr: "Via Roma 12", issue: "Perdita bagno", pr: "Urgente", prC: "bg-red-500", st: "In corso", stC: "bg-amber-500", tech: "M. Bianchi", time: "2h" },
            { addr: "Corso Italia 8", issue: "Caldaia guasta", pr: "Alta", prC: "bg-orange-500", st: "Assegnato", stC: "bg-blue-500", tech: "L. Verdi", time: "4h" },
            { addr: "Via Dante 23", issue: "Serratura rotta", pr: "Media", prC: "bg-yellow-500", st: "Aperto", stC: "bg-gray-400", tech: "—", time: "1h" },
            { addr: "P.za Duomo 5", issue: "Presa elettrica", pr: "Bassa", prC: "bg-green-500", st: "Risolto", stC: "bg-green-500", tech: "G. Neri", time: "6h" },
            { addr: "Via Manzoni 3", issue: "Condizionatore", pr: "Alta", prC: "bg-orange-500", st: "Risolto", stC: "bg-green-500", tech: "A. Russo", time: "3h" },
            { addr: "Via Garibaldi 15", issue: "Scarico ostruito", pr: "Urgente", prC: "bg-red-500", st: "In corso", stC: "bg-amber-500", tech: "P. Costa", time: "45m" }].
            map((r, i) =>
            <div key={i} className={`grid grid-cols-6 gap-2 px-3 py-2 text-[10px] border-t border-[#F5F5F5] ${i % 2 === 0 ? "bg-white" : "bg-[#FDFDFD]"}`}>
                <span className="font-medium text-dark truncate">{r.addr}</span>
                <span className="text-secondary/60 truncate">{r.issue}</span>
                <span><span className={`inline-block px-1.5 py-0.5 rounded text-[7px] font-semibold text-white ${r.prC}`}>{r.pr}</span></span>
                <span><span className={`inline-block px-1.5 py-0.5 rounded text-[7px] font-semibold text-white ${r.stC}`}>{r.st}</span></span>
                <span className="text-secondary/50">{r.tech}</span>
                <span className="text-secondary/35">{r.time}</span>
              </div>
            )}
          </div>
        </>);


    case "tecnici":
      return (
        <>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-[15px] font-semibold text-dark">Tecnici</h3>
              <p className="text-[11px] text-secondary/50 mt-0.5">8 tecnici · 5 disponibili</p>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-primary text-white text-[10px] font-semibold">+ Invita</div>
          </div>
          <div className="space-y-1.5">
            {[
            { name: "Marco Bianchi", init: "MB", spec: "Idraulica", zone: "Milano Centro", status: "Occupato", sColor: "bg-amber-500", bg: "bg-blue-100", fg: "text-blue-600" },
            { name: "Luca Verdi", init: "LV", spec: "Idraulica · Elettrica", zone: "Milano Nord", status: "Disponibile", sColor: "bg-green-500", bg: "bg-emerald-100", fg: "text-emerald-700" },
            { name: "Giovanni Neri", init: "GN", spec: "Elettrica", zone: "Torino", status: "Disponibile", sColor: "bg-green-500", bg: "bg-gray-100", fg: "text-gray-700" },
            { name: "Anna Russo", init: "AR", spec: "Generalista", zone: "Bologna", status: "Disponibile", sColor: "bg-green-500", bg: "bg-pink-100", fg: "text-pink-700" },
            { name: "Paolo Costa", init: "PC", spec: "Idraulica", zone: "Napoli", status: "Occupato", sColor: "bg-amber-500", bg: "bg-orange-100", fg: "text-orange-700" },
            { name: "Sara Ferri", init: "SF", spec: "Serrature · Falegname", zone: "Firenze", status: "Disponibile", sColor: "bg-green-500", bg: "bg-violet-100", fg: "text-violet-700" }].
            map((t, i) =>
            <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#FAFAFA] transition-colors">
                <div className={`w-7 h-7 rounded-full ${t.bg} flex items-center justify-center text-[9px] font-bold ${t.fg}`}>{t.init}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-medium text-dark">{t.name}</p>
                  <p className="text-[9px] text-secondary/40">{t.spec} · {t.zone}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${t.sColor}`} />
                  <span className="text-[9px] text-secondary/50">{t.status}</span>
                </div>
              </div>
            )}
          </div>
        </>);


    case "calendario":
      return (
        <>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-[15px] font-semibold text-dark">Calendario</h3>
              <p className="text-[11px] text-secondary/50 mt-0.5">Febbraio 2026</p>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-secondary/50">
              <span className="px-2 py-1 rounded bg-[#FAFAFA] cursor-pointer">←</span>
              <span className="px-2 py-1 rounded bg-[#FAFAFA] cursor-pointer">→</span>
            </div>
          </div>
          {/* Mini calendar grid */}
          <div className="mb-4">
            <div className="grid grid-cols-7 gap-0 text-center text-[8px] font-semibold text-secondary/35 uppercase mb-1">
              {["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"].map((d) => <span key={d} className="py-1">{d}</span>)}
            </div>
            <div className="grid grid-cols-7 gap-0 text-center text-[10px]">
              {/* Empty cells for starting day */}
              {[null, null, null, null, null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28].map((d, i) =>
              <div key={i} className={`py-1.5 rounded-md ${d === 18 ? "bg-primary text-white font-semibold" : d && [4, 11, 15, 22].includes(d) ? "bg-primary/10 text-primary font-medium" : d ? "text-dark" : ""}`}>
                  {d || ""}
                </div>
              )}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-secondary/50 uppercase tracking-wider mb-2">Oggi</p>
            <div className="space-y-1.5">
              {[
              { time: "09:00", text: "Sopralluogo — Via Dante 23", color: "border-l-blue-500" },
              { time: "11:30", text: "Riparazione caldaia — Corso Italia 8", color: "border-l-primary" },
              { time: "15:30", text: "Manutenzione — P.za Duomo 5", color: "border-l-violet-500" }].
              map((e, i) =>
              <div key={i} className={`border-l-2 ${e.color} pl-2.5 py-1.5`}>
                  <p className="text-[9px] text-secondary/40">{e.time}</p>
                  <p className="text-[10px] text-dark font-medium">{e.text}</p>
                </div>
              )}
            </div>
          </div>
        </>);


    case "report":
      return (
        <>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-[15px] font-semibold text-dark">Report</h3>
              <p className="text-[11px] text-secondary/50 mt-0.5">Panoramica mensile</p>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-[#FAFAFA] border border-[#EBEBEB] text-[10px] text-secondary">Esporta</div>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-5">
            {[
            { label: "Tasso risoluzione", val: "97%", sub: "+2% vs mese scorso", color: "text-green-600" },
            { label: "Tempo medio", val: "43m", sub: "-12m vs mese scorso", color: "text-dark" },
            { label: "Costo medio", val: "€85", sub: "-8% vs mese scorso", color: "text-dark" },
            { label: "Soddisfazione", val: "4.9", sub: "+0.3 vs mese scorso", color: "text-primary" }].
            map((s) =>
            <div key={s.label} className="bg-[#FAFAFA] rounded-lg p-3 border border-[#F0F0F0]">
                <p className="text-[9px] text-secondary/50 uppercase tracking-wider font-medium mb-1">{s.label}</p>
                <p className={`text-[18px] font-bold leading-none ${s.color}`}>{s.val}</p>
                <p className="text-[8px] text-secondary/35 mt-1">{s.sub}</p>
              </div>
            )}
          </div>
          {/* Simple bar chart */}
          <div>
            <p className="text-[10px] font-semibold text-secondary/50 uppercase tracking-wider mb-3">Ticket per settimana</p>
            <div className="flex items-end gap-2 h-[80px]">
              {[
              { label: "Sett 1", h: 60 },
              { label: "Sett 2", h: 80 },
              { label: "Sett 3", h: 45 },
              { label: "Sett 4", h: 70 }].
              map((bar) =>
              <div key={bar.label} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full rounded-t bg-primary/20 relative" style={{ height: `${bar.h}%` }}>
                    <div className="absolute bottom-0 left-0 right-0 rounded-t bg-primary" style={{ height: "60%" }} />
                  </div>
                  <span className="text-[8px] text-secondary/40">{bar.label}</span>
                </div>
              )}
            </div>
          </div>
        </>);

  }
}

function DashboardMockup() {
  const [activeSection, setActiveSection] = useState<SectionKey>("home");
  const pauseRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-cycle through sections every 2.5s
  useEffect(() => {
    const keys = SIDEBAR_ITEMS.map((i) => i.key);

    const tick = () => {
      if (!pauseRef.current) {
        setActiveSection((prev) => {
          const idx = keys.indexOf(prev);
          return keys[(idx + 1) % keys.length];
        });
      }
    };

    timerRef.current = setInterval(tick, 2500);
    return () => {if (timerRef.current) clearInterval(timerRef.current);};
  }, []);

  // Manual click: set section, pause for one full cycle, then resume
  const handleManualClick = (key: SectionKey) => {
    setActiveSection(key);
    pauseRef.current = true;
    // Resume auto-cycle after 6s (enough time to explore)
    setTimeout(() => {pauseRef.current = false;}, 6000);
  };

  return (
    <div className="relative w-full min-w-[600px]" aria-hidden="true">
      <div className="rounded-2xl bg-white shadow-2xl shadow-black/10 overflow-hidden border border-[#EBEBEB]">
        <div className="flex">
          {/* Sidebar — Notion-style */}
          <div className="w-[190px] bg-[#FBFBFA] border-r border-[#EFEFEF] flex flex-col shrink-0">
            {/* Workspace */}
            <div className="flex items-center gap-2.5 px-4 py-3.5 border-b border-[#EFEFEF]">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M3 10.5L12 3l9 7.5" />
                  <path d="M5 9.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-dark leading-tight">Casa Vacanze Srl</p>
                <p className="text-[9px] text-secondary/40">Pro plan</p>
              </div>
            </div>

            {/* Nav items */}
            <nav className="flex flex-col gap-px px-2 py-2.5 text-[11px] font-medium">
              {SIDEBAR_ITEMS.map((item) =>
              <button
                key={item.key}
                onClick={() => handleManualClick(item.key)}
                className={`flex items-center gap-2 px-2.5 py-[7px] rounded-md text-left transition-all duration-150 w-full ${
                activeSection === item.key ?
                "bg-primary/8 text-primary font-semibold" :
                "text-secondary/60 hover:bg-[#F0F0EF] hover:text-dark"}`
                }>
                
                  <span className="text-[12px] w-5 text-center opacity-70">
                    {item.key === "home" && "⌂"}
                    {item.key === "alloggi" && "🏠"}
                    {item.key === "ticket" && "🔧"}
                    {item.key === "tecnici" && "👷"}
                    {item.key === "calendario" && "📅"}
                    {item.key === "report" && "📊"}
                  </span>
                  {item.label}
                </button>
              )}
            </nav>

            {/* User at bottom */}
            <div className="mt-auto px-4 py-3.5 border-t border-[#EFEFEF] flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center text-[9px] font-bold text-secondary">MR</div>
              <div>
                <p className="text-[10px] font-medium text-dark leading-tight">Marco Rossi</p>
                <p className="text-[8px] text-secondary/40">Amministratore</p>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-5 h-[500px] overflow-hidden relative">
            <SectionContent section={activeSection} />
          </div>
        </div>
      </div>

      {/* Floating notification card — changes per section */}
      <NotificationCard section={activeSection} />
    </div>);

}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {const t = setTimeout(() => setMounted(true), 100);return () => clearTimeout(t);}, []);

  const LINES = ["Ogni guasto nei tuoi", "immobili risolto", "in giornata."];
  const FULL = LINES.join(" ");
  const { displayed, done } = useTypingEffect(FULL, 45, 400);

  // Map typed chars to the 3 fixed lines
  const breaks = [LINES[0].length, LINES[0].length + 1 + LINES[1].length];
  const typed1 = displayed.slice(0, LINES[0].length);
  const typed2 = displayed.length > breaks[0] + 1 ? displayed.slice(breaks[0] + 1, breaks[1]) : "";
  const typed3 = displayed.length > breaks[1] + 1 ? displayed.slice(breaks[1] + 1) : "";
  const cursorLine = displayed.length <= breaks[0] ? 0 : displayed.length <= breaks[1] ? 1 : 2;

  const cursor =
  <span className={`inline-block w-[3px] h-[0.85em] bg-primary ml-1 align-baseline relative top-[0.05em] ${done ? "animate-blink" : ""}`} />;


  return (
    <section className="relative bg-white overflow-hidden rounded-b-[10px] min-h-svh lg:min-h-0 flex flex-col">
      <div className="max-w-site mx-auto px-6 pt-28 pb-0 md:pt-40 md:pb-0 flex-1 flex flex-col justify-center lg:block">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-8 items-end">
          {/* Left — copy */}
          <div className="text-center lg:text-left lg:pb-24">
            <h1
              className="font-display text-[36px] md:text-[50px] lg:text-[58px] font-bold text-dark leading-[1.06] tracking-[-0.025em]">
              
              {LINES.map((line, i) =>
              <span key={i} className="block relative">
                  <span className="invisible" aria-hidden="true">{line}</span>
                  <span className="absolute inset-0">
                    {i === 0 ? typed1 : i === 1 ? typed2 : typed3}
                    {cursorLine === i && cursor}
                  </span>
                </span>
              )}
            </h1>

            <p
              className={`mt-6 text-secondary text-[15px] md:text-[18px] max-w-[500px] mx-auto lg:mx-0 leading-[1.7] hero-text-entrance ${mounted ? "hero-text-visible" : ""}`}
              style={{ transitionDelay: "0.1s" }}>
              
              Hommi è il servizio per property manager che vogliono zero stress e interventi risolti in giornata. Gestiamo ogni guasto e imprevisto al posto tuo: intervento, supervisione, report con foto e costi, anche con ospiti presenti.
            </p>

            {/* Testimonial (inline, desktop) */}
            <div
              className={`mt-8 md:mt-10 hidden lg:block hero-text-entrance ${mounted ? "hero-text-visible" : ""}`}
              style={{ transitionDelay: "0.25s" }}>
              
              <div className="flex items-start gap-3 max-w-[460px]">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face"
                  alt="Francesca"
                  className="w-8 h-8 rounded-full object-cover shrink-0 mt-0.5" />
                
                <div>
                  <p className="text-[14px] text-secondary leading-relaxed">
                    &ldquo;In 2 ore era tutto risolto — senza dover chiamare nessuno.&rdquo;
                  </p>
                  <p className="text-[11px] text-secondary/50 mt-1">
                    <span className="font-semibold text-dark/70">Francesca</span> · PM, 12 case a Torino
                  </p>
                </div>
              </div>
            </div>

            {/* CTA buttons (desktop) */}
            <div
              className={`mt-8 md:mt-10 hidden lg:flex flex-row items-center gap-3 hero-text-entrance ${mounted ? "hero-text-visible" : ""}`}
              style={{ transitionDelay: "0.3s" }}>
              
              <a
                href="https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw"
                className="inline-flex items-center justify-center bg-primary text-white font-semibold text-[15px] px-8 py-3.5 transition-all duration-200 hover:bg-primary-hover shadow-lg shadow-primary/20 cursor-pointer rounded-sm">
                
                Richiedi accesso prioritario
              </a>
              <a
                href="#come-funziona"
                className="inline-flex items-center justify-center text-dark font-semibold text-[15px] rounded-[10px] px-8 py-3.5 border border-border hover:border-dark/30 transition-all duration-200 cursor-pointer">
                
                Vedi come funziona
              </a>
            </div>
          </div>

          {/* Right — dashboard mockup (desktop only, overflows bottom) */}
          <div
            className={`relative hidden lg:block hero-text-entrance ${mounted ? "hero-text-visible" : ""}`}
            style={{ transitionDelay: "0.15s" }}>
            
            <div className="-translate-y-24">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom area — testimonial + CTAs + scroll arrow */}
      <div className="lg:hidden mt-auto pb-6 px-6">
        {/* Testimonial */}
        <div
          className={`flex items-start gap-3 max-w-[460px] mx-auto mb-6 mt-12 hero-text-entrance ${mounted ? "hero-text-visible" : ""}`}
          style={{ transitionDelay: "0.25s" }}>
          
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face"
            alt="Francesca"
            className="w-8 h-8 rounded-full object-cover shrink-0 mt-0.5" />
          
          <div>
            <p className="text-[13px] text-secondary leading-relaxed">
              &ldquo;In 2 ore era tutto risolto — senza dover chiamare nessuno.&rdquo;
            </p>
            <p className="text-[11px] text-secondary/50 mt-1">
              <span className="font-semibold text-dark/70">Francesca</span> · PM, 12 case a Torino
            </p>
          </div>
        </div>

        {/* CTA buttons */}
        <div
          className={`flex flex-col gap-3 max-w-[400px] mx-auto hero-text-entrance ${mounted ? "hero-text-visible" : ""}`}
          style={{ transitionDelay: "0.3s" }}>
          
          <a
            href="https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw"
            className="flex items-center justify-center bg-primary text-white font-semibold text-[14px] rounded-[10px] px-5 py-3.5 transition-all duration-200 hover:bg-primary-hover shadow-lg shadow-primary/20 cursor-pointer">
            
            Richiedi accesso prioritario
          </a>
          <a
            href="#come-funziona"
            className="flex items-center justify-center text-dark font-semibold text-[14px] rounded-[10px] px-4 py-3.5 border border-border hover:border-dark/30 transition-all duration-200 cursor-pointer">
            
            Vedi come funziona
          </a>
        </div>

        {/* Scroll down arrow */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => {
              const start = window.scrollY;
              const target = start + window.innerHeight * 0.85;
              const duration = 500;
              let startTime: number | null = null;
              const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
              const step = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                window.scrollTo(0, start + (target - start) * ease(progress));
                if (progress < 1) requestAnimationFrame(step);
              };
              requestAnimationFrame(step);
            }}
            className="animate-hero-bounce"
            aria-label="Scorri in basso">
            
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-secondary/40">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>);

}