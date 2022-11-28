function mostraHora () {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaDoInterval(){
    console.log(mostraHora());
}

const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);

setTimeout (function(){
    clearInterval(timer);
}, 10000);

setTimeout(function(){
    console.log('FINALIZOU');
}, 5000);

// Praticando para entregar o projeto Timer
//* Desafio prático Exercício 66 Udemy //*