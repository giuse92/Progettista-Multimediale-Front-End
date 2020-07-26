//Variabili dei contenitori degli output
let containerDieciNemici = document.getElementById('dieciNemici'),
containerCinqueNemici = document.getElementById('cinqueNemici'),
containerNemiciPotentissimi = document.getElementById('nemiciPotentissimi');

//Array 10 nemici
let dieciNemici = [];

dieciNemici[dieciNemici.length] = {
    "Nome e cognome": "Jack Napier",
    "Conosciuto/a come": "Joker" ,
    "Descrizione": "Lorem ipsum",
    tipo: "Boss",
    haAbilitàSpeciali: true
}

dieciNemici[dieciNemici.length] = {
    "Nome e cognome": "Harleen Quinzel",
    "Conosciuto/a come": "Harley Quinn",
    "Descrizione": "Lorem ipsum",
    tipo: "Boss",
    haAbilitàSpeciali: true
}

dieciNemici[dieciNemici.length] = {
    "Nome e cognome": "Jonathan Crane",
    "Conosciuto/a come": "Spaventapasseri",
    "Descrizione": "Lorem ipsum",
    tipo: "Boss",
    haAbilitàSpeciali: true
}

dieciNemici.push({
    "Nome e cognome": "Harvey Dent",
    "Conosciuto/a come": "Due Facce",
    "Descrizione": "Lorem ipsum",
    tipo: "Boss",
    haAbilitàSpeciali: true
})

dieciNemici.push({
    "Nome e cognome": "Oswald Cobblepot",
    "Conosciuto/a come": "Pinguino",
    "Descrizione": "Lorem ipsum",
    tipo: "Boss",
    haAbilitàSpeciali: true
})

dieciNemici.push({
    "Nome e cognome": "Edward Nigma",
    "Conosciuto/a come": "Enigmista",
    "Descrizione": "Lorem ipsum",
    tipo: "Boss",
    haAbilitàSpeciali: true
})

dieciNemici.splice(3, 0,
    {
        "Nome": "Tirapiedi di Due Facce",
        "Descrizione": "Riconoscibili dall'abbigliamento. Alcuni indossano anche delle maschere.",
        tipo: "NPC",
        haAbilitàSpeciali: false
    },
    {
        "Nome": "Tirapiedi di Pinguino",
        "Descrizione": "Riconoscibili dal pinguino disegnato dietro la loro giacca.",
        tipo: "NPC",
        haAbilitàSpeciali: false
    },
    {
        "Nome": "Tirapiedi di Harley Quinn",
        "Descrizione": "Sono vestiti e truccati da mimi.",
        tipo: "NPC",
        haAbilitàSpeciali: false
    },
    {
        "Nome": "Informatori dell'Enigmista",
        "Descrizione": "Miliziani, scagnozzi di altri supercriminali e poliziotti corrotti che lavorano segretamente per Nigma.",
        tipo: "NPC",
        haAbilitàSpeciali: false
    }
)

//ciclo for for nemici per stamparli nel div dieciNemici
for (obj10Nem of dieciNemici) {
    for (prop1 in obj10Nem) {
        containerDieciNemici.innerHTML += `<strong style="background-color: #ccc">${prop1}</strong>: ${obj10Nem[prop1]}<br>`;
    }
}

//Array 5 nemici presi da array dieciNemici
let cinqueNemici = dieciNemici.slice(2, 7);

//Output slice in contenitore cinqueNemici
for (obj5Nem of cinqueNemici) {
    for (prop2 in obj5Nem) {
        containerCinqueNemici.innerHTML += `<strong style="background-color: yellow">${prop2}</strong>: ${obj5Nem[prop2]}<br>`;
    }
}

//Array altri nemici potentissimi
let altriNemiciBoss = [
    {
        "Nome": "Adamska",
        "Conosciuto/a come": "Ocelot",
        "Descrizione": "Lorem ipsum",
        tipo: "Boss",
        haAbilitàSpeciali: true
    },
    {
        "Nome": "Eli",
        "Conosciuto/a come": "Liquid Snake",
        "Descrizione": "Lorem ipsum",
        tipo: "Boss",
        haAbilitàSpeciali: true
    },
    {
        "Nome": "George Sears",
        "Conosciuto/a come": "Solidus Snake",
        "Descrizione": "Lorem ipsum",
        tipo: "Boss",
        haAbilitàSpeciali: true
    },
];

//Array concatenazione dieciNemici e altriNemiciBoss con output
let nemiciPotentissimi = dieciNemici.concat(altriNemiciBoss);

for (objNemPot of nemiciPotentissimi) {
    for (prop3 in objNemPot) {
        containerNemiciPotentissimi.innerHTML += `<strong style="background-color: red">${prop3}</strong>: ${objNemPot[prop3]}<br>`;
    }
}