function retornaHora(hora) {
  if (hora && !(hora instanceof Date)) {
    throw new typeError('Esperando instância de hora')
  }

  if (!hora) {
    hora = new Date()
  }

  return hora.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
}

try {
  const data = new Date()
  const hora = retornaHora(data)
  console.log(hora)
} catch (error) {
  console.log(error)
} finally {
  console.log('Tenha um bom dia')
}