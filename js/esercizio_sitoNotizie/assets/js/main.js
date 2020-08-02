//Dichiaro le variabili
let tutteLeNotizie, cronacaNera, sport, notizieDallEstero, gossip;

//Array con oggetti articoli
cronacaNera = [
    {
        titolo: "Titolo cronaca nera",
        corpo: "Lorem ipsum",
        categoria: "Cronaca nera"
    },
    {
        titolo: "Titolo cronaca nera",
        corpo: "Lorem ipsum",
        categoria: "Cronaca nera"
    },
    {
        titolo: "Titolo cronaca nera",
        corpo: "Lorem ipsum",
        categoria: "Cronaca nera"
    }
];

sport = [
    {
        titolo: "Titolo sport",
        corpo: "Lorem ipsum sport",
        categoria: "Sport"
    },
    {
        titolo: "Titolo sport",
        corpo: "Lorem ipsum sport",
        categoria: "Sport"
    },
    {
        titolo: "Titolo sport",
        corpo: "Lorem ipsum sport",
        categoria: "Sport"
    }
];

notizieDallEstero = [
    {
        titolo: "Titolo notizie dall'estero",
        corpo: "Lorem ipsum notizie dall'estero",
        categoria: "Notizie dall'estero"
    },
    {
        titolo: "Titolo notizie dall'estero",
        corpo: "Lorem ipsum notizie dall'estero",
        categoria: "Notizie dall'estero"
    },
    {
        titolo: "Titolo notizie dall'estero",
        corpo: "Lorem ipsum notizie dall'estero",
        categoria: "Notizie dall'estero"
    }
];

gossip = [
    {
        titolo: "Titolo notizie gossip",
        corpo: "Lorem ipsum gossip",
        categoria: "Gossip"
    },
    {
        titolo: "Titolo notizie gossip",
        corpo: "Lorem ipsum gossip",
        categoria: "Gossip"
    },
    {
        titolo: "Titolo notizie gossip",
        corpo: "Lorem ipsum gossip",
        categoria: "Gossip"
    }
];

//Array che contiene tutte gli altri array, quindi tutti gli object articoli
tutteLeNotizie = [cronacaNera, sport, notizieDallEstero, gossip];

//Funzione di inneschi di cicli for
function showNotizie(arrName) {
    document.getElementsByClassName('articoli')[0].innerHTML = "";
    if (arrName === tutteLeNotizie) {
        for (arrArticoli of arrName) {
            for (objArticolo of arrArticoli) {
                for (prop in objArticolo) {
                    if (prop == 'titolo') {
                        document.getElementsByClassName('articoli')[0].innerHTML += `<h2>${objArticolo[prop]}</h2>`;
                    } else if (prop == 'corpo') {
                        document.getElementsByClassName('articoli')[0].innerHTML += `<p>${objArticolo[prop]}</p>`;
                    } else if (prop == 'categoria') {
                        document.getElementsByClassName('articoli')[0].innerHTML += `<em>${objArticolo[prop]}</em>`;
                    }
                }
            }
        }
    } else {
        document.getElementsByClassName('articoli')[0].innerHTML = "";
        for (objArticolo of arrName) {
            for (prop in objArticolo) {
                if (prop == 'titolo') {
                    document.getElementsByClassName('articoli')[0].innerHTML += `<h2>${objArticolo[prop]}</h2>`;
                } else if (prop == 'corpo') {
                    document.getElementsByClassName('articoli')[0].innerHTML += `<p>${objArticolo[prop]}</p>`;
                } else if (prop == 'categoria') {
                    document.getElementsByClassName('articoli')[0].innerHTML += `<em>${objArticolo[prop]}</em>`;
                }
            }
        }
    }
};

showNotizie(tutteLeNotizie);

