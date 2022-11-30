//Retorne o dobro de todos os pares ----------------------
// - Filtrar pares      filter();
// - Dobrar os valores     map();
// reduzir (somar tudo )    reduce();

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2 ).reduce((total, valores) => total +=valores);

console.log(numerosPares);


// PARES : [ 50, 80, 2, 8, 22 ]
// DOBRO DOS VALORES:  [ 100, 160, 4, 16, 44 ]
//TOTAL:  324  