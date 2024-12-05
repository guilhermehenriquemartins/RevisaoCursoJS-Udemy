//const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

const nomePessoa = pessoas.map(valor => valor.nome)
const idadePessoa = pessoas.map(valor => ({idade: valor.idade}))
const chaveId = pessoas.map(function (valor, indice) {
  valor.id = (indice + 1) * 1000
  return valor
})

console.log(chaveId)