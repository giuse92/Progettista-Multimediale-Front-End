let rowsNumber=2;
let columnsNumber=2;
let totalColours=6;
//let gridDivs=null;

function buildDiv(uniqueId, textToWrite)
{
  let s=document.querySelector('script');
  let div=document.createElement('div');
  let textNode=document.createTextNode(textToWrite);
  let randomNumber=Math.floor(Math.random()*totalColours);

  div.id=uniqueId;
  div.classList.add('divSize');
  div.classList.add('divColour'+randomNumber);

  //div.append(textNode);
  //div.appendChild(textNode);
  div.insertAdjacentText("afterbegin", textNode.nodeValue);

  //document.body.append(div);
  //document.body.appendChild(div);
  //document.body.insertAdjacentElement("beforeend", div);
 
  //s.before(div);
  //document.body.insertBefore(div, s);
  s.insertAdjacentElement("beforebegin", div);

  return(div);
}

function positionDiv(currentDiv, currentX, currentY)
{
  let currentStyle=getComputedStyle(currentDiv);
  let currentWidth=parseInt(currentStyle.width);
  let currentHeigth=parseInt(currentStyle.height);

  //console.log(currentWidth);

  currentDiv.style.left=currentX*currentWidth+"px";
  currentDiv.style.top=currentY*currentHeigth+"px";
}

function buildGrid()
{
  let div=null;

  for(let i=0;i<rowsNumber;i++)
  {
    for(let j=0;j<columnsNumber;j++)
    {
      //div=buildDiv(`div_${i}_${j}`, `Position at ${i} and ${j}`);
      div=buildDiv("div"+i+j, "Position at "+i+" and "+j);
      positionDiv(div, j, i);
    }
  }
}

function addEventListeners()
{
  let gridDivs=document.querySelectorAll('.divSize');

  for(let currentDiv, i=0;i<gridDivs.length;i++)
  {
    currentDiv=gridDivs[i];

    currentDiv.onmouseenter=function(event)
    {
      this.style.opacity=0.5;
    }

    currentDiv.onmouseleave=function(event)
    {
      this.style.opacity=1;
    }

    currentDiv.onclick=function(event)
    {
      alert(this.id);
    }
  }
}

buildGrid();
addEventListeners();