let divMostraStudIscritti = document.getElementById('mostraStudenti');
let divMostraStudRimossi = document.getElementById('studentiRitirati');

let studenti = [];

function aggStud(getNome, getCognome) {
    divMostraStudIscritti.innerHTML = "";
    getNome = window.prompt('NOME');
    getCognome = window.prompt('COGNOME');
    if (getNome == "" || getCognome == "") {
        alert('INSERIRE VALORI NEL CAMPO NOME E COGNOME')
    } else {
        studenti[studenti.length] = {
            nome: getNome,
            cognome: getCognome,
            matricola: studenti.length + 1,
            status: "iscritto"
        }
    }
    for (objStud of studenti) {
        let line = `<div class="studente-iscritto">`;
        if (objStud.status == "iscritto") {
            for (prop in objStud) {
                if (prop == "nome") {
                    line += `<strong>${prop}</strong>: ${objStud[prop]}<br>`
                } else if (prop == "cognome") {
                    line += `<strong>${prop}</strong>: ${objStud[prop]}<br>`
                }
                else if (prop == "matricola") {
                    line += `<strong>${prop}</strong>: ${objStud[prop]}`
                }
            }
        }
        line += `</div>`
        divMostraStudIscritti.innerHTML += line;
    }
}

function rimStud(getMatricola) {
    if (studenti.length > 0) {
        divMostraStudRimossi.innerHTML = "";
        getMatricola = Number(window.prompt('NUMERO MATRICOLA'));
        if (isNaN(getMatricola) == false && getMatricola > 0) {
            for (objStud of studenti) {
                if (objStud.matricola == getMatricola) {
                    objStud.status = "rimosso";
                }
            }
            for (objStud of studenti) {
                let line = `<div class="studente-ritirato">`;
                if (objStud.status == "rimosso") {
                    for (prop in objStud) {
                        if (prop == "nome") {
                            line += `<strong>${prop}</strong>: ${objStud[prop]}<br>`
                        } else if (prop == "cognome") {
                            line += `<strong>${prop}</strong>: ${objStud[prop]}<br>`
                        }
                        else if (prop == "matricola") {
                            line += `<strong>${prop}</strong>: ${objStud[prop]}`
                        }
                    }
                }
                line += `</div>`
                divMostraStudRimossi.innerHTML += line;
            }
            divMostraStudIscritti.innerHTML = "";
            for (objStud of studenti) {
                let line = `<div class="studente-iscritto">`;
                if (objStud.status == "iscritto") {
                    for (prop in objStud) {
                        if (prop == "nome") {
                            line += `<strong>${prop}</strong>: ${objStud[prop]}<br>`
                        } else if (prop == "cognome") {
                            line += `<strong>${prop}</strong>: ${objStud[prop]}<br>`
                        }
                        else if (prop == "matricola") {
                            line += `<strong>${prop}</strong>: ${objStud[prop]}`
                        }
                    }
                }
                line += `</div>`
                divMostraStudIscritti.innerHTML += line;
            }
        } else {
            alert('***Errore***\n- Il valore potrebbe non essere un numero\n- Il numero potrebbe essere minore di 1');
            divMostraStudRimossi.innerHTML = "";
            for (objStud of studenti) {
                let line = `<div class="studente-ritirato">`;
                if (objStud.status == "rimosso") {
                    for (prop in objStud) {
                        if (prop == "nome") {
                            line += `<strong>${prop}</strong>: ${objStud[prop]}<br>`
                        } else if (prop == "cognome") {
                            line += `<strong>${prop}</strong>: ${objStud[prop]}<br>`
                        }
                        else if (prop == "matricola") {
                            line += `<strong>${prop}</strong>: ${objStud[prop]}`
                        }
                    }
                }
                line += `</div>`;
                divMostraStudRimossi.innerHTML += line;
            }
        }
    } else {
        alert('***Errore***\nNon si sono studenti iscritti');
    }
}

for (objStud of studenti) {
    let line = `<div class="studente-iscritto">`;
    if (objStud.status == "iscritto") {
        for (prop in objStud) {
            if (prop == "nome") {
                line += `<strong>${prop}</strong>: ${objStud[prop]}<br>`
            } else if (prop == "cognome") {
                line += `<strong>${prop}</strong>: ${objStud[prop]}<br>`
            }
            else if (prop == "matricola") {
                line += `<strong>${prop}</strong>: ${objStud[prop]}`
            }
        }
    }
    line += `</div>`
    divMostraStudIscritti.innerHTML += line;
}