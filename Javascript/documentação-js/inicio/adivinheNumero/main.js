let inputTexto = document.querySelector("#caixaDeTexto");
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let resultado = document.querySelector("#resultado");
let dica = document.querySelector('#dica');
let contaPalpite = 1;

let btn = document.querySelector("#enviaPalpite", confere);
btn.addEventListener("click", confere);

function confere() {
  console.log(numeroAleatorio);
  let palpite = inputTexto.value;

  if (palpite == numeroAleatorio) {
    resultado.textContent = 'Parabéns você acertou!';
    resultado.style.backgroundColor = 'green';
    configFimDoJogo();
  } else if (palpite < numeroAleatorio) {
    dica.textContent = 'Opa, o número é muito menor...';
    dica.style.backgroundColor = 'red';
    contaPalpite +=1; 
  } else if (palpite > numeroAleatorio) {
    dica.textContent = 'Calma, agora o número está muito alto...!'
    dica.style.backgroundColor= 'red';
    contaPalpite +=1; 
  }else if (contaPalpite === 10){
    configFimDoJogo();
  }
  inputTexto.focus();
  
}

function configFimDoJogo(){
  inputTexto.desabled = true;
  btn.desabled = true;
  botaoreniciar = document.createElement('button');
  botaoreniciar = textContent = 'iniciar novo jogo';
  ;
}

function reniciarJogo() {
  contaPalpite = 1;
  
  botaoreniciar.parenNode.removeChild(botaoreniciar);

  inputTexto.desabled = false;
  btn.desabled = false;
  inputTexto.value = '';
  inputTexto.focus();

  numeroAleatorio = Math.floor(Math.random() *100) +1
}