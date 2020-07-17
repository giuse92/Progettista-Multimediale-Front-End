/*//1.
let persona=new Object(); //Costruttore.
let persona= {}; //Oggetto letterale.*/


/*//2.
let persona={
  nome: "Mario",
  cognome: "Rossi",
  anni: 55
}

alert(persona.anni);*/

//2_added.
/*let persona2=new Object();

persona2.nome="Luca";
persona2.cognome="Rossi";
persona2.anni=67

alert(persona2.anni);*/

/*//2a.
persona.maschio=true;
alert(persona.maschio);

//2b.
delete(persona.maschio);
//alert(persona.maschio);*/


/*/3.
let persona={
  nome: "Mario",
  cognome: "Rossi",
  anni: 55,
  "ha visitato la francia": true,
};

console.log(persona["ha visitato la francia"]);*/

/*//3_added.
const persona={
  nome: "Mario"
};

persona.nome="Giulio";
console.log(persona.nome);*/

//3a.
/*try
{
  persona={
    nome: "Ciccio"
  };
}
catch(error)
{
  console.log("Errore: "+error);
}*/


/*//7.
let paroleChiave={
  return: "A",
  let: "B",
  for: "C",
  var: "D",
  function: "E",

  1: "l'id 1, viene converito in stinga", //La stessa cosa di: "1"; "l'id 1, viene converito in stinga".
};

console.log(paroleChiave.return+paroleChiave.let+paroleChiave.for+paroleChiave.var+paroleChiave.function);
console.log(paroleChiave[1]);
console.log(paroleChiave["1"]);*/


/*//8.
let persona={};

console.log(persona.professione===undefined);
console.log("professione" in persona);*/


/*//9.
let persona={
  nome: "Mario",
  cognome: "Rossi",
  anni: 55,
  professione: undefined, //Eccezione, obbligo usare "in".
};

console.log("nome" in persona);
console.log(persona.professione===undefined); //Ma esiste!
console.log("professione" in persona);*/


/*//10.
let persona={
  nome: "Mario",
  cognome: "Rossi",
  anni: 55,
  professione: undefined,
};

for(let pincoPallo in persona)
{
  console.log(pincoPallo);
  console.log(persona[pincoPallo]);
}*/


//11.
let mioDiv=document.getElementById("aaa");

let animale={
  specie: "mammifero",
  numeroZampe: 4,
  alimentazione: "vegetariano",
  domestico: true,
  ambiente: "aria",
  nome: "Pippo",
  sottospecie: {},
};

//animale=undefined;

for(let aaa in animale)
{
  console.log(aaa);
  console.log(animale[aaa]);

  mioDiv.innerHTML+=aaa+" : "+animale[aaa]+"</br>";
}