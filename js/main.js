var source   = $("#excuses-template").html();
var template = Handlebars.compile(source);
var data1 = { excuse: [
{ id: "1", 
	title: "As pessoas vão interpretar mal os dados",
	answers: [ 
		{answer: "Acrescente documentação sobre como os dados devem ser lidos; além de notas técnicas, pequenos tutoriais podem ser muito úteis!"},
		{answer: "Prepare-se para ajudar e corrigir essas pessoas; aquelas que interpretarem mal sem querer vão ficar agradecidas pela ajuda;"},
		{answer: "Na verdade, publicar ativamente pode ser útil para fazer um contraponto a distorções intencionais (por exemplo, de dados obtidos via Lei de Acesso à Informação), pois é possível mencionar a base aberta online, refutar a interpretação equivocada e oferecer a possibilidade de outras pessoas interpretarem de forma diferente."}
	]
},
{	id: "2",
	title: "A base é grande demais", 
	answers: [
		{answer: "Provavelmente, não é tão grande quanto pensa (a menos que você esteja no CERN);"},
		{answer: "Os mantenedores dos dados provavelmente têm orgulho do tamanho da base de dados, então não ofenda tentando dizer que não é tão grande assim;"},
		{answer: "Considere 'quebrar' por ano ou outro recorte e disponibilizar bases separadas."},
		{answer: "Pergunte se eles se importam que você faça alguns experimentos (e gentilmente mostre que é algo prático e possível de se fazer)."}
		
	]
},
{	id: "3",
	title: "As pessoas vão começar a ligar para perguntar coisas",
	answers: [
		{answer: "Geralmente, essa é uma objeção de pessoas que se sentem sobrecarregadas e acham que isso não faz parte de suas atribuições. Levar o assunto a um nível mais alto de gestão pode ajudar a identificar se isso vai ser útil ou, de fato, perda de tempo."},
		{answer: "Em minha experiência na Prefeitura de São Paulo, o que acontece é justamente o contrário: as pessoas deixam de ter trabalho extraindo a mesma base de dados para setores diferentes mais de uma vez, ou responder individualmente a pedidos de informação. Pessoas resistentes a princípio já vieram agradecer pela abertura de dados depois por esse motivo"}
	]
},
{	id: "4",
	title: "Ninguém se interessa por esses dados",
	answers: [
		{answer: "Se você está em contato para demandar a abertura desses dados, provavelmente já vê interesse neles. Tente explicar o porquê."},
		{answer: "Procure ilustrar com um caso em que, integrados a outras bases, esses dados poderiam ser mais interessantes - um exemplo que já usei como argumento: a localização exata de cada poste de iluminação pode ser cruzada com os casos de violência contra a mulher, par verificar se há locais mal-iluminados que podem estar correlacionados a esses eventos"},
		{answer: "Explique que há interesses que sequer podemos prever, e que é melhor que as pessoas decidam por si; no entanto, procure priorizar o que de fato tem alguma demanda identificada"},
		{answer: "Na Prefeitura de São Paulo, fizemos iniciativas como o Café Hacker e o plano de dados abertos colaborativo do Pátio Digital, na Educação <http://patiodigital.prefeitura.sp.gov.br/project/plano-dados/>, que são boas metodologias para captar e validar o interesse da sociedade pelos dados."},
		{answer: "Não raro, os dados são solicitados por meio de pedidos de informação ou serviços de atendimento ao cidadão e os técnicos não ficam sabendo; procure saber se é o caso e apresente os números"}
	]
},
{	id: "5",
	title: "Podemos utilizar os dados em uma publicação inédita nossa",
	answers: [
		{answer: "Já ouvi essa de um departamento que faz pesquisa. Existiria uma opção de fazer um embargo por determinado período, mas ela não seria compatível com a Lei de Acesso à Informação em nosso contexto. Essa não é uma das possibilidades de negativa de abertura previstas em lei."}
	]
},
{	id: "6",
	title: "Este sistema não possui uma API pública",
	answers: [
		{answer: "Mas uma API pública não é requisito para abertura - embora seja algo extremamente desejável."},
		{answer: "É possível extrair bases estáticas e criar uma rotina para transformá-las manual e periodicamente. Também é possível fazer scripts para automatizar esse processo"},
		{answer: "Como último recurso, é possível raspar os dados de uma página web pública"},
		{answer: "Fale com o mantenedor ou fornecedor do sistema; dados abertos estão na moda e pode ser interessante para eles embarcar nisso."}
	]
}
]};
var data2 = { excuse: [
{	id: "7",
	title: "Siamo preoccupati per la tutela dei dati personali e sensibili", 
	answers: [
		{answer: "Il Codice della Privacy (D. Lgs. 196/2003) prevede la tutela dei diritti di riservatezza delle sole persone fisiche, non di quelle giuridiche (aziende, associazioni, fondazioni): pertanto, se i dati (meglio: i dataset) non contengono dati personali, sensibili o giudiziari relativi a persone fisiche, il Codice privacy non costituisce un ostacolo alla pubblicazione. In ogni caso, l’articolo 4 del D. Lgs. 33/2013 disciplina i rapporti tra pubblicazione dei dati e privacy, introducendo dei criteri che sono da ritenersi generali (es. anonimizzazione)  e costituire una guida per non incorrere in violazioni. "},
		{answer: "Se siete preoccupati per la privacy, potete comunque pubblicare ciò che è già stato pubblicato in modalità analogica (non-machine-readable, es. sull’albo pretorio del Comune)."},
		{answer: "Eliminate o anonimizzate le stringhe che contengono i dati personali."},
		{answer: "Chiedete ai titolari dei dati un’esplicita autorizzazione a pubblicare i dati che li riguardano, sempre nei limiti di quanto imposto dal Codice della privacy."}
	]
},
{	id: "8",
	title: "Non siamo sicuri di essere titolari dei dati", 
	answers: [
		{answer: "Questo è il problema dei cataloghi delle biblioteche, spesso i metadati provengono da diverse fonti a pagamento che non permettono la libera ri-pubblicazione. Talvolta non è chiaro esattamente quali dati provengono da quale fonte, quindi l’intero dataset è corrotto."},
		{answer: "Ci sono parti di cui siamo sicuri? Possiamo pubblicare quelle."},
		{answer: "Se non ne siamo noi i titolari, conosciamo l’effettivo titolare?"},
		{answer: "C’è qualcos’altro di cui siamo sicuramente titolari noi?"}
	]
},
{	id: "9",
	title: "Non ho problemi a rendere i dati aperti, ma sono preoccupato che qualcun altro possa obiettare qualcosa", 
	answers: [
		{answer: "Questa è più una manovra diversiva che un vero problema."},
		{answer: "Implica che la persona ha paura di essere accusata per aver fatto un errore."},
		{answer: "Cerca tra i suoi superiori qualcuno in grado di rassicurarli che non finiranno nei guai."},
		{answer: "Richiedi un sottoinsieme di dati meno controverso."}
	]
},
{	id: "10",
	title: "É muito complicado", 
	answers: [
		{answer: "Questa è una questione simile a “è troppo grande”."},
		{answer: "Non mostrarti compiaciuto se viene fuori che non era così complicato, potrebbe compromettere le tue relazioni professionali con il fornitore dei dati"}
	]
},
{	id: "11",
	title: "I nostri dati sono brutti in modo imbarazzante",
	answers: [
		{answer: "Molti occhi ti aiuteranno a migliorare i tuoi dati (ad esempio evidenziando inesattezze)."},
		{answer: "Le persone accetteranno i tuoi dati per quello che sono."},
		{answer: "Offriti di aiutare il titolare dei dati a pulirli o mantenerli meglio. Fornendo un sistema che permetta ai titolari di gestire meglio i loro dati, potresti fare loro un favore."},
		{answer: "Se puoi ridurre i rischi, pubblicare dati aperti è un modo molto valido per motivare i fornitori di dati a pulirli. Ma i dati devono essere visibili, quindi ci sarà bisogno di una pagina web per mostrarli, così anche personale non tecnico potrà vederli (anche quelli brutti). Questa pagina è il luogo ideale per ribadire la procedura per fare correzioni. Questo significherà pubblicare inizialmente dati imperfetti, ma sarà molto efficace. Puoi mandare mail per anni alla gente chiedendo di migliorare i loro dati e non lo faranno. Nell’istante in cui scopriranno che questi sono visibili al pubblico, sfonderanno la tua porta chiedendoti di poterli correggere."}
	]
},
{
	id: "12",
	title: "Non è una priorità e siamo molto impegnati",
	answers: [
		{answer: "In cosa sei impegnato? In diversi casi potremmo essere in grado di aiutarti: ad esempio se ci aiutassi ad ottenere i dati che hai già, potremmo essere noi a creare la mappa/report/strumento di cui hai bisogno."}
	]
},
]};
var data3 = { excuse: [
{
	id: "13",
	title: "Non sono titolare dei dati, perciò non posso darti il permesso",
	answers: [
		{answer: "Rispondere a questa obiezione talvolta può essere tanto semplice quanto scoprire chi realmente possiede i dati."},
		{answer: "Talvolta nessuno sa chi sia titolare dei dati. Ciò sembra accadere spesso quando qualcuno ha occupato una posizione lavorativa di recente e non è consapevole di essere diventato il titolare dei dati."},
		{answer: "Risalire i livelli di chi ha la responsabilità amministrativa può aiutare. Se puoi trovare qualcuno che evidentemente ha la responsabilità dell’area a cui il dataset appartiene, potrà indicarti il titolare dei dati o darti direttamente il permesso ad usarli."},
		{answer: "Mettiti in contatto con qualcuno che sia a un livello amministrativo molto alto che possa incaricare qualcuno a prendere decisioni riguardo a dati apparentemente “orfani”."},
		{answer: "Stimola la stessa PA a ricercare i propri dati e capire di quali essa sia titolare, tramite l’apposita istanza di accesso civico, prevista dall’articolo 5 del Decreto Legislativo 14 marzo 2013, n. 33."}
	]
},
{
	id: "14",
	title: "Non abbiamo quei dati",
	answers: [
		{answer: "Talvolta ce li hanno, ma non se ne rendono conto (“Non sono dati, è solo un foglio di calcolo...”)."},
		{answer: "Bene, quali dati avete per noi, invece?"},
		{answer: "Abbiamo un obbligo o una richiesta di conservare quei  dati e possiamo aiutarvi ad iniziare il lavoro."},
		{answer: "Ma sono sul vostro sito..."},
		{answer: "... possono scoprire di avere un database che li gestisce"},
		{answer: "... oppure i dati sono gestiti manualmente, nel qual caso potresti ottenerli tramite scraping, e magari persino reimplementare il loro sito web su un modello basato sui dati e rendere più semplice il loro lavoro."}
	]
},
{
	id: "15",
	title: "I dati sono già pubblicati attraverso l’organizzazione esterna X",
	answers: [
		{answer: "Spesso le organizzazioni esterne non rilasceranno i dati sotto una licenza aperta, limitando la loro utilità all’organizzazione interessata. Pubblicarli noi in modo autonomo comporterà che potremo fare un uso completo dei dati."},
		{answer: "L’auto-pubblicazione significa che possiamo modellare in modo più accurato gli aspetti di maggiore interesse per noi."},
		{answer: "Le imprecisioni nei dati pubblicati possono essere corrette internamente, una volta notate, portando a dati più accurati (argomentazione dei “molti occhi vedono più di pochi”)."},
		{answer: "Possiamo ottenere quei dati dalla fonte esterna e linkarli con gli altri nostri dati? Se non è così, c’è un problema."},
		{answer: "Possiamo ottenere gli stessi dati che avete fornito all’organizzazione esterna?"}
	]
},
{
	id: "16",
	title: "Non possiamo fornire quel dataset a causa di una sua parte",
	answers: [
		{answer: "Abbiamo visto intere richieste venire inizialmente negate a causa di una piccola parte che non era disponibile o che era controversa: questo non è più possibile, perché si può obiettare che secondo l’articolo 6 del D. Lgs. 33/2013 “L'esigenza di assicurare adeguata  qualita'  delle  informazioni diffuse non puo', in ogni caso,  costituire  motivo  per  l'omessa  o ritardata pubblicazione dei dati, delle informazioni e dei documenti."},
		{answer: "In aggiunta al processo formale di richiesta dei dati, tenetevi in contatto con le persone ad ogni stadio. La condizione ideale sarebbe tramite un contatto diretto dato che un messaggio email può non essere efficace per eliminare la confusione. Rassicurateli del fatto che se una parte dei dati è complessa può essere saltata (si può trattare di una situazione abbastanza inusuale)."}
	]
},
{
	id: "17",
	title: "Che succede se qualcosa va male e la versione aperta dei dati diventa obsoleta?",
	answers: [
		{answer: "Pianifica il modo in cui si può prevenire che questo avvenga (per esempio, monitorando che gli aggiornamenti temporali non siano troppo radi)."},
		{answer: "Se appropriato, aggiungi un disclaimer ai dati per avvertire che vengono forniti senza alcuni generi di garanzia."},
		{answer: "Integrare i dati aperti nei flussi interni dei dati significa che le persone noteranno quando i dati diventano superati, riducendo la passibilità che rimangano tali.i una situazione abbastanza inusuale)."}
	]
},
{
	id: "18",
	title: "Non ne vediamo il beneficio",
	answers: [
		{answer: "Mostra esempi di un lavoro simile che abbia portato un ritorno sull’investimento a chi ha pubblicato i dati. "}
	]
},
{
	id: "19",
	title: "Che succede se intendiamo vendere l’accesso a questi dati?",
	answers: [
		{answer: "In alcuni casi si tratta di una valida preoccupazione, se vendere dati fa parte del vostro modello di business."},
		{answer: "Per usare un’analogia, un take-away cinese fallirebbe molto in fretta se decidesse di dare via il cibo gratis, ma fallirebbe anche se non rendesse il suo menu disponibile gratis. Una via di mezzo sono le sue ricette, che potrebbero costituire un segreto di un certo valore, ma che sono anche di grande interesse per persone con intolleranze alimentari. Se queste persone sapessero tutto di ogni piatto, potrebbero preferire esattamente quel take-away."},
		{answer: "Aiutali a capire se si tratta di una prospettiva realistica, o solo di una avversità al rischio e, in ogni caso, a verificare se si tratta di dati soggetti al D. Lgs. 36/2006 e quindi gratuti o al massimo soggetti a costo marginale (ossia al mero costo di produzione)."},
		{answer: "Aiutali a individuare benefici pratici derivanti dall’apertura dei dati. E anche se non ce ne sono, perché dovrebbero esserne infastiditi?"}
	]
},
{
	id: "20",
	title: "Se pubblichiamo questi dati, le persone potrebbero farci causa",
	answers: [
		{answer: "Se la preoccupazione è relativa alla violazione della privacy, è sufficiente adottare i criteri di tutela dei dati personali esposti nei punti precedenti."},
		{answer: "Se la preoccupazione concerne altre questioni, si fa presente che, allo stato attuale, la legge italiana non prevede nessi di causalità tra dati errati e responsabilità del pubblicante, essendo improbabile una causa di risarcimento danni, comunque evitabile mediante apposito disclaimer sull’affidabilità del dato."},
		{answer: "Assicuratevi di poter dichiarare quali dati avete fornito per ogni giorno preciso, ad esempio in casi in cui qualcuno affermi di non aver trovato l’ospedale più vicino nei vostri dati e che di conseguenza qualcuno sia morto. E’ molto utile essere in grado di provare e mostrare quali dati si stesse fornendo in una qualunque data e ora."},
		{answer: "Se i dati sono già disponibili sul vostro sito web o tramite una app, state davvero aumentando il rischio aprendoli?"}
	]
},
{
	id: "21",
	title: "Vogliamo che le persone vengano direttamente da noi per conoscere il motivo per cui vogliono i dati",
	answers: [
		{answer: "Questo assomiglia a “le persone potrebbero interpretare male i dati” se l’intenzione è quella di aiutare la gente a soddisfare le loro necessità informative."},
		{answer: "D’accordo, ma almeno i metadati o qualche subset di dati possono essere resi aperti?"},
		{answer: "Se è presente l’opzione di aprire i dati, ci sono possibilità che l’informazione sia già disponibile secondo le norme in materia di accesso agli atti di cui alla Legge 241/1990 o di accesso civico di cui al D. Lgs. 33/2013: secondo quest’ultimo decreto, per i dati a pubblicazione obbligatoria, ie richiedenti non sono tenuti a giustificare o spiegare le loro ragioni. Anzi, in virtù del D. Lgs. 33/2013, questa è un’obiezione illegittima, perché il suo articolo 5 prevede che, una volta effettuata l’istanza di accesso civico, la PA è tenuta a pubblicare sul sito i dati ed inviare il relativo link al richiedente. Quindi non possono rifiutarsi con la scusa di imporne la materiale consegna nei loro uffici."},
		{answer: "Questo può essere un aspetto delicato poiché una volta che apri i tuoi dati non sei più in grado di tracciare ogni utilizzo. Questo può essere un problema per le persone che producono questi dati e non sono in grado di fornire una prova documentata che loro, o il loro team, sta facendo qualcosa di valore, specialmente nel momento in cui gli staff vengono ridotti. Un’opzione è quella di trovare qualcuno in grado di rassicurarli che il loro lavoro è valido e che la loro amministrazione comprenda e accetti che quando i dati sono aperti loro stanno scambiando il controllo con l’utilità."}
	]
}
]};

$("#bingo-col1").html(template(data1));
$("#bingo-col2").html(template(data2));
$("#bingo-col3").html(template(data3));



