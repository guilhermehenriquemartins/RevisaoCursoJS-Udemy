class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('#formulario')
    this.events()
  }

  events() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e)
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const validacaoCampos = this.checaCampos()
    const validacaoSenhas = this.checaSenhas()
    if(validacaoCampos && validacaoSenhas) {
      alert('Formulário enviado!')
      this.formulario.submit()
    }
  }

  checaCampos() {
    let valida = true

    for(let errorText of this.formulario.querySelectorAll('.errorText')) {
      errorText.remove()
    }

    for(let campo of this.formulario.querySelectorAll('.campo')) {
      const label = campo.previousElementSibling.innerText
      if(!campo.value) {
        valida = false
        this.criaErro(campo, `Campo ${label} está vazio`)
      }

      if(campo.classList.contains('cpf')) {
        if(!this.validaCPF(campo)) valida = false
      }

      if(campo.classList.contains('usuario')) {
        if(!this.validaUsuario(campo)) valida = false
      }
    }
    return valida
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value)
    if(!cpf.valida()) {
      this.criaErro(campo, 'CPF Inválido')
      return false
    }
    return true
  }

  validaUsuario(campo) {
    let valida = true

    const usuario = campo.value
    if(usuario.length < 6 || usuario.length > 12) {
      this.criaErro(campo, 'Usuário só pode conter entre 6 e 12 caracteres')
      valida = false
    }
    if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, 'Usuário só pode conter letras e/ou números')
      valida = false
    }
    return valida
  }

  checaSenhas() {
    let valida = true
    const senha = document.querySelector('#senha')
    const repetirSenha = document.querySelector('#repetir-senha')

    if(senha.value.length < 6 || senha.value.length > 12) {
      this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres')
      this.criaErro(repetirSenha, 'Repetir Senha precisa ter entre 6 e 12 caracteres')
      valida = false
    }

    if(senha.value !== repetirSenha.value) {
      this.criaErro(repetirSenha, 'Os campos Senha e Repetir Senha precisam ser iguais')
      valida = false
    }
    return valida
  }

  criaErro(campo, msg) {
    const div = document.createElement('div')
    div.innerHTML = msg
    div.classList.add('errorText')
    campo.insertAdjacentElement('afterend', div)
  }
}

const formulario = new ValidaFormulario()