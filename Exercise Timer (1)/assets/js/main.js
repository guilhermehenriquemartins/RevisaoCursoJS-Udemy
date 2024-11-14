function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000)
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
  })
}

const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('#botaoIniciar')
const pausar = document.querySelector('#botaoPausar')
const zerar = document.querySelector('#botaoZerar')
let segundos = 0
let timer;

function iniciaRelogio() {
  timer = setInterval(function() {
    segundos++
    relogio.innerHTML = criaHoraDosSegundos(segundos)
  }, 1000)
}