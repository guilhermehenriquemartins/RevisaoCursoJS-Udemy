//COMO COPIAR UM OBJETO PARA OUTRO 1:
const obj = {nome: 'Guilherme', sobrenome: 'Henrique', idade: 25, profissao: 'Eng Front-End'}
const pessoa1 = {...obj, cidade: 'Santo André'}

//COMO COPIAR UM OBJETO PARA OUTRO 2:
const guitarra = {nome: 'Guitarra Elétrica Strato Power Premium Phx Creme St-h Alv Ch', descricao: 'Desfrute com a guitarra PHX Guitarra da conexão com a música. Com este instrumento você vai descobrir novos acordes, cantar suas canções e curtirá da vida musical. Explore, amplifique sua criatividade e desenvolva a sua paixão.', preco: 945, estoque: 3}

const guitarra2 = Object.assign({}, guitarra, { cor: 'Creme' })

//COMO COPIAR UM OBJETO PARA OUTRO 3:
const violino = { nome: 'Violino Arco Breu Cavalete Acústico 4/4 Madeira Estojo Luxo', descricao: 'O Violino 4/4 Profissional Dominante é um instrumento de alta qualidade, este violino sendo ideal para músicos experientes e estudantes que buscam um produto de alto nível, solistas e instrumentistas de orquestra que procuram um som rico e expressivo, e para violinistas apaixonados que apreciam a beleza e qualidade de um produto profissional.', preco: 339, estoque: 50 }

const violino2 = { nome: violino.nome, descricao: violino.descricao, preco: violino.preco, estoque: violino.estoque, bônus: 'Acompanha Estojo (Case)' }

//C0MO CONSULTAR O DESCRITOR DAS PROPRIEDADES:
console.log(Object.getOwnPropertyDescriptor(pessoa1, 'cidade'))

//VENDO VALORES DE UM OBJETO
console.log(Object.values(guitarra))

//VENDO AS CHAVES E VALORES DE UM OBJETO EM ARRAY
console.log(Object.entries(violino2))

//ITERAR SOBRE AS CHAVES E VALORES MODO 1:
for (entry of Object.entries(pessoa1)) {
  console.log(entry)
}

//ITERAR SOBRE AS CHAVES E VALORES MODO 2:
for ([valor, chave] of Object.entries(pessoa1)) {
  console.log(valor, chave)
}

//ITERAR SOBRE AS CHAVES E VALORES MODO 3:
for (valor of Object.entries(pessoa1)) {
  console.log(valor[0], valor[1])
}