function Calculadora() {
  const display = document.querySelector('.display')

  this.inicia = function() {
    cliqueBotao()
    pressionaEnter()
  }

  const pressionaEnter = function() {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        retornaResultado()
      }
    })
  }

  const cliqueBotao = function() {
    document.addEventListener('click', e => {
      const el = e.target

      if(el.classList.contains('btn-num')) btnParaDisplay(el.innerText)
      if(el.classList.contains('btn-clear')) clearDisplay()
      if(el.classList.contains('btn-del')) apagaUm()
      if(el.classList.contains('btn-eq')) retornaResultado()
    })
  }

  const btnParaDisplay = function(valor) {
    display.value += valor
    display.focus()
  }

  const clearDisplay = () => display.value = ''
  const apagaUm = () => display.value = display.value.slice(0, -1)

  const retornaResultado = function() {
    try {
      let conta = eval(display.value)
      if (!conta) {
        alert('Conta Inválida')
        return
      }
      display.value = conta
    } catch(e) {
      alert('Conta Inválida')
      return
    }
  }
}

const calculadora = new Calculadora() 
calculadora.inicia()