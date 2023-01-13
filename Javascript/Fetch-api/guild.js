// Capturando o input
const input = document.querySelector("input");

// Escutando o evento de submit do formulário
let button = document.querySelector("button");
button.addEventListener("click", (event) => {
  // Capturando o valor do input
  const name = input.value;

  // Fazendo a requisição fetch
  fetch(`https://api.tibiadata.com/v3/guild/${name}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      // Trate o erro
    });

  console.log(data);
});
