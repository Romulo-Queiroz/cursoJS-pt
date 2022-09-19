function meuEscopo (){
    const form = document.querySelector('.form');
    // form.onsubmit = function(evento){
    //     evento.preventDefault();
    //     console.log('Foi enviado');
    // };
    let contador = 1;
    function recebeEventoForm(evento){
        evento.preventDefault();
        console.log(`Form não enviado.${contador}`)
        contador++;
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo()