

import { useEffect, useRef, useState } from "react";
import TypingHeading from "@/components/TypingHeading";

/* ─── Review data ─── */
const REVIEWS = [
// Column 1
[
{
  stars: 5,
  time: "2 giorni fa",
  text: "Gestisco 40 appartamenti e prima impazzivo con i guasti. Adesso apro un ticket in 10 secondi e il tecnico arriva in giornata. Non torno indietro.",
  name: "Marco B.",
  role: "Milano",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
},
{
  stars: 5,
  time: "1 settimana fa",
  text: "Stagione estiva = inferno. 25 alloggi, ognuno con problemi diversi. Hommi mi ha salvato la vita. Letteralmente. L'ho consigliato a 3 colleghi.",
  name: "Alessandra P.",
  role: "Monza",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
},
{
  stars: 4,
  time: "3 giorni fa",
  text: "Non sono bravissimo col computer. Ma Hommi è talmente semplice che l'ho imparato in 20 minuti. Ora non posso farne a meno. Prima ero uno schiavo di Excel.",
  name: "Luca M.",
  role: "Como",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
},
{
  stars: 5,
  time: "5 giorni fa",
  text: "Il report mensile che esporto per i proprietari è una bomba. Vedono tutto: costi, interventi, tempi. Zero lamentele da quando uso Hommi.",
  name: "Francesca N.",
  role: "Torino",
  avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face"
}],

// Column 2
[
{
  stars: 5,
  time: "6 giorni fa",
  text: "Il commercialista mi chiedeva sempre i costi di manutenzione e io impazzivo. Ora esporto tutto in 2 click. Anche lui è contento.",
  name: "Roberto C.",
  role: "Monza",
  avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face"
},
{
  stars: 5,
  time: "1 settimana fa",
  text: "Prima ogni guasto era un casino. Ora se un ospite segnala un problema, il tecnico è già in strada. È magia.",
  name: "Elena M.",
  role: "Como",
  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
},
{
  stars: 5,
  time: "3 giorni fa",
  text: "Ho recuperato 2 ore a settimana che uso per acquisire nuovi clienti invece di rincorrere idraulici. Hommi si ripaga da solo.",
  name: "Davide R.",
  role: "Torino",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
},
{
  stars: 5,
  time: "4 giorni fa",
  text: "La dashboard è spettacolare. Vedo tutto in un colpo d'occhio: ticket aperti, tempi, costi. Mai più brutte sorprese a fine mese.",
  name: "Sara C.",
  role: "Milano",
  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face"
}],

// Column 3
[
{
  stars: 5,
  time: "2 giorni fa",
  text: "Credevo che a questo prezzo fosse troppo bello per essere vero. Invece funziona benissimo e non pago abbonamenti nascosti. Affare del secolo.",
  name: "Michele G.",
  role: "Monza",
  avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&h=80&fit=crop&crop=face"
},
{
  stars: 5,
  time: "1 settimana fa",
  text: "Turni serali, weekend, festivi... trovare un tecnico era un incubo. Con Hommi trovo professionisti verificati in automatico. Lo consiglio a tutti.",
  name: "Valentina F.",
  role: "Como",
  avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face"
},
{
  stars: 4,
  time: "5 giorni fa",
  text: "Abbiamo 120 alloggi in gestione. Prima di Hommi servivano 3 persone solo per la manutenzione. Ora ne basta una. Risultato: -60% sui costi operativi.",
  name: "Andrea B.",
  role: "Milano",
  avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face"
},
{
  stars: 5,
  time: "3 giorni fa",
  text: "Le notifiche in tempo reale sono il top. So sempre a che punto è ogni intervento senza dover chiamare nessuno. Finalmente respiro.",
  name: "Chiara L.",
  role: "Monza",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face"
}],

// Column 4
[
{
  stars: 5,
  time: "1 giorno fa",
  text: "Gestisco appartamenti da remoto. Con Hommi è come essere sul posto. Apro ticket, vedo foto, approvo preventivi. Tutto dal telefono.",
  name: "Paolo F.",
  role: "Milano",
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=80&h=80&fit=crop&crop=face"
},
{
  stars: 5,
  time: "4 giorni fa",
  text: "I proprietari degli immobili che gestisco sono entusiasti. Vedono i report, i tempi di risoluzione, i costi. Trasparenza totale = fiducia totale.",
  name: "Giulia F.",
  role: "Torino",
  avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face"
},
{
  stars: 4,
  time: "1 settimana fa",
  text: "All'inizio ero scettico, un altro software... Dopo 2 settimane ho capito che Hommi è diverso. Semplice, veloce, funziona. Punto.",
  name: "Stefano R.",
  role: "Como",
  avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&h=80&fit=crop&crop=face"
},
{
  stars: 5,
  time: "6 giorni fa",
  text: "Il calendario interventi mi ha cambiato la vita. Sopralluoghi, check-out, manutenzioni programmate: tutto in un'unica vista sincronizzata.",
  name: "Anna G.",
  role: "Monza",
  avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face"
}]];



