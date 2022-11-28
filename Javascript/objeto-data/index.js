// Link da documentação:
// ->  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#static_methods
// Praticando durante a aula:
const data= new Date(2022, 10,03,02,58);
console.log(data.toString());

Date.now()
// Retorna o valor numérico correspondente à hora atual — o número de milissegundos decorridos desde 1º de janeiro de 1970 00:00:00 UTC, com os segundos bissextos ignorados.
const agora = Date.now();
console.log(agora);
// podemos usar diretamente
console.log(Date.now());

