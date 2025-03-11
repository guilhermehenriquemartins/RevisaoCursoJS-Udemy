export default class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      enumerable: true,
      value: cpfEnviado.replace(/\D+/g, ''),
      writable: false,
      configurable: false
    })
  }

  eSequencia() {
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) == this.cpfLimpo
  }

  valida() {
    if(!this.cpfLimpo) return false
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.eSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)
    const novoCPF = cpfParcial + digito1 + digito2
    return novoCPF == this.cpfLimpo
  }

  criaDigito(cpfParcial) {
    const cpfArray = Array.from(cpfParcial)
    let regressivo = cpfArray.length + 1
    const total = cpfArray.reduce((acumulador, valor) => {
      acumulador += (regressivo * Number(valor))
      regressivo--
      return acumulador
    }, 0)
    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)
  }

  static geraDigito(cpfSemDigitos) {
    let total = 0
    let reverso = cpfSemDigitos.length + 1

    for(let stringNumerica of cpfSemDigitos) {
      total += reverso * Number(stringNumerica)
      reverso--
    }

    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)
  }
}