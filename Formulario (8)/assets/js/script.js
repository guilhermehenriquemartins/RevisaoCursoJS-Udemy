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
    }
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value)
    console.log(cpf.cpfLimpo)
  }

  criaErro(campo, msg) {
    const div = document.createElement('div')
    div.innerHTML = msg
    div.classList.add('errorText')
    campo.insertAdjacentElement('afterend', div)
  }
}

const formulario = new ValidaFormulario()