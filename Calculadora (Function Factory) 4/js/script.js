function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.cliqueBotao()
      this.pressionaEnter()
    },

    pressionaEnter() {
      document.addEventListener('keyup', e => {
        if(e.keyCode === 13) {
          this.retornaResultado()
        }
      })
    },

    cliqueBotao() {
      document.addEventListener('click', e => {
        const el = e.target

        if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText)
        if(el.classList.contains('btn-clear')) this.clearDisplay()
        if(el.classList.contains('btn-del')) this.apagaUm()
        if(el.classList.contains('btn-eq')) this.retornaResultado()
      })
    },

    btnParaDisplay(valor) {
      this.display.value += valor
      this.display.focus()
    },

    clearDisplay() {
      this.display.value = ''
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1)
    },

    retornaResultado() {
      try {
        let conta = eval(this.display.value)
        if(!conta) {
          alert('Conta Inválida')
          return
        }
        this.display.value = conta
      } catch(e) {
        alert('Conta Inválida')
        return
      }
    }
  }
}

const calculadora = criaCalculadora()
calculadora.inicia()