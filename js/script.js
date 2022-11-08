// declaracao variaveis
let img = window.document.getElementById('img');
let estado = 1;

// funcao on e off
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

//funcao break
function brk () {
    if (estado != 3) {
        img.src = 'image/quebrada.png';
        estado = 3;
    }
}

// eventos
let btn = window.document.getElementById('btn');
btn.addEventListener('click', OnOff);

img.addEventListener('mouseenter', OnOff);
img.addEventListener('mouseout', OnOff);
img.addEventListener('dblclick', brk);