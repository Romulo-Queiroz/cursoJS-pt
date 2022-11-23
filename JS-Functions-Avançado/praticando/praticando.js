const hoje = new Date();
const ano = hoje.getFullYear();
let mes = hoje.getMonth() +1;
let dia = hoje.getDate();

if (dia <10) dia ='0' + dia;
if (mes <10) mes = '0' + mes;

const dataFormatada = dia + '/' + mes + '/' + ano;

function mostrarData() {
    document.getElementById("data").innerHTML = `${dataFormatada} Mostrando a data formatada com js`;
};
  mostrarData();

function exibirText () {
    let texto = 'Estou interagindo com o html, texto em uma variável, dentro do js'
    document.getElementById('conteudo').innerHTML = `${texto}`;
};
exibirText();

function criaDiv(){
    // variáveis cria div/ armazena nome / armazena texto
    const nome = 'Rômulo-Developer';
    nome.id = 'nomeDaClasse';
    var conteudo = (`Olá, estou aqui. Criei este texto numa função :) keep going with you study love u ${nome}`)
    //adicionando no meu html o conteudo

    document.getElementById('div1').innerHTML = `${conteudo}`

}
criaDiv();