function caricaScriptEsterno(src, callback)
{
  let s=document.createElement('script');
  s.src=src;

  s.onload = () => callback(null, s);
  s.onerror = () => callback(new Error(`Errore di caricamento relativo a: ${src}`));

  document.head.append(s);
}




  

caricaScriptEsterno('https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.5.1.js', function(error, s)
{
  if(error!=null)
  {
    alert(error);
  }
  else
  {
    alert(`1. il primo ${s.src} è caricato!`);

    $(document).ready(function()
    {
      //w3school.
      alert( "JQUERY ready!" );
    
      let txt1="<p>Text.</p>";               // Create element with HTML.
      let txt2=$("<p></p>").text("Text.");   // Create with jQuery.
      let txt3=document.createElement("p");  // Create with DOM.

      txt3.innerHTML="Text.";
      
      $("body").append(txt1, txt2, txt3);
    });

    caricaScriptEsterno('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js', function(error, s)
    {
      if(error!=null)
      {
        alert(error);
      }
      else
      {
        alert(`2. il secondo ${s.src} è caricato!`);
        alert( "LODASH ready!" );
      }
    });
  }
});


/*caricaScriptEsterno('https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.5.1.js', gestisciCaricamentoPrimoScript)
//caricaScriptEsterno('js/script1.js', gestisciCaricamentoPrimoScript);

function gestisciCaricamentoPrimoScript(error, s)
{
  if(error!=null)
  {
    alert(error);
  }
  else
  {
    alert(`1. il primo ${s.src} è caricato!`);

    $(document).ready(function()
    {
      //w3school.
      alert( "JQUERY ready!" );
    
      let txt1="<p>Text.</p>";               // Create element with HTML.
      let txt2=$("<p></p>").text("Text.");   // Create with jQuery.
      let txt3=document.createElement("p");  // Create with DOM.

      txt3.innerHTML="Text.";
      
      $("body").append(txt1, txt2, txt3);
    });

    caricaScriptEsterno('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js',gestisciCaricamentoSecondoScript);
    //caricaScriptEsterno('js/crispt2.js',gestisciCaricamentoSecondoScript);
  }
}

function gestisciCaricamentoSecondoScript(error, s)
  {
    if(error!=null)
    {
      alert(error);
    }
    else
    {
      alert("LODASH!")
      alert(`2. il secondo ${s.src} è caricato!`);
    }
  }*/



/*caricaScriptEsterno('js/script1.js', callback1);

function callback1(error, script)
{
  if(error!=null)
  {
    alert("1. "+error);
    //Gestisci errore.
  }
  else
  {
    //Istruzioni.
    caricaScriptEsterno('js/script2.js', callback2);
  }
}

function callback2(error, script)
{
  if(error)
  {
    alert("2. "+error);
    //Gestisci errore.
  }
  else
  {
    //Istruzioni.
    caricaScriptEsterno('js/script3.js', callback3);
  }
}

function callback3(error, script)
{
  if(error)
  {
    alert("3. "+error);
    //Gestisci errore.
  }
  else
  {
    //Eccetera.
  }
}*/