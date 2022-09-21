const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Evento previnido')
    setResultado('Obrigado por enviar');
});

function criaP (){
    const p = document.createElement('p');
    return p;
}

function setResultado (msg) {
    const exibir = document.querySelector('#exibir');
    exibir.innerHTML = '';
    const p = criaP();
}


// nome-do-elemento.classList.add('nome-da-classe);
// dessa forma o js procura a classe ou cria para o seu documento HTML
// No código acima criamos uma tag <p> da classe ('paragrafo-resultado');
