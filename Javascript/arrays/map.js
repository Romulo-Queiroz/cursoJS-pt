//dobre os números:

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numEmDobro = numeros.map(valor => valor* 2); 
console.log('O dobro dos valores deste array: ',numEmDobro);

// Para cada elemento: 
// ---Retorne apenas uma string com o nome da pessoa
//--Remova apenas a chave nome do objeto
//-adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Letícia', idade: 19 },
    {nome: 'Rosana', idade: 32 },
    {nome: 'Wallace', idade: 47 },
];

// ---Retornando apenas uma string com o nome da pessoa:

const nomesPessoas = pessoas.map(valor => valor.nome);
console.log('Os nomes são:' ,nomesPessoas);

//Remova apenas a chave nome do objeto:

const idadePessoas = pessoas.map(valor => valor.idade);
console.log('As idades são:' ,idadePessoas);

//--Remova apenas a chave nome do objeto:

const removChaveObjeto = pessoas.map(objeto => ({idade: objeto.idade})); 
console.log(removChaveObjeto);

//-adicione uma chave id em cada objeto
//--Utilizando indice para criar os Id's
//Neste caso específico recriamos um novo objeto para não alterar o objeto original (pessoas)
const comIds = pessoas.map(function(obj, indice){
    const newObjeto = {...obj }; ;  //novo objeto
    newObjeto.id = indice;
    return newObjeto;
});
console.log(comIds);
