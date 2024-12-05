//Some todos os números (reduce)
//Retorne um array com os pares (Filter)
//Retorne um array com o dobro dos valores (Map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const somaTotal = numeros.reduce(function (acumulador, valor) {
  return acumulador += valor
})

const pares = numeros.reduce(function (acumulador, valor) {
  if(valor % 2 === 0) acumulador.push(valor)
  return acumulador
}, [])

const dobro = numeros.reduce(function (acumulador, valor) {
  acumulador.push(valor * 2)
  return acumulador
}, [])

//Retorne a pessoa mais velha
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 10 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 63 }
]

const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (valor.idade > acumulador.idade) return valor
  return acumulador
})

console.log(maisVelha)