document.addEventListener('mouseover', e => {
  const el = e.target
  const tag = el.tagName.toLowerCase()

  if(tag === 'a') {
    e.preventDefault()
    carregaNovaPagina(el)
  }
})

async function carregaNovaPagina(el) {
  try {
    const href = el.getAttribute('href')
    const response = await fetch(href)
    if(response.status !== 200) throw new Error('ERRO 404 NOSSO!')

    const resposta = await response.text()
    colocaNovaPagina(resposta)
  } catch(e) {
    console.log(e)
  } 
}

function colocaNovaPagina(resposta) {
  const div = document.querySelector('.resultado')
  div.innerHTML = resposta
}