/* ─── Star component ─── */
function Stars({ count }: {count: number;}) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) =>
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#22804A" stroke="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )}
    </div>);

}

/* ─── Single review card ─── */
function ReviewCard({ review }: {review: (typeof REVIEWS)[0][0];}) {
  return (
    <div className="bg-white rounded-2xl border border-border p-5 md:p-6 mb-4 break-inside-avoid">
      <div className="flex items-center justify-between mb-3">
        <Stars count={review.stars} />
        <span className="text-[12px] text-secondary/40 shrink-0 ml-3">{review.time}</span>
      </div>
      <p className="text-[14px] text-dark/80 leading-relaxed mb-4">
        {review.text}
      </p>
      <div className="flex items-center gap-3">
        




        
        <div>
          <p className="text-[14px] font-bold text-dark">{review.name}</p>
          <p className="text-[12px] text-secondary/50">{review.role}</p>
        </div>
      </div>
    </div>);

}

/* ─── Scrolling column ─── */
function ScrollColumn({
  reviews,
  direction = "up",
  duration = 40




}: {reviews: (typeof REVIEWS)[0];direction?: "up" | "down";duration?: number;}) {
  return (
    <div className="overflow-hidden relative h-[600px] md:h-[700px] testimonial-mask">
      <div
        className={direction === "up" ? "testimonial-scroll-up" : "testimonial-scroll-down"}
        style={{ animationDuration: `${duration}s` }}>
        
        {/* Double for seamless loop */}
        {[...reviews, ...reviews].map((r, i) =>
        <ReviewCard key={`${r.name}-${i}`} review={r} />
        )}
      </div>
    </div>);

}

/* ─── Main section ─── */
export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {if (e.isIntersecting) {setVis(true);obs.disconnect();}},
      { threshold: 0.05 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="testimonianze" className="py-20 md:py-28 overflow-hidden bg-[#F2F4F8]" ref={ref}>
      <div className="max-w-site mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-14 reveal ${vis ? "revealed" : ""}`}>
          <span className="inline-block text-[11px] font-semibold text-dark uppercase tracking-[0.08em] border border-border rounded-full px-3.5 py-1.5 mb-5">
            Dicono di noi
          </span>
          {vis ?
          <TypingHeading
            lines={["Chi lo usa, non torna indietro."]}
            className="font-display text-[28px] md:text-[40px] lg:text-[46px] font-bold text-dark leading-[1.08] tracking-tight"
            speed={40}
            startDelay={200} /> :


          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[46px] font-bold text-dark leading-[1.08] tracking-tight">
              <span className="block invisible">Chi lo usa, non torna indietro.</span>
            </h2>
          }
          <div className="flex items-center justify-center gap-2.5 mt-6">
            <div className="flex items-center gap-1.5 bg-surface border border-border rounded-full px-4 py-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#22804A" stroke="none">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-[15px] font-bold text-dark">4.9/5</span>
              <span className="text-[14px] text-secondary/50">da 127 recensioni</span>
            </div>
          </div>
        </div>

        {/* Scrolling columns — desktop */}
        <div className={`hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.15s" }}>
          <ScrollColumn reviews={REVIEWS[0]} direction="up" duration={45} />
          <ScrollColumn reviews={REVIEWS[1]} direction="down" duration={50} />
          <ScrollColumn reviews={REVIEWS[2]} direction="up" duration={42} />
          <div className="hidden lg:block">
            <ScrollColumn reviews={REVIEWS[3]} direction="down" duration={48} />
          </div>
        </div>

        {/* Mobile: single infinite scroll column */}
        <div className={`md:hidden reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.15s" }}>
          <ScrollColumn
            reviews={[...REVIEWS[0], ...REVIEWS[1], ...REVIEWS[2], ...REVIEWS[3]]}
            direction="up"
            duration={90} />
          
        </div>
      </div>
    </section>);

}