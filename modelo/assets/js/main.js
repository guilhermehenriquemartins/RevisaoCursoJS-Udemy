/*============================================================*/
// 1º Capturamos a barra de digitar a tarefa, o botão de adicionar tarefa e a lista onde estará as tarefas
/*============================================================*/
const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

/*============================================================*/
// 5º Perceba que toda vez que precisamos inserir uma tarefa, até aqui só conseguimos adicioná-la clicando no botão de Acidionar tarefa, mas podemos adicionar também usando a tecla Enter:
/*============================================================*/
inputTarefa.addEventListener('keypress', function(e){ 
  // Quando uma tecla for pressionada...
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
  }
}) 

/*============================================================*/
// 2º Toda vez que clicarmos no botão de Adicionar tarefa, ele vai pegar o texto que recebemos de tarefa e vai jogar esse texto para que outra função faça o seu trabalho de jogar essa tarefa na lista
/*============================================================*/
btnTarefa.addEventListener('click', function() {
  //Se não tiver nenhum valor no campo de digitar tarefa ele vai retornar nada
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value)
})

/*============================================================*/
// 3º Criaremos uma função que só cria li
/*============================================================*/
function criaLi() {
  const li = document.createElement('li')
  return li
}

/*============================================================*/
// 4º Criaremos uma função que vai receber o valor do texto digitado e jogar na lista de tarefas do HTML, mas antes disso chamamos a função que cria li para depois adicionarmos o valor recebido
/*============================================================*/
function criaTarefa(textoInput) {
  const li = criaLi()
  li.innerText = textoInput
  tarefas.appendChild(li)
  limpaInput()
  criaBotaoApagar(li)
  salvarTarefas()
}

/*============================================================*/
// 6º Assim que a tarefa for inserido na lista do HTML, vamos limpar o campo de digitar tarefa para que seja digitado uma nova tarefa e o campo vai estar focado, e depois colocaremos essa função dentro da função que recebe o valor de texto
/*============================================================*/
function limpaInput() {
  inputTarefa.value = ''
  inputTarefa.focus()
}


/*============================================================*/
// 7º Criaremos a função que vai gerar o botão de apagar e que seja adicionado no li, e depois colocaremos essa função dentro da função que recebe o valor de texto, também criamos um atributo no botão que vai servir para apagar o item ao ser clicado
/*============================================================*/
function criaBotaoApagar(li) {
  li.innerHTML += ' ';
  const botaoApagar = document.createElement('button')
  botaoApagar.innerText = 'Apagar'
  botaoApagar.setAttribute('class', 'apagar')
  li.appendChild(botaoApagar)
}

/*============================================================*/
// 8º Para apagar um elemento da lista, criaremos um evento de clique que identifique se o elemento que foi clicado possui um class de apagar, e se sim, pegaremos o pai do elemento que foi clicado e iremos apagar
/*============================================================*/
document.addEventListener('click', function(e){
  const el = e.target;

  if (el.classList.contains('apagar')) {
    el.parentElement.remove()
  }
})

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li')
  const listaDeTarefas = []

  
}