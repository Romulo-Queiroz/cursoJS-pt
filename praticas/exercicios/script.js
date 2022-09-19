function meuEscopo (){
    const form = document.querySelector('.form');
    const resultado = document.queryCommandIndeterm('.resultado');        
    const pessoas = [];                         
    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const Altura = form.querySelector('.altura');
        
        pessoas.push({
            nome: nome.Value,
            Sobrenome: sobrenome.Value,
            peso: peso.Altura,
            Altura: Altura.Value
        });
        console.log(pessoas)
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo()