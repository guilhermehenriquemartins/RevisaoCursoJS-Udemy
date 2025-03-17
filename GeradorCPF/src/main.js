import GeraCPF from './modules/GeraCPF'

import './assets/css/style.css'

const botao = document.querySelector('#botao')
botao.addEventListener('click', e => {
  (function() {
    const cpf = new GeraCPF()
    const gera = document.querySelector('.cpf-gerado')
    gera.innerHTML = cpf.geraNovoCpf()
  })();
})