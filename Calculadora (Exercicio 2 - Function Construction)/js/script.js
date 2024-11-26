function Calculadora() {
  const display = document.querySelector('.display')

  this.inicia = function () {
    cliqueBotao()
  }
  
  let cliqueBotao = function() {
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
  
  let btnParaDisplay = function(valor) {
    display.value += valor
  }
  
  let limparDisplay = function() {
    display.value = ''
  }
  
  let apagaUm = function() {
    display.value = display.value.slice(0, -1)
  }
  
  let retornaResultado = function() {
    let conta = display.value

    try {
      conta = eval(conta)
      if (!conta) {
        alert('Conta Inválida')
        return
      }

      display.value = conta
    } catch (e) {
      alert('Conta Inválida')
    }
  }
}

const calculadora = new Calculadora()
calculadora.inicia()