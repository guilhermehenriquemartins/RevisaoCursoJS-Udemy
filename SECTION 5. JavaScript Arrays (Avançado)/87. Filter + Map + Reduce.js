//Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.
filter(valor => valor % 2 === 0).
map(valor => valor * 2).
reduce((acumulador, valor) => acumulador += valor)

const total2 = numeros.reduce(function(acumulador, valor) {
  if (valor % 2 === 0) acumulador += valor * 2
  return acumulador
}, 0)

console.log(total2)