const inputTarefa = document.querySelector('.inputTarefas')
const btnTarefa = document.querySelector('.btnTarefas')
const lista = document.querySelector('.lista')

btnTarefa.addEventListener('click', function() {
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
  salvarTarefa()
}

function limpaInput() {
  inputTarefa.value = ''
  inputTarefa.focus()
}

function criarBotaoApagar(li) {
  li.innerHTML += ' '
  const botaoApagar = document.createElement('button')
  botaoApagar.innerText = 'Apagar'
  botaoApagar.setAttribute('class', 'apagar')
  li.appendChild(botaoApagar)
}

inputTarefa.addEventListener('keypress', function(e){
  if (e.keyCode === 13) {
    if (!inputTarefa) return;
    criaTarefa(inputTarefa.value)
  }
})

document.addEventListener('click', function(e){
  const el = e.target;

  if (el.classList.contains('apagar')) {
    el.parentElement.remove()
    salvarTarefa()
  }
})

function salvarTarefa() {
  const tarefas = lista.querySelectorAll('li')
  const listaTarefas = []

  for (let tarefa of tarefas) {
    let tarefaTexto = tarefa.innerText
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaTarefas.push(tarefaTexto)
  }
  const tarefasJSON = JSON.stringify(listaTarefas)
  localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas')
  const listaTarefas = JSON.parse(tarefas)

  for (let tarefa of listaTarefas) {
    criaTarefa(tarefa)
  }
}

adicionaTarefasSalvas()