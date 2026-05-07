import SeoLanding from "@/components/seo/SeoLanding";

export default function SeoAgenzie() {
  return (
    <SeoLanding
      slug="seo/gestione-manutenzione-agenzie-immobiliari"
      badge="Per Agenzie Immobiliari"
      title="Gestione Manutenzione per Agenzie Immobiliari | Hommi"
      description="Hommi supporta agenzie immobiliari nella gestione della manutenzione di affitti residenziali e brevi a Milano, Monza, Como, Torino e Lecco. Servizio chiavi in mano per inquilini e proprietari."
      ogImage="/og/seo-agenzie.jpg"
      ogImageAlt="Banner Hommi - Gestione manutenzione per Agenzie Immobiliari"
      keywords="manutenzione agenzia immobiliare, gestione affitti, post-vendita immobiliare, servizio inquilini, manutenzione locazioni"
      h1="Gestione manutenzione per agenzie immobiliari"
      intro="Le agenzie immobiliari oggi non vendono solo case: gestiscono relazioni continuative con proprietari e inquilini. Hommi ti permette di offrire un servizio post-vendita e post-locazione professionale, senza mettere in piedi un ufficio tecnico interno."
      sections={[
        {
          h2: "Trasforma la manutenzione in un nuovo ricavo",
          body: "Con Hommi puoi proporre ai tuoi clienti un pacchetto manutenzione white-label, fidelizzando proprietari e inquilini e generando una marginalità ricorrente.",
          bullets: [
            "Pacchetti dedicati per affitti brevi, transitori e residenziali",
            "Brand della tua agenzia su comunicazioni e ticket",
            "Reportistica condivisa con i proprietari",
            "Tecnici certificati su Milano, Monza, Como, Torino e Lecco",
          ],
        },
        {
          h2: "Riduci il carico operativo dei tuoi consulenti",
          body: "I consulenti immobiliari non dovrebbero passare la giornata a cercare un idraulico. Con Hommi ogni richiesta viene presa in carico dal nostro team operativo in meno di 15 minuti.",
        },
        {
          h2: "Conformità e tracciabilità",
          body: "Tutti gli interventi sono documentati con foto, preventivo, fattura e firma digitale. Una garanzia per te e per il proprietario.",
        },
      ]}
      faqs={[
        {
          q: "Hommi sostituisce il mio ufficio tecnico?",
          a: "Può sostituirlo o integrarlo. Molte agenzie usano Hommi solo per le emergenze fuori orario o per le zone non coperte.",
        },
        {
          q: "Posso rivendere il servizio ai miei clienti?",
          a: "Sì. Offriamo accordi white-label e di partnership con margini dedicati per agenzie strutturate.",
        },
        {
          q: "Che tipo di immobili gestite?",
          a: "Residenziali, affitti brevi, transitori e piccoli condomini privati nelle nostre aree operative.",
        },
        {
          q: "Quali sono i tempi di intervento?",
          a: "Per le emergenze garantiamo l'attivazione di un tecnico entro 2 ore in orario lavorativo.",
        },
      ]}
      ctaTitle="Vuoi offrire un servizio manutenzione ai tuoi clienti?"
      ctaSubtitle="Parla con noi e costruiamo insieme il pacchetto giusto per la tua agenzia."
      ctaHref="/per-agenzie"
      ctaLabel="Scopri la partnership"
    />
  );
}
