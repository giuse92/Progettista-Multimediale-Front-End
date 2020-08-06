let divMostraStudenti = document.body.firstElementChild;
let divStudentiRitirati = document.body.lastElementChild.previousElementSibling;
let studentiIscritti = [{
    nome: "insNome",
    cognome: "insCognome",
    matricola: 1
},
{
    nome: "insNome",
    cognome: "insCognome",
    matricola: 2
},
{
    nome: "insNome",
    cognome: "insCognome",
    matricola: 3
},
{
    nome: "insNome",
    cognome: "insCognome",
    matricola: 4
}], studentiRitirati = [];

for (objStudenteIscritto of studentiIscritti) {
    let line = `<div class="studente-iscritto">`;
    for (propStudenteIscritto in objStudenteIscritto) {
        line += ` <strong>${propStudenteIscritto}</strong>: ${objStudenteIscritto[propStudenteIscritto]}`;
    }
    line += "</div>"
    divMostraStudenti.innerHTML += line;
};

function aggStudente(insNome, insCognome) {
    divMostraStudenti.innerHTML = "<h1>Studenti iscritti</h1>";
    insNome = window.prompt('Inserisci nome');
    insCognome = window.prompt('Inserisci cognome');
    studentiIscritti[studentiIscritti.length] = {
        nome: insNome,
        cognome: insCognome,
        matricola: studentiIscritti.length + 1
    };
    for (objStudenteIscritto of studentiIscritti) {
        let line = `<div class="studente-iscritto">`;
        for (propStudenteIscritto in objStudenteIscritto) {
            line += ` <strong>${propStudenteIscritto}</strong>: ${objStudenteIscritto[propStudenteIscritto]}`;
        }
        line += "</div>";
        divMostraStudenti.innerHTML += line;
    };
};