function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (min - max) + min)
}

function dados(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('VALOR INVÁLIDO')

    setTimeout(() => {
    resolve('=>' + msg)
  }, tempo)
  })
}

/*dados('Nome: Guilherme', rand(1, 3))
  .then(resposta => {
    console.log(resposta)
    return dados('Sobrenome: Henrique', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
    return dados(425, rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
    return dados('Data de Nascimento: 17/06/1999', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
    return dados('Email: guilhermehenrique.fju@outlook.com', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
  })
  .catch(resposta => {
    console.log('ERRO: ', resposta)
  })
*/

//Promise.all

/*
const promises = [
  dados('Nome: Guilherme', rand(1, 3)),
  dados('Sobrenome: Henrique', rand(1, 3)),
  dados('CPF: 425.427.438-60', rand(1, 3)),
  dados(1234, rand(1, 3)),
  dados('Email: guilhermehenrique.fju@outlook.com', rand(1, 3))
]

Promise.all(promises)
  .then(resposta => {
    console.log(resposta)
  })
  .catch(resposta => console.log(resposta))
*/

//Promise.race

/*
const promises = [
  dados('Nome: Guilherme', 1500),
  dados('Sobrenome: Henrique', 3000),
  dados('CPF: 425.427.438-60', 1000),
  dados(1234, 2000),
  dados('Email: guilhermehenrique.fju@outlook.com', 5000)
]

Promise.race(promises)
  .then(resposta => {
    console.log(resposta)
  })
  .catch(resposta => {
    console.log(resposta)
  })
*/

//Promise.resolve

function baixaPagina() {
  const emCache = false

  if(emCache) {
    return Promise.resolve('Arquivo já está em Cache')
  } {
    return dados('Arquivo baixado', 3000)
  }
}

baixaPagina()
  .then(resposta => {
    console.log(resposta)
  })
  .catch(e => {
    console.log(e)
  })

//Promise.reject