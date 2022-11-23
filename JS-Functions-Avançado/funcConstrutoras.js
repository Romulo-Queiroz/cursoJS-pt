//  Função construtora -> objetos
// Função fabrica -> objetos
// Construtoras -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    const ID = 33;

    const metodoInterno= () =>{
        console.log(`${ID}, este é um id, não está disponível fora do escopo como por exemplo => p1.ID`)
    }
    this.nome = nome;
    this.sobrenome = sobrenome ;

    this.metodo = function() {
        console.log(`${nome}, este é seu nome || linha 15 é um método`)
    }
}


const p1 = new Pessoa ('Luiz', 'Otavio');
const p2 = new Pessoa ('Rômulo', 'Queiroz');


console.log(p1.nome);
console.log(p2.sobrenome);

p1.metodo();











// Eu um dia terei uma vaga como programador Frontend   Date()