var titulo = window.document.createElement('h1')
var numero = Number(prompt('Digite um número: '))

titulo.innerHTML += `Seu número é ${numero}`
window.document.body.appendChild(titulo)

window.document.body.innerHTML += `<p>Raiz quadrada: <span style= "text-decoration: underline;">${numero ** 0.5}</span></p>`
window.document.body.innerHTML += `<p><span style="text-decoration: underline;">${numero}</span> é inteiro: <span style="text-decoration: underline;">${Number.isInteger(numero)}</span></p>`
window.document.body.innerHTML += `<p>É NaN: <span style="text-decoration: underline;">${Number.isNaN(numero)}</span></p>`
window.document.body.innerHTML += `<p>Arredondando para baixo: <span style="text-decoration: underline;">${Math.floor(numero)}</span></p>`
window.document.body.innerHTML += `<p>Arredondando para cima: <span style="text-decoration: underline;">${Math.ceil(numero)}</span></p>`
window.document.body.innerHTML += `<p>Com duas casas decimais: <span style="text-decoration: underline;">${numero.toFixed(2)}</span></p>`