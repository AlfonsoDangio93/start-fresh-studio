import SeoLanding from "@/components/seo/SeoLanding";

export default function SeoTicketing() {
  return (
    <SeoLanding
      slug="seo/ticketing-guasti-immobili"
      badge="Servizio Ticketing"
      title="Software Ticketing Guasti per Immobili | Hommi"
      description="Sistema di ticketing guasti per property manager, agenzie e host. Apertura ticket via WhatsApp, assegnazione automatica al tecnico, tracciabilità completa."
      ogImage="/og/seo-ticketing.jpg"
      ogImageAlt=Banner Hommi - Ticketing Guasti per Immobili
      keywords="ticketing guasti, software manutenzione immobili, gestione segnalazioni, ticket WhatsApp, helpdesk immobiliare"
      h1="Ticketing guasti per la gestione immobiliare"
      intro="Hommi ti offre un sistema di ticketing pensato per chi gestisce immobili: niente app da installare, tutto su WhatsApp, ma con la potenza di un helpdesk professionale alle spalle."
      sections={[
        {
          h2: "Un ticket nasce in 30 secondi",
          body: "L'ospite, l'inquilino o il proprietario scrivono su WhatsApp. Il nostro sistema classifica automaticamente la segnalazione (urgente, ordinaria, programmata) e la assegna al tecnico più vicino.",
          bullets: [
            "Apertura ticket via WhatsApp, senza app",
            "Categorizzazione automatica della richiesta",
            "Allegati foto e video direttamente in chat",
            "Storico completo per ogni immobile",
          ],
        },
        {
          h2: "Tracciabilità che protegge te e il proprietario",
          body: "Ogni intervento è documentato con orari, foto, preventivo, fattura e feedback finale. Tutto archiviato e consultabile in qualsiasi momento.",
        },
        {
          h2: "Integrato con il tuo flusso operativo",
          body: "Hommi si integra con i principali PMS e channel manager utilizzati dai professionisti del short rental.",
        },
      ]}
      faqs={[
        {
          q: "Devo installare un'applicazione?",
          a: "No. Tutto avviene tramite WhatsApp e la nostra piattaforma web. Nessuna app da scaricare per ospiti o inquilini.",
        },
        {
          q: "Posso vedere lo storico dei ticket per immobile?",
          a: "Sì. Ogni immobile ha la sua scheda con interventi, costi e tecnici intervenuti.",
        },
        {
          q: "Le segnalazioni notturne vengono gestite?",
          a: "Sì, con un protocollo dedicato per emergenze H24.",
        },
        {
          q: "Posso ricevere notifiche personalizzate?",
          a: "Sì. Configuri tu se ricevere ogni aggiornamento o solo le approvazioni di preventivo.",
        },
      ]}
      ctaTitle="Prova il ticketing pensato per gli immobili"
      ctaSubtitle="Calcola quanto tempo perderesti senza un sistema dedicato."
    />
  );
}
