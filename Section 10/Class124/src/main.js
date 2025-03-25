const mod1 = require('./modules/mod1')

const nome = mod1.nome
const sobrenome = mod1.sobrenome
const cpf = mod1.cpf
const soma = mod1.soma
const pessoa = mod1.Pessoa
const pessoa1 = new pessoa('Guilherme', 'Henrique')

console.log(nome, sobrenome, cpf, soma(2, 6), pessoa1.chamaNome())

import '/src/assets/css/style.css'