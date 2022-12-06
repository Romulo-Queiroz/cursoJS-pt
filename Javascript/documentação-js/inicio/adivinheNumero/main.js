let inputTexto = document.querySelector("#caixaDeTexto");
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let resultado = document.querySelector("#resultado");
let dica = document.querySelector("#dica");
let tentativa = document.querySelector("#tentativas");
let contaPalpite = 1;

let btn = document.querySelector("#enviaPalpite", confere);
btn.addEventListener("click", confere);

function confere() {
  let palpite = inputTexto.value;

  if (palpite == numeroAleatorio) {
    resultado.textContent = "Parabéns você acertou!";
    resultado.style.backgroundColor = "green";
    configFimDoJogo();
  } else if (palpite < numeroAleatorio) {
    dica.textContent = "Opa, o número é muito menor...";
    dica.style.backgroundColor = "red";
    contaPalpite += +1;
    tentativa.textContent += " Tentativas do usuario " + palpite;
  } if (palpite > numeroAleatorio) {
    dica.textContent = "Calma, agora o número está muito alto...!";
    dica.style.backgroundColor = "red";
    contaPalpite += +1;
    tentativa.textContent += " Tentativas do usuario " + palpite;
  } else if (contaPalpite === 10) {
    tentativa.textContent = '';
    dica.textContent = '';
    resultado.textContent = 'Renicie o jogo e tente novamente :('
    configFimDoJogo();
  }
  inputTexto.focus();
  console.log(numeroAleatorio);
  console.log(contaPalpite);
}

function configFimDoJogo() {
  inputTexto.disabled = true;
  btn.disabled = true;

  dica.textContent = "";
  inputTexto.textContent = "";

  botaoReinicio = document.createElement("button");
  botaoReinicio.textContent = "Iniciar novo jogo";
  document.body.appendChild(botaoReinicio);
  botaoReinicio.addEventListener("click", reniciarJogo);
}

function reniciarJogo() {
  contaPalpite = 1;
  botaoReinicio.parentNode.removeChild(botaoReinicio);

  dica.textContent = "";
  resultado.textContent = "";
  inputTexto.textContent = "";

  inputTexto.disabled = false;
  btn.disabled = false;
  inputTexto.value = "";
  inputTexto.focus();

  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}