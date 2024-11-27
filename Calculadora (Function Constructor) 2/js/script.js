function Calculadora() {
  const display = document.querySelector('.display')

  this.inicia = () => {
    cliqueBotao()
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

  const btnParaDisplay = (valor) => display.value += valor

  const clearDisplay = () => display.value = ''

  const apagaUm = () => display.value = display.value.slice(0, -1)

  const retornaResultado = () => {
    try {
      let conta = eval(display.value)
      if(!conta) {
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