addEventListener("DOMContentLoaded", (e) => {
  startGame();
});

let currentLevelIndex = 0;
const gameContainer = document.getElementById("game-container");

function startGame() {
  if (!gameContainer) return;

  gameContainer.innerHTML = "";

  switch (currentLevelIndex) {
    case 0:
      createLevelOne();
      break;

    case 1:
      createLevelTwo();
      break;

    case 2:
      createLevelThree();
      break;

    case 3:
      createLevelFour();
      break;
  }
}

function createLevelOne() {
  if (!gameContainer) return;

  gameContainer.style = `background-color: ${createRandomColor()}`;

  const btn = document.createElement("button");
  btn.innerText = "Mudar background";
  btn.setAttribute("class", "btn");

  btn.addEventListener("click", () => {
    currentLevelIndex++;
    startGame();
  });

  gameContainer.appendChild(btn);
}

function createRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}

function createRandomPosition() {
  const randomPosition = Math.floor(Math.random() * 500);
  return randomPosition;
}

function createLevelTwo() {
  if (!gameContainer) return;

  gameContainer.style = `background-color: ${createRandomColor()}`;

  const btn = document.createElement("button");
  btn.innerText = "Alterar tamanho";
  btn.setAttribute("class", "btn");

  btn.addEventListener("click", () => {
    gameContainer.style = `width: ${createRandomPosition()}px; height: ${createRandomPosition()}px`;
    currentLevelIndex++;
    startGame();
  });

  gameContainer.appendChild(btn);
}

function createLevelThree() {
  if (!gameContainer) return;

  gameContainer.style = `background-color: purple`;

  const btn = document.createElement("button");
  const input = document.createElement("input");

  btn.innerText = "Criar paragrafo";
  btn.setAttribute("class", "btn");

  gameContainer.appendChild(btn);
  gameContainer.appendChild(input);

  btn.addEventListener("click", () => {
    const p = document.createElement("p");
    p.innerText = input.value;
    p.setAttribute("class", "p");

    gameContainer.appendChild(p);

    gameContainer.removeChild(btn);
    gameContainer.removeChild(input);

    setTimeout(() => {
      currentLevelIndex++;
      startGame();
    }, 2000);
  });
}

function createLevelFour() {
  if (!gameContainer) return;

  gameContainer.style = `background-color: purple`;

  const btn = document.createElement("button");
  btn.innerText = "Tente clicar aqui";

  btn.addEventListener("mouseover", () => {
    btn.style = `position: absolute; top: ${createRandomPosition()}px; left: ${createRandomPosition()}px;`;
  });

  btn.addEventListener("click", () => {
    currentLevelIndex++;
    startGame();
  });

  gameContainer.appendChild(btn);
}

// btn = document.getElementById("change");
// btn.addEventListener("click", trocaBackground);

// function trocaBackground() {
//   let section = document.querySelector("section");
//   section.style = "background-color: red";
//   btn.style = "display: none";
//   criaButton();
// }

// function criaButton() {
//   let section = document.querySelector("section");
//   btnNew = document.createElement("button");

//   btnNew.appendChild;
//   btnNew.id = "muda";
//   btnNew.innerHTML = "Muda de novo";
//   section.appendChild(btnNew);

//   btnNew.addEventListener("click", trocaBackgroundNew);
// }

// function trocaBackgroundNew() {
//   let section = document.querySelector("section");
//   section.style = "background-color: blue";
//   btnNew.style = "display: none";
//   criaButtonNew();
// }

// function criaButtonNew() {
//   let section = document.querySelector("section");

//   btnNew = document.createElement("button");
//   btnNew.appendChild;
//   btnNew.id = "sizers";
//   btnNew.innerHTML = "Alterar tamanho";

//   section.appendChild(btnNew);

//   btnNew.addEventListener("click", alteraTamanho);
// }

// function alteraTamanho() {
//   btnNew.style = "display: none";
//   let section = document.querySelector("section");
//   section.style = "width: 400px; height: 400px";
//   criaP();
// }

// function criaP() {
//   let section = document.querySelector("section");
//   p = document.createElement("p");
//   p.id = "texto";
//   p.innerHTML = "Agora eu sou um paragrafo";
//   section.appendChild(p);
//   crieParagrafo();
// }

// function crieParagrafo() {
//   let section = document.querySelector("section");

//   section.innerHTML = `
//     <input type="text" id="texto" placeholder="Digite um texto">
//     `;
//   let input = document.getElementById("texto");

//   input.addEventListener("keypress", function (e) {
//     if (e.key === "Enter") {
//       section.innerHTML = `
//       <div class="containerOne">
//       <p id="informativo"> ${input.value} </p>
//       <button id="chamaBtn" class="alterar">Continue</button>
//       </div>
//       `;
//     }

//     let btnNovo = document.getElementById("chamaBtn");
//     btnNovo.addEventListener("click", proximaFase);
//   });

