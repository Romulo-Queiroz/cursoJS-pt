//Revisando Objetos--------------------------------

const pessoa = {
    nome: 'Rômulo',
    sobenome: 'Queiroz'
};

// criando um novo array   new array(); --------------------------

let pessoa1 = new Object();
pessoa1.nome = 'Rômulo';
pessoa1.sobenome = 'Queiroz';
pessoa1.idade = 25;
pessoa1.skills = 'Javascript'

//Function dentro do objeto || acessando as chaves -----------------------

pessoa1.falarNome = function(){
    console.log(`${this.nome} seu sobrenome é : ${this.sobenome}, certo?` )
};
pessoa1.falarNome();

//Function dentro do objeto || operando com as chaves -----------------------

pessoa1.getDataDeNascimento = function() {
    const dataAtual = new Date(); 
    return dataAtual.getFullYear() - this.idade;
    
};
console.log(`${pessoa1.nome}, você nasceu em:`, pessoa1.getDataDeNascimento());

