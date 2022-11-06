let img = window.document.getElementById('imagem');
let foto = window.document.getElementById('foto');
img.setAttribute('id', 'foto');

let botaoLigar = window.document.getElementById('on');
botaoLigar.addEventListener('click', on);
function on () {
    if (quebrada != true) {
        img.setAttribute('src', 'imagens/ligada.png');
        foto.appendChild(img);
        clicado = 0;
    }
}

let botaoDesligar = window.document.getElementById('off');
botaoDesligar.addEventListener('click', off);
function off () {
    if (quebrada != true) {
        img.setAttribute('src', 'imagens/desligada.png');
        foto.appendChild(img);
        clicado = 0;
    }
}

let clicado = 0;
let quebrada = false;
function bater () {
    clicado++
    if ( clicado >= 2 ) {
        img.setAttribute('src', 'imagens/quebrada.png');
        foto.appendChild(img);
        quebrada = true;
    }
}