const relogio = document.querySelector('#relogio')
const botaoIniciar = document.querySelector('.btnIniciar')
const botaoPausar = document.querySelector('.btnPausar')
const botaoZerar = document.querySelector('.btnZerar')
let segundos = 0;
let timer;

function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000)
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  })
}

function iniciaRelogio() {
  timer = setInterval(function() {
    segundos++
    relogio.innerHTML = criaHoraDosSegundos(segundos)
  }, 1000)
}

botaoIniciar.addEventListener('click', () => {
  clearInterval(timer)
  relogio.classList.remove('pausado')
  iniciaRelogio()
})

botaoPausar.addEventListener('click', () => {
  clearInterval(timer)
  relogio.classList.add('pausado')
})

botaoZerar.addEventListener('click', () => {
  clearInterval(timer)
  relogio.classList.remove('pausado')
  segundos = 0
  relogio.innerHTML = '00:00:00'
})