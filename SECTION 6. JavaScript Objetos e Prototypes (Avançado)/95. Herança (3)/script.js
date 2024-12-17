//Calota = aro , Pisca = cor
function Produto(nome, preco, estoque) {
  this.nome = nome
  this.preco = preco
  this.estoque = estoque
}
Produto.prototype.aumento = function(percentual) {
  this.preco = this.preco += (this.preco * (percentual / 100))
}
Produto.prototype.desconto = function(percentual) {
  this.preco = this.preco -= (this.preco * (percentual / 100))
}

function Calota(nome, preco, estoque, aro) {
  Produto.call(this, nome, preco, estoque)
  this.aro = aro
}
Calota.prototype = Object.create(Produto.prototype)
Calota.prototype.constructor = Calota

function Pisca(nome, preco, estoque, cor) {
  Produto.call(this, nome, preco, estoque)
  this.cor = cor
}

Pisca.prototype = Object.create(Produto.prototype)
Pisca.prototype.constructor = Pisca

const produto = new Produto('Produto Gen', 111, 5)
const calota1 = new Calota('Jogo 4 Calota Gol G5/G6 2012 A 2017', 78.90, 5, 14)
const pisca1 = new Pisca('Par Pisca Seta Dianteira Palio 1996 A 2001', 68.90, 30, 'Âmbar')

console.log(produto)
console.log(calota1)
console.log(pisca1)