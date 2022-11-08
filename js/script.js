let img = window.document.getElementById('img');
let quebrada = false;

function on () {
    if (quebrada != true) {
        img.src = 'image/ligada.png';
    }
}

function off () {
    if (quebrada != true) {
        img.src = 'image/desligada.png';
    }
}

function quebrar () {
    img.src = 'image/quebrada.png';
    quebrada = true;
}

let botaoLigar = window.document.getElementById('on');
botaoLigar.addEventListener('click', on);

let botaoDesligar = window.document.getElementById('off');
botaoDesligar.addEventListener('click', off);

img.addEventListener('mouseenter', on);
img.addEventListener('mouseout', off);
img.addEventListener('dblclick', quebrar);