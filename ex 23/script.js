const paragrafo = document.querySelector('#paragrafo');
const btn = document.querySelector('button');

btn.addEventListener('click', ()=>{

    let contador = 1;

    while(contador <= 10){

        if(contador % 2){
            paragrafo.innerHTML += ''

        }else if(contador){
            paragrafo.innerHTML += `👉${contador}`;

        }

        contador++
    }

    paragrafo.innerHTML += `👉&#x1F3C1 <br>`


});

