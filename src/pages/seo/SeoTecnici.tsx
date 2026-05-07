import SeoLanding from "@/components/seo/SeoLanding";

export default function SeoTecnici() {
  return (
    <SeoLanding
      slug="seo/gestione-tecnici-manutentori"
      badge="Network Tecnici"
      title="Gestione Tecnici e Manutentori per Immobili | Hommi"
      description="Hommi seleziona, coordina e valuta tecnici e manutentori per property manager, agenzie e host a Milano, Monza, Como, Torino e Lecco."
      keywords="gestione tecnici, manutentori immobiliari, idraulico, elettricista, fabbro, piattaforma manutentori"
      h1="Gestione tecnici e manutentori"
      intro="Trovare un buon idraulico o elettricista è difficile. Coordinarne dieci, su città diverse e con SLA chiari, è quasi impossibile. Hommi lo fa per te con un network selezionato di manutentori certificati."
      sections={[
        {
          h2: "Solo tecnici verificati",
          body: "Ogni tecnico Hommi viene controllato su documentazione, assicurazione, partita IVA e referenze. Dopo ogni intervento riceve un punteggio e viene escluso automaticamente sotto una certa soglia.",
          bullets: [
            "Verifica documentale completa",
            "Assicurazione RC professionale obbligatoria",
            "Valutazione continua basata su feedback",
            "Tariffe concordate e trasparenti",
          ],
        },
        {
          h2: "Coordinati da un team operativo reale",
          body: "Dietro a ogni ticket c'è un operatore Hommi che parla con il tecnico, conferma i tempi e ti aggiorna. Niente bot, niente risposte automatiche.",
        },
        {
          h2: "Specializzati nel mondo immobiliare",
          body: "I nostri tecnici lavorano ogni giorno su appartamenti in affitto breve, residenziali e piccole strutture ricettive. Conoscono i ritmi e le urgenze del settore.",
        },
      ]}
      faqs={[
        {
          q: "Posso scegliere il tecnico?",
          a: "Sì. Se hai preferenze su un manutentore già nel network, puoi richiederlo come prima opzione.",
        },
        {
          q: "I tecnici sono dipendenti Hommi?",
          a: "No, sono professionisti indipendenti selezionati e valutati continuamente da noi.",
        },
        {
          q: "Cosa succede se un intervento non risolve il problema?",
          a: "Il rientro è gratuito entro 30 giorni se il problema è correlato all'intervento originale.",
        },
        {
          q: "Sono un tecnico, posso candidarmi?",
          a: "Sì, attraverso la nostra pagina dedicata ai manutentori puoi inviare la candidatura al network.",
        },
      ]}
      ctaTitle="Vuoi accedere a tecnici verificati in 1 ora?"
      ctaSubtitle="Calcola il valore del tempo che oggi perdi a cercare manutentori."
    />
  );
}
