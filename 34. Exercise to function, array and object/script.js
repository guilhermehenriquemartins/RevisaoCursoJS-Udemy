function cadastrar() {
  let form = window.document.getElementById('form1')
  let res = window.document.querySelector('div#res')
  let erro1 = form.querySelector('div#erro1')
  let erro2 = form.querySelector('div#erro2')
  let nome = form.querySelector('#inome')
  let sobrenome = form.querySelector('#isobrenome')
  let peso = form.querySelector('#ipeso')
  let altura = form.querySelector('#ialtura')
  let cadastro = []

  form.addEventListener('submit', function(evento){
    evento.preventDefault();

    if(nome.value.length == 0) {
      erro1.innerHTML = 'O campo nome está vazio, preencha o campo antes de continuar'
      erro1.style.marginTop = '-5px'
      erro1.style.marginBottom = '5px'
      erro1.style.color = 'red'
      nome.style.outlineColor = 'red'
    }
    if(sobrenome.value.length == 0) {
      erro2.innerHTML = 'O campo sobrenome está vazio, preencha o campo antes de continuar'
      erro2.style.marginTop = '-5px'
      erro2.style.marginBottom = '5px'
    }

    cadastro.push(
      {
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
      }
    )
    console.log(cadastro)
    res.innerHTML += `<p>${nome.value} ${sobrenome.value}   ${peso.value} ${altura.value}</p>`
  })

}
cadastrar()