const resultado = document.querySelector('#resultado');

function clicou(){
    const numero = prompt('Digite um número');

    resultado.innerHTML = `O número a ser analisado será o ${numero}`;

    resultado.innerHTML += `<br> O seu valor absoluto é ${Math.abs(numero)}`;
    resultado.innerHTML += `<br> A sua parte inteira é ${Math.trunc(numero)}`;
    resultado.innerHTML += `<br> O valor inteiro mais próximo é ${Math.round(numero)}`;
    resultado.innerHTML += `<br> A sua raiz quadrada é ${Math.sqrt(numero)}`;
    resultado.innerHTML += `<br> A sua raiz cúbica é ${Math.cbrt(numero)}`;
    resultado.innerHTML += `<br> O valor de ${numero}<sup>2</sup> é ${Math.pow(numero,2)}`;
    resultado.innerHTML += `<br> O valor de ${numero}<sup>3</sup> é ${Math.pow(numero,3)}`;
}