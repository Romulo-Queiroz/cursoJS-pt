let conteudoDaAula = {
    nota: 'Entender como funciona o return',
    about: 'return em diferentes ocasiões, diferentes funções ou até mesmo functions dentro de functions',
    me: 'Assisti a aula somente por desencargo rs, o professor é bom então não foi tão difícil'
};

// Brincando com o conteúdo

function entendaOReturn(whoAreYou) {
    const name = 'Rômulo Queiroz';
    const age = 25;
    const me = {name,age};
    return me;
};

let Explicando = {return:'A função retorna como objeto as info name e age'};

// Próxima aula bem explicativa
const aula52 = {aulaRapida:'Escopo Lexico'};

const nome ='Rômulo';

function falaNome() {
    console.log(nome);
}

const nota = {whatWillDo:'falaNome procurará em seus "pais" a variável nome,'+
 'neste caso na linha 21, mesmo estando fora do escopo da function'};
