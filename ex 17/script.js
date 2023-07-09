const btn = document.querySelector('button');
const p = document.querySelector('#paragrafo');

btn.addEventListener('click', () =>{
    const idadeUsuario = prompt('Você nasceu em qual ano?');
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    const resultado = anoAtual - idadeUsuario;
    console.log(anoAtual)
   return p.innerHTML = `Quem nasceu em ${idadeUsuario} vai completar ${resultado} em ${anoAtual}.`
});
