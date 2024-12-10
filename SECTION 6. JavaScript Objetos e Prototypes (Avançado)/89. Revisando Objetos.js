const pessoa = new Object()
pessoa.nome = 'Guilherme'
pessoa.sobrenome = 'Henrique'
pessoa.idade = 25
pessoa.getDataNascimento = function() {
  const dataAtual = new Date()
  return dataAtual.getFullYear() - this.idade
}

console.log(pessoa.getDataNascimento())