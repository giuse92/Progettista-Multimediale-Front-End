let libroInfo = {
    titolo: "La mia rivoluzione: L'autobiografia",
    autore: "Johan Cruyff",
    "a cura di": "Jaap de Groot",
    traduttore: "Francesco Panzeri",
    recensione: "La vita di un personaggio indimenticabile nel mondo del calcio."
};

let mainScript = document.querySelector('script');
let divLibro = document.createElement('div');
divLibro.id = "libroContainer";
mainScript.before(divLibro);

for (info in libroInfo) {
    if (info == 'titolo') {
        let titoloLibro = document.createElement('h3');
        titoloLibro.className = "titolo";
        titoloLibro.innerHTML = `${libroInfo[info]}`;
        divLibro.append(titoloLibro);
    } else if (info == 'autore') {// Stessa classe per autore, traduttore e a cura di
        let autoreLibro = document.createElement('p');
        autoreLibro.className = "autore";
        autoreLibro.innerHTML = `${info}: ${libroInfo[info]}`;
        divLibro.append(autoreLibro);
    } else if (info == 'a cura di') {
        let aCuraDiLibro = document.createElement('p');
        aCuraDiLibro.className = "autore";
        aCuraDiLibro.innerHTML = `${info}: ${libroInfo[info]}`;
        divLibro.append(aCuraDiLibro);
    } else if (info == 'traduttore') {
        let traduttoreLibro = document.createElement('p');
        traduttoreLibro.className = "autore";
        traduttoreLibro.innerHTML = `${info}: ${libroInfo[info]}`;
        divLibro.append(traduttoreLibro);
    } else if (info == "recensione") {
        let recensioneLibro = document.createElement('p');
        recensioneLibro.classList.add('recensione');
        recensioneLibro.innerHTML = `${info}: ${libroInfo[info]}`;
        divLibro.append(recensioneLibro);
    }
}

let btnRimuoviTesto = document.createElement('button');
btnRimuoviTesto.innerHTML = "RIMUOVI TESTO";
btnRimuoviTesto.setAttribute('style', "padding: 5px; margin-top: 10px");
divLibro.after(btnRimuoviTesto);
btnRimuoviTesto.onclick = function(event) {removeText()};

function removeText(getDiv) {
    getDiv = divLibro;
    getDiv.innerHTML = "TESTO RIMOSSO";
    getDiv.style.backgroundColor = "red";
    getDiv.style.width = "fit-content";
}