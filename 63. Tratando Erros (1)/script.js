function eNumero(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw ('x e y precisam ser números')
  }
  return x + y
}

try {
  console.log(eNumero(1, 2))
} catch(error) {
  console.log(error)
}