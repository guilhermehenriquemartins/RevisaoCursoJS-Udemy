class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  falar() {
    console.log(`${this.nome} falou`)
  }

  comer() {
    console.log(`${this.nome} comeu`)
  }

  beber() {
    console.log(`${this.nome} bebeu`)
  }

  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
  }
}

function Pessoa2(nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome

  this.comer = function() {
    console.log(`${this.nome} comeu`)
  }

  this.beber = function() {
    console.log(`${this.nome} bebeu`)
  }

  Object.defineProperty(this, 'nomeCompleto', {
    get: function() {
      return `${this.nome} ${this.sobrenome}`
    }
  })
}
Pessoa2.prototype.falar = function() {
  console.log(`${this.nome} falou`)
}

const p1 = new Pessoa('Guilherme', 'Henrique')
const p2 = new Pessoa2('Guilherme', 'Henrique')
console.log(p1.nome)