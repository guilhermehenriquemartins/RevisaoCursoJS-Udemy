function Calculadora() {
  this.display = document.querySelector('.display')

  this.inicia = function() {
    this.cliqueBotao()
  }

  this.cliqueBotao = function() {
    document.addEventListener('click', e => {
      const el = e.target

      if (el.classList.contains('btn-num')) {
        this.btnParaDisplay(el.innerText)
      }
    })
  }

  this.btnParaDisplay = function(valor) {
    this.display.value += valor
  }

  this.clearDisplay = function() {

  }

  this.apagaUm = function() {

  }

  this.retornaResultado = function() {

  }
}

const calculadora = new Calculadora()
calculadora.inicia()