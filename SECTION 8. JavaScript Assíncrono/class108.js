function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (min - max) + min)
}

function dados(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject(new TypeError('VALOR INVÁLIDO'))

    setTimeout(() => {
    console.log(msg)
    resolve()
  },tempo)
  })
}

dados('Frase 1', rand(1, 3))
  .then(resposta => {
    resposta
    return dados('Frase 2', rand(1, 3))
  })
  .then(resposta => {
    resposta
    return dados(1234, rand(1, 3))
  })
  .catch(resposta => {
    console.log('ERRO: ', resposta)
  })