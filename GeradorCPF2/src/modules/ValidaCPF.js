export default class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      enumerable: false,
      value: cpfEnviado.replace(/\D+/g, ''),
      writable: false,
      configurable: false
    })
  }

  isSequence() {
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo
  }

  valida() {
    if (typeof this.cpfLimpo === 'undefined') return false
    if (this.cpfLimpo.length !== 11) return false
    if (this.isSequence()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)
    const novoCPF = cpfParcial + digito1 + digito2
    return novoCPF === this.cpfLimpo
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

  static geraDigito(cpfParcial) {
    let total = 0
    let regressivo = cpfParcial.length + 1

    for(let stringNumero of cpfParcial) {
      total += regressivo * Number(stringNumero)
      regressivo--
    }

    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)
  }
}