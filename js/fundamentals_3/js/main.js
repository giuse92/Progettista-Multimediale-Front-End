/*//1.
let linguaggi=new Array();
let linguaggi=[];*/


//2.
//let linguaggi=new Array("C", "C++", "Java", "Php", 5, true);
//let linguaggi=["C", "C++", "Java", "Php", 5, true];

/*console.log(linguaggi);
console.log(linguaggi[0]);
console.log(linguaggi[1]);
console.log(linguaggi[2]);
console.log(linguaggi[3]);
console.log(linguaggi.length);*/

/*//2a.
linguaggi[0]="JavaScript";

console.log(linguaggi);

//2b.
linguaggi[linguaggi.length]="C#";

console.log(linguaggi);
console.log(linguaggi.length);*/


/*//3.
let user={ id: 'C#' };
let linguaggi=["C", false, "CIAO", user];
//let linguaggi=["C", false, function() {console.log("Sono un programmatore.")}, { id: 'C#' }];

console.log(linguaggi[0]);
console.log(linguaggi[1]);
//linguaggi[2]();
console.log(linguaggi[3].id);*/


/*//4.
let linguaggi=new Array("C", "C++", "Java", "Php");

console.log(linguaggi);

//"Java".unshift("Ruby");*/


/*//4b. FIFO (First-In-First-Out), Queue.
linguaggi.push("JavaScript"); //linguaggi[linguaggi.length]="JavaScript".

console.log(linguaggi);
let firstItem=linguaggi.shift();
console.log(firstItem);
console.log(linguaggi);*/

/*//4c. LIFO (Last-In-First-Out), Stack.
linguaggi.push("JavaScript");

console.log(linguaggi);
let lastItem=linguaggi.pop();
console.log(lastItem);
console.log(linguaggi);

//4d.
linguaggi.unshift("Ruby", "C#");

console.log(linguaggi);*/


/*//5.
let linguaggi=["C", "C++", "Java", "Php"];

let linguaggiDiProgrammazione=linguaggi;

//console.log(linguaggiDiProgrammazione===linguaggi);

console.log("A");
console.log(linguaggi);
console.log(linguaggiDiProgrammazione);

linguaggiDiProgrammazione.push("C#");

console.log("B")
console.log(linguaggi);
console.log(linguaggiDiProgrammazione);*/


/*//6. Non usare così: Object, invece.
let linguaggi=[];
linguaggi[99]="JavaScript";
console.log(linguaggi);
console.log(linguaggi[10]);

linguaggi.totale=10;
console.log(linguaggi.totale);*/


/*//7.
let linguaggi=["C", "C++", "Java", "Php"];

for(let i=0;i<linguaggi.length;i++)
{
  console.log(linguaggi[i]);
}


//7b.
for(let linguaggio of linguaggi)
{
  console.log(linguaggio);
}

console.log(linguaggi);*/

/*//7c. Meglio di no: è più lento e può dare proprietà che non servono.
for(let linguaggio in linguaggi)
{
  console.log(linguaggi[linguaggio]);
}*/


/*//8.
let linguaggi=["C", "C++", "Java", "Php", "Ruby"];
console.log(linguaggi);
linguaggi.length=2;
console.log(linguaggi);
linguaggi.length=10;
console.log(linguaggi);
console.log(linguaggi[6]);
linguaggi.length=0;
console.log(linguaggi);*/

/*
Pagina web che visualizzi le informazioni relative a N studenti.
Un minimo di 5 studenti.
Ogni studente deve essere descritto, al minimo, dalle proprietà:
matricola, nome, cognome.
Gli oggetti che userete per modellare gli studenti devono 
NECESSARIAMENTE essere inseriti e gestiti da un Array.
Iterando sull'array (sia con for che con for of), dovete visitare ogni studente e visualizzarne
le prorietà (i valori)
Il tutto dentro un div getElementByid();*/


