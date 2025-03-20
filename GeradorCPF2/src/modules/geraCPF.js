import ValidaCPF from './ValidaCPF'

export default class geraCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min))
  }

  geradorCpf() {
    const cpf = this.rand()
    const digito1 = ValidaCPF.geraDigito(cpf)
    const digito2 = ValidaCPF.geraDigito(cpf + digito1)
    const novoCPF = cpf + digito1 + digito2
    return novoCPF
  }
}