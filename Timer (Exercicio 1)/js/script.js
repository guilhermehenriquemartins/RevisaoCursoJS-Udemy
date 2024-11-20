const relogio = document.querySelector('.relogio')
const btnIniciar = document.querySelector('.btnIniciar')
const btnPausar = document.querySelector('.btnPausar')
const btnZerar = document.querySelector('.btnZerar')
let segundos = 0;
let timer;

function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000)

  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
  })
}

function iniciaRelogio() {
  timer = setInterval(function() {
    segundos++
    relogio.innerHTML = criaHoraDosSegundos(segundos)
  }, 1000)
}

btnIniciar.addEventListener('click', function() {
  relogio.classList.remove('pausado')
  clearInterval(timer)
  iniciaRelogio()
})

btnPausar.addEventListener('click', function() {
  relogio.classList.add('pausado')
  clearInterval(timer)
})

btnZerar.addEventListener('click', function() {
  relogio.classList.remove('pausado')
  clearInterval(timer)
  segundos = 0
  relogio.innerHTML = '00:00:00'
})