let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.informaçoes')
let items = container.querySelectorAll(".informaçoes")
let indicadores = document.querySelector('indicadores')
let dots = indicadores.getElementById ('.ativo')

nextButton.onclick = () => {
console.log('botao next')
}

prevButton.onclick = () => {
    console.log('botao prev')
}