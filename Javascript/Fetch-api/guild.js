// Capturando o input
const input = document.querySelector("input");

// Escutando o evento de submit do formulário
let button = document.querySelector("button");
button.addEventListener("click", (event) => {
  event.preventDefault();
  // Capturando o valor do input
  let name = input.value;
  console.log(name);

  // Fazendo a requisição fetch
  fetch(`https://api.tibiadata.com/v3/guild/${name}`)
    .then((response) => response.json())
    .then((data) => {
      let div = document.getElementById("guilds");
      div.innerHTML = `
    
      <p class="details" > Guild name : ${data.guilds.guild.name}</p>
      <p class="details" > World : ${data.guilds.guild.world}</p>
      <img src="${data.guilds.guild.logo_url}"></img>
      `;
    })
    .catch((error) => {
      // Trate o erro
    });
});
