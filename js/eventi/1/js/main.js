function elencaNumeri()
{
  for(let i=0;i<4;i++)
    alert(i);
}


/*//3.
//Facciamo noi quello che fa il browser con l'attributo nell'esempio 1.
let b3=document.getElementById("but3");

b3.onclick=function()
{
  alert('Test.');
};*/


/*//4.
//Non supporta più di un handler ad elemento. Sovrascrittura.
let b1=document.getElementById("but1");

b1.onclick=function()
{
  alert('Funzione sovrascritta.');
};

b1.onclick=function()
{
  alert('Funzione sovrascritta 2.');
};

//b1.onclick=null;

b1.onclick=function()
{
  alert('Funzione sovrascritta 3.');
};*/


//5.
let b1=document.getElementById("but1");

function mostraMessaggio()
{
  alert("Messaggio!!!!!!!");
}

//b1.onclick=mostraMessaggio;

//b1.onlick=mostraMessaggio();
//console.log(b1.onclick);
//NO (intende la chiamata alla funzione che restituisce undefined.

/*Da html, ci vogliono le tonde perché genera una cosa così:
<input type="button" id="but1" onclick="mostraMessaggio()"></input>
b1.onclick=function()
{
  mostraMessaggio();
};*/


//6.
//b1.setAttribute('onclick', mostraMessaggio()); //b1.onlick=mostraMessaggio(); //NO!
//b1.setAttribute('onclick', mostraMessaggio); //NO!
//b1.setAttribute('onclick', "mostraMessaggio()"); //SI.


//7.
//b1.onclick e non b1.ONclick o b1.ONCLICK: in js, è case-sensitive.