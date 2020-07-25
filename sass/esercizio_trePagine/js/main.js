//Variabili dei contenitori degli output
let containerDieciNemici = document.getElementById('dieciNemici'),
containerCinqueNemici = document.getElementById('cinqueNemici'),
containerNemiciPotentissimi = document.getElementById('nemiciPotentissimi');

//Array 10 nemici
let nemici = [];

nemici[nemici.length] = {
    "Nome e cognome": "Jack Napier",
    "Conosciuto/a come": "Joker" ,
    "Descrizione": "Lorem ipsum"
}

nemici[nemici.length] = {
    "Nome e cognome": "Harleen Quinzel",
    "Conosciuto/a come": "Harley Quinn",
    "Descrizione": "Lorem ipsum"
}

nemici[nemici.length] = {
    "Nome e cognome": "Jonathan Crane",
    "Conosciuto/a come": "Spaventapasseri",
    "Descrizione": "Lorem ipsum"
}

nemici.push({
    "Nome e cognome": "Harvey Dent",
    "Conosciuto/a come": "Due Facce",
    "Descrizione": "Lorem ipsum"
})

nemici.push({
    "Nome e cognome": "Oswald Cobblepot",
    "Conosciuto/a come": "Pinguino",
    "Descrizione": "Lorem ipsum"
})

nemici.push({
    "Nome e cognome": "Edward Nigma",
    "Conosciuto/a come": "Enigmista",
    "Descrizione": "Lorem ipsum"
})

nemici.splice(3, 0,
    {
        "Nome e cognome": "Waylon Jones",
        "Conosciuto/a come": "Killer Croc",
        "Descrizione": "Lorem ipsum"
    },
    {
        "Nome e cognome": "Jervis Tetch",
        "Conosciuto/a come": "Cappellaio Matto",
        "Descrizione": "Lorem ipsum"
    },
    {
        "Nome e cognome": "Lazlo Valentin",
        "Conosciuto/a come": "Professor Pyg",
        "Descrizione": "Lorem ipsum"
    },
    {
        "Nome e cognome": "Garfield Lynns",
        "Conosciuto/a come": "Firefly",
        "Descrizione": "Lorem ipsum"
    }
)