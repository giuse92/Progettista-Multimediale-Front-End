/*//1.
let promise2=new Promise(function(resolve, reject)
{

  let milliseconds=2000;
  setTimeout(() => resolve("Ciao!"), milliseconds);

});

promise2.then(function(result)
{
  //console.log("------------------------------------------------------------------------------------------");

  console.log(result);

  return(result+" Come");
});

promise2.then(function(result)
{
  console.log(result+" sono il secondo then");

  return(result+" stai,");
});

promise2.then(function(result)
{
  console.log(result);

  return(result+" oggi?");
});

promise2.then(function(result)
{
  console.log(result);

});*/





/*promise3.then(
  (ok) => console.log(ok),
  (ko) => console.log(ko)
);*/

//2.
let promise1=new Promise(function(resolve, reject)
{
  //Ricordo che resolve e reject sono due funzioni.
  //La funzione esecutrice (o esecutore), fa un lavoro solitamente asincrono
  //e chiama la funzione resolve per dire che è andato tutto bene oppure reject in caso di errore.

  let milliseconds=2000;
  //setTimeout(() => resolve("Ciao!"), milliseconds);
  setTimeout(() => reject("Errore!"), milliseconds);

})
.then(
  (ok) => {
    console.log(ok);

    
  },
  (ko) => {
    console.log(ko);

    return(ko);
  }

  
)
.then(null, function(reject)
{

  console.log(reject);

  return(reject+" Come");

})

/*.then(function(result)
{

  console.log(result);

  return(result+" stai,");

}).then(function(result)
{

  console.log(result);

  return(result+" oggi?");

}).then(function(result)
{

  console.log(result);

});*/

//thenable.