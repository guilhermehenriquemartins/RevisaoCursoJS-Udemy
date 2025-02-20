class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      value: cpfEnviado.replace(/\D+/g, ''),
      enumerable: false,
      writable: false,
      configurable: false
    })
  }

  eSequencia() {
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo
  }

  valida() {
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11 ) return false
    if(this.eSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.calculaCPF(cpfParcial)
    const digito2 = this.calculaCPF(cpfParcial + digito1)
    const novoCPF = cpfParcial + digito1 + digito2
    return novoCPF === this.cpfLimpo
  }

  calculaCPF(cpfParcial) {
    const cpfArray = Array.from(cpfParcial)
    let regressivo = cpfArray.length + 1
    const total = cpfArray.reduce((acumulador, valor) => {
      acumulador += regressivo * Number(valor)
      regressivo--
      return acumulador
    }, 0)
    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)
  }
}