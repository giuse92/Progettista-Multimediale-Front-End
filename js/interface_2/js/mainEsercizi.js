let rowsNumber = 3;
let columnsNumber = 3;
let totalColours = 6;
let gridDivs = null;

function buildDiv(uniqueId, textToWrite) {
  let s = document.querySelector('script');

  let div = document.createElement('div');
  let textNode = document.createTextNode(textToWrite);

  div.id = uniqueId;
  div.classList.add('divSize');
  div.classList.add('divColour' + Math.floor(Math.random() * totalColours));
  div.append(textNode);
  //div.appendChild(textNode);
  //document.body.append(div); //document.body.prepend(div);
  //document.body.appendChild(div);

  s.before(div);
  //s.insertAdjacentElement("beforebegin", div);

  return (div);
}

function positionDiv(currentDiv, currentX, currentY) {
  const currentStyle = getComputedStyle(currentDiv);
  const currentWidth = parseInt(currentStyle.width);
  const currentHeigth = parseInt(currentStyle.height);

  //console.log(currentWidth);

  currentDiv.style.left = currentX * currentWidth + "px";
  currentDiv.style.top = currentY * currentHeigth + "px";
}

function buildGrid() {
  var div = null;

  for (let i = 0; i < rowsNumber; i++) {
    for (let j = 0; j < columnsNumber; j++) {
      //div=buildDiv(`div_${i}_${j}`, `Position at ${i} and ${j}`);
      div = buildDiv("div" + i + j, "Position at " + i + " and " + j);
      positionDiv(div, j, i);
    }
  }
}

function mEventListeners() {
  //FOR IE TOO.
  gridDivs = document.querySelectorAll('.divSize');

  for (let iterator, i = 0; i < gridDivs.length; i++) {
    iterator = gridDivs[i];

    iterator.onmouseenter = function (event) {
      this.style.opacity = 0.5;
    }

    iterator.onmouseleave = function (event) {
      this.style.opacity = 1;
    }

    iterator.onclick = function (event) {
      alert(this.id);

      buildBigImage();
    }
  }
}

function buildBigImage() {
  let s = document.querySelector('script');

  let divBigImage = document.createElement('div');
  //let bigImage=document.createElement('img');
  let bigImage = new Image();

  divBigImage.id = "divBigImage";
  //divBigImage.classList.add('divSize');

  bigImage.id = "bigImage";
  bigImage.classList.add('divBigImage');
  bigImage.onload = function () {
    alert("bigImage.width: " + this.width);
    alert("bigImage.height: " + this.height);

    alert("bigImage.naturalWidth: " + this.naturalWidth);
    alert("bigImage.naturalHeight: " + this.naturalHeight);

    buildCloseButton();
  }

  let randomImages = 10;//Esercizio 2
  let nImg = Math.floor(Math.random() * randomImages) + 1;//Esercizio 2

  bigImage.src = `images/big_image${nImg}.jpg`;//Esercizio 2

  divBigImage.appendChild(bigImage);
  //document.body.appendChild(divBigImage);
  s.insertAdjacentElement("beforebegin", divBigImage);

  //Sperimentare.
}

function buildCloseButton() {

  let s = document.querySelector('script');

  let divCloseButton = document.createElement('div');

  divCloseButton.id = "divCloseButton";
  divCloseButton.classList.add('divClose');
  divCloseButton.innerHTML = "X";

  //document.body.appendChild(divCloseButton);
  s.insertAdjacentElement("beforebegin", divCloseButton);

  let queriesDivSize = document.querySelectorAll('div.divSize');//Esercizio 1
  for (let query of queriesDivSize) {//Esercizio 1
    query.onclick = null;
  };

  divCloseButton.onclick = function (event) {
    alert(this.id);

    this.onclick = null;

    document.body.removeChild(document.getElementById('divBigImage'));
    document.body.removeChild(this);

    mEventListeners();//Esercizio 1
  }
}

buildGrid();
mEventListeners();

//ESERCIZIO 1: che fare per gestire la contemporaneità delle immagini grandi?
/*
Riga 115: recupero i selettori div con classe .divSize;
-------------------------------------------------------------------
Riga 116: for-of della node-list, per ogni elemento imposto un valore nullo solo al click
e mantengo i valori applicati agli eventi mouseenter e mouseleave;
-------------------------------------------------------------------
Riga 128: richiamo mEVentListener all'interno della funzione associata al click di divCloseButton 
in modo da ripristinare la funzione buildBigImage associata al click di tutti gli elementi con classe .divSize
*/

//ESERCIZIO 2: ad ogni click su un dato quadrante, caricare un'immagine diversa.
/*
Riga 94: creo la variabile per indicare la quantità delle immagini
------------------------------------------------------------------------
Riga 95: nImg è il numero tirato a caso dal Math.random all'interno del Math.floor, il + 1 determina il range tra 1 e 10 (il valore di randomImages),
senza il + 1 il range sarebbe stato tra 0 e 9;
Fonte: https://www.w3schools.com/js/tryit.asp?filename=tryjs_random_1_10
-------------------------------------------------------------------------
Riga 97: inserimento variabile nImg all'interno della `stringa` assegnata a bigImage.src
*/

//ESERCIZIO 3: rendere "dinamiche" le coordinate dell'immagine:
//sia centrata rispetto alla griglia.
/*

*/