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

const nomePessoas = pessoas.map(valor => valor.nome)

const idadePessoas = pessoas.map(valor => ({ idade: valor.idade}))

const chaveId = pessoas.map(function(valor, indice) {
  const newObj = {...valor}
  indice += 1
  newObj.id = indice * 1000
  return newObj
})

console.log(pessoas)