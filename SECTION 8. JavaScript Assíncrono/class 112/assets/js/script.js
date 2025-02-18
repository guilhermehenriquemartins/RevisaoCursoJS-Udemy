document.addEventListener('click', e => {
  const el = e.target
  const tag = el.tagName.toLowerCase()
  
  if(tag === 'a') {
    e.preventDefault()
    criaNovaPagina(el)
  }
})

async function criaNovaPagina(el) {
  try {
    const href = el.getAttribute('href')
    const response = await fetch(href)

    if(response.status !== 200) throw new Error('ERRO 404 NOSSO!')

    const resultado = await response.text()
    colocaNovaPagina(resultado)
  } catch(e) {
    console.error(e)
  } 
}

function colocaNovaPagina(resultado) {
  const div = document.querySelector('#resultado')
  div.innerHTML = resultado
}