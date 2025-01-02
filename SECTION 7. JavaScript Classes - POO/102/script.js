class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  fala() {
    console.log(`${this.nome} está falando`)
  }

  comer() {
    console.log(`${this.nome} está comendo`)
  }

  beber() {
    console.log(`${this.nome} está bebendo`)
  }

  nomeCompleto() {
    console.log(`${this.nome} ${this.sobrenome}`)
  }
}

function Pessoa2(nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
}
Pessoa2.prototype.fala = function() {
  console.log(`${this.nome} está falando`)
}
Pessoa2.prototype.comer = function() {
  console.log(`${this.nome} está comendo`)
}
Pessoa2.prototype.beber = function() {
  console.log(`${this.nome} está bebendo`)
}
Pessoa2.prototype.nomeCompleto = function() {
  console.log(`${this.nome} ${this.sobrenome}`)
}

const p1 = new Pessoa2('Guilherme', 'Henrique')
const p2 = new Pessoa('Guilherme', 'Henrique')
console.log(p1.nomeCompleto())
console.log(p2.nomeCompleto())