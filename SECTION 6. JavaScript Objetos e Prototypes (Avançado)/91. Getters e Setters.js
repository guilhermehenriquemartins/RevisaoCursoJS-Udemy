//Getters
//Getters, além de tornarem método de um objeto em um atributo, eles protegem as propriedades do objeto, pois os getters recebem valor. Ex:

function Produto(nome, preco, estoque) {
  this.nome = nome
  this.estoque = estoque

  Object.defineProperty(this, 'preco', {
    enumerable: true,

    get: function() { //No lugar de get tínhamos value
      return preco
    },

    set: function(valor) { //No lugar de set tínhamos writable
      if (typeof valor !== 'number') {
        throw new TypeError('Valor Inválido')
      }
      preco = valor
    },

    configurable: false
  })
}

const p1 = new Produto('Caneca', 30.9, 50)
p1.preco = 55
console.log(p1.preco)