let rowsNumber=2;
let columnsNumber=2;
let totalColours=6;
let gridDivs=null;

function buildDiv(uniqueId, textToWrite)
{
  let s=document.querySelector('script');

  let div=document.createElement('div');
  let textNode=document.createTextNode(textToWrite);

  div.id=uniqueId;
  div.classList.add('divSize');
  div.classList.add('divColour'+Math.floor(Math.random()*totalColours));
  div.append(textNode);
  //div.appendChild(textNode);
  //document.body.append(div); //document.body.prepend(div);
  //document.body.appendChild(div);
  
  s.before(div);
  //s.insertAdjacentElement("beforebegin", div);

  return(div);
}

function positionDiv(currentDiv, currentX, currentY)
{
  const currentStyle=getComputedStyle(currentDiv);
  const currentWidth=parseInt(currentStyle.width);
  const currentHeigth=parseInt(currentStyle.height);

  //console.log(currentWidth);

  currentDiv.style.left=currentX*currentWidth+"px";
  currentDiv.style.top=currentY*currentHeigth+"px";
}

function buildGrid()
{
  var div=null;

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

function mEventListeners()
{
  //FOR IE TOO.
  gridDivs=document.querySelectorAll('.divSize');

  for(let iterator, i=0;i<gridDivs.length;i++)
  {
    iterator=gridDivs[i];

    iterator.onmouseenter=function(event)
    {
      this.style.opacity=0.5;
    }

    iterator.onmouseleave=function(event)
    {
      this.style.opacity=1;
    }

    iterator.onclick=function(event)
    {
      alert(this.id);

      buildBigImage();
    }
  }
}

function buildBigImage()
{
  let s=document.querySelector('script');

  let divBigImage=document.createElement('div');
  //let bigImage=document.createElement('img');
  let bigImage=new Image();

  divBigImage.id="divBigImage";
  //divBigImage.classList.add('divSize');

  bigImage.id="bigImage";
  bigImage.classList.add('divBigImage');
  bigImage.onload=function()
  {
    alert("bigImage.width: "+this.width);
    alert("bigImage.height: "+this.height);

    alert("bigImage.naturalWidth: "+this.naturalWidth);
    alert("bigImage.naturalHeight: "+this.naturalHeight);

    buildCloseButton();
  }
  bigImage.src="images/big_image.jpg";

  divBigImage.appendChild(bigImage);
  //document.body.appendChild(divBigImage);
  s.insertAdjacentElement("beforebegin", divBigImage);

  //Sperimentare.
}

function buildCloseButton()
{
  let s=document.querySelector('script');

  let divCloseButton=document.createElement('div');

  divCloseButton.id="divCloseButton";
  divCloseButton.classList.add('divClose');
  divCloseButton.innerHTML="X";

  //document.body.appendChild(divCloseButton);
  s.insertAdjacentElement("beforebegin", divCloseButton);

  divCloseButton.onclick=function(event)
  {
    alert(this.id);

    this.onclick=null;

    document.body.removeChild(document.getElementById('divBigImage'));
    document.body.removeChild(this);
  }
}

buildGrid();
mEventListeners();

//ESERCIZIO 1: che fare per gestire la contemporaneità delle immagini grandi?
//ESERCIZIO 2: ad ogni click su un dato quadrante, caricare un'immagine diversa.
//ESERCIZIO 3: rendere "dinamiche" le coordinate dell'immagine:
//sia centrata rispetto alla griglia.