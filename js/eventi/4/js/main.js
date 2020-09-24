//1 e 2.
function manageClick(event, a)
{
  console.log(event.type);
  console.log(a);

  console.log("FINE EVENTO.");
}


//3.
function manageClick2(event)
{
  console.log(event.type);

  console.log("event.target: "+event.target); //Dove avviene.
  console.log("event.target.nodeName: "+event.target.nodeName); 

  console.log("event.currentTarget: "+event.currentTarget);
  console.log("event.currentTarget: "+event.currentTarget.nodeName); //Chi gestisce l'evento. 

  console.log("fase: "+event.eventPhase);
}


//4.
function manageClick3(event)
{
  console.log(event.type);
  console.log("event.target: "+event.target.nodeName); //Dove avviene.
  console.log("event.currentTarget: "+event.currentTarget.nodeName); //Chi gestisce l'evento. 

  console.log("fase: "+event.eventPhase);

  if(event.currentTarget.nodeName=="B")
  {
    //Non proseguo nel Bubbling.
    event.stopPropagation();

    console.log("STOP!");
  }
}