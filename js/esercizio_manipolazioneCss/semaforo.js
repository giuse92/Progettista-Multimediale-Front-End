let cerchiSemaforo = document.querySelectorAll('div.cerchio');
let cssClasses = ['rosso', 'giallo', 'verde'];

for (let i = 0; i < cerchiSemaforo.length; i++) {
    for (let x = 0; x < cssClasses.length; x++) {
        if (i == x) {
            cerchiSemaforo[i].addEventListener('mouseover', function () {
                cerchiSemaforo[i].classList.add(cssClasses[x]);
            });
            cerchiSemaforo[i].addEventListener('mouseout', function () {
                cerchiSemaforo[i].classList.remove(cssClasses[x]);
            });
        }
    }
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
}

let btnAnimSemaforo = document.createElement('button');
btnAnimSemaforo.innerHTML = "Fai partire animSemaforo";
btnAnimSemaforo.setAttribute("onclick", "animSemaforo()");
btnJs.after(btnAnimSemaforo);

function animSemaforo() {
    for (let i = 0; i < cerchiSemaforo.length; i++) {
        cerchiSemaforo[i].style.pointerEvents = "none";
    };
    luceOffOn(cerchiSemaforo[0], cssClasses[0], 2000);
    temporizza(cerchiSemaforo[2], cssClasses[2], 2000);
    temporizza(cerchiSemaforo[1], cssClasses[1], 4000);
    temporizza(cerchiSemaforo[0], cssClasses[0], 6000);
}

function luceOffOn(nLuce, strClasse, tmp) {
    nLuce.classList.toggle(strClasse);
    setTimeout(function () { 
        nLuce.classList.toggle(strClasse);
    }, tmp);
};

function temporizza(nLuce, strClasse, tmp) {
    setTimeout(function () {
        nLuce.classList.toggle(strClasse);
        setTimeout(function () {
            nLuce.classList.toggle(strClasse);
        }, 2000);
    }, tmp)
};