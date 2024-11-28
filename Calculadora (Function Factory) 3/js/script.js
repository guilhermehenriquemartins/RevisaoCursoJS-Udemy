function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.cliqueBotao()
      this.pressionaEnter()
      this.pressionaBotao()
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
        if(el.classList.contains('btn-clear')) this.limpaDisplay()
        if(el.classList.contains('btn-del')) this.apagaUm()
        if(el.classList.contains('btn-eq')) this.retornaResultado()
      })
    },

    pressionaBotao() {
      document.addEventListener('keyup', e => {
        console.log(e)
        if(e.keyCode === 97) {
          this.btnParaDisplay(1)
        }
        if(e.keyCode === 98) {
          this.btnParaDisplay(2)
        }
        if(e.keyCode === 99) {
          this.btnParaDisplay(3)
        }
        if(e.keyCode === 100) {
          this.btnParaDisplay(4)
        }
        if(e.keyCode === 101) {
          this.btnParaDisplay(5)
        }
        if(e.keyCode === 102) {
          this.btnParaDisplay(6)
        }
        if(e.keyCode === 103) {
          this.btnParaDisplay(7)
        }
        if(e.keyCode === 104) {
          this.btnParaDisplay(8)
        }
        if(e.keyCode === 105) {
          this.btnParaDisplay(9)
        }
      })
    },

    btnParaDisplay(valor) {
      this.display.value += valor
      this.display.focus()
    },

    limpaDisplay() {
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