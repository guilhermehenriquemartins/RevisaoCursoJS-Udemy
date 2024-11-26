function Calculadora() {
  const display = document.querySelector('.display')

  this.inicia = function() {
    cliqueBotao()
  }

  const cliqueBotao = function() {
    document.addEventListener('click', e => {
      const el = e.target

      if (el.classList.contains('btn-num')) {
        btnParaDisplay(el.innerText)
      }

      if (el.classList.contains('btn-clear')) {
        limparDisplay()
      }

      if (el.classList.contains('btn-del')) {
        apagaUm()
      }

      if (el.classList.contains('btn-eq')) {
        retornaResultado()
      }
    })
  }

  const btnParaDisplay = function(valor) {
    display.value += valor
  }

  const limparDisplay = function() {
    display.value = ''
  }

  const apagaUm = function() {
    display.value = display.value.slice(0, -1)
  }

  const retornaResultado = function() {
    let conta = display.value

    try {
      conta = eval(conta)
      
      if (!conta) {
        alert('Conta Inválida')
        return
      }

      display.value = conta
    } catch(e) {
      alert('Conta Inválida')
    }
  }
}

const calculadora = new Calculadora()
calculadora.inicia()