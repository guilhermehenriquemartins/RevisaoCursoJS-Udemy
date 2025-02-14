document.addEventListener('click', e => {
  const el = e.target
  const tag = el.tagName.toLowerCase()

  if(tag === 'a') {
    e.preventDefault()
    carregaPagina(el)
  }
})

async function carregaPagina(el) {
  try {
    const href = el.getAttribute('href')
    const response = await fetch(href)

    if(response.status !== 200) throw new Error('ERRO 404!')

    const resultado = await response.text()
    resultadoPagina(resultado)
  } catch(e) {
    console.error(e)
  }
}

function resultadoPagina(response) {
  const resultado = document.querySelector('.resultado')
  resultado.innerHTML = response
}