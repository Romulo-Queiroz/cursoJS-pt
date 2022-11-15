const propostaDoModulo = {
    firstPoint : 'Conhecer Formas De Declarar Functions',
    secondPoint : 'Entender Diferenças Entre Eles',
    thirdPoint : 'Compreender Arguments Do Function',
    fourth: 'Rest operator *Consulte a function calculo*',
    fifith: 'Functions express'

};

//Dentre as formas de criar functions
//A forma convencional possui uma variável especial chamada arguments **que sustenta todos os argumentos inseridos

function funcaoComFunction (){
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcaoComFunction(1,2,3,4,5,6,55,77);  //No console receberemos o total dos números inseridos

const funcaoComRest ={nota:'Função abaixo o exemplo da aula'};

function calculo(operator, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operator === '+') acumulador += numero;
        if (operator === '-') acumulador -= numero;
        if (operator === '/') acumulador /= numero;
        if (operator === '*') acumulador *= numero;

    }
    console.log(acumulador);
}
calculo('+',1,2 ,3 ,4 ,5, 6,9);

const expressFunction = {nota:'Função calculo na versão express function'};

const conta = function(operator, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operator === '+') acumulador += numero;
        if (operator === '-') acumulador -= numero;
        if (operator === '/') acumulador /= numero;
        if (operator === '*') acumulador *= numero;

    }
    console.log(acumulador);
}
calculo('+',1,2 ,3 ,4 ,5, 6);

const arrayFunction = {nota:'Função calculo na versão ArrayFunction'};

const calculando = (operator, acumulador, ...numeros) => {
    console.log(numeros);
};
calculando('+',1,20 ,30 ,40 ,50);