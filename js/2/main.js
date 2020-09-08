//1.
document.body.insertAdjacentHTML("afterbegin", "<div>AAA BBB CCC DDD EEE</div>"); //Dentro il body, in testa.

let div1=document.body.firstChild;

//console.log(div1.nodeType);

div1.className="divSize";


//2.
let div2=document.querySelector("div");

div2.insertAdjacentHTML("beforeend", "<p>UN BEL PARAGRAFO</p>"); //Dentro, in coda.


//3.
div2.insertAdjacentHTML("beforebegin", "<p>PARAGRAFO INIZIALE</p>"); //Fuori, in testa.


//4.
div2.insertAdjacentHTML("afterend", "<p>PARAGRAFO FINALE</p>"); //Fuori, in coda.

//4bis.
div2.insertAdjacentHTML("afterbegin", "<p>PARAGRAFO MESSO A LEZIONE</p>"); //Dentro, in testa.


//5.
//div2.insertAdjacentText("beforeend", "<p>PARAGRAFO FINALE NON HTML</p>"); //Dentro, in coda.
div2.insertAdjacentText("afterend", "<p>PARAGRAFO FINALE NON HTML</p>"); //Dentro, in coda.


//6.
let p1=document.createElement("p");

p1.className="pBorder";

p1.innerHTML="PARAGRAFO ELEMENTO";

div2.insertAdjacentElement("beforeend", p1); //Dentro, in coda.

//appendChild();
//insertBefore();
//removeChild();





