import { Link } from "react-router-dom";

export default function TerminiCondizioni() {
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
        <h1 className="text-3xl font-bold mb-2">Termini e Condizioni Generali</h1>
        <p className="text-sm text-muted-foreground mb-8">Data di pubblicazione: 15/01/2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-[15px] leading-relaxed">

          <h2 className="text-xl font-semibold mt-8">PREMESSA</h2>
          <p>I Termini e Condizioni Generali disciplinano la fornitura del servizio denominato "hommi" (nel prosieguo, "Servizio") da parte della nostra società all'Utente.</p>
          <p>La società che fornisce il servizio è <strong>S9 S.r.l. S.B.</strong>, è una società con sede legale in Corso Unione Sovietica 612/15/C, Torino, iscritta al Registro Imprese di Torino, REA n. TO - 1332495, codice fiscale e P.IVA n. 13008000013 (la "Società").</p>
          <p>Il Servizio è fornito dalla Società attraverso il sito web <a href="https://hommi.it/" className="text-primary underline">https://hommi.it/</a> (il "Sito").</p>
          <p>La Società si occupa dello sviluppo e della gestione di una piattaforma online (la "Piattaforma") che fornisce strumenti tecnologici e servizi, incluso il matching di informazioni gestito da un algoritmo proprietario, a favore di soggetti che operano nel mercato della manutenzione, cura e valorizzazione di immobili e che, pertanto, facilita il posizionamento sul mercato per la ricerca e il contatto con i clienti, semplifica la gestione dei rapporti e degli incarichi, e rende più efficiente la gestione delle prenotazioni dei servizi presenti sulla piattaforma stessa.</p>
          <p>L'utente a cui si riferiscono i Termini e Condizioni Generali è il soggetto che utilizza il Sito e le funzionalità della Piattaforma (l'"Utente"). L'Utente tipo a cui è rivolto il servizio è il "Professionista", ossia la persona fisica o giuridica che agisce nell'esercizio della propria attività imprenditoriale, commerciale, artigianale o professionale.</p>
          <p>I Termini e Condizioni Generali sono suddivisi in Sezioni, in base agli argomenti in ciascuna trattati, come segue:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>la <strong>Sezione A</strong> contiene i Termini di Utilizzo, ossia i termini e condizioni che regolano l'utilizzo del Sito e della Piattaforma;</li>
            <li>la <strong>Sezione B</strong> contiene le Condizioni di Utilizzo Delle Funzionalità Della Piattaforma, ossia le Clausole che regolano le funzioni della Piattaforma;</li>
            <li>la <strong>Sezione C</strong> contiene le Disposizioni Finali, ossia un insieme di disposizioni finali che fanno da complemento a tutte le altre Sezioni.</li>
          </ul>
          <p>L'informativa privacy della Società inerente il trattamento dei dati personali degli Utenti è invece disponibile al link <Link to="/privacy-policy" className="text-primary underline">https://hommi.it/privacy-policy</Link> ("Informativa Privacy").</p>
          <p>La presente versione dei Termini e Condizioni Generali è in vigore dalla data di pubblicazione indicata sul Sito o sugli altri canali da cui il presente testo è accessibile.</p>

          {/* SEZIONE A */}
          <h2 className="text-2xl font-bold mt-12 border-b border-border pb-2">Sezione A: TERMINI DI UTILIZZO</h2>

          <h3 className="text-lg font-semibold mt-6">1. PREMESSA</h3>
          <p>1.1 La Piattaforma di hommi è accessibile solo attraverso il link <a href="https://hommi.it/" className="text-primary underline">https://hommi.it/</a></p>
          <p>1.2 Il Sito, il dominio "https://hommi.it/" e relativi sotto-domini sono di titolarità esclusiva della Società e rientrano nei "Diritti di Proprietà Intellettuale" della Società, per tali intendendosi i brevetti, modelli di utilità, disegni e modelli, i diritti d'autore, i marchi commerciali o di servizio, i diritti sulla topografia dei Servizi semiconduttori, i diritti sulle banche dati, i diritti contenuti in informazioni riservate, tra cui il know-how e i segreti commerciali e industriali, i diritti morali o altri diritti simili in qualunque paese e, che siano o meno registrati, le eventuali domande di registrazione di uno dei precedenti diritti e tutti i diritti relativi alla presentazione delle domande di registrazione per uno dei precedenti diritti che siano di proprietà di, concessi in licenza alla Società o comunque legittimamente da essa utilizzati.</p>
          <p>1.3 La presente Sezione, anche indicata come Termini di Utilizzo, regola l'erogazione delle pagine del Sito e l'accesso alla Piattaforma.</p>

          <h3 className="text-lg font-semibold mt-6">2. OBBLIGHI DELL'UTENTE</h3>
          <p>2.1 Ai fini dell'utilizzo del Sito e della Piattaforma, l'Utente accetta tutto quanto segue:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>fornirci informazioni esatte;</li>
            <li>in generale, non creare identità false sul Sito, ovvero non rappresentare la propria identità in modo non veritiero, o ancora utilizzare in maniera non autorizzata profili di terzi;</li>
            <li>rispettare tutte le leggi applicabili;</li>
            <li>non sviluppare, supportare o utilizzare software, dispositivi, script, robot o qualsiasi altro mezzo o processo per eseguire operazioni di scraping sul Sito o altrimenti copiare profili e altri dati dal Sito;</li>
            <li>non disabilitare qualsivoglia funzionalità di sicurezza o bypassare o eludere qualsiasi controllo di accesso o limitazione di utilizzo del Sito;</li>
            <li>non copiare, usare, divulgare o distribuire qualsiasi informazione ottenuta dal Sito in violazione delle leggi, direttamente o attraverso terze parti, senza il consenso dei rispettivi titolari;</li>
            <li>non divulgare informazioni che non ha il diritto di rivelare;</li>
            <li>non violare i Diritti di Proprietà Intellettuale della Società, e in particolare, senza limitazioni, non usare la parola "hommi" o i nostri loghi in qualsivoglia nome di azienda, email o URL;</li>
            <li>non violare i Diritti di Proprietà Intellettuale di altri soggetti, Utenti o terzi;</li>
            <li>non eseguire il reverse engineering, la decompilazione, lo smontaggio, la decifrazione o altro tentativo di decodificare il codice sorgente del Sito;</li>
            <li>non insinuare o affermare di essere affiliato con o referenziato dalla Società senza il nostro espresso consenso;</li>
            <li>non rappresentare o comunicare informazioni sulla Società in maniera difforme da quanto rappresentato dalla Società stessa attraverso il Sito;</li>
            <li>in caso di accesso riservato ed anticipato ad alcune funzioni in via di sviluppo, coperte da accordo di riservatezza con la Società, non divulgare in alcun modo tali informazioni confidenziali;</li>
            <li>non utilizzare programmi bot o altri metodi automatizzati per accedere al Sito ed effettuare acquisti;</li>
            <li>non monitorare la disponibilità, le prestazioni o la funzionalità del Sito per qualsiasi finalità concorrenziale;</li>
            <li>non svolgere attività di "framing", "mirroring" o in altro modo simulare l'aspetto o la funzione del Sito;</li>
            <li>non interferire con il funzionamento del Sito o utilizzare sugli stessi un carico irragionevole di dati.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">3. ACCETTAZIONE DEI TERMINI DI UTILIZZO E MODIFICHE</h3>
          <p>3.1 Utilizzando il Sito, l'Utente accetta implicitamente i Termini di Utilizzo, con ciò concludendo un accordo legalmente vincolante con la Società.</p>
          <p>3.2 Se l'Utente non è d'accordo con una qualsiasi delle previsioni di questa Sezione è invitato a cessare l'utilizzo del Sito.</p>

          <h3 className="text-lg font-semibold mt-6">4. CONDIZIONI DI UTILIZZO</h3>
          <p>4.1 L'Utente riconosce e accetta:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>che il Sito ha lo scopo di favorire la promozione e la fornitura del Servizio;</li>
            <li>che la Società tratterà i dati dell'Utente in conformità a quanto previsto nell'Informativa Privacy;</li>
            <li>che la Società potrà inviare avvisi e messaggi ai recapiti forniti in conformità a quanto previsto nell'Informativa Privacy;</li>
            <li>che la Società si impegna a consentire la fruizione e l'accesso al Sito compatibilmente con le necessità connesse ad eventuali interventi di manutenzione programmata o straordinaria e indifferibile;</li>
            <li>che i costi di connessione alla rete internet, e quelli eventualmente relativi alle modalità di connessione, sono a proprio carico.</li>
          </ul>
          <p>4.2 L'Utente è responsabile di qualsiasi azione effettuata sul Sito a meno che non comunichi tempestivamente eventuali abusi alla Società e/o alle autorità.</p>

          <h3 className="text-lg font-semibold mt-6">5. RICHIESTE DELL'UTENTE</h3>
          <p>5.1 Gli Utenti possono rivolgere richieste alla Società scrivendo all'indirizzo e-mail <a href="mailto:info@hommi.it" className="text-primary underline">info@hommi.it</a>.</p>
          <p>5.2 La Società non ha alcun obbligo legale di rispondere alle richieste del mero visitatore.</p>
          <p>5.3 La Società tratterà i dati trasmessi dal mero visitatore quando questi contatta la Società al solo fine di eseguire le richieste disciplinate dai Termini di Utilizzo, e dunque in base a presupposti di natura precontrattuale/contrattuale, in conformità a quanto previsto nell'Informativa Privacy.</p>

          <h3 className="text-lg font-semibold mt-6">6. DIRITTI DELLA SOCIETÀ</h3>
          <p>6.1 La Società ha il diritto di:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>modificare, aggiornare, sospendere, limitare o interrompere in qualsiasi momento il funzionamento del Sito, o modificare e/o sostituirne il nome a dominio;</li>
            <li>analizzare il traffico sul Sito per comprenderne utilizzo e gestione, effettuare ottimizzazioni e apportare migliorie, solo a scopi statistici;</li>
            <li>risolvere problemi operativi;</li>
            <li>eseguire attività di monitoraggio per respingere e/o prevenire attacchi informatici e frodi.</li>
          </ul>
          <p>6.2 La Società si riserva il diritto di limitare, nei confronti dell'Utente, l'utilizzo del Sito.</p>

          <h3 className="text-lg font-semibold mt-6">7. ESCLUSIONI DI GARANZIA E NESSUNA ASSISTENZA</h3>
          <p>7.1 Il Sito è fornito "COSÌ COME È" e "COME DISPONIBILE", pertanto la Società non rilascia alcuna garanzia, esplicita o implicita, e potrebbe essere temporaneamente inaccessibile o comunque contenere difetti, ovvero presentare ritardi.</p>
          <p>7.2 In particolare, la Società non risponderà e non rilascia alcuna garanzia in merito a quanto segue:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>l'idoneità del Sito rispetto alle esigenze dell'Utente;</li>
            <li>la disponibilità del Sito e l'assenza di errori in esso;</li>
            <li>la qualità del Sito;</li>
            <li>la correzione di eventuali errori tecnici del Sito.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">8. LIMITAZIONE DI RESPONSABILITÀ RISPETTO ALL'EROGAZIONE DEL SITO</h3>
          <p>8.1 La Società e i suoi affiliati non risponderanno, per perdite di profitti o opportunità commerciali, di reputazione, o qualsivoglia danno indiretto, incidentale, consequenziale, speciale o punitivo, derivato dall'uso del Sito.</p>
          <p>8.2 La Società compirà ogni ragionevole sforzo per garantire all'Utente l'accesso continuo e senza interruzioni al Sito, ma non potrà in nessun caso, essere considerata responsabile qualora uno o più contenuti messi a disposizione attraverso il Sito risultino temporaneamente o definitivamente inaccessibili.</p>
          <p>8.3 La Società non garantisce la fornitura di assistenza tecnica relativamente al Sito.</p>
          <p>8.4 Nel caso in cui la Società modifichi, aggiorni, sospenda, limiti o interrompa il funzionamento del Sito, non sorgerà alcuna responsabilità nei confronti dell'Utente.</p>

          {/* SEZIONE B */}
          <h2 className="text-2xl font-bold mt-12 border-b border-border pb-2">Sezione B: CONDIZIONI DI UTILIZZO DELLE FUNZIONALITÀ DELLA PIATTAFORMA</h2>

          <h3 className="text-lg font-semibold mt-6">9. OGGETTO</h3>
          <p>9.1 La presente Sezione disciplina l'utilizzo e le funzionalità della Piattaforma.</p>
          <p>9.2 Attraverso la Piattaforma l'Utente può gestire il proprio accesso, tracciare le attività sugli immobili, aprire i ticket per gli interventi sugli immobili, gestire gli interventi.</p>

          <h3 className="text-lg font-semibold mt-6">10. RUOLI</h3>
          <p>10.1 Hommi fornisce le funzionalità presenti sulla Piattaforma, operando come fornitore di servizi digitali nei confronti dell'Utente.</p>
          <p>10.2 L'Utente è un Professionista, come specificato nelle Premesse, e per usufruire delle funzionalità della Piattaforma deve identificarsi in uno dei seguenti ruoli: Property Manager dell'immobile ("P.M.") o Manutentore ("Manutentore"), che svolge le prestazioni sull'immobile richieste dal P.M.. Il Manutentore è munito delle necessarie competenze, eventuale titoli di studio e (dove necessari per leggi) certificazioni e assicurazione professionale.</p>
          <p>10.3 La Società interviene sulla Piattaforma in qualità di Amministratore ("Amministratore"). Tra le sue attività principali vi è quella di abbinare il Manutentore adatto all'esigenza evidenziata dal P.M. nella richiesta di intervento all'immobile e fornire uno storico dell'immobile e degli interventi avvenuti.</p>
          <p>10.4 La scelta del Manutentore da parte dell'Amministratore è effettuata sulla base delle competenze e della geolocalizzazione del Professionista rispetto al tipo di intervento e all'immobile.</p>
          <p>10.5 Alla conclusione del contratto con i Professionisti la Società consegna loro un manuale nel quale sono indicate le diverse regole operative e di comportamento per il P.M. e per il Manutentore.</p>

          <h3 className="text-lg font-semibold mt-6">11. ACCESSO E UTILIZZO DELLA PIATTAFORMA. GESTIONE DEI TICKET.</h3>
          <p>11.1 L'Utente per accedere alla Piattaforma deve creare un account, registrandosi e fornendo i propri dati, come richiesto dall'interfaccia. L'Utente può estendere l'accesso al proprio account a ulteriori persone, intese come collaboratori.</p>
          <p>11.2 Nel proprio account personale l'Utente ha accesso a diverse sezioni e funzionalità: "Dashboard" (solo per il Manutentore), "Appuntamenti", "Immobili" e "Guida".</p>
          <p>11.3 Il P.M., dopo aver creato il proprio account, potrà inserire l'immobile o il portafoglio di immobili, che dovrà descrivere compilando le informazioni richieste nell'interfaccia.</p>
          <p>11.4 Una volta creata dal P.M., la scheda dell'immobile sarà visibile ed integrabile con i dati inseriti dal Manutentore, a seguito degli interventi e/o sopralluoghi.</p>
          <p>11.5 Il Manutentore, dopo aver effettuato la registrazione, viene assegnato dall'Amministratore ad un immobile sul quale dovrà effettuare l'intervento richiesto dal P.M.. Sulla propria Dashboard troverà la calendarizzazione degli interventi confermati e da confermare.</p>
          <p>11.6 Il P.M. nella sezione "Appuntamenti" può utilizzare la funzione di calendarizzazione degli interventi proponendo 3 date e fasce orarie al Manutentore, al quale verrà inviata una richiesta tramite dashboard, e-mail e Whatsapp, a cui dovrà rispondere nei tempi previsti nel manuale operativo.</p>
          <p>11.7 Una volta completato l'intervento o il sopralluogo, il Manutentore dovrà indicarlo come "completato" nella propria Dashboard, avendo cura di caricare immagini e video e aggiornare le caratteristiche dell'immobile, e dovrà completare la sezione di "Revisione Generale", inserendo le informazioni richieste sull'attività e sui componenti revisionati.</p>
          <p>11.8 Entrambi i Professionisti possono trovare nella sezione "Guida" le informazioni utili per gestire e utilizzare l'account e la Piattaforma.</p>
          <p>11.9 Nei casi specificati nella "Guida" il P.M. può aprire un ticket a cui deve assegnare un livello di priorità. Lo stato del ticket può essere costantemente monitorato e aggiornato dal Manutentore a cui è stato assegnato e dopo la sua presa in carico.</p>
          <p>11.10 Il Manutentore viene a conoscenza dell'assegnazione di un ticket attraverso una notifica alla e-mail inserita in fase di registrazione dell'account.</p>
          <p>11.11 La durata degli interventi viene monitorata dal momento in cui il Manutentore avvia la checklist quando è nell'immobile.</p>
          <p>11.12 Al termine dell'intervento il Manutentore dovrà caricare una fotografia dell'intervento risolto e compilare il report dell'intervento. Qualora durante l'intervento il Manutentore dovesse riscontrare ulteriori problemi, questi dovranno essere segnalati direttamente dal ticket.</p>
          <p>11.13 Sarà onere del Manutentore contattare la Società al numero dedicato o contattarla direttamente su whatsapp, qualora durante l'esecuzione dell'intervento il Manutentore dovesse riscontrare problemi legati alla Piattaforma.</p>

          {/* SEZIONE C */}
          <h2 className="text-2xl font-bold mt-12 border-b border-border pb-2">Sezione C: DISPOSIZIONI FINALI</h2>

          <h3 className="text-lg font-semibold mt-6">12. CAPACITÀ LEGALE E MINORI</h3>
          <p>12.1 L'utilizzo del Sito da parte dell'Utente vale quale dichiarazione da parte dello stesso di avere la capacità legale di agire per stipulare contratti di compravendita come fissata dal proprio ordinamento nazionale di provenienza.</p>

          <h3 className="text-lg font-semibold mt-6">13. OBBLIGHI FINALI DELL'UTENTE</h3>
          <p>13.1 L'Utente si obbliga a non violare:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>i Termini e Condizioni Generali;</li>
            <li>regole o eventuali termini aggiuntivi pubblicati dalla Società sul Sito;</li>
            <li>la normativa applicabile dell'Italia e/o del paese in cui si trova e/o del paese in cui risiede;</li>
            <li>i diritti della Società e/o di terzi.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">14. RIMEDI A FAVORE DELLA SOCIETÀ</h3>
          <p>14.1 La Società potrà, a proprio insindacabile giudizio e senza che ciò comporti obblighi risarcitori:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>negare all'Utente successive registrazioni/utilizzi del Sito in caso di violazione;</li>
            <li>intraprendere nei confronti dell'Utente ogni eventuale azione a propria tutela, ivi incluse quelle volte a ottenere il risarcimento di danni.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">15. MANLEVA</h3>
          <p>15.1 L'Utente risponde, manlevando e tenendo indenne la Società, per ogni azione, inclusi ragionevoli onorari legali, promossa da terzi e volta a ottenere il risarcimento di danni riguardanti le violazioni della precedente Clausola rubricata "Obblighi Finali dell'Utente".</p>

          <h3 className="text-lg font-semibold mt-6">16. TUTELA DELLA PROPRIETÀ INTELLETTUALE</h3>
          <p>16.1 La Società è il titolare esclusivo di tutti i Diritti di Proprietà Intellettuale sul Sito, nonché sui marchi e i loghi relativi alla Società.</p>
          <p>16.2 Nessuna delle attività svolte dalla Società e regolata dai Termini e Condizioni Generali, inclusa l'erogazione del Sito, costituirà né potrà essere interpretata come cessione o concessione in licenza da parte della Società a favore dell'Utente di alcun Diritto di Proprietà Intellettuale.</p>

          <h3 className="text-lg font-semibold mt-6">17. COME CONTATTARCI</h3>
          <p>17.1 Per qualsiasi domanda generica, potete contattare online la Società scrivendo all'indirizzo di posta elettronica <a href="mailto:info@hommi.it" className="text-primary underline">info@hommi.it</a>.</p>
          <p>17.2 Per avvisi legali o notifiche degli atti, potete scriverci a questi indirizzi: <a href="mailto:s9srl@pec.it" className="text-primary underline">s9srl@pec.it</a> (PEC), S9 S.r.l. S.B. Corso Unione Sovietica 612/15/C 10135 Torino (domicilio fisico).</p>
          <p>17.3 Per specifiche richieste, l'Utente può avvalersi degli appositi form disponibili sul Sito, in base al tipo di richiesta, restando inteso che tali richieste hanno natura di misure precontrattuali.</p>

          <h3 className="text-lg font-semibold mt-6">18. MISCELLANEA</h3>
          <p>18.1 La Società si riserva il diritto di modificare in qualsiasi momento qualunque documento legale presente sul Sito, nonché il Servizio, anche al fine di offrire nuovi Servizi, ovvero per esigenze di conformità a nuove disposizioni di legge o regolamentari. Le modifiche ai Termini e Condizioni Generali non avranno valore retroattivo ed entreranno in vigore non prima di sette giorni dopo la data di pubblicazione.</p>
          <p>18.2 I Termini e Condizioni Generali costituiscono la manifestazione integrale di tutte le intese e gli accordi intercorsi tra la Società e l'Utente in relazione al suo oggetto.</p>
          <p>18.3 Le rubriche delle singole clausole sono state poste al solo scopo di agevolare la lettura dei Termini e Condizioni Generali.</p>
          <p>18.4 I Termini e Condizioni Generali regolano il rapporto tra la Società e l'Utente e non fanno sorgere diritti in favore, né obblighi a carico di terzi.</p>
          <p>18.5 L'eventuale tolleranza della Società ai comportamenti posti in essere dall'Utente in violazione delle disposizioni contenute nei Termini e Condizioni Generali non costituisce rinuncia ai diritti derivanti dalle disposizioni violate.</p>
          <p>18.6 I diritti e i rimedi qui inclusi non hanno carattere esclusivo, ma si aggiungono agli altri diritti e rimedi disponibili secondo la legge applicabile.</p>
          <p>18.7 Se una delle disposizioni dei Termini e Condizioni Generali fosse giudicata nulla o inapplicabile, le rimanenti disposizioni rimarranno pienamente valide ed efficaci.</p>
          <p>18.8 Qualunque limitazione o esclusione di responsabilità prevista a favore della Società dai Termini e Condizioni Generali, si applica nella misura massima consentita dalla legge.</p>
          <p>18.9 In caso di contrasto tra le previsioni contenute nelle presenti Disposizioni Finali e quelle indicate nelle altre Sezioni, prevalgono queste ultime se non diversamente espressamente specificato.</p>
          <p>18.10 Le disposizioni contenute nelle Disposizioni Finali si applicano a tutti i documenti legali disponibili sul Sito, salvo espressa previsione contenuta in altro documento legale della Società.</p>

          <h3 className="text-lg font-semibold mt-6">19. LEGGE APPLICABILE E FORO COMPETENTE</h3>
          <p>19.1 I Termini e Condizioni Generali, e qualunque accordo tra l'Utente e la Società basato sugli stessi, sono regolati dalla legge italiana con espressa esclusione delle relative disposizioni in materia di diritto privato internazionale.</p>
          <p>19.2 Per ogni controversia relativa all'interpretazione, esecuzione e risoluzione del contratto tra Utente e Società basato sui Termini e Condizioni Generali la competenza è devoluta alla giurisdizione esclusiva del Tribunale di Torino.</p>
        </div>
      </main>
    </div>
  );
}
