var nome = window.prompt('Digite seu nome completo: ')

window.document.body.innerHTML = `<p>Seu nome é: <strong>${nome}</strong></p>`
window.document.body.innerHTML += `<p>Seu nome tem: <strong>${nome.length - (nome.split(' ').length - 1)}</strong> letras</p>`
window.document.body.innerHTML += `<p>A segunda letra do seu nome é: <strong>${nome[1]}</strong></p>`
window.document.body.innerHTML += `<p>Qual o primeiro índice da letra E no seu nome? <strong>${nome.indexOf('e') + 1}</strong></p>`
window.document.body.innerHTML += `<p>Qual o último índice da letra E no seu nome? <strong>${nome.lastIndexOf('e') + 1}</strong></p>`
window.document.body.innerHTML += `<p>As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong></p>`
window.document.body.innerHTML += `<p>As palavras do seu nome são: <strong>${nome.split(' ')}</strong></p>`
window.document.body.innerHTML += `<p>Seu nome com letras MAIÚSCULAS: <strong>${nome.toUpperCase()}</strong></p>`
window.document.body.innerHTML += `<p>Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong></p>`