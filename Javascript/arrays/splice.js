const nomes = ['Rômulo', 'Maria', 'Ricardo', 'Otavio', 'Gabriel'];

// nomes.splice(índice, delete, addElemento1,addElemento2,addElemento3)

 const removidos = nomes.splice(4, 1); //no indice 4 remova 1 elemento
console.log(nomes, removidos);