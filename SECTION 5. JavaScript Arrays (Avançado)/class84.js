//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com 'a'
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduarda', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

const pessoas5Letras = pessoas.filter(valor => valor.nome.length >= 5)
const pessoas50Anos = pessoas.filter(valor => valor.idade > 50)
const terminacomA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'))

console.log(terminacomA)

const numeros = [1, 2, 3]

const numerosEmDobro = numeros.map(valor => valor * 2)
console.log(numerosEmDobro)