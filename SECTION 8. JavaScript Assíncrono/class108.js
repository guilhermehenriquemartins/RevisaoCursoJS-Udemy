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
    return dados(1234, rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
  })
  .catch(resposta => {
    console.log('ERRO: ', resposta)
  })