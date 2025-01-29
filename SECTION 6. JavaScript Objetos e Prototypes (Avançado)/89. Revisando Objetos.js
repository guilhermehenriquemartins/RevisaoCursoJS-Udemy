//COMO CRIAMOS OBJETO LITERAL
const pessoa = {
  nome: 'Guilherme',
  sobrenome: 'Henrique'
}

//COMO CRIAMOS UM OBJETO ATRAVÉS DO SEU CONSTRUTOR
const pessoa2 = new Object()
pessoa2.nome = 'Guilherme'
pessoa2.idade = 26
pessoa2.sobrenome = 'Henrique'
pessoa2.nomeCompleto = function() {
  console.log(`${this.nome} ${this.sobrenome}`) 
}
pessoa2.getDataNascimento = function() {
  const dataAtual = new Date()
  console.log(`${dataAtual.getFullYear() - this.idade}`) 
}

pessoa2.nomeCompleto()
pessoa2.getDataNascimento()