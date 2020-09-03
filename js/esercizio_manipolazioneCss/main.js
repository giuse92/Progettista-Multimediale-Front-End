let cerchiSemaforo = document.querySelectorAll('div.cerchio');
let cssClasses = ['rosso', 'giallo', 'verde'];

for (let cerchioSemaforo of cerchiSemaforo) {
    cerchioSemaforo.addEventListener('mouseover', test)
    cerchioSemaforo.addEventListener('mouseout', test2)
}

function test() {
    this.classList.add(cssClasses[0]);
}

function test2() {
    this.classList.remove(cssClasses[0]);
}