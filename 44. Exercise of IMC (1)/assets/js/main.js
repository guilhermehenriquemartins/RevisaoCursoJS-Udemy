const form = window.document.getElementsByTagName('form')[0]

form.addEventListener('submit', function(e){
  e.preventDefault();

  let inputPeso = e.target.querySelector('#peso')
  let inputAltura = e.target.querySelector('#altura')

  let peso = Number(inputPeso.value)
  let altura = Number(inputAltura.value)


  if (!peso) {
    return resultado('Peso inválido', false)
  }

  if (!altura) {
    return resultado('Altura inválida', false)
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc)

  const textoResultado = i`Seu IMC é ${imc} (${nivelImc})`
  resultado(textoResultado, true)
})

function getNivelImc(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

  if (imc >= 40) return nivel[5]
  if (imc >= 35) return nivel[4]
  if (imc >= 30) return nivel[3]
  if (imc >= 25) return nivel[2]
  if (imc >= 18.5) return nivel[1]
  if (imc < 18.5) return nivel[0]
}

function getImc(peso, altura) {
  let imc = peso / (altura * altura)
  return imc.toFixed(2)
}

function criaP() {
  let p = window.document.createElement('p')
  return p
}

function resultado(msg, isValid) {
  let resultado = window.document.querySelector('#resultado')
  resultado.innerHTML = ''

  let p = criaP()
  p.innerHTML = msg;

  (isValid) ? p.classList.add('paragrafo-resultado-verdadeiro') : p.classList.add('paragrafo-resultado-falso')

  resultado.appendChild(p)
}