function Calculadora() {
  const display = document.querySelector('.display')

  this.inicia = function() {
    cliqueBotao()
  }

  const cliqueBotao = function() {
    document.addEventListener('click', e => {
      const el = e.target

      if(el.classList.contains('btn-num')) btnParaDisplay(el.innerText)
      if(el.classList.contains('btn-clear')) limpaDisplay()
      if(el.classList.contains('btn-del')) apagaUm()
    })
  }

  const btnParaDisplay = (valor) => display.value += valor
  const limpaDisplay = () => display.value = ''
  const apagaUm = () => display.value = display.value.slice(0, -1)

  const retornaResultado = function() {
    'retorna resultado do display'
  }
}

const calculadora = new Calculadora()
calculadora.inicia()