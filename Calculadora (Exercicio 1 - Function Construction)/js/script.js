function Calculadora() {
  this.display = document.querySelector('.display')

  this.inicia = function () {
    this.cliqueBotao()
  }

  this.cliqueBotao = function() {
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
        this.retornaResultado()
      }
    })
  }

  this.btnParaDisplay = function(valor) {
    this.display.value += valor
  }

  this.clearDisplay = function() {
    this.display.value = ''
  }

  this.apagaUm = function() {
    this.display.value = this.display.value.slice(0, -1)
  }

  this.retornaResultado = function() {
    let conta = this.display.value

    try {
      conta = eval(conta)
      if (!conta) {
        alert('Conta Inválida')
        return
      }

      this.display.value = conta
    } catch(e) {
      alert('Conta Inválida')
    }
  }
}

const calculadora = new Calculadora()
calculadora.inicia()