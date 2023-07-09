// pegando HTML

const input = document.querySelector('input');
const submit = document.querySelector('#submit');
const saida = document.querySelector('#saida');

// funções

submit.addEventListener('click', (e)=>{
    e.preventDefault();

    const inputValue = input.value;
    
    let multiplicador = 1

    saida.innerHTML = `<h2>Tabuada de ${inputValue}</h2>`

    while(multiplicador <= 10){
        saida.innerHTML += `${inputValue} x ${multiplicador} = ${inputValue * multiplicador}<br>`
        multiplicador++
    }

})

