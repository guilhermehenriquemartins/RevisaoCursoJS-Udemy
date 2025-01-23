class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('#formulario')
    this.eventos()
  }

  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e)
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const validacaoCampos = this.checaCampos()
    const validacaoSenhas = this.checaSenhas()

    if(validacaoCampos && validacaoSenhas) {
      alert('Formulário enviado')
      this.formulario.submit()
    }
  }

  checaCampos() {
    let valid = true

    for(let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove()
    }

    for(let campo of this.formulario.querySelectorAll('.validar')) {
      if(!campo.value) {
        const label = campo.previousElementSibling.innerText
        this.criaErro(campo, `Campo "${label}" não pode estar vazio`)
        valid = false
      }
      if(campo.classList.contains('cpf')) {
        if(!this.validaCPF(campo)) valid = false
      }
      if(campo.classList.contains('usuario')) {
        if(!this.validaUsuario(campo)) valid = false
      }
    }
    return valid
  }

  validaUsuario(campo) {
    let valid = true
    const usuario = campo.value
    if(usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, 'Campo Usuário deve conter entre 3 e 12 caracteres')
      valid = false
    }
    if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, 'Usuário só pode conter letras e/ou números')
      valid = false
    }
    return valid
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value)
    if(!cpf.valida()) {
      this.criaErro(campo, 'CPF inválido')
      return false
    }
    return true
  }

  criaErro(campo, msg) {
    const div = document.createElement('div')
    div.innerHTML = msg
    div.classList.add('error-text')
    campo.insertAdjacentElement('afterend', div)
  }

  checaSenhas() {
    let valid = true
    const senha = this.formulario.querySelector('#senha')
    const repetirSenha = this.formulario.querySelector('#repetir-senha')

    if(senha.value !== repetirSenha.value) {
      this.criaErro(senha, 'Os campos Senha e Repetir Senha precisam ser iguais')
      this.criaErro(repetirSenha, 'Os campos Senha e Repetir Senha precisam ser iguais')
      valid = false
    }

    if(senha.value.length < 6 || senha.value.length > 12) {
      this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres')
      valid = false
    }
    return valid
  }
}

const valida = new ValidaFormulario()