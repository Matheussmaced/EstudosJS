const resultado = document.querySelector('#resultado');

function clicou(){
    const nome = prompt('Qual é o nome do aluno?');

    const primeiraNota = prompt(`Qual foi a primeira nota de ${nome}?`);
    const segundaNota =    prompt(`Além de ${primeiraNota}, qual foi a outra nota de ${nome}?`);

    const primeiraNotaNum = Number(primeiraNota);
    const segundaNotaNum = Number(segundaNota);

    const media = (primeiraNotaNum + segundaNotaNum)/2;

    resultado.innerHTML = `Calculando a média final de ${nome}`;
    resultado.innerHTML += `<br> As notas obtidas foram de <mark>${primeiraNotaNum} e ${segundaNotaNum}</mark>`;

    resultado.innerHTML += `<br> A média final será <mark>${media}</mark>`;

    if(media>=6){
        resultado.innerHTML += `<br> A mesangem que temos é: <mark>Meus parabéns</mark>!`
        return
    }else{
        resultado.innerHTML += `<br> A mensagem que temos é: <mark>Estude um pouco mais!</mark>`
    }

}