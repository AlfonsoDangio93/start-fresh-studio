import SeoLanding from "@/components/seo/SeoLanding";

export default function SeoManutenzione() {
  return (
    <SeoLanding
      slug="seo/gestione-manutenzione-immobili"
      badge="Servizio Manutenzione"
      title="Gestione Manutenzione Immobili a Milano, Torino e Como | Hommi"
      description="Hommi è il servizio completo di gestione manutenzione immobiliare a Milano, Monza, Como, Torino e Lecco. Per property manager, agenzie e host professionali."
      ogImage="/og/seo-manutenzione.jpg"
      ogImageAlt="Banner Hommi - Gestione Manutenzione Immobili"
      keywords="gestione manutenzione immobili, manutenzione appartamenti, servizio manutenzione Milano, manutenzione Torino, manutenzione Como"
      h1="Gestione manutenzione immobili chiavi in mano"
      intro="Hommi è il servizio integrato di gestione della manutenzione per chi opera nel mondo immobiliare professionale: tecnici verificati, ticketing su WhatsApp, costi trasparenti e copertura sulle principali città del Nord Italia."
      sections={[
        {
          h2: "Un unico interlocutore per tutta la manutenzione",
          body: "Idraulica, elettrica, serrature, elettrodomestici, pulizie straordinarie: con Hommi gestisci tutto da un unico canale, senza più decine di numeri salvati in rubrica.",
          bullets: [
            "Servizi idraulici, elettrici, fabbro e tuttofare",
            "Pulizie straordinarie e sanificazioni",
            "Manutenzione programmata su caldaie e climatizzatori",
            "Interventi documentati con foto e firma digitale",
          ],
        },
        {
          h2: "Costi trasparenti, zero sorprese",
          body: "Prezzi concordati a tariffario, preventivi prima dell'intervento e nessuna marginalità nascosta sui materiali. Sai sempre quanto stai spendendo.",
        },
        {
          h2: "Operiamo dove serve di più",
          body: "Siamo attivi a Milano, Monza, Como, Torino e Lecco. Le aree di copertura crescono in base alla domanda dei nostri clienti professionali.",
        },
      ]}
      faqs={[
        {
          q: "Quali tipi di intervento gestite?",
          a: "Dalla piccola riparazione idraulica alla manutenzione programmata di caldaie, climatizzatori e impianti elettrici.",
        },
        {
          q: "I prezzi sono fissi?",
          a: "Lavoriamo a tariffario concordato. Ogni intervento ha un preventivo che approvi prima che il tecnico parta.",
        },
        {
          q: "Posso avere un report mensile?",
          a: "Sì. Ogni mese ricevi un report con interventi, costi e indicatori per immobile e per proprietario.",
        },
        {
          q: "Lavorate anche con privati?",
          a: "Hommi è pensato per professionisti che gestiscono più immobili. Per privati offriamo solo servizi spot su richiesta.",
        },
      ]}
      ctaTitle="Scopri quanto puoi risparmiare con Hommi"
      ctaSubtitle="Inserisci 5 dati e ottieni in 60 secondi una stima del tuo risparmio annuo."
    />
  );
}
