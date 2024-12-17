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

function Camiseta(nome, preco, estoque, cor) {
  Produto.call(this, nome, preco, estoque)
  this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

const camiseta1 = new Camiseta('Camiseta Gola V', 35.80, 5, 'Preta')
camiseta1.aumento(10)
console.log(camiseta1)