class Livro {
  constructor(nome, editora, autor) {
    this.nome = nome
    this.editora = editora
    this.autor = autor
  }
}

const _pagina = Symbol('página prévia')

class Livro100pags extends Livro {
  constructor(nome, editora, autor, paginas, pagina) {
    super(nome, editora, autor)
    this.paginas = 144
    this[_pagina] = 0
  }

  set pagina(valor) {
    if(valor > 5) {
      console.log('Número de páginas para prévia de leitura alcançado!')
      this[_pagina] = 5
      return
    }
    this[_pagina] = valor
  }

  get pagina() {
    return this[_pagina]
  }

  previa() {
    if(this[_pagina] === 5) {
      console.log('Número de páginas para prévia de leitura alcançado!')
      return
    }
    this[_pagina]++
  }

  static idioma() {
    const idioma = 'PORTUGUÊS'
    console.log(idioma)
  }
}

const NosPassosdeJesus = new Livro100pags('Nos Passos de Jesus', 'UNIPRO', 'EDIR MACEDO', 144)