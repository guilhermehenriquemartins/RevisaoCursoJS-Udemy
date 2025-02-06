function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (min - max) + min)
}

function dados(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('VALOR INVÁLIDO')

    setTimeout(() => {
    resolve(msg)
  }, tempo)
  })
}

dados('Frase 1', rand(1, 3))
  .then(resposta => {
    console.log(resposta)
    return dados('Frase 2', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
    return dados('Frase 3', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
    return dados('Frase 4', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
    return dados('Frase 5', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
  })
  .catch(resposta => {
    console.log('ERRO: ', resposta)
  })


const promise = [
  dados('Frase 1', 1000),
  dados('Frase 2', 3000),
  dados('Frase 3', 2000),
  dados(1234, 4000),
  dados('Frase 5', 500),
]

Promise.race(promise)
  .then(resposta => 
    console.log(resposta)
  ).catch(resposta => {
    console.log('ERRO: ', resposta)
  })


function baixaPagina() {
  const emCache = true

  if(emCache) {
    return Promise.resolve('Página já está em cache')
  } else {
    return Promise.reject('Arquivo baixado')
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina)
  })
  .catch(e => console.log(e))