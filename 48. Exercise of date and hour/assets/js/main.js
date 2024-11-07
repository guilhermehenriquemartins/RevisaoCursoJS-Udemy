const texto = window.document.querySelector('h1')
let data = new Date()
texto.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'})