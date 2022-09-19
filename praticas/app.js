const numero = prompt('Digite seu número');
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = `<p>Seu número -2 é : ${numero- 2}</p>`;