//Polimorfismo é a caracterização de um mesmo método ter comportamentos diferentes nas classes filhas de uma classe pai

//Classe Pai / Super Class
function Conta(conta, agencia, saldo) {
  this.conta = conta
  this.agencia = agencia
  this.saldo = saldo
}

Conta.prototype.depositar = function(valor) {
  this.saldo += valor
  this.verSaldo()
}

Conta.prototype.sacar = function(valor) {
  if(valor > this.saldo) {
    console.log(`Saldo insuficiente: ${this.saldo}`)
    return
  }
  this.saldo -= valor
  this.verSaldo()
}

Conta.prototype.verSaldo = function() {
  console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
}

function ContaCorrente(conta, agencia, saldo, limite) {
  Conta.call(this, conta, agencia, saldo)
  this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
  if(valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: ${this.saldo}`)
    return
  }
  this.saldo -= valor
  this.verSaldo()
}

function ContaPoupanca(conta, agencia, saldo) {
  Conta.call(this, conta, agencia, saldo)
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

const conta1 = new Conta('0562', '13622-6', 50)
const conta2 = new ContaCorrente('0562', '13622-6', 50, 600)
const conta3 = new ContaPoupanca('0562', '13622-6', 50)

console.log(conta1)
console.log(conta2)
console.log(conta3)