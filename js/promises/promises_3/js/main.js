/*function caricaScriptEsterno(src, callback)
{
  let s=document.createElement('script');
  s.src=src;

  s.onload = () => callback(s);
  
  //document.head.append(s);
  document.body.append(s);
}*/

/*caricaScriptEsterno('js/script1.js', function(s)
{
  alert(`1. il primo ${s.src} è caricato!`);
  
  caricaScriptEsterno('js/script2.js', function(s)
  {
    alert(`2. il secondo ${s.src} è caricato!`);
  });
});*/

function caricaScriptEsterno(src, callback)
{
  let s=document.createElement('script');
  s.src=src;

  s.onload = () => callback(null, s);
  s.onerror = () => callback(new Error(`Errore di caricamento relativo a: ${src}`));

  //document.head.append(script);
  document.body.append(s);
}

caricaScriptEsterno('js/script1.js', function(error, s)
{
  if(error!=null)
  {
    alert(error);
  }
  else
  {
    alert(`1. il primo ${s.src} è caricato!`);

    caricaScriptEsterno('js/script2.js', function(error, s)
    {
      if(error)
      {
        alert(error);
      }
      else
      {
        alert(`2. il secondo ${s.src} è caricato!`);
      }
    });
  }
});

//Ipoteticamente, avrei uno sviluppo in orizzontale -> Piramide "infernale".
/*caricaScriptEsterno('js/script.js', function(error, script){
  if(error){
    //Gestisci errore.
  }else{
    loadScript('js/scriptZ.js', function(error, script){
      if(error){
        //Gestisci errore.
      }else{
        loadScript('js/scriptR.js', function(error, script){
          if(error){
            //Gestisci errore.
          }else{
            //Eccetera.
          }
        });
      }
    })
  }
});*/