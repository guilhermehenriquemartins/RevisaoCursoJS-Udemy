import geraCPF from './modules/geraCPF'
import '/src/assets/css/style.css'

const botao = document.querySelector('.botao')
botao.addEventListener('click', e => {
  (function() {
    const gera = new geraCPF()
    const cpfGerado = document.querySelector('.cpf-gerado')
    cpfGerado.innerHTML = gera.geradorCpf()
  })()
})