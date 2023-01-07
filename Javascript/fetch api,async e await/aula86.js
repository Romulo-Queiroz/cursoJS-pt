btn = document.getElementById("change");
btn.addEventListener("click", trocaBackground);

function trocaBackground() {
  let section = document.querySelector("section");
  section.style = "background-color: red";
  btn.style = "display: none";
  criaButton();
}

function criaButton() {
  let section = document.querySelector("section");
  btnNew = document.createElement("button");

  btnNew.appendChild;
  btnNew.id = "muda";
  btnNew.innerHTML = "Muda de novo";
  section.appendChild(btnNew);

  btnNew.addEventListener("click", trocaBackgroundNew);
}

function trocaBackgroundNew() {
  let section = document.querySelector("section");
  section.style = "background-color: blue";
  btnNew.style = "display: none";
  criaButtonNew();
}

function criaButtonNew() {
  let section = document.querySelector("section");

  btnNew = document.createElement("button");
  btnNew.appendChild;
  btnNew.id = "sizers";
  btnNew.innerHTML = "Alterar tamanho";

  section.appendChild(btnNew);

  btnNew.addEventListener("click", alteraTamanho);
}

function alteraTamanho() {
  btnNew.style = "display: none";
  let section = document.querySelector("section");
  section.style = "width: 400px; height: 400px";
  criaP();
}

function criaP() {
  let section = document.querySelector("section");
  p = document.createElement("p");
  p.id = "texto";
  p.innerHTML = "Agora eu sou um paragrafo";
  section.appendChild(p);
  crieParagrafo();
}

function crieParagrafo() {
  let section = document.querySelector("section");

  section.innerHTML = `
    <input type="text" id="texto" placeholder="Digite um texto">
    `;
  let input = document.getElementById("texto");
  console.log(input);
  document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      section.innerHTML = ` 
      <div class="containerOne">
      <p id="informativo"> ${input.value} </p>
      <button id="chamaBtn" class="alterar">Continue</button>
      </div>
      `;
    }
  });

  informativo = document.createElement("p");
  informativo.appendChild;
  informativo.id = "informativo";
  informativo.innerHTML = "Crie seu Paragrafo";
  section.appendChild(informativo);
}
