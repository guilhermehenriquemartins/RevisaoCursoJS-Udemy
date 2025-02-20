//fetch('pessoas.json')
 // .then(resposta => resposta.json())
 // .then(json => criaElementosTabela(json))

axios('pessoas.json')
  .then(resposta => criaElementosTabela(resposta.data))

function criaElementosTabela(json) {
  const table = document.createElement('table')
  const thead = document.createElement('thead')
  thead.style.padding = '5px'
  thead.style.backgroundColor = 'black'
  const tdnome = document.createElement('td')
  tdnome.innerHTML = 'NOME'
  tdnome.style.color = 'white'
  const tdestado = document.createElement('td')
  tdestado.innerHTML = 'ESTADO'
  tdestado.style.color = 'white'
  tdestado.style.textAlign = 'center'
  const tdidade = document.createElement('td')
  tdidade.innerHTML = 'IDADE'
  tdidade.style.color = 'white'
  tdidade.style.textAlign = 'center'
  thead.appendChild(tdnome)
  thead.appendChild(tdestado)
  thead.appendChild(tdidade)
  table.appendChild(thead)

  for(let pessoa of json) {
    const tr = document.createElement('tr')

    let td1 = document.createElement('td')
    td1.innerHTML = pessoa.nome
    tr.appendChild(td1)

    let td2 = document.createElement('td')
    td2.innerHTML = pessoa.estado
    td2.style.textAlign = 'center'
    tr.appendChild(td2)

    let td3 = document.createElement('td')
    td3.innerHTML = pessoa.idade
    td3.style.textAlign = 'center'
    tr.appendChild(td3)

    table.appendChild(tr)
  }

  const resultado = document.querySelector('.resultado')
  resultado.appendChild(table)
}