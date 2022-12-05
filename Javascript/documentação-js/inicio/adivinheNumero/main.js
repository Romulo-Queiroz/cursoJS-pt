let numAleatorio = Math.floor(Math.floor() * 100) + 1;
    var palpites = document.querySelector(".palpites");
    var ultimoResultado = document.querySelector(".ultimoResultado");
    var baixoOuAlto = document.querySelector(".baixoOuAlto");
    var envioPalpite = document.querySelector(".envioPalpite");
    var campoPalpite = document.queryCommandIndeterm(".campoPalpite");
    var contagemDePalpite = 1;
    var botaoRenicio;

    function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value);
    if (contagemDePalpite === 1) {
        palpites.textContent = "Palpites anteriores: ";
    }
    palpites.textContent += palpiteUsuario + ' ';

    if (palpiteUsuario === numAleatorio) {
        ultimoResultado.textContent = "Parabéns você acertou!";
        ultimoResultado.style.backgroundColor = "green";
        baixoOuAlto.textContent = ' ';
        configFimDeJogo();
    } else {
        ultimoResultado.textContent = "Errado!";
        ultimoResultado.style.backgroundColor = "red";
        if (palpiteUsuario < numAleatorio) {
        baixoOuAlto.textContent = "Seu paplpite foi muito baixo!";
        } else if (palpiteUsuario > numAleatorio) {
        baixoOuAlto.textContent = "Seu palpite foi muito alto!";
        }
    }
    conferirPalpite++;
    campoPalpite.value = '';
    campoPalpite.focus();
    }

    envioPalpite.addEventListener("click", conferirPalpite);

    function configFimDeJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoRenicio = document.createElement("button");
    botaoRenicio.textContent = "iniciar novamente";
    document.body.appendChild(botaoRenicio);
    botaoRenicio.addEventListener("click", reiniciarJogo);
    }

    function reiniciarJogo() {
    contagemDePalpite = 1;

    var reiniciarPs = document.querySelector(".resultadoPs p");
    for (var i = 0; i < reiniciarPs.length; i++) {
        reiniciarPs[i].textContent = '';
    }

    botaoRenicio.parentNode.removeChild(botaoRenicio);

    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = "";
    campoPalpite.focus();

    ultimoResultado.style.backgroundColor = 'white';

    numAleatorio = Math.floor(Math.random() *100) + 1;
    }