//   informativo = document.createElement("p");
//   informativo.appendChild;
//   informativo.id = "informativo";
//   informativo.innerHTML = "Crie seu Paragrafo";
//   section.appendChild(informativo);
// }

// function proximaFase() {
//   let section = document.querySelector("section");
//   let btnNovo = document.getElementById("chamaBtn");
//   texto = document.getElementById("informativo");
//   texto.innerHTML = "Bem vindo ao game, Você conseguirá chegar ao final?";

//   btnNovo.style = "display: none";
//   section.style = "background-color: lightgreen";

//   let btnNovo2 = document.createElement("button");
//   btnNovo2.appendChild;
//   btnNovo2.id = "chamaBtn2";
//   btnNovo2.className = "jockersBtn";
//   btnNovo2.innerHTML = "Continue";
//   section.appendChild(btnNovo2);

//   btnNovo2.addEventListener("click", proximaFase2);
// }

// function proximaFase2() {
//   btnNovo2 = document.getElementById("chamaBtn2");
//   btnNovo2.style =
//     "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);";
//   btnNovo2.innerHTML = "Continue??";
//   btnNovo2.addEventListener("click", proximaFase3);
// }

// proximaFase3 = () => {
//   btnNovo2 = document.getElementById("chamaBtn2");
//   btnNovo2.style =
//     "position: absolute; top: 10%; left: 40%; transform: translate(-50%, -50%); width: 122px; height: 42px;";
//   btnNovo2.innerHTML = "Continue??? WTF IS THIS?";
//   btnNovo2.addEventListener("click", proximaFase4);
// };

// proximaFase4 = () => {
//   btnNovo2 = document.getElementById("chamaBtn2");
//   btnNovo2.style =
//     "position: absolute; top: 15%; left: 45%; transform: translate(-50%, -50%); width: 122px; height: 42px;";
//   btnNovo2.innerHTML = "I don't know what to do";
//   btnNovo2.addEventListener("click", proximaFase5);
// };
// proximaFase5 = () => {
//   btnNovo2 = document.getElementById("chamaBtn2");
//   btnNovo2.style =
//     "position: absolute; top: 45%; left: 15%; transform: translate(-50%, -50%); width: 122px; height: 42px;";
//   btnNovo2.innerHTML = "Tente mais um pouco :?";
//   btnNovo2.addEventListener("click", proximaFase6);
// };
// proximaFase6 = () => {
//   p = document.getElementById("informativo");
//   p.innerHTML = "Você consegue...";
//   btnNovo2 = document.getElementById("chamaBtn2");
//   btnNovo2.style =
//     "position: absolute; top: 45%; left: 35%; transform: translate(-50%, -50%); width: 132px; height: 48px;";
//   btnNovo2.innerHTML = "Uma dica: esqueça os botões...";
//   btnNovo2.addEventListener("click", proximaFase7);
// };
// proximaFase7 = () => {
//   section = document.querySelector("section");

//   btn1 = document.createElement("button");
//   btn1.appendChild;
//   btn1.id = "btn1";
//   btn1.className = "jockersBtn";
//   btn1.style =
//     "position: absolute; top: 20%; left: 65%; transform: translate(-50%, -50%); width: 132px; height: 48px;";
//   btn1.innerHTML = "Proxima fase";
//   section.appendChild(btn1);

//   btn2 = document.createElement("button");
//   btn2.appendChild;
//   btn2.id = "btn2";
//   btn2.className = "jockersBtn";
//   btn2.style =
//     "position: absolute; top: 25%; left: 35%; transform: translate(-50%, -50%); width: 132px; height: 48px;";
//   btn2.innerHTML = "FIM DE JOGO";
//   section.appendChild(btn2);

//   btn1.addEventListener("click", proximaFase8);
//   btn2.addEventListener("click", proximaFase9);
// };

// proximaFase8 = () => {
//   section = document.querySelector("section");
//   btn1 = document.getElementById("btn1");
//   btn1.style = "display: none";
//   btn2 = document.getElementById("btn2");
//   btn2.style = "display: none";
//   p = document.getElementById("informativo");
//   p.innerHTML = "Você não deveria ter clicado aqui";
//   p.style = "color: red; background-color: black;";
// };

// proximaFase9 = () => {
//   section = document.querySelector("section");
//   btn1 = document.getElementById("btn1");
//   btn1.style = "display: none";
//   btn2 = document.getElementById("btn2");
//   btn2.style = "display: none";
//   p = document.getElementById("informativo");
//   p.innerHTML = "Ultima dica use o teclado";
//   p.style = "color: red; background-color: black;";
// };

// proximaFase10 = () => {
//   document.addEventListener("keypress", function (e) {
//     if (e.key === "Enter") {
//       console.log("Enter");
//     }
//   });
// };
