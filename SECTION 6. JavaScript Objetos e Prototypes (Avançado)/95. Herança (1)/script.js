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

function Camiseta(nome, preco, estoque, cor, tamanho) {
  Produto.call(this, nome, preco, estoque)
  this.cor = cor
  this.tamanho = tamanho
}

function Calota(nome, preco, estoque, aro, cor, marca) {
  Produto.call(this, nome, preco, estoque)
  this.aro = aro
  this.cor = cor
  this.marca = marca
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

Calota.prototype = Object.create(Produto.prototype)
Calota.prototype.constructor = Calota

const produto = new Produto('Produto Genérico', 10.50, 5)
const camiseta1 = new Camiseta('Camiseta Gola V', 35.9, 10, 'Preta', 'M')
const calota1 = new Calota('Calota Corsa 2014/2015', 13.90, 20, 13, 'Prata', 'GFM')
calota1.desconto(10)

console.log(produto)
console.log(camiseta1)
console.log(calota1)