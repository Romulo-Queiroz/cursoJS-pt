//defineProperty 

function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostrar chave ?
        value: estoque, //acessando valor
        writable: false, //posso alterar ?
        configurable: true // é configurável ?
    });
}

const p1 = new Produto('Camiseta', 20.00, 3);
p1.estoque = 50000; // whitable precisa estar habilitado para alterar value
console.log(p1);

// defineProperties 

function Produtos (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperties(this, {
        nome:{
        enumerable: true, //mostrar chave ?
        value: nome, //acessando valor
        writable: false, //posso alterar ?
        configurable: true, // é configurável ?},

        preco:{
        enumerable: true, //mostrar chave ?
        value: preco, //acessando valor
        writable: false, //posso alterar ?
        configurable: true // é configurável ?
        },  
    }
    });
}


const p2 = new Produtos('Camiseta', 20.00, 3);
console.log(p2);
