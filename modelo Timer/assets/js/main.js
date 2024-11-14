function criaHoraDosSegundos(segundos) {
  const hora = new Date(segundos * 1000)
  
  return hora.toLocaleTimeString('pt-BR', {
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

iniciar.addEventListener('click', function(e){
  relogio.classList.remove('pausado')
  clearInterval(timer)
  iniciaRelogio()
})

pausar.addEventListener('click', function(e) {
  relogio.classList.add('pausado')
  clearInterval(timer)
})

zerar.addEventListener('click', function(e) {
  relogio.classList.remove('pausado')
  clearInterval(timer)
  segundos = 0
  relogio.innerHTML = '00:00:00'
})