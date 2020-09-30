/*//1.
let promise1=new Promise(function(resolve, reject)
{
  //Funzione esecutrice. Viene eseguita subito, quando l'oggetto Promise viene creato.
});*/


/*//2.
//La funzione esecutrice, esegue un solo task.
let promise2=new Promise(function(resolve, reject)
{
  //Le variabili interne della Promise che ne definiscono lo stato
  //non sono accessibili direttamente.
  //STATO A
  //state vale "pending"
  //result vale "undefined"

  let milliseconds=5000;

  //Dopo la gestione di un resolve o reject, gli altri resolve/reject sono ignorati.

  //resolve("0 Fatto tutto correttamente!");

  //STATO B
  //state vale "fulfilled"
  //result vale "1 Fatto tutto correttamente!"

  //setTimeout(() => resolve("1 Fatto tutto correttamente!"), milliseconds);
  //setTimeout(() => resolve("2 Fatto tutto correttamente!"), milliseconds);

  //STATO C
  //state vale "rejected"
  //result rappresenta l'errore

  setTimeout(() => reject(new Error("1 Errore gravissimo!")), milliseconds);
  //setTimeout(() => reject(new Error("2 Errore gravissimo!")), milliseconds);
});*/

//ok = valore passato da resolve.
//ko = valore passato da reject.
//promise2.then(
//  function(ok) {console.log(ok)},
//  function(ko) {console.log(ko.name+": "+ko.message)}
//);

/*promise2.then(
  ok => console.log(ok),
  ko => console.log(ko.name+": "+ko.message)
);*/

/*//Alternativa con funzioni anonime e nomi di parametri evidentemente personalizzati.
promise2.then(
  function(ciccio) {console.log(ciccio)},
  function(orrore) {console.log(orrore.name+": "+orrore.message)}
);*/


/*//3.
let promise3=new Promise(eseguiPerPromise3);

//Stessa cosa con funzione esecutrice non anonima.
function eseguiPerPromise3(resolve, reject)
{
  let milliseconds=2000;
  setTimeout(() => resolve("Fatto tutto correttamente!"), milliseconds);
  //setTimeout(() => reject(new Error("Errore gravissimo!")), milliseconds);
}

promise3.then(
  (ok) => console.log(ok),
  (ko) => console.log(ko)
);*/


/*//4.
let promise4=new Promise(function(resolve)
{
  let milliseconds=2000;
  setTimeout(() => resolve("Alè!"), milliseconds);
});
//let promise4=new Promise((resolve) =>
//let promise4=new Promise(resolve =>

promise4.then(ok => console.log(ok));*/


/*//5.
let promise5=new Promise(function(resolve, reject)
{
  let milliseconds=2000;
  //setTimeout(() => reject(new Error("Che peccato!")), milliseconds);
  setTimeout(() => reject(new Error("Ho fatto un errorino.")), milliseconds);
});

//Equivalenti.
//promise5.then(null, ko => console.log(ko.name+": "+ko.message));
promise5.catch(ko => console.log(ko.name+": "+ko.message));*/