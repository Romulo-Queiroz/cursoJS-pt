const form = document.querySelector('#form');
//Selecionando o formulário
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    // Pegando os inputs do HTML /\
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    // Pegando apenas os valores dos inputs /\
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
    }

    const imc = getImc(peso,altura);
    const nivelImc = getNivelImc(imc);

    
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc <= 18.5) return nivel = [0];
}

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);

}
// function para criar paragrafro\/
function criaP (){
    const p = document.createElement('p');
    return p;
}
// Na div "exibir" mostrar o resultado
function setResultado (msg, isValid) {
    const exibir = document.querySelector('#exibir');
    exibir.innerHTML = '';

    const p = criaP();

    if (isValid)  {
        p.classList.add('paragrafo-resultado');
    }else {
        p.classList.add('bad');
    }
    exibir.appendChild(p);
    p.innerHTML = msg;
}


