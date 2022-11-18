const IIFE = {leia:'Immediately invoked function expression'};

(function(IIFE){
    const funcImediata = ('Função imediata, não tem acesso ao escopo global');
    function diz(oqueE) {
        return funcImediata;
    }

    function fala() {
        console.log(diz(funcImediata));
    }
    fala();
})(console.log(IIFE));

// Aula clara e objetiva. Obrigado professor  Luiz Otavio Miranda

