const paragrafo = document.querySelector('#paragrafo');
const btn = document.querySelector('button');
const h2 = document.querySelector('h2');

btn.addEventListener('click',()=>{
    // para sequenciar de 1 a 10
    let contador = 1;
    while(contador <= 10){
        paragrafo.innerHTML += `👉${contador}`;
        contador++ // ele irá adicionar +1
    }

    paragrafo.innerHTML += `👉&#x1F3C1`;

})
