class Livro {
  constructor(nome, autor, editora) {
    this.nome = nome
    this.autor = autor
    this.editora = editora
  }

  previa() {
    if(this.pagina < 5) {
      this.pagina++
    }
  }
}

const _pagina = Symbol('pagina')

class ate100Paginas extends Livro {
  constructor(nome, autor, editora) {
    super(nome, autor, editora)
    this[_pagina] = 0
  }

  set pagina(valor) {
    if(valor > 10) {
      console.log('Limite máximo de leitura prévia alcançado')
      return
    }
    this[_pagina] = valor
  }

  get pagina() {
    return this[_pagina]
  }

  previa() {
    if(this[_pagina] >= 10) {
      console.log('Limite máximo de leitura prévia alcançado!')
      return
    }
    this[_pagina]++
  }
}

const livro1 = new ate100Paginas('Nos Passos de Jesus', 'EDIR MACEDO', 'UNIPRO')

console.log(livro1)