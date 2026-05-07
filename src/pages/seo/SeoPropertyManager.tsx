import SeoLanding from "@/components/seo/SeoLanding";

export default function SeoPropertyManager() {
  return (
    <SeoLanding
      slug="seo/gestione-manutenzione-property-manager"
      badge="Per Property Manager"
      title="Gestione Manutenzione per Property Manager | Hommi"
      description="Hommi è la piattaforma di gestione manutenzione per property manager a Milano, Monza, Como, Torino e Lecco. Tecnici verificati, ticketing su WhatsApp, costi trasparenti."
      keywords="gestione manutenzione property manager, software property manager, manutenzione short rental, ticketing guasti, Milano, Monza, Como, Torino, Lecco"
      h1="Gestione manutenzione per Property Manager"
      intro="Gestire la manutenzione di decine di immobili in affitto breve significa coordinare guasti, tecnici, ospiti e proprietari ogni giorno. Hommi ti permette di automatizzare l'intero processo: ticket aperti via WhatsApp, tecnici verificati, prezzi trasparenti e zero telefonate fuori orario."
      sections={[
        {
          h2: "Perché i Property Manager scelgono Hommi",
          body: "Un property manager perde in media 12 ore a settimana solo per coordinare interventi di manutenzione. Hommi riduce drasticamente questo tempo grazie a un network di tecnici selezionati e a un sistema di ticketing pensato per la gestione professionale.",
          bullets: [
            "Tecnici verificati e assicurati su Milano, Monza, Como, Torino e Lecco",
            "Apertura ticket in 30 secondi via WhatsApp, anche dagli ospiti",
            "Preventivi approvati prima dell'intervento, senza sorprese",
            "Report mensili con costi per immobile e per proprietario",
          ],
        },
        {
          h2: "Come funziona il servizio",
          body: "L'ospite o il property manager segnala il guasto via WhatsApp. Il nostro team qualifica la richiesta, attiva il tecnico più adatto in zona e ti aggiorna ad ogni step. Tu approvi solo il preventivo: il resto lo gestiamo noi.",
        },
        {
          h2: "Risparmio reale per il tuo portafoglio",
          body: "Gestire 30 immobili con Hommi significa eliminare costi nascosti come tempo perso, recensioni negative e interventi gonfiati. La maggior parte dei property manager risparmia tra il 25% e il 40% sui costi annuali di manutenzione.",
        },
      ]}
      faqs={[
        {
          q: "In quali città è attivo Hommi?",
          a: "Operiamo a Milano, Monza, Como, Torino e Lecco con tecnici verificati e tempi di intervento garantiti.",
        },
        {
          q: "Posso usare Hommi se ho già un team interno?",
          a: "Sì. Hommi può integrarsi con il tuo team esistente coprendo solo gli orari serali, i weekend o le aree non presidiate.",
        },
        {
          q: "Come vengono selezionati i tecnici?",
          a: "Ogni tecnico è verificato, assicurato e valutato dopo ogni intervento. Vengono esclusi automaticamente sotto una certa soglia di feedback.",
        },
        {
          q: "Quanto costa Hommi per un property manager?",
          a: "I piani partono da 14,90 € al mese per immobile. Trovi tutti i dettagli nella pagina Prezzi.",
        },
      ]}
      ctaTitle="Quanto stai spendendo davvero in manutenzione?"
      ctaSubtitle="Calcola in 60 secondi il costo nascosto della tua gestione attuale."
    />
  );
}
