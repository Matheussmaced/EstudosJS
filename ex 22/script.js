const paragrafo = document.querySelector('#paragrafo');
const btn = document.querySelector('button');

btn.addEventListener('click', ()=>{
    
    let contador = 1;

    while(contador <= 10){

        if(contador % 2){
            paragrafo.innerHTML += `👉${contador}`
        }else{
            paragrafo.innerHTML += `<mark>👉${contador}</mark>`
        }

        contador++
    }

    paragrafo.innerHTML += `👉&#x1F3C1 <br>`;
})  

