// Criando variável e guardando o valor inserido no input pelo usuário :)
const inputTarefa = document.querySelector('.input-nova-tarefa');
// Criando a variável responsável pelo nosso botão, podemos usar para adcionar eventos... como ao clicar acontecer algo.
const btnTarefa = document.querySelector('.btn-add-tarefa');
// A variável tarefas foi selecionada pela classe assim como as outras, a função desempenhada primordial é mostrar na tela os valores.
const tarefas = document.querySelector('.tarefas');      

// Criando uma função para semnpre que quisermos uma <li> dentro do nosso HTML, basta chamar criaLi()
function criaLi(){
    const li = document.createElement('li');
    return li;
}
// Nesta function estamos pegando o evento do click na tecla enter.(testamos e vimos que o codigo da tecla é 13.). sempre que for pressionado a telca enter iremos criar a tarefa(caso tenha algum valor no input)
inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});
// Limpando input e colocando o cursor focado no input(Iremos chamala em criaTarefa() )
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
};
// Settings about Btn remove task
function criaBotaoApagar(li) {
    li.innerText += ' '; //Criando um espaço no <li> 
    const botaoApagar = document.createElement('button'); //criando em nossas tarefas um buton
    botaoApagar.innerText = 'Apagar'; // texto do nosso button 
    botaoApagar.setAttribute('class', 'apagar'); //setAttribute para adicionar uma class no btn 
    botaoApagar.setAttribute('title', 'Clique para remover a tarefa');
    li.appendChild(botaoApagar); //adicionando em nosso <li> o botão que criamos
}
// Objetivo dessa function é apenas criar a tarefa(dentro de nossa <li> de classe tarefas)
function criaTarefa(textoInput) {
    const li =criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}
// função para criar o evento clicar do mouse no nosso BTN, assim que for clicado ele pega o .value do nosso input
btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;   //condição avaliando se há dados ou não no input. If don't have do nothing.
    criaTarefa(inputTarefa.value);
});
//evento criado para saber exatamente onde esta sendo clicado no meu document
document.addEventListener('click', function(e) {
    const elementoClicado = e.target;
    //consição criada passando o parametro( se clicar em apagar faça isso)
    if (elementoClicado.classList.contains('apagar')) {
        elementoClicado.parentElement.remove();   //se o button'apagar' for clicado então remova o <li> (mae ou pai)
        salvarTarefas();
    }
});
//Salvando tarefas 
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li'); //salvando TUDO
    const listDeTarefas = []; //criando um array

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //removendo o texto (Apagar) --> .trim() para remover espaços da borda
        listDeTarefas.push(tarefaTexto); //passando as strings para minha array 
    }
    const tarefaJSON = JSON.stringify(listDeTarefas); // criando um JSON para manipular os dados 
    localStorage.setItem('tarefas', tarefaJSON); // Utilizando o localStorage do naovegador para salvar as infos dos inputs
}

//lendo tarefas e carregando no document (salvas)

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas'); ;//pegando os dados do localstorage
    const listDeTarefas = JSON.parse(tarefas);  //convertendo de volta para um objeto array javascript

    for (let tarefa of listDeTarefas) {    
        criaTarefa(tarefa); //utilizando os dados capturados pela nossa variável explicado na linha 74 e 75
    }
}
adicionaTarefasSalvas();