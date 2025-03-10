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
  }

  checaCampos() {
    let valid = true

    for(let textError of this.formulario.querySelectorAll('.error-text')) {
      textError.remove()
    }

    for(let campo of this.formulario.querySelectorAll('.validar')) {
      if(!campo.value) {
        const label = campo.previousElementSibling.innerText
        this.criaErro(campo, `Campo "${label}" não pode estar em branco`)
        valid = false

      if(campo.classList.contains('cpf')) {
        if(!this.validaCPF(campo)) valid = false
      }
      }
    }
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
}

const valida = new ValidaFormulario()