/*//Dalle prime esercitazioni:
function caricaScriptEsterno(src, callback)
{
  let s=document.createElement('script');
  s.src=src;

  s.onload = () => callback(null, s);
  s.onerror = () => callback(new Error(`Errore di caricamento relativo a: ${src}`));

  document.head.append(s);
  //document.body.append(s);
}*/

//Esempio con Promise:
function caricaScriptEsternoPromise(src)
{
  return new Promise(function(resolve, reject)
  {
    let s=document.createElement('script');
    s.src=src;

    s.onload = () => resolve(s);
    s.onerror = () => reject(new Error(`Errore di caricamento relativo a: ${src}`));

    document.body.append(s);
  });
}

let promise1=caricaScriptEsternoPromise("https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.5.1.js");

promise1.then(
  s => console.log(`${s.src} è stato caricato con successo!`),
  orrore => console.log(`${orrore.name}: ${orrore.message}`)
);

promise1.then(() => buildInterface());

//promise1.then(s => alert("sono felicissimo!"));

function buildInterface()
{
  $(document).ready(function()
  {
    console.log("ready!");
   
    let txt1="<p>Text.</p>";               // Create element with HTML.
    let txt2=$("<p></p>").text("Text.");   // Create with jQuery.
    let txt3=document.createElement("p");  // Create with DOM.

    txt3.innerHTML="Text.";
    
    $("body").append(txt1, txt2, txt3);
  });
}