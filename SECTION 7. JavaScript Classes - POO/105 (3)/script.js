class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome
    this.ligado = false
  }

  ligar() {
    if(this.ligado) {
      console.log(`${this.nome} já está ligado`)
      return
    }
    this.ligado = true
  }

  desligar() {
    if(!this.ligado) {
      console.log(`${this.nome} já está desligado`)
      return
    }
    this.ligado = false
  }
}

class TV extends DispositivoEletronico {
  constructor(nome, modelo) {
    super(nome)
    this.modelo = modelo
  }
}

class Computador extends DispositivoEletronico {
  constructor(nome, modelo, windows) {
    super(nome)
    this.modelo = modelo
    this.windows = windows
  }
}

const produto1 = new DispositivoEletronico('Poco X3')
const produto2 = new TV('Televisão', 'LG')
const produto3 = new Computador('Notebook', 'DELL', 10)

console.log(produto3)