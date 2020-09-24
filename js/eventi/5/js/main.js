//1.
function manageClick3(event)
{
  console.log(event.type);
  console.log("event.target: "+event.target.nodeName); //Dove avviene.
  console.log("event.currentTarget: "+event.currentTarget.nodeName); //Chi gestisce l'evento. 

  console.log("fase: "+event.eventPhase);

  /*if(event.currentTarget.nodeName=="DIV")
  {
    //Non proseguo nel Bubbling.
    event.stopPropagation();
  }*/
}

let div1=document.querySelector("div");
div1.addEventListener("click", manageClick3, false);
div1.addEventListener("click", manageClick3, true); //{capture: true}


let p1=document.querySelector("p");
p1.addEventListener("click", manageClick3, false);
p1.addEventListener("click", manageClick3, true); //{capture: true}


let b1=document.querySelector("b");
b1.addEventListener("click", manageClick3, false);
//b1.addEventListener("click", manageClick3, true); //{capture: true}







document.body.addEventListener("click", manageClick3, true); //{capture: true}
document.body.addEventListener("click", manageClick3, false);

document.addEventListener("click", manageClick3, true); //{capture: true}
document.addEventListener("click", manageClick3, false);