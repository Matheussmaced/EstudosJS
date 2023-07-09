const contadorParagrafo = document.querySelector('#contador');

let contador = 0;

function clicou(){
    contador ++
    contadorParagrafo.innerHTML = `O contador está com <mark>${contador}</mark> cliques`;
}

function zerou(){
    contador = 0
    contadorParagrafo.innerHTML = `O contador está com <mark>${contador}</mark> cliques`;
}