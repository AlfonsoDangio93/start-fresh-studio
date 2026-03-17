import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
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

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">
          ai sensi dell'art. 13 del Regolamento UE n. 2016/679 – GDPR
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-[15px] leading-relaxed">
          <p>
            Gentile visitatore,<br />
            <strong>S9 s.r.l. Società Benefit</strong>, in qualità di Titolare del Trattamento, ai sensi dell'art. 13 del Regolamento UE 2016/679 ("GDPR") e del D. Lgs. 101/2018, nella persona del suo Amministratore Unico, Legale Rappresentante e Titolare Operativo del trattamento, <strong>Simone Calderoni</strong>, nel rispetto dei principi di correttezza, liceità, trasparenza e tutela della riservatezza,
          </p>
          <p className="font-semibold">la informa</p>
          <p>
            che i dati personali conferiti formeranno oggetto di trattamento nel rispetto della normativa sopra richiamata e dei relativi obblighi di riservatezza. Più in dettaglio:
          </p>

          <h2 className="text-xl font-semibold mt-8">1. Oggetto del trattamento</h2>
          <p>
            La presente informativa riguarda i dati personali trattati in occasione della navigazione sul sito www.hommi.it e della compilazione del questionario online per richiedere l'accesso ai servizi Hommi.
          </p>
          <p>Rientrano tra tali dati:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>dati identificativi e di contatto (nome, cognome, email, numero di telefono);</li>
            <li>dati di navigazione e tecnici (indirizzo IP, log di accesso, cookie e strumenti di tracciamento, come specificato nella Cookie Policy);</li>
            <li>eventuali ulteriori informazioni inserite volontariamente dall'interessato nel questionario o nei messaggi inviati tramite i canali di contatto messi a disposizione (es. email, WhatsApp, Google Meet).</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">2. Finalità del trattamento</h2>
          <p>I dati personali vengono trattati per le seguenti finalità:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>gestione delle richieste di accesso ai servizi Hommi tramite form/questionario online o contatti diretti;</li>
            <li>ricontatto dell'interessato e fornitura delle informazioni richieste;</li>
            <li>gestione delle comunicazioni con l'utente tramite email, WhatsApp o altri strumenti equivalenti;</li>
            <li>analisi statistica interna in forma anonima e miglioramento dei servizi;</li>
            <li>adempimento di obblighi di legge o di richieste da parte di autorità competenti.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">3. Modalità di trattamento, misure di sicurezza e conservazione dei dati</h2>
          <p>Il trattamento è effettuato mediante strumenti elettronici e, ove necessario, anche cartacei, nel rispetto dell'art. 32 del GDPR.</p>
          <p className="font-semibold">Misure adottate:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>utilizzo di ambienti cloud sicuri (es. Google Workspace) con accesso riservato e autenticazione a due fattori (2FA);</li>
            <li>backup periodici;</li>
            <li>sistemi di protezione informatica (antivirus e firewall aggiornati);</li>
            <li>accesso ai dati consentito unicamente a personale e collaboratori autorizzati.</li>
          </ul>
          <p className="font-semibold">Tempi di conservazione:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>dati raccolti tramite il questionario online o form di contatto → 12 mesi dalla raccolta con estensione fino a 10 anni nei casi in cui si instauri un rapporto contrattuale;</li>
            <li>dati di navigazione e tecnici → secondo i termini indicati nella Cookie Policy;</li>
            <li>dati forniti volontariamente per comunicazioni dirette → per il tempo necessario a dare seguito alla richiesta, e comunque non oltre 12 mesi.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">4. Responsabili Esterni del trattamento</h2>
          <p>
            L'elenco completo dei Responsabili Esterni del trattamento è costantemente aggiornato e può essere richiesto inviando comunicazione al Titolare all'indirizzo email: <a href="mailto:simone.calderoni@hommi.it" className="text-primary underline">simone.calderoni@hommi.it</a>.
          </p>

          <h2 className="text-xl font-semibold mt-8">5. Incaricati interni autorizzati al trattamento</h2>
          <p>
            L'elenco completo degli incaricati interni autorizzati al trattamento è costantemente aggiornato e può essere reperito inviando una richiesta per iscritto all'indirizzo e-mail <a href="mailto:simone.calderoni@hommi.it" className="text-primary underline">simone.calderoni@hommi.it</a>.
          </p>

          <h2 className="text-xl font-semibold mt-8">6. Natura del conferimento dei dati</h2>
          <p>
            Il conferimento dei dati contrassegnati come obbligatori nel questionario o nel form è necessario per dare seguito alla richiesta di informazioni o accesso ai servizi. In assenza di tali dati, non sarà possibile evadere la richiesta.
          </p>

          <h2 className="text-xl font-semibold mt-8">7. Base giuridica del trattamento</h2>
          <p>Il trattamento si fonda sulle seguenti basi giuridiche:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>esecuzione di misure precontrattuali adottate su richiesta dell'interessato (art. 6.1.b GDPR);</li>
            <li>adempimento di obblighi di legge (art. 6.1.c GDPR);</li>
            <li>legittimo interesse del Titolare (art. 6.1.f GDPR) alla sicurezza informatica e all'analisi interna in forma aggregata.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">8. Ambito di comunicazione e diffusione</h2>
          <p>I dati non saranno diffusi. Potranno essere comunicati a:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>soggetti autorizzati dal Titolare;</li>
            <li>Startup Studio, fornitori di servizi IT, hosting, cloud (nominati responsabili ex art. 28 GDPR);</li>
            <li>consulenti esterni (es. legali, fiscali) per adempimenti normativi;</li>
            <li>enti pubblici o autorità competenti in forza di obblighi di legge.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">9. Trasferimento dei dati personali</h2>
          <p>
            Non è previsto il trasferimento sistematico di dati personali verso paesi extra-UE. Qualora in futuro dovessero verificarsi, essi avverranno nel rispetto degli artt. 44 ss. GDPR, adottando Clausole Contrattuali Standard approvate dalla Commissione Europea o altre garanzie adeguate.
          </p>

          <h2 className="text-xl font-semibold mt-8">10. Diritti dell'interessato</h2>
          <p>Ai sensi degli artt. 15-21 e 77 del Regolamento, l'interessato potrà esercitare specifici diritti rivolgendosi al Titolare, tra cui:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Diritto di accesso:</strong> diritto di ottenere dal Titolare la conferma che sia o meno in corso un trattamento di dati personali e in tal senso, di ottenere l'accesso ai dati personali e ad ulteriori informazioni su origine, finalità, categoria di dati trattati, destinatari di comunicazione e/o trasferimento dei dati;</li>
            <li><strong>Diritto di rettifica:</strong> diritto di ottenere dal Titolare la rettifica dei dati personali inesatti senza ingiustificato ritardo, nonché l'integrazione di dati personali incompleti, anche fornendo una dichiarazione integrativa;</li>
            <li><strong>Diritto all'oblio:</strong> diritto di ottenere dal Titolare la cancellazione dei dati personali senza ingiustificato ritardo nel caso in cui i dati personali non sono più necessari rispetto alle finalità del trattamento; il consenso su cui si basa il trattamento è revocato e non sussiste altro fondamento giuridico per il trattamento; i dati personali sono stati trattati illecitamente; i dati personali devono essere cancellati per adempiere ad obblighi di legge;</li>
            <li><strong>Diritto di opposizione al trattamento:</strong> diritto di opporsi in qualsiasi momento al trattamento dei dati personali che hanno come base giuridica un interesse legittimo del Titolare;</li>
            <li><strong>Diritto di limitazione del trattamento:</strong> diritto di ottenere dal Titolare la limitazione del trattamento, nei casi in cui sia contestata l'esattezza dei dati personali, se il trattamento è illecito e/o l'interessato si è opposto al trattamento;</li>
            <li><strong>Diritto alla portabilità dei dati:</strong> diritto a ricevere in un formato strutturato, di uso comune e leggibile da dispositivo automatico, i dati personali e di trasmettere tali dati ad altro Titolare del trattamento, solo per i casi in cui il trattamento sia basato sul consenso e per i soli dati trattati tramite strumenti elettronici;</li>
            <li><strong>Diritto di revoca:</strong> diritto di revocare il consenso al trattamento dei dati personali precedentemente accordato;</li>
            <li><strong>Diritto di proporre reclamo all'Autorità di controllo:</strong> fatto salvo ogni altro ricorso amministrativo o giurisdizionale, qualora l'interessato ritenga che il trattamento che lo riguarda violi la normativa, avrà il diritto di presentare reclamo all'Autorità di controllo dello Stato membro in cui risiede o lavora abitualmente, ovvero lo Stato in cui si è verificata la presunta violazione.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">11. Modalità di esercizio dei Diritti dell'interessato</h2>
          <p>
            L'interessato può esercitare i suoi diritti con richiesta scritta inviata a S9 s.r.l. S.B. presso l'indirizzo della sua sede legale, oppure inviando una mail a <a href="mailto:simone.calderoni@hommi.it" className="text-primary underline">simone.calderoni@hommi.it</a>.
          </p>

          <h2 className="text-xl font-semibold mt-8">12. Titolare del trattamento</h2>
          <p>
            Il Titolare del trattamento è <strong>S9 s.r.l. S.B.</strong>, Corso Unione Sovietica 612/15/c, 10135 Torino (TO), nella persona del suo Amministratore Unico, Legale Rappresentante e Titolare Operativo del trattamento, <strong>Simone Calderoni</strong>.
          </p>

          <h2 className="text-xl font-semibold mt-8">13. Aggiornamenti</h2>
          <p>
            La presente informativa è soggetta ad aggiornamenti. Ogni modifica verrà resa disponibile su questa pagina.
          </p>
        </div>
      </main>
    </div>
  );
}
