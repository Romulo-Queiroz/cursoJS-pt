function criaPessoa (nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        //Getter
        get nomeCompleto(){ //utilizo como se fosse um atributo e nao uma function  
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(setCompelto){
            console.log(setCompelto)
        },
        set nomeCompletoII(splitValor) {
            splitValor = splitValor.split(' '); //Separando por espaços msm
            this.nome = splitValor.shift();
            console.log(splitValor);
        },

        fala: function(assunto = 'Falando sobre nada'){
            return `${nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        //Getter
        get imc() { //getter somemte para receber o valor
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
//Getter
const pessoaUm = criaPessoa('Rômulo', 'Developer', 1.8, 80);
console.log(pessoaUm.imc);
//Getter
const outraPessoa = criaPessoa('David', 'Miranda', 1.6, 42);
console.log(outraPessoa.imc);

// Setter here;
pessoaUm.nomeCompleto = 'Rômulo Queiroz no Setter' ;
console.log(pessoaUm.nomeCompleto);

// Split -Separando o nome completo por espaços :
outraPessoa.nomeCompletoII = 'Queiroz Developer no Splif' ;
console.log(outraPessoa.nomeCompletoII);

// função falar
