//Principal função do reduce() reduzir um array a um unico elemento -------
//Some todos os números (reduce):
                
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const totalValores = numeros.reduce((acumulador, valor) => acumulador+= valor);
console.log(totalValores);

//Retorne um array somente com os pares: --------------------

const soOsPares = numeros.reduce(function(acumulador, valores) {    
    if(valores % 2 === 0) acumulador.push(valores);             
    return acumulador;                                          //eu faria com filter();
},[]);
console.log('Somente os pares', soOsPares);


//Os outros exemplos da aula 67.js faz mais sentido fazer com filter();