const cpf = window.document.getElementById('cpf')
const form = window.document.getElementsByTagName('form')[0]
const res = window.document.getElementById('res')

function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    get: function() {
      return cpfEnviado.replace(/\D+/g, '')
    }
  })
}
ValidaCPF.prototype.valida = function() {
  if(typeof this.cpfLimpo === 'undefined') return false
  if(this.cpfLimpo.length !== 11) return false
  if(this.isSequence()) return false

  const cpfParcial = this.cpfLimpo.slice(0, -2)
  const digito1 = this.criaDigito(cpfParcial)
  const digito2 = this.criaDigito(cpfParcial + digito1)
  const novoCPF = cpfParcial + digito1 + digito2
  return novoCPF === this.cpfLimpo
}
ValidaCPF.prototype.criaDigito = function(cpfParcial) {
  const cpfArray = Array.from(cpfParcial)
  let regressor = cpfArray.length + 1
  const total = cpfArray.reduce((acumulador, valor) => {
    acumulador += (regressor * Number(valor))
    regressor--
    return acumulador
  }, 0)
  
  const digito = 11 - (total % 11)
  return digito > 9 ? '0' : String(digito)
}
ValidaCPF.prototype.isSequence = function() {
  const novoCPF = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
  return novoCPF === this.cpfLimpo
}

form.addEventListener('submit', function(e) {
  e.preventDefault()
  
  const cpfEnviado = new ValidaCPF(String(cpf.value))
  if(cpfEnviado.valida()) {
    res.style.display = 'block'
    res.style.color = 'lightgreen'
    res.style.backgroundColor = 'black'
    res.innerHTML = `CPF <strong>${cpf.value}</strong> é válido!`
  } else {
    res.style.display = 'block'
    res.style.color = 'white'
    res.style.backgroundColor = 'darkred'
    res.innerHTML = `CPF <strong>${cpf.value}</strong> é inválido!`
  }
})
