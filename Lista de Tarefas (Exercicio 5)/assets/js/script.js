const barraTarefa = document.querySelector('.input-tarefa')
const adicionarTarefa = document.querySelector('.adicionar-tarefa')
const listaTarefa = document.querySelector('.tarefas')

adicionarTarefa.addEventListener('click', e => {
  if(!barraTarefa.value) return
  criaTarefa(barraTarefa.value)
})

barraTarefa.addEventListener('keypress', e => {
  if(e.keyCode === 13) {
    if(!barraTarefa.value) return
    criaTarefa(barraTarefa.value)
  }
})

function criaTarefa(valor) {
  const li = criaLi()
  li.innerText = valor
  listaTarefa.appendChild(li)
  limparInput()
  criarBotaoApagar()
}

function criaLi() {
  const li = document.createElement('li')
  return li
}

function limparInput() {
  barraTarefa.value = ''
  barraTarefa.focus()
}

function criarBotaoApagar() {

}