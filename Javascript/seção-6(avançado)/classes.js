class Pessoa {
    constructor(nome,sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.nomeCompleto = () => this.nome + ' ' + this.sobrenome+' ' + idade;
    }
}

const p1 = new Pessoa('Rômulo', 'Queiroz', 25);

console.log(p1.nomeCompleto());