/*function caricaScriptEsterno(sorgente, callback)
{
  let s=document.createElement('script');
  //Qui nell'esempio sorgente vale "js"/script1.js",
  s.src=sorgente;

  s.onload=() => callback(s);
  

  //document.head.append(s);
  document.body.append(s);
}



caricaScriptEsterno('js/script1.js', function(s)
{
  alert(`1. il primo ${s.src} è caricato!`);
});*/


function caricaScriptEsterno(src, callback)
{
  let s=document.createElement('script');
  s.src=src;

  s.onload = () => callback(s);
  
  //document.head.append(s);
  document.body.append(s);
}

caricaScriptEsterno('js/script1.js', function(s)
{
  alert(`1. il primo ${s.src} è caricato!`);
  
  caricaScriptEsterno('js/script2.js', function(s)
  {
    alert(`2. il secondo ${s.src} è caricato!`);

    caricaScriptEsterno('js/script3.js', function(s)
    {
      alert(`3. il terzo ${s.src} è caricato!`);

      a();
      b();
      asincronia();
    });
  });
});











//Ipoteticamente, avrei uno sviluppo in orizzontale.
/*caricaScriptEsterno('js/script1.js', function(s)
{
  caricaScriptEsterno('js/script2.js', function(s)
  {
    caricaScriptEsterno('js/script3.js', function(s)
    {
      caricaScriptEsterno('js/script4.js', function(s)
      {
        //Eccetera...
      });
    });
  });
});*/