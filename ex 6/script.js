const paragrafo = document.querySelector('#resultado');

function clicou(){
    const primeiroNumero = prompt('Digite um número');
    const segundoNumero = prompt('Digite outro número');

    const primeiroNumeroDigitado = Number(primeiroNumero);
    const segundoNumeroDigitado = Number(segundoNumero);

    paragrafo.innerHTML = `A soma entre ${primeiroNumero} e ${segundoNumero} é igual a <strong>${primeiroNumeroDigitado + segundoNumeroDigitado}<strong>!`;
}