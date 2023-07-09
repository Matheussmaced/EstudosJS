const paragrafo = document.querySelector('#paragrafo');

function clicou(){
    const number1 = prompt('Digite um número');
    const number2 = prompt('Digite outro número');

    const condicao1 = number1 > number2
    const condicao2 = number1 < number2

    if(condicao1){
        paragrafo.innerHTML = `Analisando os valores ${number1} e ${number2}, o maior valor é <strong>${number1}</strong>`

    }else if(condicao2){
        paragrafo.innerHTML = `Analisando os valores ${number1} e ${number2}, o maior valor é <strong>${number2}</strong>`

    }else{
        paragrafo.innerHTML = `Os números ${number1} e ${number2} são iguais!`
    }

}
