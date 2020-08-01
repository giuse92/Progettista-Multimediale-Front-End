let tutteLeNotizie, cronacaNera, sport, notizieDallEstero, gossip;
cronacaNera = [
    {
        titolo: "Titolo",
        corpo: "Lorem ipsum"
    },
    {
        titolo: "Titolo",
        corpo: "Lorem ipsum"
    },
    {
        titolo: "Titolo",
        corpo: "Lorem ipsum"
    },
];

sport = [
    {
        titolo: "Titolo sport",
        corpo: "Lorem ipsum sport"
    },
    {
        titolo: "Titolo sport",
        corpo: "Lorem ipsum sport"
    },
    {
        titolo: "Titolo sport",
        corpo: "Lorem ipsum sport"
    },
];

notizieDallEstero = [
    {
        titolo: "Titolo notizie dall'estero",
        corpo: "Lorem ipsum notizie dall'estero"
    },
    {
        titolo: "Titolo notizie dall'estero",
        corpo: "Lorem ipsum notizie dall'estero"
    },
    {
        titolo: "Titolo notizie dall'estero",
        corpo: "Lorem ipsum notizie dall'estero"
    },
];

gossip = [
    {
        titolo: "Titolo notizie gossip",
        corpo: "Lorem ipsum gossip"
    },
    {
        titolo: "Titolo notizie gossip",
        corpo: "Lorem ipsum gossip"
    },
    {
        titolo: "Titolo notizie gossip",
        corpo: "Lorem ipsum gossip"
    },
];

tutteLeNotizie = [cronacaNera, sport, notizieDallEstero, gossip];

for (arrArticoli of tutteLeNotizie) {
    for (objArticolo of arrArticoli) {
        for (prop in objArticolo) {
            if (prop == 'titolo') {
                document.getElementsByClassName('articolo')[0].innerHTML += `<h2>${objArticolo[prop]}</h2>`;
            } else if (prop == 'corpo') {
                document.getElementsByClassName('articolo')[0].innerHTML += `<p>${objArticolo[prop]}</p>`;
            }
        }
    }
}

