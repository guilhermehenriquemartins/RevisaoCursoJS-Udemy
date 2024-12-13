function Produto(nome, descricao, preco, estoque) {
  this.nome = nome
  this.descricao = descricao
  Object.defineProperties(this, {
    estoque: {
      enumerable: true,
      get: function() {
        return estoque
      },
      set: function(valor) {
        if(typeof valor !== 'number') {
          throw new TypeError('Valor Inválido')
        }
        estoque = valor
      },
      configurable: false
    },
    preco: {
      enumerable: true,
      get: function() {
        return preco
      },
      set: function(valor) {
        if(typeof valor !== 'number') {
          throw new TypeError('Valor Inválido')
        }
        preco = valor
      },
      configurable: false
    }
  })
}

const MousePad = new Produto('Mousepad Personalizado Com Logo Estampa Marca', 'Características: Base emborrachada antiderrapante - Superficie em tecido Impressão em Sublimação - cores vivas e ótima resolução - Alta durabilidade, estampa não desbota do tecido. Dimensões aproximadas: 17,5cm x 21,5cm', 22.90, 50)
MousePad.preco = 25.90

console.log(Object.keys(MousePad))