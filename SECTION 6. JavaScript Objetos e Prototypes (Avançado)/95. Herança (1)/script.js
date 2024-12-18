//Calota, Pingadeira, Tapete
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

function Calota(nome, preco, estoque, aro, cor) {
  Produto.call(this, nome, preco, estoque)
  this.aro = aro
  this.cor = cor
}
Calota.prototype = Object.create(Produto.prototype)
Calota.prototype.constructor = Calota

function Tapete(nome, preco, estoque, material, cor) {
  Produto.call(this, nome, preco, estoque)
  this.material = material
  this.cor = cor
}
Tapete.prototype = Object.create(Produto.prototype)
Tapete.prototype.constructor = Tapete

function Pingadeira(nome, preco, estoque, veiculo) {
  Produto.call(this, nome, preco, estoque)
  this.veiculo = veiculo
}
Pingadeira.prototype = Object.create(Produto.prototype)
Pingadeira.prototype.constructor = Pingadeira
Pingadeira.prototype.aumento = function(quantia) {
  this.preco = this.preco += quantia
}

const KIT516 = new Calota('Jogo 4 Calota Gm Chevrolet Todos Aro 14 Prata Emblema Preto', 78.90, 10, 14, 'Prata')
const UN0007 = new Tapete('Jogo Tapete Gol G5/g6 2012 A 2019 3pçs Carpete Linha Bronze', 125, 5, 'Carpete', 'Grafite')
const KIT517 = new Pingadeira('Jogo De Borracha Friso Teto Par Pingadeira', 129.99, 10, 'Gol G2')
KIT517.aumento(10)
console.log(KIT517)