function Pessoa(nome,sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => this.nome +' '+ this.sobrenome;
};

let pessoa1 = new Pessoa('Rômulo', 'Queiroz');
console.log(pessoa1.nomeCompleto())

