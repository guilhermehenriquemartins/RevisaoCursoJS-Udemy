// Usando try, catch e throw

function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw ('x e y precisam ser números')
  }
  return x + y
}

try {
  console.log(soma('a',3))
} catch(error) {
  console.log(error)
}