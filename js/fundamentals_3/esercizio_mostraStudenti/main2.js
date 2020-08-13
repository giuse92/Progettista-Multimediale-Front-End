let divMostraStudenti = document.body.firstElementChild;
let divStudentiRitirati = document.body.lastElementChild.previousElementSibling;
let studentiIscritti = [], studentiRitirati = [];

for (let objStudenteIscritto of studentiIscritti) {
    let line = `<div class="studente-iscritto">`;
    for (propStudenteIscritto in objStudenteIscritto) {
        line += ` <strong>${propStudenteIscritto}</strong>: ${objStudenteIscritto[propStudenteIscritto]}<br>`;
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
    for (let objStudenteIscritto of studentiIscritti) {
        let line = `<div class="studente-iscritto">`;
        for (propStudenteIscritto in objStudenteIscritto) {
            line += ` <strong>${propStudenteIscritto}</strong>: ${objStudenteIscritto[propStudenteIscritto]}<br>`;
        }
        line += "</div>";
        divMostraStudenti.innerHTML += line;
    };
};

function rimStudente(ricMatricola, objStudenteRitirato) {
    if (studentiIscritti.length == 0 || studentiIscritti.every(checkAllUndefined)) {
        alert('Non ci sono studenti iscritti.')
    } else {
        ricMatricola = Number(window.prompt("Inserisci numero"));
        for (objStudenteIscritto of studentiIscritti) {
            for (prop in objStudenteIscritto) {
                if (ricMatricola == objStudenteIscritto.matricola) {
                    objStudenteRitirato = studentiIscritti.slice(objStudenteIscritto.matricola - 1, objStudenteIscritto.matricola);
                    let classesStudenteIscritto = divMostraStudenti.querySelectorAll('.studente-iscritto');
                    classesStudenteIscritto[objStudenteIscritto.matricola - 1].innerHTML = "";
                }
            }
        };
        studentiIscritti.splice(ricMatricola - 1, 1, undefined);
        studentiRitirati = studentiRitirati.concat(objStudenteRitirato);
        divStudentiRitirati.innerHTML = "<h1>Studenti ritirati</h1>";
        for (let objStudenteRitirato of studentiRitirati) {
            if (objStudenteRitirato != undefined) {
                let line = `<div class="studente-ritirato">`;
                for (propStudenteRitirato in objStudenteRitirato) {
                    line += ` <strong>${propStudenteRitirato}</strong>: ${objStudenteRitirato[propStudenteRitirato]}<br>`;
                }
                line += "</div>";
                divStudentiRitirati.innerHTML += line;
            }
        };
    }
}

function checkAllUndefined(element) {
    return element == undefined;
}