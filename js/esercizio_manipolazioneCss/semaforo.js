let cerchiSemaforo = document.querySelectorAll('div.cerchio');
let cssClasses = ['rosso', 'giallo', 'verde'];

function onOff(index1, index2) {
   cerchiSemaforo[index1].classList.toggle(cssClasses[index2]);
};

for (let i = 0; i < cerchiSemaforo.length; i++) {
    for (let x = 0; x < cssClasses.length; x++) {
        if (i == x) {
            cerchiSemaforo[i].addEventListener('mouseover', function() {onOff(i,x)});
            cerchiSemaforo[i].addEventListener('mouseout', function() {onOff(i,x)});
        };
    };
};

let btnJs = document.getElementById('btn-js');
let semaforoContainer = document.getElementById('semaforo');

function vertOrizz() {
    if (semaforoContainer.style.flexDirection != "row") {
    semaforoContainer.style.flexDirection = "row";
    btnJs.innerText = "Premi per Semaforo Verticale";
    } else {
        semaforoContainer.style.cssText = "flex-direction: column";
        btnJs.innerText = "Premi per Semaforo Orizzontale";
    }
};