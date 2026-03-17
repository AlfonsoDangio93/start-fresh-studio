import { Link } from "react-router-dom";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/">
            <img src="/logos/hommi_logo.png" alt="Hommi" className="h-8" />
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Torna al sito
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">Cookie Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">
          ai sensi del Regolamento UE n. 2016/679 – GDPR
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-[15px] leading-relaxed">
          <p>
            Gentile visitatore,<br />
            <strong>S9 s.r.l. Società Benefit</strong>, in qualità di Titolare del trattamento dei dati personali, ai sensi del Regolamento (UE) 2016/679 e del D. Lgs. 101/2018, e nella persona del suo Amministratore Unico, Legale Rappresentante e Titolare Operativo del trattamento, <strong>Simone Calderoni</strong>,
          </p>
          <p className="font-semibold">La informa</p>
          <p>
            che, in occasione della navigazione sul sito www.hommi.it, possono essere raccolti e trattati dati personali tramite l'utilizzo di cookie e strumenti analoghi di tracciamento.
          </p>
          <p>La presente Cookie Policy ha lo scopo di:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>spiegare cosa sono i cookie e a cosa servono;</li>
            <li>descrivere le tipologie di cookie utilizzati dal sito;</li>
            <li>chiarire le modalità con cui il visitatore/fruitore del sito può gestire le proprie preferenze.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">1. Cosa sono i cookie e gli altri strumenti di tracciamento?</h2>
          <p>
            I cookie sono stringhe di testo di piccole dimensioni che i siti internet inviano al dispositivo utilizzato per la navigazione (sia esso un pc, un tablet, uno smartphone...) che vengono memorizzate e/o lette dal browser di navigazione, e che permettono allo stesso di inviare informazioni a chi ha installato tali cookie, affinché possa offrire esperienze di navigazione migliori, produrre statistiche sulle visite, o proporre contenuti promozionali mirati.
          </p>

          <h2 className="text-xl font-semibold mt-8">2. Quali sono le tipologie di cookie utilizzate sulla piattaforma?</h2>
          <p>Il sito www.hommi.it utilizza le seguenti categorie di cookie:</p>

          <h3 className="text-lg font-semibold mt-4">1. Cookie tecnici (necessari)</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Consentono la navigazione e il corretto funzionamento del sito;</li>
            <li>Non richiedono il consenso del visitatore/fruitore del sito.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">2. Cookie analitici</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Utilizzati per raccogliere informazioni statistiche aggregate sul numero di visitatori/fruitori del sito e su come questi visitano il sito;</li>
            <li>Ad esempio: Google Analytics (con eventuale anonimizzazione dell'IP);</li>
            <li>Richiedono il consenso del visitatore/fruitore del sito se non anonimizzati.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">3. Cookie di profilazione e marketing</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Utilizzati per tracciare la navigazione del visitatore/fruitore del sito e creare profili sulle sue preferenze, al fine di inviare messaggi pubblicitari in linea con esse;</li>
            <li>Esempi: Meta Pixel, Google Pixel, Brevo (newsletter e tracciamento apertura email);</li>
            <li>Richiedono sempre il consenso del visitatore/fruitore del sito.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">3. Gestione delle preferenze sui cookie</h2>
          <p>Al primo accesso al sito, un banner informa il visitatore/fruitore del sito sull'uso dei cookie e consente di:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>accettare tutti i cookie;</li>
            <li>rifiutare tutti i cookie non necessari;</li>
            <li>selezionare in modo granulare le preferenze.</li>
          </ul>
          <p>Il visitatore/fruitore del sito può in ogni momento modificare le scelte espresse tramite il banner o attraverso le impostazioni del proprio browser.</p>

          <h2 className="text-xl font-semibold mt-8">4. Durata dei cookie</h2>
          <p>La durata dei cookie varia a seconda della loro natura:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>cookie di sessione:</strong> si cancellano automaticamente alla chiusura del browser;</li>
            <li><strong>cookie persistenti:</strong> rimangono memorizzati fino alla loro scadenza o cancellazione manuale da parte del visitatore/fruitore del sito.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">5. Cookie di terze parti</h2>
          <p>
            L'installazione di cookie e altri sistemi di tracciamento operata da soggetti terzi tramite i servizi utilizzati all'interno del sito non può essere tecnicamente controllata dal Titolare.
          </p>
          <p>Per ottenere informazioni complete, il visitatore/fruitore del sito è invitato a consultare le informative privacy delle rispettive terze parti:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Google Analytics / Google Pixel: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://policies.google.com/privacy</a></li>
            <li>Meta Pixel: <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://www.facebook.com/privacy/policy</a></li>
            <li>Brevo (newsletter): <a href="https://www.brevo.com/legal/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://www.brevo.com/legal/privacypolicy/</a></li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">6. Come disabilitare i cookie</h2>
          <p>
            Il visitatore/fruitore del sito può gestire o disabilitare i cookie anche tramite le impostazioni del proprio browser (Chrome, Firefox, Edge, Safari). La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito.
          </p>

          <h2 className="text-xl font-semibold mt-8">7. Base giuridica del trattamento</h2>
          <p>L'utilizzo dei cookie da parte del sito www.hommi.it si fonda su diverse basi giuridiche, in conformità all'art. 6 GDPR:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cookie tecnici/necessari</strong> → trattati sulla base del legittimo interesse del Titolare (art. 6.1.f GDPR), in quanto necessari a garantire la corretta funzionalità del sito e una navigazione sicura ed efficiente;</li>
            <li><strong>Cookie analitici anonimizzati</strong> → trattati sulla base del legittimo interesse del Titolare (art. 6.1.f GDPR), per ottenere statistiche aggregate e migliorare la qualità del servizio;</li>
            <li><strong>Cookie analitici non anonimizzati e cookie di profilazione/marketing</strong> (es. Google Pixel, Meta Pixel, Brevo) → trattati esclusivamente sulla base del consenso del visitatore/fruitore del sito (art. 6.1.a GDPR), espresso tramite il banner al primo accesso e liberamente revocabile in qualsiasi momento.</li>
          </ul>
          <p>
            Il consenso prestato può essere revocato in qualsiasi momento tramite le impostazioni del banner o del browser, senza pregiudicare la liceità del trattamento basato sul consenso prima della revoca.
          </p>

          <h2 className="text-xl font-semibold mt-8">8. Modalità di comunicazione con il Titolare</h2>
          <p>
            È possibile inviare richiesta scritta a S9 s.r.l. Società Benefit presso l'indirizzo della sua sede legale, oppure inviando una mail a <a href="mailto:simone.calderoni@hommi.it" className="text-primary underline">simone.calderoni@hommi.it</a>.
          </p>

          <h2 className="text-xl font-semibold mt-8">9. Titolare del trattamento</h2>
          <p>
            Il Titolare del trattamento è <strong>S9 s.r.l. Società Benefit</strong>, con sede legale in Corso Unione Sovietica 612/15/C, 10135 Torino (TO), nella persona dell'Amministratore Unico, Legale Rappresentante e Titolare Operativo del trattamento, <strong>Simone Calderoni</strong>.
          </p>
        </div>
      </main>
    </div>
  );
}
