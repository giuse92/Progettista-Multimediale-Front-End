let bullDiv = document.createElement('div');
bullDiv.id = "bull-html";
bullDiv.innerHTML = "&bull;"
document.body.insertAdjacentElement('afterbegin', bullDiv);


function generaBtns(numero) {
    let bloccoBtns = document.createElement('section');
    let scriptMain = document.body.lastElementChild;
    scriptMain.insertAdjacentElement('beforebegin', bloccoBtns);
    for (let i = 0; i < numero; i++) {
        let unBtn = document.createElement('button');
        bloccoBtns.append(unBtn);
    }
}

generaBtns(4);

let btnsCreati = document.querySelectorAll('button');
btnsCreati[0].innerHTML = "&larr;";
btnsCreati[0].onclick = function() {muoviVerso('left')}

btnsCreati[1].innerHTML = "&uarr;";
btnsCreati[1].onclick = function() {muoviVerso('up')}

btnsCreati[2].innerHTML = "&rarr;";
btnsCreati[2].onclick = function() {muoviVerso('right')}

btnsCreati[3].innerHTML = "&darr;";
btnsCreati[3].onclick = function() {muoviVerso('down')}

function muoviVerso(direzione) {
    let bullDivMuoviVerso = document.querySelector('#bull-html');
    let bullStyle = getComputedStyle(bullDivMuoviVerso);
    let valueLeftInt = null;
    let valueTopInt = null;

    switch (direzione) {
        case 'left':
            valueLeftInt = parseInt(bullStyle.left);
            bullDivMuoviVerso.style.cssText = `left:${valueLeftInt-1}px; top:${bullStyle.top}`;
            break;
        case 'up':
            valueTopInt = parseInt(bullStyle.top);
            bullDivMuoviVerso.style.cssText = `top:${valueTopInt-1}px; left:${bullStyle.left}`;
            break;
        case 'right':
            valueLeftInt = parseInt(bullStyle.left);
            bullDivMuoviVerso.style.cssText = `left:${valueLeftInt+1}px; top:${bullStyle.top}`;
            break;
        case 'down':
            valueTopInt = parseInt(bullStyle.top);
            bullDivMuoviVerso.style.cssText = `top:${valueTopInt+1}px; left:${bullStyle.left}`;
            break;
    };
}