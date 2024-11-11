const paragrafos = window.document.querySelector('.paragrafos').querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const CorBackgroundBody = estilosBody.backgroundColor

/*for (v of paragrafos) {
  v.style.backgroundColor = CorBackgroundBody
  v.style.marginBottom = '3px'
  v.style.padding = '2px'
  v.style.color = 'white'
}*/

for (i in paragrafos) {
  if (i % 2 == 0) {
    paragrafos[i].style.backgroundColor = CorBackgroundBody
    paragrafos[i].style.color = 'darkred'
  } else if (i % 2 == 1) {
    paragrafos[i].style.backgroundColor = 'darkred'
    paragrafos[i].style.color = CorBackgroundBody
  }
  paragrafos[i].style.marginBottom = '3px'
  paragrafos[i].style.padding = '2px'
}