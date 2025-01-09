const _pagina = Symbol('prévia: páginas')

class Livro {
  constructor(nome, editora, autor, paginas) {
    this.nome = nome
    this.editora = editora
    this.autor = autor
    this.paginas = paginas
  }
}

class AVozdaFe extends Livro{
  constructor(nome, editora, autor, paginas) {
    super(nome, editora, autor, paginas)
    this[_pagina] = 0
  }

  set pagina(valor) {
    if(valor > 5) {
      console.log('Número de páginas permitido alcançado')
      this[_pagina] = 5
      return
    }
    this[_pagina] = valor
  }

  get pagina() {
    return this[_pagina]
  }

  previa() {
    if(this[_pagina] == 5) {
      console.log('Número de páginas permitido alcançado')
      return
    }
    this[_pagina]++
  }
}

const livro1 = new AVozdaFe('A Voz da Fé', 'UNIPRO', 'EDIR MACEDO', 100)

console.log(livro1)