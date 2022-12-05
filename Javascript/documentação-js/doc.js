const tagP = document.querySelector("p");

tagP.addEventListener("click", atualizaNome);

function atualizaNome() {
  var nome = prompt("insira um novo nome");
  tagP.textContent = "Jogador 1: " + nome;
}

function criaParagrafo() {
  let newParagrafo = document.createElement("p");
  newParagrafo.textContent = "Você clicou no botão!";
  document.body.appendChild(newParagrafo);
}

const botao = document.querySelector("button", criaParagrafo);

botao.addEventListener("click", criaParagrafo);

for (var i= 0; i < botoes.length ; i++) {
    botao.addEventListener('click', criaParagrafo);
}
