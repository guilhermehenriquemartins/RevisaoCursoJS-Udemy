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
  if(this.isSequencia()) return false
  const cpfParcial = this.cpfLimpo.slice(0, -2)
  const digito1 = this.criaDigito(cpfParcial)
  const digito2 = this.criaDigito(cpfParcial + digito1)
  const novoCPF = cpfParcial + digito1 + digito2

  return novoCPF === this.cpfLimpo
}
ValidaCPF.prototype.isSequencia = function() {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
  return sequencia === this.cpfLimpo
}
ValidaCPF.prototype.criaDigito = function(valor) {
  const cpfArray = Array.from(valor)
  let regressivo = cpfArray.length + 1
  const total = cpfArray.reduce((acumulador, valor) => {
    acumulador += (regressivo * Number(valor))
    regressivo--
    return acumulador
  }, 0)
  const digito = 11 - (total % 11)
  return digito > 9 ? '0' : String(digito)
}


class ValidaCPF2 {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      get: function() {
        return cpfEnviado.replace(/\D+/g, '')
      }
    })
  }

  valida() {
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequencia()) return false
    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)
    const novoCPF = cpfParcial + digito1 + digito2

    return novoCPF === this.cpfLimpo
  }

  isSequencia() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
  }

  criaDigito(valor) {
    const cpfArray = Array.from(valor)
    let regressivo = cpfArray.length + 1
    const total = cpfArray.reduce((acumulador, valor) => {
      acumulador += (regressivo * Number(valor))
      regressivo--
      return acumulador
    }, 0)
    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)
  }
}

const cpf1 = new ValidaCPF('425.427.438-60')
const cpf2 = new ValidaCPF2('425.427.438-60')
console.log(cpf1.cpfLimpo)
console.log(cpf1.valida())
console.log(cpf2.cpfLimpo)
console.log(cpf2.valida())