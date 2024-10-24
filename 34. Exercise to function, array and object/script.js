function cadastrar() {
  let form = window.document.getElementById('form1')
  let res = window.document.querySelector('div#res')
  let nome = form.querySelector('#inome')
  let sobrenome = form.querySelector('#isobrenome')
  let peso = form.querySelector('#ipeso')
  let altura = form.querySelector('#ialtura')
  let cadastro = []

  form.addEventListener('submit', function(evento){
    evento.preventDefault();

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