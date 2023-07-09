// pegando HTML

const saida = document.querySelector('#saida');
const input1 = document.querySelector('#formNumber1');
const input2 = document.querySelector('#formNumber2');
const submit = document.querySelector('#submit');


// funções

submit.addEventListener('click', (e)=>{
    e.preventDefault();

    const input1Value = Number(input1.value);
    const input2Value = Number(input2.value);

    saida.innerHTML += `<h2> Contando de ${input1Value} até ${input2Value}`

    

    if(input1Value < input2Value){

        let contador = input1Value;

        while(contador <= input2Value){
            saida.innerHTML += `👉 ${contador}`
            contador++
        }
    }else if (input2Value < input1Value){

        let contador = input1Value;

        while(contador >= input2Value){
            saida.innerHTML += `👉 ${contador}`
            contador--
        }
    }

    saida.innerHTML += `👉 &#x1F3C1 <br>`;

})