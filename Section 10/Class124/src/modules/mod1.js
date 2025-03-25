const nome = 'Guilherme'
const sobrenome = 'Henrique'
const cpf = '425.427.438-60'

function soma(x, y) {
  return x + y
}

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  chamaNome() {
    return `${this.nome} ${this.sobrenome}, seja Bem-Vindo(a)!`
  }
}

module.exports = {
  nome, sobrenome, cpf, soma, Pessoa
}