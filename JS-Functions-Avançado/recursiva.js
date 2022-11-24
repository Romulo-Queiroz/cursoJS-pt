// modelo de function recursiva
function recursiva (max) {
    if (max >= 10) return;
    max ++;
    console.log(max);
    recursiva(max);
}

recursiva(0);

// Funções geradoras modelo: [  exemplo 01    ]

function* geradora1 () {
    // codigo aqui
    yield 'valor 1';
     // codigo aqui
     yield 'valor 2';
      // codigo aqui
    yield 'valor 3';
}

const g1 = geradora1();
console.log(g1.next().value);  //retorna valor 1, e o a chave done diz false. Pois tem outros valores a seguir
console.log(g1.next().value);   //segue a logica acima
console.log(g1.next().value);  //segue a logica acima, mas é o ultimo
console.log(g1.next());     //retorna valor indefinido e o done true.


// Funções geradoras modelo: [  exemplo 02    ]

function* geradora2() {
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}

const g2 =geradora2();
console.log(g2.next().value);


// Funções geradoras modelo: [  exemplo 03    ]

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}
 //continuando a contagem com outra function:
function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}
const g4 = geradora4();
for ( let valor of g4) {
    console.log(valor);
}
