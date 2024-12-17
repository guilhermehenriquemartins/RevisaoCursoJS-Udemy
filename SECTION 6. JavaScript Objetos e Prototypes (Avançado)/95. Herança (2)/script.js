//Calota: aro, cor, marca - tapete: material
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

function Calota(nome, preco, estoque, aro, cor, marca) {
  Produto.call(this, nome, preco, estoque)
  this.aro = aro
  this.cor = cor
  this.marca = marca
}
Calota.prototype = Object.create(Produto.prototype)
Calota.prototype.constructor = Calota

function Tapete(nome, preco, estoque, material) {
  Produto.call(this, nome, preco, estoque)
  this.material = material
}
Tapete.prototype = Object.create(Produto.prototype)
Tapete.prototype.constructor = Tapete

const calota1 = new Calota('Jogo 4 Calota Corsa Classic 2012/2013', 62.90, 10, 14, 'Prata', 'GFM')
calota1.desconto(10)
const tapete1 = new Tapete('Jogo Tapete 5 Peças Renault Sandero 2007 A 2012', 72.90, 3, 'Carpete')
tapete1.desconto(10)

console.log(calota1)
console.log(tapete1)