function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (min - max) + min)
}

function dados(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof msg !== 'string') reject('VALOR INVÁLIDO')
      resolve(msg)
    }, tempo)
  })
}

const promises = [
  dados('Valor 2', 5000),
  dados('Valor 3', 3000),
  dados(1234, 1000),
]

Promise.race(promises)
  .then(resposta => {
    console.log(resposta)
  })
  .catch(reject => {
    console.log('ERRO: ', reject)
  })

function baixaPagina() {
  const emCache = true

  if(emCache) {
    return Promise.reject('Página em cache')
  } else {
    return dados('Página baixada', 3000)
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina)
  })
  .catch(resposta => {
    console.log(resposta)
  })