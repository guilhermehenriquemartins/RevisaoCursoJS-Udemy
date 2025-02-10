function rand(min=1, max=3) {
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

async function dadosResolvidos() {
  try {
    const fase1 = dados('Nome: Guilherme', rand())
    console.log(fase1)

    setTimeout(() => {
      console.log('Essa promessa estava pendente: ', fase1)
    },1100)

    const fase2 = await dados('Sobrenome: Henrique', rand())
    console.log(fase2)

    const fase3 = await dados('Data de Nascimento: 17/06/1999', rand())
    console.log(fase3)

    const fase4 = await dados('CPF: 425.427.438-60', rand())
    console.log(fase4)
  } catch(e) {
    console.log('ERRO: ', e)
  }
}

dadosResolvidos()

//Promise.all

/*const promises = [
  dados('Nome: Guilherme', rand()),
  dados('Sobrenome: Henrique', rand()),
  dados(1234, rand()),
  dados('CPF: 425.427.438-60', rand())
]

Promise.all(promises)
  .then(resposta => {
    console.log(resposta)
  })
  .catch(e => {
    console.log('ERRO: ', e)
  })
*/

//Promise.race

/*const promises = [
  dados('Nome: Guilherme', 2000),
  dados('Sobrenome: Henrique', 3000),
  dados(1234, 1000),
  dados('CPF: 425.427.438-60', 1500)
]

Promise.race(promises)
  .then(resposta => {
    console.log(resposta)
  })
  .catch(e => console.log('ERRO: ', e))
*/

//Promise.resolve

/*function baixaPagina() {
  const emCache = false

  if(emCache) {
    return Promise.resolve('Página já está em Cache')
  } else {
    return dados('Página baixada', 3000)
  }
}

baixaPagina()
  .then(resposta => {
    console.log(resposta)
  })
  .catch(e => console.log(e))
*/
//Promise.reject