alert('Seja bem-vindo(a) ao meu site!');
const resultado = document.querySelector('#resultado');

function clicou(){
    const numero = prompt('Digite um número');

    resultado.innerHTML = `O dobro de ${numero} é ${numero*2} e a metade é ${numero/2}!`;
}