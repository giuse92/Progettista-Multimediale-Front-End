let divMostraStudenti = document.body.firstElementChild;
let divStudentiRitirati = document.body.lastElementChild.previousElementSibling;
let studentiIscritti = [{
    nome: "insNome",
    cognome: "insCognome",
    matricola: 1
}], studentiRitirati = [];

for (objStudenteIscritto of studentiIscritti) {
    for (propStudenteIscritto in objStudenteIscritto) {
        divMostraStudenti.innerHTML += `<strong>${propStudenteIscritto}</strong>: ${objStudenteIscritto[propStudenteIscritto]}<br>`;
    }
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
        for (propStudenteIscritto in objStudenteIscritto) {
            divMostraStudenti.innerHTML += `<strong>${propStudenteIscritto}</strong>: ${objStudenteIscritto[propStudenteIscritto]}<br>`;
        }
    };
};