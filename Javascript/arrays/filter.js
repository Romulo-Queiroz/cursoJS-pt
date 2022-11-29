//DOCUMENTAÇÃO FILTER()
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

//retorne os númeors maiores que 10 :
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const maioresQ10 = numeros.filter(numeros => numeros > 10);
console.log(maioresQ10);

// -------------------------------->>

//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Letícia', idade: 19 },
    {nome: 'Rosana', idade: 32 },
    {nome: 'Wallace', idade: 47 },
];

//pessoas com mais de 5 letras no nome--

const cincoLetrasNome = pessoas.filter(objeto => objeto.nome.length >5);
console.log(cincoLetrasNome);

//pessoas com mais de 50 anos

const maisDe50Anos = pessoas.filter(objeto=> objeto.idade >50);
console.log(maisDe50Anos);

//Pessoas que o nome termina com a letra A

const nomeTerminaComA = pessoas.filter( obj=> obj.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaComA);