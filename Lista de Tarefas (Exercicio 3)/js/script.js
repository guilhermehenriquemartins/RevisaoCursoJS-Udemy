const inputTarefa = document.querySelector('.inputTarefas')
const btnTarefa = document.querySelector('.btnTarefas')
const lista = document.querySelector('.lista')

btnTarefa.addEventListener('click', function() {
  if (!inputTarefa.value) return
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
  criaBotaoApagar(li)
  salvarTarefa()
}

function limpaInput() {
  inputTarefa.value = ''
  inputTarefa.focus()
}

inputTarefa.addEventListener('keypress', function(e){
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
  }
})

function criaBotaoApagar(item) {
  item.innerText += ' '
  const botaoApagar = document.createElement('button')
  botaoApagar.innerText = 'Apagar'
  botaoApagar.setAttribute('class', 'apagar')
  item.appendChild(botaoApagar)
}

document.addEventListener('click', function(e) {
  const el = e.target;
  if (el.classList.contains('apagar')) {
    el.parentElement.remove()
    salvarTarefa()
  }
})

function salvarTarefa() {
  const tarefas = lista.querySelectorAll('li')
  const listaDeTarefas = []

  for (let tarefa of tarefas) {
    let tarefaTexto = tarefa.innerText
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
    listaDeTarefas.push(tarefaTexto)
  }
  const JSONlistaTarefas = JSON.stringify(listaDeTarefas)
  localStorage.setItem('tarefas', JSONlistaTarefas)
}

function adicionarTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas')
  const listaDeTarefas = JSON.parse(tarefas)

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa)
  }
}

adicionarTarefasSalvas()