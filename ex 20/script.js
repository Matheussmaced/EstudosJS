const paragrafo = document.querySelector('#paragrafo');
const btn = document.querySelector('button');

let estacaoSaida;

btn.addEventListener('click', ()=>{

    const mes = prompt('Digite um mês')
    switch(mes.toLocaleUpperCase()){        // iniciando o switch e dizendo que oque digitar irá ter maiusculo

        case 'DEZEMBRO': case 'JANEIRO': case 'FEVEREIRO':      // caso contenha um desses três
        estacaoSaida = 'VERÃO';                                  // me retornará na minha variavel essa string
        break                                                   // para parar a função

        case 'MARÇO': case 'ABRIL': case 'MAIO':
        estacao = 'OUTONO';
        break

        case 'JUNHO': case 'JULHO': case 'AGOSTO':
        estacao = 'INVERNO';
        break

        case 'SETEMBRO': case 'OUTUBRO': case 'NOVEMBRO':
        estacao = 'PRIMAVERA';
        break

        default:
            estacao = 'MÊS NÃO IDENTIFICADO';
    }

    paragrafo.innerHTML = `No mês de ${mes}, estamos na estação <mark>${estacao}</mark>.`;

})

