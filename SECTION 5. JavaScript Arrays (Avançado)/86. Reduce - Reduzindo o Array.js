//Some todos os números (Reduce)
//Retorne um array com os pares (Filter)
//Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce(function(acumulador, valor) {
  acumulador += valor
  return acumulador
})

const pares = numeros.reduce(function(acumulador, valor) {
  if(valor % 2 === 0) acumulador.push(valor)
  return acumulador
}, [])

const pares2 = numeros.filter(valor => valor % 2 === 0)

const dobro = numeros.reduce(function(acumulador, valor) {
  acumulador.push(valor * 2)
  return acumulador
}, [])

const dobro2 = numeros.map(valor => valor * 2)


//Retorne a pessoa mais velha
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 10 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 63 }
]

const maisVelha = pessoas.reduce(function(acumulador, valor, indice, array) {
  if(valor.idade > acumulador.idade) return valor
  return acumulador
})

console.log(maisVelha)