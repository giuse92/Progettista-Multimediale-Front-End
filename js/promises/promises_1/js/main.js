/*function somma(a,b)
{
  return a+b;
}

//let v=somma(1,3);

(a,b) => a+b;

function prova(n)
{
  return n*n;
}

(n) => n*n;

n => n*n;

function prova2(n)
{
  let a="ciao";
  let b=" Come stai?";
  let result=a+b;

  return result;
}

n => {
  let a="ciao";
  let b=" Come stai?";
  let result=a+b;

  return result;
}


function saluto()
{
  return "ciao";
}

() => "ciao";*/
























function caricaScriptEsterno(sorgente, callback)
{
  let s=document.createElement('script');
  s.src=sorgente;

  //s.onload = function() {callback(s)};
  s.onload = () => callback(s);
  
  document.head.append(s);
  //document.body.append(s);
}

caricaScriptEsterno('https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.5.1.js', (s) => {

  alert(`${s.src} è stato caricato!`);

  $(document).ready(function()
  {
    //w3school.
    alert( "ready!" );
   
    let txt1="<p>Text.</p>";               // Create element with HTML.
    let txt2=$("<p></p>").text("Text.");   // Create with jQuery.
    let txt3=document.createElement("p");  // Create with DOM.

    txt3.innerHTML="Text.";
    
    $("body").append(txt1, txt2, txt3);
  });
  
});