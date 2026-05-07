import SeoLanding from "@/components/seo/SeoLanding";

export default function SeoHost() {
  return (
    <SeoLanding
      slug="seo/gestione-manutenzione-host-airbnb"
      badge="Per Host Professionali"
      title="Manutenzione Case Vacanza e Airbnb per Host Professionali | Hommi"
      description="Hommi è il servizio di manutenzione per host Airbnb e case vacanza a Milano, Monza, Como, Torino e Lecco. Interventi rapidi, tecnici verificati, zero recensioni negative."
      ogImage="/og/seo-host.jpg"
      ogImageAlt="Banner Hommi - Manutenzione Airbnb e Host Professionali"
      keywords="manutenzione airbnb, host professionali, case vacanza, short rental, manutenzione affitti brevi"
      h1="Manutenzione per host Airbnb e case vacanza"
      intro="Una doccia che non funziona può costare 200 € di rimborsi e una recensione a 3 stelle. Hommi ti permette di risolvere i problemi dei tuoi ospiti in poche ore, mantenendo la valutazione del tuo annuncio sopra il 4,8."
      sections={[
        {
          h2: "Difendi le tue recensioni",
          body: "Il 70% delle recensioni negative è causato da problemi di manutenzione non risolti durante il soggiorno. Con Hommi i tuoi ospiti aprono un ticket via WhatsApp e ricevono assistenza in italiano e inglese.",
          bullets: [
            "Assistenza ospiti in 8 lingue",
            "Tecnici disponibili anche nei weekend",
            "Trasparenza totale su costi e tempi",
            "Notifiche in tempo reale dello stato del ticket",
          ],
        },
        {
          h2: "Pensato per chi gestisce più immobili",
          body: "Che tu gestisca 2 o 50 appartamenti, Hommi scala con te. Più immobili attivi, più costi medi per intervento si abbassano grazie ai nostri tecnici di zona.",
        },
        {
          h2: "Operiamo dove sei tu",
          body: "Siamo presenti a Milano, Monza, Como, Torino e Lecco con un network di tecnici selezionati per il mondo dello short rental.",
        },
      ]}
      faqs={[
        {
          q: "Come fa l'ospite a contattarvi?",
          a: "Lasci nel check-in instructions un numero WhatsApp dedicato. L'ospite scrive, noi attiviamo il tecnico e ti aggiorniamo.",
        },
        {
          q: "Posso approvare i preventivi prima?",
          a: "Sì. Tutti gli interventi sopra una soglia che imposti tu richiedono la tua approvazione esplicita.",
        },
        {
          q: "Cosa succede di notte o nei weekend?",
          a: "Garantiamo copertura H24 per le emergenze (acqua, gas, sicurezza) anche nei festivi.",
        },
        {
          q: "Quanto costa per un host con 5 immobili?",
          a: "I piani partono da 14,90 € al mese per immobile. Trovi i dettagli completi nella pagina Prezzi.",
        },
      ]}
      ctaTitle="Smetti di rincorrere idraulici alle 23:00"
      ctaSubtitle="Calcola quanto ti costano davvero i guasti dei tuoi ospiti."
    />
  );
}
