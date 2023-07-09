const paragrafoResultado = document.querySelector('#resultado');
const paragrafoNome = document.querySelector('#nome');
const paragrafoNotas = document.querySelector('#notas');

function clicou(){
    const nomeAluno = prompt('Qual é o nome do aluno?');

    const primeiraNota = prompt(`Qual foi a primeira nota de ${nomeAluno} ?`);
    const segundaNota = prompt(`Além de ${primeiraNota}, qual foi a outra nota de ${nomeAluno} ?`);

    const primeiraNotaNumber = Number(primeiraNota);
    const segundaNotaNumber = Number(segundaNota);

    const resultado = (primeiraNotaNumber + segundaNotaNumber)/ 2

    paragrafoNome.innerHTML = `Calculando a média final de <strong>${nomeAluno}<strong>`;
    paragrafoNotas.innerHTML = `As notas obtidas foram <strong>${primeiraNotaNumber} e ${segundaNotaNumber}<strong>`;
    paragrafoResultado.innerHTML = `A média final  será <strong>${resultado}<strong>`;
}