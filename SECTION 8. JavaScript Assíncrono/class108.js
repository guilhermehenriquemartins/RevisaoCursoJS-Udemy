function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('VALOR INVÁLIDO')

    setTimeout(() => {
    resolve(msg)
  }, tempo)
  })
}

esperaAi('Frase 1', rand(1, 3))
  .then(resposta => {
    console.log(resposta)
    return esperaAi('Frase 2', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
    return esperaAi(1234, rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
  })
  .then(() => {
    console.log('ACABOU-SE!')
  })
  .catch(resposta => {
    console.log('ERRO: ', resposta)
  })
