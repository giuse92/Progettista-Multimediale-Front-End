document.body.addEventListener("click", gestisciClick, false);

function gestisciClick(e)
{
  if(e.target.nodeName=="P")
    e.target.className=e.target.id;
  else
    console.log("Non hai fatto click su un paragrafo.")

  /*switch(e.target.id)
  {
    case "p1":
      e.target.className="divSize1";
      break;
    case "p2":
      e.target.className="divSize2";
      break;
    case "p3":
      e.target.className="divSize3";
      break;
    case "p4":
      e.target.className="divSize4";
      break;
    case "p5":
      e.target.className="divSize5";
      break;
  }*/
}