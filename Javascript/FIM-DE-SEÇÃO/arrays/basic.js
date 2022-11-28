// revisando o básico de arrays

const nomes = ['Rômulo', 'Eduardo', 'Joana', 'Gabriel'];
const nomesRemovidos = nomes.pop(); //armazenando os noems removidos
nomes.pop(); //removendo o ultimo elemento do array
nomes.shift(); //trabalha no contrário do pop, remove o primeiro indice

//adicionando
nomes.push('Nome adicionado'); //adicionando nome no ultimo indice do array
nomes.unshift('Nome adicionado no começo') // adicionando nome no começo do array

nomes.splice(1,3);    //Fatiando meu array 
const proximaAula = {assunto:'Vamos falar do splice'};