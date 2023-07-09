const parag = document.querySelector('#paragrafo');

function clicou(){
    return parag.innerHTML = `O que eu recebi do sistema foi <mark>${new Date()}</mark>`;

}
