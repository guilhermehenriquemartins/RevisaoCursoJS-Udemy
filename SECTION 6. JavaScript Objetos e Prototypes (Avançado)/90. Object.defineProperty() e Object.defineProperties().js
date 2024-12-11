function Produto(nome, descricao, preco, estoque) {
  this.nome = nome
  this.descricao = descricao
  Object.defineProperties(this, {
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
    },
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
    }
  })
}

const Violao = new Produto('Violão Acústico Konig Para Destro Classic Verniz Corda Nylon', 'Desfrute com este violão Konig da conexão com a música. Ele é projetado para amadores e profissionais. Com este instrumento você vai descobrir novos acordes, cantar suas canções e vai desfrutar da vida musical. Cordas de nylon e mede 39" (99,06cm)', 249.90, 5)
Violao.estoque = 10

console.log(Violao.estoque)