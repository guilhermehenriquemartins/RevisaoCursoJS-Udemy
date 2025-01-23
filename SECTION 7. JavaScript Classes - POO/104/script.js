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
  constructor(nome, polegadas, marca) {
    super(nome)
    this.polegadas = polegadas
    this.marca = marca
  }

}

const televisao = new TV('Smart TV', 43, 'Aiwa')
televisao.ligar()
televisao.desligar()

console.log(televisao)