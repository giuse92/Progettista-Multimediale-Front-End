function caricaScriptEsterno(aaa)
{
    let promise=new Promise(function(resolve, reject)
    {
        let s=document.createElement('script');
        s.src=aaa;

        s.onload = () => resolve(s);
        //s.onerror = () => reject(new Error(`Errore di caricamento per lo script: ${src}`));

        document.body.append(s);
    });

    return promise;
} 

caricaScriptEsterno('js/script1.js')
.then(function(script)
{
    console.log("Caricato il primo script.");
    a();

    return caricaScriptEsterno("js/script2.js");
})
.then(function(script)
{
    console.log("Caricato il secondo script.");
    b();

    return caricaScriptEsterno("js/script3.js");
})
.then(function(script)
{
    console.log("Caricato il terzo script.");
    c();

    //a(); b(); c();
});

/*//Con arrow function.
caricaScriptEsterno('js/script1.js')
.then(script => {
    console.log("Caricato il primo script.");
    a();

    return caricaScriptEsterno("js/script2.js");
})
.then(script => {
    console.log("Caricato il secondo script.");
    b();

    return caricaScriptEsterno("js/script3.js");
})
.then(script => {
    console.log("Caricato il terzo script.");
    c();

    //a(); b(); c();
});
*/