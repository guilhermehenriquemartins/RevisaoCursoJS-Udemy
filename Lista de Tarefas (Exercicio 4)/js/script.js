const inputTarefa = document.querySelector('.inputTarefas')
const btnTarefa = document.querySelector('.btnTarefas')
const lista = document.querySelector('.lista')

btnTarefa.addEventListener('click', function() {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value)
})

function criaLi() {
  const li = document.createElement('li')
  return li
}

function criaTarefa(tarefa) {
  const li = criaLi()
  li.innerText = tarefa
  lista.appendChild(li)
  limpaInput()
  criarBotaoApagar(li)
  salvarItem()
}

function limpaInput() {
  inputTarefa.value = ''
  inputTarefa.focus()
}

inputTarefa.addEventListener('keypress', function(e) {
  if(e.keyCode === 13) {
    if(!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
  }
})

function criarBotaoApagar(item) {
  item.innerText += ' '
  const botaoApagar = document.createElement('button')
  botaoApagar.innerText = 'Apagar'
  botaoApagar.setAttribute('class', 'apagar')
  item.appendChild(botaoApagar)
}

document.addEventListener('click', function(e) {
  const el = e.target
  if (el.classList.contains('apagar')) {
    el.parentElement.remove()
    salvarItem()
  }
})

function salvarItem() {
  const itens = lista.querySelectorAll('li')
  const listaDeTarefas = []

  for (let tarefa of itens) {
    let textotarefa = tarefa.innerText
    textotarefa = textotarefa.replace('Apagar', '').trim()
    listaDeTarefas.push(textotarefa)
  }
  const JSONTarefas = JSON.stringify(listaDeTarefas)
  localStorage.setItem('tarefas', JSONTarefas)
}

function resgatarItensSalvos() {
  const tarefasTexto = localStorage.getItem('tarefas')
  const listaDeTarefas = JSON.parse(tarefasTexto)
  
  for (tarefa of listaDeTarefas) {
    criaTarefa(tarefa)
  }
}

resgatarItensSalvos()