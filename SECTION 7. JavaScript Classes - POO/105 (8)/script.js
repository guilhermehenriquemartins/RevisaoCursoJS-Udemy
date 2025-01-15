class Livro {
  constructor(nome, edicao, autor) {
    this.nome = nome
    this.edicao = edicao
    this.autor = autor
  }

  static idioma() {
    return 'Idioma: Português'
  }
}

const _pagina = Symbol('pagina')

class Desafio21DiasJoao extends Livro {
  constructor(nome, edicao, autor) {
    super(nome, edicao, autor)
    this[_pagina] = 0
  }

  set pagina(valor) {
    if(valor >= 12) {
      console.log('Limite máximo de leitura atingido')
      return
    }
    this[_pagina] = valor
  }

  get pagina() {
    return this[_pagina]
  }

  previa() {
    if(this[_pagina] >= 12) {
      console.log('Limite máximo de leitura atingido')
      return
    }
    this[_pagina]++
  }
}

const Livro1 = new Desafio21DiasJoao('21 Dias que Mudarão Sua Vida: Desafio de João', '2a.', 'RENATO CARDOSO')
Livro.idioma()

console.log(Livro1.idioma())