let render = document.getElementById("render");

let texto = "Meu texto aqui";

function renderPage() {
  let loaderDiv = document.getElementsByClassName("loader");
  loaderDiv[0].style.display = "none";
  render.innerHTML = texto;
}

function loader() {
  setTimeout(renderPage, 4000);
}

loader();
