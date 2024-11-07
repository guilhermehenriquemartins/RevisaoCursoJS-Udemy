const form = window.document.getElementsByTagName('form')[0]

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const inputPeso = e.target.querySelector('#peso')
  const inputAltura = e.target.querySelector('#altura')

  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)

  if (!peso) {
    return setResultado('Peso inválido', false)
  }

  if (!altura) {
    return setResultado('Altura inválida', false)
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc)
  const texto = `Seu imc é ${imc} (${nivelImc})`
  setResultado(texto, true)
})

function getImc(peso, altura) {
  const imc = peso / (altura * altura)
  return imc.toFixed(2)
}

function getNivelImc(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

  if (imc >= 40) return nivel[5]
  if (imc >= 35) return nivel[4]
  if (imc >= 30) return nivel[3]
  if (imc >= 25) return nivel[2]
  if (imc >= 18.5) return nivel[1]
  if (imc < 18.5) return nivel[0]
}

function criaP() {
  let p = window.document.createElement('p')
  return p
}

function setResultado(msg, isValid) {
  let resultado = window.document.querySelector('#resultado')
  resultado.innerHTML = ''

  const p = criaP();
  p.innerHTML = msg
  
  isValid ? p.classList.add('paragrafo-resultado-verdadeiro') : p.classList.add('paragrafo-resultado-falso')

  resultado.appendChild(p)
}