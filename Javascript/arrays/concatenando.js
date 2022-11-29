const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concacArray = array1.concat(array2, [7, 8, 9],'Inluindo string');      //método para concatenar 
console.log(concacArray);

//Podemos usar o rest operator 

const novoArray = [...array1, 'Incluindo string com rest operator', ...array2, ...[7, 8, 9]];
console.log(novoArray);