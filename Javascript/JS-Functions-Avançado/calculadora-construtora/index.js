function Calculadora (){
    this.display = document.querySelector('.display'); // pegando pela classe o display 
    this.inicia = () => {
        this.capturaCliques();  
        this.capturaEnter();
    };


    this.capturaEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
                 this.realizaConta();
            }
        });
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const ondeClica = event.target;
            if (ondeClica.classList.contains('btn-num')) this.addNumNoDisplay(ondeClica);
            if (ondeClica.classList.contains('btn-clear')) this.clear();
            if (ondeClica.classList.contains('btn-del')) this.del();
            if (ondeClica.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value);

            if (!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = conta ;
        }catch(e){
            alert('Conta inválida');
            return;
        }
    }

    this.addNumNoDisplay = ondeClica => {//add o valor do botao no display
        this.display.value += ondeClica.innerText; 
        this.display.focus();   //necessário para o enter ir diretamente no display e não no ultimo número clicado
    };
    this.clear = () => this.display.value = '';   // valor do display igual a nada.
    this.del = () => this.display.value = this.display.value.slice(0, -1); //adicionando função deletar caractere do display
}

const calculadora = new Calculadora();
calculadora.inicia();

console.log('to aq');