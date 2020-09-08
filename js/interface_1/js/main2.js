let rowsNumber=3;
let columnsNumber=1;
let totalColours=6; //totalImages;
//let gridDivs=null;

function buildDiv(uniqueId, textToWrite)
{
  //uniqueId="div10";
  //textToWrite="Position at 1 and 0";
  let s=document.querySelector('script');
  let div=document.createElement('div');
  //let textNode=document.createTextNode(textToWrite);
  
  let n=Math.random();
  console.log(n);
  
  let randomNumber=Math.floor(n*totalColours);
  //let img=document.createElement('img');

  div.id=uniqueId;
  div.classList.add('divSize');
  div.classList.add('divColour'+randomNumber);

  /*img.src='images/divColour'+randomNumber+".jpg";
  //div.append(textNode);
  //div.appendChild(textNode);
  div.insertAdjacentText("afterbegin", textNode.nodeValue);
  div.insertAdjacentElement("afterbegin", img);*/
  //div.insertAdjacentText("afterbegin", textNode.nodeValue);
  div.append(textToWrite);

  
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
    //La prima volta i vale 0;
    //La seconda volta i vale 1;
    for(let j=0;j<columnsNumber;j++)
    {
      //La prima volta j vale 0;
      //div=buildDiv(`div_${i}_${j}`, `Position at ${i} and ${j}`);
      div=buildDiv("div"+i+j, "Position at "+i+" and "+j);

      //function buildDiv(uniqueId, textToWrite)
      positionDiv(div, j, i);
    }
  }
}

function manageEventListeners()
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
manageEventListeners();