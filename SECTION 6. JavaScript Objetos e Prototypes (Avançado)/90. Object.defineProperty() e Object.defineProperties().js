function Produto(titulo, descricao, valor, estoque) {
  this.titulo = titulo
  this.descricao = descricao
  Object.defineProperties(this, {
    valor: {
      enumerable: true,
      value: valor,
      writable: true,
      configurable: false,
    },
    estoque: {
      enumerable: true,
      value: estoque,
      writable: true,
      configurable: false,
    }
  })
}

const produto1 = new Produto('Calota Aro 13 Corsa Classic', 'Calota Aro 13 Celta Corsa Classic Prisma\nAPLICÁVEL PARA: LINHA ARO 13 TODOS\nAcompanha Emblema RESINADO GM\nModelo Lançamento Aro 13\nLINHA DE APLICAÇÃO: GM ARO 13\nCalota Aro: 13\nPeso: 0,220\nInstalação por PARAFUSOS\n*Fabricado em PP\n*Aro 13\n*Fácil instalação\nValor Referente ao Jogo.\nGarantia do vendedor: 90 dias', 78.90, 5)

console.log(produto1)