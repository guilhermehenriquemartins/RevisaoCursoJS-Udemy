// fetch('pessoas.json')
//   .then(resposta => resposta.json())
//   .then(json => criaTabela(json))

axios('pessoas.json')
  .then(resposta => criaTabela(resposta.data))

function criaTabela(json) {
  const table = document.createElement('table')

  for(let pessoas of json) {
    const tr = document.createElement('tr')

    let td1 = document.createElement('td')
    td1.innerHTML = pessoas.nome
    tr.appendChild(td1)

    let td2 = document.createElement('td')
    td2.innerHTML = pessoas.email
    tr.appendChild(td2)
    

    let td3 = document.createElement('td')
    td3.innerHTML = pessoas.cpf
    tr.appendChild(td3)

    table.appendChild(tr)
  }

  const div = document.querySelector('#resultado')
  div.appendChild(table)
}