let treLibri = [{
    titolo: "La mia rivoluzione: L'autobiografia",
    autore: "Johan Cruyff",
    descrizione: "Lungo tutta la sua carriera Johan Cruyff è stato sinonimo di calcio totale, profeta di una nuova religione calcistica che unisce ordine e creatività, forza fisica e cervello, tradizione e rivoluzione. Capelli lunghi modello beat generation, idee libere e temperamento ribelle, quella del Pelé bianco è una storia straordinaria che parte dalla periferia di Amsterdam e arriva dritta all'olimpo del calcio: Cruyff entra giovanissimo nell'Ajax e con la maglia della squadra olandese vincerà tre Coppe dei Campioni"
},
{
    titolo: "Coaching Guardiola",
    autore: "Miquel A. Violan",
    descrizione: "Il libro di Violan non è soltanto utile per gli amanti del calcio, ossia per chi vuole sapere tutto sui metodi del celebre allenatore e sulla sua grande capacità di gestire successi e sconfitte. È anche un libro di ispirazione per chiunque si trovi a guidare un gruppo di lavoro, una società, una classe di studenti... perché contiene lezioni di leadership e suggerisce tecniche e strategie utili e applicabili in tanti altri ambiti. Elemento portante del 'metodo Guardiola' è il sentire comune. L'allenatore catalano sa promuovere l'intelligenza condivisa, capace di stimolare sinergie e moltiplicare il valore delle capacità individuali."
},
{
    titolo: "Jürgen Klopp. Scatenate l'inferno",
    autore: "Raphael Honigstein",
    descrizione: "Se è vero che come calciatore Jürgen Klopp non ha lasciato tracce memorabili nella storia, è altrettanto vero che da tecnico ha dimostrato di avere una personalità straordinaria e idee da vendere, diventando, a dispetto del soprannome di 'Normal One' che ha scelto per se stesso, uno degli allenatori-simbolo del calcio contemporaneo. Non è un caso che abbia esordito in panchina - nel Mainz, unica squadra in cui ha militato da giocatore - passando direttamente dal campo alla lavagna tattica, a stagione in corso. Capace di incendiare tanto l'animo dei suoi calciatori quanto i cuori dei tifosi, ha eletto ad habitat naturale gli stadi che sanno farsi sentire: prima Iduna Park, a Dortmund, dove in sette anni ha portato al Borussia due titoli di Germania, entusiasmo e trofei che mancavano da troppo tempo; poi Anfield, tempio del Liverpool, a cui 'Kloppo' ha saputo dare un gioco spettacolare che ha fruttato fin qui una Champions League, una Supercoppa Europea e un Mondiale per Club. \"Scatenate l'inferno\" è un viaggio nel mondo supersonico di Klopp, scandito da aneddoti e testimonianze di amici, calciatori, dirigenti che hanno incrociato il suo cammino, e arricchito da un inserto fotografico con tanti scatti privati e inediti."
}
];

let mainScript = document.querySelector('script');
let divLibro = document.createElement('div');
divLibro.id = "libroContainer";
mainScript.before(divLibro);

for (let libroInfo of treLibri) {
    for (let info in libroInfo) {
        if (info == 'titolo') {
            let titoloLibro = document.createElement('h3');
            titoloLibro.className = "titolo";
            titoloLibro.innerHTML = `${libroInfo[info]}`;
            divLibro.append(titoloLibro);
        } else if (info == 'autore') {
            let autoreLibro = document.createElement('p');
            autoreLibro.className = "autore";
            autoreLibro.innerHTML = `${info}: ${libroInfo[info]}`;
            divLibro.append(autoreLibro);
        } else if (info == "descrizione") {
            let recensioneLibro = document.createElement('p');
            recensioneLibro.classList.add('recensione');
            recensioneLibro.innerHTML = `${info}: "${libroInfo[info]}"`;
            divLibro.append(recensioneLibro);
        }
    }
};

let btnRimuoviTesto = document.createElement('button');
btnRimuoviTesto.innerHTML = "RIMUOVI TESTO";
btnRimuoviTesto.setAttribute('style', "padding: 5px; margin-top: 10px");
divLibro.after(btnRimuoviTesto);
btnRimuoviTesto.onclick = function (event) { removeText() };

function removeText(getDiv) {
    getDiv = divLibro;
    getDiv.replaceWith('');
    //oppure getDiv.outerHTML = '';
    console.log('Testo rimosso')
}