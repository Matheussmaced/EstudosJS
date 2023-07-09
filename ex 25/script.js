const submitBtn = document.querySelector('form');   // selecionando o formulario
const input = document.querySelector('input');
const saida = document.querySelector('#saida');

// cancelar o submit

submitBtn.addEventListener('submit', (e)=>{
    e.preventDefault();

    const valueInput = input.value;

    saida.innerHTML += `<h2> Contando de 0 até ${valueInput}`

    let contador = 0;

    while(contador <= valueInput){
        saida.innerHTML += `👉 ${contador}`
        contador++
    }

    saida.innerHTML += `👉 &#x1F3C1 <br>`;
    

});




    // adicionando h3 com javascript
// const div = document.querySelector('div');
/*   function adicionandoH3(){
        const contandoAte = document.createElement('h3');
        let texto = document.createTextNode(`Contando até ${valueInput}`)
        contandoAte.appendChild(texto);
        div.appendChild(contandoAte);

        adicionandoH3();
    } */ 

