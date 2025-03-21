const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
const geraMaiuscula = () => String.fromCharCode(rand(65, 91))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const geraNumero = () => String.fromCharCode(rand(48, 58))
const simbolos = '"!@#$%¨&*()_-=+[]{}`´^~,.;/|ºª?'
const geraSimbolo = () => simbolos[rand(0, simbolos.length)]

export default function geradorSenha (qtd, maiusculas, minusculas, numeros, simbolos) {
  let resultado = []
  qtd = Number(qtd)

  for(let i = 0; i < qtd; i++) {
    maiusculas && resultado.push(geraMaiuscula())
    minusculas && resultado.push(geraMinuscula())
    numeros && resultado.push(geraNumero())
    simbolos && resultado.push(geraSimbolo())
  }

  return resultado.join('').slice(0, qtd)
}