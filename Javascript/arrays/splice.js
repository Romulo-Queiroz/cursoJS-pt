const nomes = ['Rômulo', 'Maria', 'Ricardo', 'Otavio', 'Gabriel'];

// nomes.splice(índice, delete, addElemento1,addElemento2,addElemento3)

 const removidos = nomes.splice(3, 1); //no indice 4 remova 1 elemento
const add = nomes.splice(3, 2, 'Nome novo'); //adicionando um nome novo dentro do array
console.log(nomes, removidos, add);