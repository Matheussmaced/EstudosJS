const paragrafo = document.querySelector('#paragrafo');

function clicou(){
    const number = prompt('Digite um número');

    const condicao = number % 2 == 0
    if(condicao) {
        paragrafo.innerHTML = `${number} é par`
    }else{
        paragrafo.innerHTML = `${number} é ímpar`
    }

    
    
}
