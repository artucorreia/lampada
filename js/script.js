let img = window.document.getElementById('img');
let estado = 1;

// funcoes on, off e break
function OnOff () {
    if (estado != 3) {
        switch (estado) {
            case 1:
                img.src = 'image/ligada.png';
                estado = 2;
                break;
            case 2:
                img.src = 'image/desligada.png';
                estado = 1;
                break;
        }
    }
}

function brk () {
    if (estado != 3) {
        img.src = 'image/quebrada.png';
        estado = 3;
    }
}

// eventos
let botaoLigar = window.document.getElementById('on');
botaoLigar.addEventListener('click', OnOff);

let botaoDesligar = window.document.getElementById('off');
botaoDesligar.addEventListener('click', OnOff);

img.addEventListener('mouseenter', OnOff);
img.addEventListener('mouseout', OnOff);
img.addEventListener('dblclick', brk);