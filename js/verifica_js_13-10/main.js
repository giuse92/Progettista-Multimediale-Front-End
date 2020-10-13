//Gestisco la promise
let urlJson = 'https://my-json-server.typicode.com/typicode/demo/db';

fetch(urlJson)
.then(risposta => {
    if (risposta.ok) {
        console.log(risposta.status); // se status = 200, è ok 
        return risposta.json()
    }
})
.then(mioJson => {
    let mainS = document.querySelector('script');
    
    let costruisciTabella = (jsonArray) => {
        //jsonArray parametrizza l'array del json che andrò a ciclare nella funzione
        //richiamata due volte più giù
        let tabella = document.createElement('table');
        tabella.setAttribute('style', 'text-align:center; width: 400px; border: 1px solid black')
        mainS.insertAdjacentElement('beforebegin', tabella);
        let rowTitoli = document.createElement('tr');
        tabella.prepend(rowTitoli);
        let isFirstTime = true;

        for (let objArray of jsonArray) {
            let trs = document.createElement('tr');
            tabella.append(trs);

            for (let prop in objArray) {
                let tds = document.createElement('td');
                tds.style.border = "1px solid black"
                tds.innerHTML = objArray[prop];
                trs.append(tds);

                if(isFirstTime) {
                    let ths = document.createElement('th');
                    ths.style.border = "1px solid blue"
                    ths.innerHTML = prop;
                    rowTitoli.append(ths);
                }
            }

            isFirstTime = false;
        }
 
    } 

    costruisciTabella(mioJson.posts);//ciclo i posts
    costruisciTabella(mioJson.comments);//ciclo i comments
    
})

//Gestione click sulle celle
function celleRosse(event) {
    console.log('click')
    if (event.target.nodeName == 'TD' || event.target.nodeName == 'TH') {
        event.target.style.backgroundColor = 'red';
    }
};

document.body.addEventListener('click', celleRosse); //Bubble phase, il terzo argomento è false di