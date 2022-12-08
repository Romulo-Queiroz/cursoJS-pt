class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }
  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhaValida = this.senhaSaoValidas();

     if (camposValidos && senhaValida) {
            alert('Login confirmado');
            this.formulario.submit();
        }
  }

  senhaSaoValidas(){
    let valid = true;

    const senha = document.querySelector('.senha');
    const repetirSenha = document.querySelector('.repetir-senha');

    if(senha.value !== repetirSenha.value){
        valid = false;
        this.criaErro(senha, 'Campo senha e repetir senha precisam ser iguais;')
        this.criaErro(repetirSenha, 'Campo senha e repetir senha precisam ser iguais;')
    }

    if(senha.value.length < 6 || senha.value.length > 12) {
        valid = false;
        this.criaErro(senha, 'Senha precisa estar entre 6 ou 12 caracteres');
    }
  }

  camposSaoValidos() {
    let valid = true;
    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove();
    }
    for (let campo of this.formulario.querySelectorAll(".validar")) {
      const label = campo.previousElementSibling.innerHTML;
      if (!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      if (campo.classList.contains("cpf")) {
        if (!this.validaCPF(campo)) valid = false;
      }

      if (campo.classList.contains("usuario")) {
        if (!this.validaUsuario(campo)) valid = false;
      }

    }
    return valid;
  }
  validaUsuario(campo){
    const usuario = campo.value;
    let valid = true;
    if(usuario.length <3 || usuario.length >12) {
        this.criaErro(campo, "Usuário precisa ter entre 3 e 12 caracteres.");
        valid = false;
    }

    if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
        this.criaErro(campo, "Usuário precisa conter apenas letras e/ou números");
        valid = false;
    }

    return valid;
  }
  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.criaErro(campo, "CPF inválido");
      return false;
    }

    return true;
  }

  criaErro(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}

const valida = new ValidaFormulario();
