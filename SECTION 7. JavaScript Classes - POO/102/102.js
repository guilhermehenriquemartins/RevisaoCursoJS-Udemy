class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  acordar() {
    console.log(`${this.nome} acordou`)
  }

  cafeManha() {
    console.log(`${this.nome} tomou café da manhã`)
  }

  estudar() {
    console.log(`${this.nome} estudou`)
  }
}

const pessoa = new Pessoa('Guilherme', 'Henrique')
console.log(pessoa.estudar())

function Pessoa1(nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
}
Pessoa1.prototype.acordar = function() {
  console.log(`${this.nome} acordou`)
}
Pessoa1.prototype.cafeManha = function() {
  console.log(`${this.nome} tomou café da manhã`)
}
Pessoa1.prototype.estudar = function() {
  console.log(`${this.nome} estudou`)
}

const pessoa1 = new Pessoa1('Guilherme', 'Henrique')
console.log(pessoa1.estudar())