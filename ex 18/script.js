// pegando elementos
const geradorBtn = document.querySelector('#gerar');
const limparBtn = document.querySelector('#limpar');
const div = document.querySelector('teste');
const paragrafo = document.querySelector('#paragrafo');

geradorBtn.addEventListener('click', ()=>{
    
    const numeroRandom = `Acabei de pensar no número <mark>${Math.floor(Math.random()*100 + 1)}</mark>! <br>`

    paragrafo.innerHTML += numeroRandom;
    
    // botão com funcionalidade de limpar
    limparBtn.addEventListener('click', ()=>{
        paragrafo.innerHTML = '';
    })


})