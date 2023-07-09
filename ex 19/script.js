const paragrafo = document.querySelector('#paragrafo');
const btn = document.querySelector('button');

const number = Math.floor(Math.random()*100 + 1);

btn.addEventListener('click', ()=>{
    const numberUsuario = prompt('Qual seu palpite?');

    if(numberUsuario > number){
        paragrafo.innerHTML += `Você falou ${numberUsuario}. Meu número é <mark>MENOR!</mark> <br>`

    }else if(numberUsuario < number){
        paragrafo.innerHTML += `Você falou ${numberUsuario}. Meu número é <mark>MAIOR!</mark> <br>`

    }else{
        paragrafo.innerHTML += `<mark>PARABÉNS!</mark> Você acertou! Eu tinha sorteado o valor ${numberUsuario}`
        btn.classList.toggle('hide');

    }

    console.log(number);

})

