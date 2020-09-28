function caricaScriptEsterno(src, callback)
{
  let s=document.createElement('script');
  s.src=src;

  s.onload = () => callback(null, s);
  s.onerror = () => callback(new Error(`Errore di caricamento relativo a: ${src}`));

  document.body.append(s);
}


/*caricaScriptEsterno('js/script1.js', function(error, s)
{
  if(error!=null)
  {
    alert(error);
  }
  else
  {
    alert(`1. il primo ${s.src} è caricato!`);

    caricaScriptEsterno('js/crispt2.js', function(error, s)
    {
      if(error!=null)
      {
        alert(error);
      }
      else
      {
        alert(`2. il secondo ${s.src} è caricato!`);
      }
    });
  }
});*/


/*caricaScriptEsterno('js/script1.js', gestisciCaricamentoPrimoScript);

function gestisciCaricamentoPrimoScript(error, s)
{
  if(error!=null)
  {
    alert(error);
  }
  else
  {
    alert(`1. il primo ${s.src} è caricato!`);

    caricaScriptEsterno('js/crispt2.js',gestisciCaricamentoSecondoScript);
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
      alert(`2. il secondo ${s.src} è caricato!`);
    }
  }*/



caricaScriptEsterno('js/script1.js', callback1);

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
}