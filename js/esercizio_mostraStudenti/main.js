/*
Pagina web che visualizzi le informazioni relative a N studenti.
Un minimo di 5 studenti.
Ogni studente deve essere descritto, al minimo, dalle proprietà:
matricola, nome, cognome.
Gli oggetti che userete per modellare gli studenti devono
NECESSARIAMENTE essere inseriti e gestiti da un Array.
Iterando sull'array (sia con for che con for of), dovete visitare ogni studente e visualizzarne
le prorietà (i valori)
Il tutto dentro un div getElementByid();*/

let divStudenti = document.getElementById('mostraStudenti');
let divStudentiRitirati = document.getElementById('studentiRitirati');
let studenti = [
    {
        nMatricola: 1,
        nome: "Bentley",
        cognome: "Marquez"
    },
    {
        nMatricola: 2,
        nome: "Gabija",
        cognome: "Randolph"
    },
    {
        nMatricola: 3,
        nome: "Caoimhe",
        cognome: "Vaughan"
    },
    {
        nMatricola: 4,
        nome: "Samah",
        cognome: "Mcdowell"
    },
    {
        nMatricola: 5,
        nome: "Kurtis",
        cognome: "Brett"
    }
];

studenti[studenti.length] = {
    nMatricola: studenti.length + 1,
    nome: "Robbie",
    cognome: "Hooper"
}

studenti.push({
    nMatricola: studenti.length + 1,
    nome: "Nikola",
    cognome: "Fitzpatrick"
});

//Funzione parametrizzata per aggiungere all'Array studenti
function aggObjStudente (getNome, getCognome, getNMatricola) {
    studenti.push({
        nMatricola: getNMatricola,
        nome: getNome,
        cognome:getCognome
    });
};

//Richiamo di tre funzioni per aggiungere tre oggetti nell'array studenti
aggObjStudente("Angus", "Young", studenti.length + 1);
aggObjStudente("Jimi", "Hendrix", studenti.length + 1);
aggObjStudente("Jimmy", "Page", studenti.length + 1);

console.log(studenti)

//'Tagliati' tre oggetti
let studentiRitirati = studenti.splice(2, 3)

//

//Ciclo for semplice su array
/*for (let i = 0; i < studenti.length; i++) {
    let objStudente = studenti[i]
    //console.log(objStudente);
    for (prop in objStudente) {
        //console.log(objStudente[prop])
        divStudenti.innerHTML += `<strong>${prop}</strong>: ${objStudente[prop]} <br>`;
    };
};*/

//Ciclo for of per array, ciclo for in per oggetti
for (objStudente of studenti) {
    console.log(objStudente);
    let line = `<div class="studente-iscritto">`;
    for (prop in objStudente) {
        //console.log(objStudente[prop])
        line += `<strong>${prop}</strong>: ${objStudente[prop]} <br>`;
    };
    line += `</div>`;
    divStudenti.innerHTML += line;
};

for (objStudenteRitirato of studentiRitirati) {
    let line = `<div class="studente-ritirato">`;
    for (prop2 in objStudenteRitirato) {
        line += `<strong>${prop2}</strong> : ${objStudenteRitirato[prop2]} <br>`;
    }
    line += `</div>`;
    divStudentiRitirati.innerHTML += line;
}