function meuEscopo (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');        
    const pessoas = [];                         
    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value,
            Sobrenome: sobrenome.value,
            peso: peso.value,
            Altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
        // resultado.innerHTML += ``;
        
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();