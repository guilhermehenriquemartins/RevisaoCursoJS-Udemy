//COMO COPIAR UM OBJETO PARA O OUTRO:

const objeto1 = {nome: 'Caneca', preco: 30.9, estoque: 5}
const objeto2 = {...objeto1, descricao: 'Caneca preta personalizada'}

console.log(objeto1)

//COMO COPIAR UM OBJETO PARA O OUTRO 2:

const objeto3 = {nome: 'Caneca', preco: 30.9, estoque: 7}
const objeto4 = Object.assign({}, objeto3, {descricao: 'Caneca cor azul marinho'})

console.log(objeto4)

//COMO COPIAR UM OBJETO PARA O OUTRO 3:

const objeto5 = {nome: 'Caneca', preco: 30.9, estoque: 9}
const objeto6 = {nome: objeto5.nome, preco: objeto5.preco}

console.log(objeto6)

//COMO CONSULTAR O DESCRITOR DAS PROPRIEDADES:

console.log(Object.getOwnPropertyDescriptors(objeto6, 'preco'))

//VENDO VALORES DE UM OBJETO:

console.log(Object.values(objeto6))

//VENDO AS CHAVES E VALORES DO OBJETO EM ARRAY:

console.log(Object.entries(objeto6))

//ITERANDO SOBRE CHAVES E VALORES DO OBJETO:

for (valor of Object.entries(objeto5)) {
  console.log(valor[0], valor[1])
}