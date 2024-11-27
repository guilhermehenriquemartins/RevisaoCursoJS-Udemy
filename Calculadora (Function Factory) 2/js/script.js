function Calculadora() {
  const display = document.querySelector('.display')

  this.inicia = () => {
    cliqueBotao()
    pressionaEnter()
  }

  const pressionaEnter = () => {
    document.addEventListener('keyup', e => {
      if(e.keyCode === 13) retornaResultado()
    })
  }

  const cliqueBotao = () => {
    document.addEventListener('click', e => {
      const el = e.target

      if(el.classList.contains('btn-num')) btnParaDisplay(el.innerText)
      if(el.classList.contains('btn-clear')) clearDisplay()
      if(el.classList.contains('btn-del')) apagaUm()
      if(el.classList.contains('btn-eq')) retornaResultado()
    })
  }

  const btnParaDisplay = (valor) => {
    display.value += valor
    display.focus()
  }

  const clearDisplay = () => {
    display.value = ''
  }

  const apagaUm = () => {
    display.value = display.value.slice(0, -1)
  }

  const retornaResultado = () => {
    const conta = eval(display.value)

    try {
      if(!conta) {
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