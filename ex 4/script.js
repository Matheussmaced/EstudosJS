const paragrafo = document.querySelector('#paragrafo');

function clicou(){
    const nome = prompt('Qual o seu nome?');

    paragrafo.innerHTML = `Olá, ${nome}! É um grande prazer te conhecer!🖖`
}