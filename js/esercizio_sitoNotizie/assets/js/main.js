let tutteLeNotizie, cronacaNera, sport, notizieDallEstero, gossip;
cronacaNera = [
    {
        titolo: "Titolo",
        corpo: "Lorem ipsum",
        categoria: "Cronaca nera"
    },
    {
        titolo: "Titolo",
        corpo: "Lorem ipsum",
        categoria: "Cronaca nera"
    },
    {
        titolo: "Titolo",
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

tutteLeNotizie = [cronacaNera, sport, notizieDallEstero, gossip];

function showTutteLeNotizie() {
    document.getElementsByClassName('articolo')[0].innerHTML = "";
    for (arrArticoli of tutteLeNotizie) {
        for (objArticolo of arrArticoli) {
            for (prop in objArticolo) {
                if (prop == 'titolo') {
                    document.getElementsByClassName('articolo')[0].innerHTML += `<h2>${objArticolo[prop]}</h2>`;
                } else if (prop == 'corpo') {
                    document.getElementsByClassName('articolo')[0].innerHTML += `<p>${objArticolo[prop]}</p>`;
                } else if (prop == 'categoria') {
                    document.getElementsByClassName('articolo')[0].innerHTML += `<em>${objArticolo[prop]}</em>`;
                }
            }
        }
    };
};

showTutteLeNotizie();

