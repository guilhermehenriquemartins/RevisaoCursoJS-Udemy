function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if(operador === '+') acumulador += numero
    if(operador === '-') acumulador -= numero
    if(operador === 'x' || operador === '*') acumulador *= numero
  }
  console.log(acumulador)
}

conta('x', 1, 50, 80, 70, 90)