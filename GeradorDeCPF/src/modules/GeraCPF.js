import ValidaCPF from './ValidaCPF'

export default class GeraCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min))
  }

  GeraNovoCpf() {
    const cpfParcial = this.rand()
    const digito1 = ValidaCPF.geraDigito(cpfParcial)
    const digito2 = ValidaCPF.geraDigito(cpfParcial + digito1)
    const novoCPF = cpfParcial + digito1 + digito2
    return novoCPF
  }
}