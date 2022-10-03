const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Evento previnido')
    setResultado('Obrigado por enviar');
});
// function para criar paragrafro\/
function criaP (){
    const p = document.createElement('p');
    return p;
}
// Na div "exibir" mostrar o resultado
function setResultado (msg) {
    const exibir = document.querySelector('#exibir');
    exibir.innerHTML = '';
    const p = criaP();
}


