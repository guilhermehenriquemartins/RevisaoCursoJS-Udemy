const elementos = [
  {tag: 'p', texto: 'Frase 1'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'section', texto: 'Frase 3'},
  {tag: 'footer', texto: 'Frase 4'}
]

const container = window.document.querySelector('.container')
const div = window.document.createElement('div')

for (i = 0; i < elementos.length; i++) {
  let conteudo = window.document.createElement(elementos[i].tag)
  conteudo.innerText = elementos[i].texto
  div.appendChild(conteudo)
}

container.appendChild(div)