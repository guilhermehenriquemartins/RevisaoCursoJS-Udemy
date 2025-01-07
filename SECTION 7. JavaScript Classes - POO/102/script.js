const PrivadoVelocidade = Symbol('Velocidade')

class Carro {
  constructor(nome) {
    this.nome = nome
    this[PrivadoVelocidade] = 0
  }

  set velocidade(valor) {
    if(typeof valor !== 'number') return
    if(valor > 100) return this[PrivadoVelocidade] = 100
    if(valor < 0) return this[PrivadoVelocidade] = 0  
    this[PrivadoVelocidade] = valor
  }

  get velocidade() {
    return this[PrivadoVelocidade]
  }

  acelerar() {
    if(this[PrivadoVelocidade] >= 100) return
    this[PrivadoVelocidade]++
  }

  frear() {
    if(this[PrivadoVelocidade] < 0) return
    this[PrivadoVelocidade]--
  }
}

const Fusca = new Carro('Fusca')

/*for(let i = 0; i < 200; i++) {
  Fusca.acelerar()
}*/

/*for(let i = 100; i > 0; i--) {
  Fusca.frear()
}*/

console.log(Fusca)