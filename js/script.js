let img = window.document.getElementById('img');
let quebrada = false;

// funcoes on, off e break
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

function brk () {
    img.src = 'image/quebrada.png';
    quebrada = true;
}

// eventos
let botaoLigar = window.document.getElementById('on');
botaoLigar.addEventListener('click', on);

let botaoDesligar = window.document.getElementById('off');
botaoDesligar.addEventListener('click', off);

img.addEventListener('mouseenter', on);
img.addEventListener('mouseout', off);
img.addEventListener('dblclick', brk);