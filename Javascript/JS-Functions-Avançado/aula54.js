const proppostaDaAula = {
problema:'Teremos três funções, e precisamos que sejam executadas de forma ordinári',
Conceito:'Criaremos uma função random para criar o problema, já que não vamos utilizar um arquivo json ou algo para similar',
Conclusão:'Faremos junto ao professor a resolução do problema'}


// function para ter um time randomico
function rand(min= 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1 (callback) {
    setTimeout(function() {
        console.log('Tenho que ser executado primeiro :(');
        if (callback) callback();
    }, rand());
}
function f2 (callback) {
    setTimeout(function() {
        console.log('Tenho que ser executado depois do primeiro :(');
        if (callback) callback();
    }, rand());
}
function f3 (callback) {
    setTimeout(function() {
        console.log('Tenho que ser executado em penultimo :(');
        if (callback) callback();
    }, rand());
}

const nota = {Leia:'Abaixo temos uma corrente conhecida como Calback Hell',
previsto:'è previsto que f2 nunca execute antes de f1, e que f3 nunca execute antes de f2 essa é a lógica'};

// f1(function(){
//     f2(function(){
//         f3(function(){
//             console.log('Ola mundo por ultimo :)');
//         });
//     });
// });

const canBeBettter = {nota: 'Podemos deixar o código acima melhor.'};

f1(f1Callback);
function f1Callback(){
    f2(f2Callback);
}
function f2Callback(){
    f3(f3Callback);
}
function f3Callback(){
    console.log('ola mundo por ultimo(Código mais Clean)')
}
