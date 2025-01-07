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

class FoneOuvido extends DispositivoEletronico {
  constructor(nome, cor) {
    super(nome)
    this.cor = cor
  }
}

const FoneOuvidoTws = new FoneOuvido('Fone De Ouvido Tws', 'Preto')

console.log(FoneOuvidoTws)