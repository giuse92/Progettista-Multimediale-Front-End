//1.
function mostraPrimissimoMessaggio(event)
{
  console.log("EVENTO"+event);
  console.log("------------------------------------------");
  console.log("Tipo: "+event.type);
  console.log("Mouse X: "+event.clientX+" e Mouse Y:"+event.clientY);
  console.log("Current Target: "+event.currentTarget);
  console.log("Current Target (id): "+event.currentTarget.id);
  console.log("this: "+this);
  console.log("this.id: "+this.id);

  alert('Primissimo Messaggio con Event!');
};

function mostraPrimoMessaggio(event)
{
  console.log("EVENTO 2"+event);
  console.log("------------------------------------------");
  console.log("Tipo: "+event.type);
  console.log("Mouse X: "+event.clientX+" e Mouse Y:"+event.clientY);
  console.log("Current Target: "+event.currentTarget);
  console.log("Current Target (id): "+event.currentTarget.id);
  console.log("this: "+this);
  console.log("this.id: "+this.id);

  alert('Primo Messaggio con Event!');
};

function mostraSecondoMessaggio()
{
  alert('Secondo Messaggio.');
}

let b1=document.getElementById("but1");
//b1.onclick= () => alert("Primissimo Messaggio.");
/*b1.onclick=function()
{
  alert("Primissimo Messaggio.");
}*/
b1.onclick=mostraPrimissimoMessaggio;


b1.addEventListener("click", mostraPrimoMessaggio);
//b1.addEventListener("click", mostraPrimoMessaggio, {once:true});
b1.addEventListener("click", mostraSecondoMessaggio);

//b1.removeEventListener("click", mostraPrimoMessaggio);
//b1.removeEventListener("click", mostraSecondoMessaggio)


/*//2.
//Solo con addEventListener.
function isDomBuilt()
{
  alert("DOM OK!");
};

document.addEventListener("DOMContentLoaded", isDomBuilt);*/


//3.
let b2=document.getElementById("but2");

b2.onclick=function(event)
{
  console.log("EVENTO"+event);
  console.log("------------------------------------------");
  console.log("Tipo: "+event.type);
  console.log("Mouse X: "+event.clientX+" e Mouse Y:"+event.clientY);
  console.log("Current Target: "+event.currentTarget);
  console.log("Current Target (id): "+event.currentTarget.id);
  console.log("this: "+this);
  console.log("this.id: "+this.id);

  console.log(event.currentTarget===this);

  /*console.log(5=="5");
  console.log(5==="5");
  console.log(undefined==null);
  console.log(undefined===null);*/

  console.log("1----------------------------------");

  let nome1="Luca"; //String("Luca") as function.
  let nome2=new String("Luca"); //Costruttore. Oggetto wrapper.

  console.log(nome1==nome2);
  console.log(nome1===nome2);

  console.log("2----------------------------------");

  console.log(2=="2");
  console.log(2=="02");

  console.log("3----------------------------------");

  let a=0.1+0.4;
  console.log(a);

  let n1=0.1+0.33; //0.43.
  console.log(n1);
  console.log(n1==0.43);
  console.log(0.1+0.33==0.43);
  console.log(n1-0.43);
  console.log(n1-0.43<0.0000000000000001);
  console.log(Number.MIN_VALUE);
};


/*//4.
let b4=document.getElementById("but4");

let customObject={
    handleEvent(event)
    {
      console.log("Tipo: "+event.type+
                  " Mouse X: "+event.clientX+
                  " e Mouse Y:"+event.clientY+
                  " Current Target: "+event.currentTarget.id);

      let p1=document.getElementById("p1");

      p1.style.left=event.clientX+"px";
      p1.style.top=event.clientY+"px";
    }
};

b4.addEventListener('click', customObject);*/


//4.
/*let b5=document.getElementById("but5");

let ciccio={
    handleEvent(event)
    {
      console.log("Tipo: "+event.type+
                  " Mouse X: "+event.clientX+
                  " e Mouse Y:"+event.clientY+
                  " Current Target: "+event.currentTarget);
      
      if(event.type=="click")
        console.log("pressione e rilascio.");
      if(event.type=="mousedown")
        console.log("pressione.");
      if(event.type=="mouseup")
        console.log("rilascio.");
    }
};

b5.addEventListener('click', ciccio);
b5.addEventListener('mousedown', ciccio);
b5.addEventListener('mouseup', ciccio);*/


//5.
let b5=document.getElementById("but5");

class Messaggio {
  handleEvent(event)
  {
    switch(event.type)
    {
      case 'click':
        console.log("pressione e rilascio.");
        break;
      case 'mousedown':
        console.log("pressione.");
        break;
      case 'mouseup':
        console.log("rilascio.");
        break;
    }
  }
}

let messaggino=new Messaggio();
b5.addEventListener('click', messaggino);
b5.addEventListener('mousedown', messaggino);
b5.addEventListener('mouseup', messaggino);