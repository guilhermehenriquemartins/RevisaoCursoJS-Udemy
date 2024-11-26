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

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay()
        }

        if (el.classList.contains('btn-del')) {
          this.apagaUm()
        }

        if (el.classList.contains('btn-eq')) {
          this.retornaCalculo()
        }
      })
    },

    btnParaDisplay(valor) {
      this.display.value += valor
    },

    clearDisplay() {
      this.display.value = ''
    }, 

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1)
    },

    retornaCalculo() {
      try {
        let conta = this.display.value
        conta = eval(conta)

        if (!conta) {
          alert('Conta Inválida')
          return
        }
        this.display.value = conta
      } catch (e) {
        alert('Conta Inválida')
      }
    }
  }
}

const calculadora = criaCalculadora()
calculadora.inicia()