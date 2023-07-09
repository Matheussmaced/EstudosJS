const paragrafo = document.querySelector('#paragrafo');
const btn = document.querySelector('button');

btn.addEventListener('click', ()=>{
    
    let contador = 10;

    while(contador >= 1){
        paragrafo.innerHTML += `👉 ${contador}`;
        contador --
        console.log(contador)
    };

    paragrafo.innerHTML += `👉 &#x1F3C1 <br> `

})
