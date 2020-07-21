/*//1.
let felino="gatto";
let animale=felino;

console.log("felino: "+felino);
console.log("animale: "+animale);

felino="tigre";

console.log("felino: "+felino);
console.log("animale: "+animale);*/


/*//2.
let persona={
  nome: "Mario",
  cognome: "Rossi",
  anni: 55
};

let amico=persona;

//console.log(persona.nome);
//console.log(amico.nome);

amico.nome="Francesco";

console.log(persona.nome);
console.log(amico.nome);

console.log(persona==amico);
console.log(persona===amico);*/


/*//3.
let persona={
  nome: "Mario",
  cognome: "Rossi",
  anni: 55
};

let omonimo={};

for(let prop in persona)
{
  omonimo[prop]=persona[prop];
}

console.log(persona.nome);
console.log(omonimo.nome);

omonimo.nome="Luca";

console.log(persona.nome);
console.log(omonimo.nome);*/


/*//4.
let persona={
  nome: "Mario",
  cognome: "Rossi",
  anni: 55,
  animali: {
      cane: "Fido",
      gatto: "Poldo"
    },
};*/

/*let omonimo={animali2: {}};

Object.assign(omonimo, persona);
Object.assign(omonimo.animali2, persona.animali);

//console.log(persona.nome);
//console.log(omonimo.nome);

omonimo.nome="Stefano";

//console.log(persona.nome);
//console.log(omonimo.nome);

console.log(persona);
console.log(omonimo);

persona.animali.cane="CIAO";
console.log(persona.animali.cane);
console.log(omonimo.animali2.cane);*/

//https://lodash.com/docs/4.17.15#cloneDeep

/*console.log(Object.keys(persona));
console.log(Object.values(persona));
console.log(Object.entries(persona));*/


let persona={
  nome: "Mario",
  cognome: "Rossi",
  anni: 55,
  animali: {
      cane: "Fido",
      gatto: "Poldo"
    },
};

let persona2={};

/*persona2.nome=persona.nome;
persona2.cognome=persona.cognome;
persona2.anni=persona.anni;*/
//persona2.animali=persona.animali;

/*for (let prop in persona){
  persona2[prop]=persona[prop];
  if (typeof prop !== Object){
      //persona2[prop]=persona[prop];
  }else{
      for (let prop2 in prop){
          persona2.animali[prop]=persona[prop];
      }

  }
}*/

for (let prop1 in persona) {
  if (persona[prop1] !== persona["animali"]) {
    persona2[prop1] = persona[prop1];
  } else {
    persona2.animali = {};
    for (let prop2 in persona.animali) {
      persona2.animali[prop2] = persona.animali[prop2]
    }
  }
};

console.log(persona2)

//persona.nome="Franco";

//console.log(persona.nome);
//console.log(persona2.nome);

persona.animali.cane="BAU";

console.log(persona.animali.cane + " è il nome del cane dell'oggetto persona");
console.log(persona2.animali.cane + " è il nome del cane dell'oggetto persona2");