function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.cliqueBotao()
    },

    cliqueBotao() {
      document.addEventListener('click', e => {
        const el = e.target

        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText)
        }
      })
    },

    btnParaDisplay(valor) {
      this.display.value += valor
    },

    clearDisplay() {
      'apagar display'
    },

    apagaUm() {
      'apagar um número'
    },

    realizaConta() {
      'realizar conta'
    }
  }
}

const calculadora = criaCalculadora()
calculadora.inicia()