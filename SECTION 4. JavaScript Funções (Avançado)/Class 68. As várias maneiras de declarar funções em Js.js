//Function Hoisting

function ola() {
  console.log('Olá')
}
ola()

//First-Class Objects

const dado = function() {
  console.log('Sou um dado')
}

dado()

//Arrow Function

const dado2 = () => {
  return 'Sou um dado 2'
}

console.log(dado2())

const dado4 = (funcao) => {
  console.log(`${funcao()} + 2 = Sou um dado 4`)
}

dado4(dado2)

//Funções como Métodos

const obj = {
  dado5: function() {
    console.log('Sou um dado 5')
  }
}

obj.dado5()