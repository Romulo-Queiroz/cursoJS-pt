let render = document.getElementById("render");

let texto = "Meu texto aqui";

function renderPage() {
  let loaderDiv = document.getElementsByClassName("loader");
  loaderDiv[0].style.display = "none";
  render.innerHTML = texto;
  criaButton();
}

function criaButton() {
  let button = document.createElement("button");
  button.innerHTML = "Clique aqui";
  button.className = "btn";
  render.appendChild(button);

  button.addEventListener("click", () => {
    let loaderDiv = document.getElementsByClassName("loader");
    loaderDiv[0].style.display = "block";
    setTimeout(() => {
      loaderDiv[0].style.display = "none";
      texto = "Meu texto aqui depois do clique";
      render.innerHTML = texto;
    }, 4000);
  });
}

function loader() {
  setTimeout(renderPage, 4000);
}

loader();
