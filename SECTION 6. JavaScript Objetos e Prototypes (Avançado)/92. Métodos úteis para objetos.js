//COMO COPIAR UM OBJETO PARA OUTRO - MODO 1
const tenis1 = {nome: 'Tênis Masculino Caminhada', tamanho: 38, cor: 'Azul'}
const tenis2 = {...tenis1}
tenis2.tamanho = 39

//COMO COPIAR UM OBJETO PARA OUTRO - MODO 2
const bone1 = {nome: 'Boné Masculino Trucker', cor: 'Preto Com Verde'}
const bone2 = Object.assign({}, bone1, {cor: 'Preto Com Vermelho'})

//COMO COPIAR UM OBJETO PARA OUTRO - MODO 3
const relogio1 = {nome: 'Relógio Smartwatch Qcy Gt S8 Tela Amoled Bluetooth Ipx8', corPulseira: 'Preto', versão: 'Sport'}
const relogio2 = {nome: relogio1.nome, corPulseira: 'Vermelho', versão: relogio1.versão}

//COMO CONSULTAR OS DESCRITORES DE UMA PROPRIEDADE
console.log(Object.getOwnPropertyDescriptors(relogio1, 'nome'))

//VENDO VALORES DE UM OBJETO
console.log(Object.values(relogio2))

//VENDO AS CHAVES E VALORES DE UM OBJETO EM ARRAY
console.log(Object.entries(tenis1))

//ITERANDO SOBRE AS CHAVES E VALORES DE UM ARRAY - MODO 1
for (entry of Object.entries(tenis1)) {
  console.log(entry)
}

//ITERANDO SOBRE AS CHAVES E VALORES DE UM ARRAY - MODO 2
for([chave, valor] of Object.entries(tenis1)) {
  console.log(chave, valor)
}

//ITERANDO SOBRE AS CHAVES E VALORES DE UM ARRAY - MODO 3
for (valor of Object.entries(tenis1)) {
  console.log(valor[0] + ': ' + valor[1])
}