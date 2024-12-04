//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com 'a'

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

const pessoasCom5Letras = pessoas.filter(valor => valor.nome.length >= 5)
const pessoasMais50Anos = pessoas.filter(valor => valor.idade > 50)
const terminaComA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'))

console.log(terminaComA)

/*
OBS: Filter retorna um array do mesmo tamanho do array original ou menor, pois como o seu próprio nome já diz, ele é Filter (filtra) um array.
*/