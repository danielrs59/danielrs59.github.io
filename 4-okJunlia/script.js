const busqueda = document.querySelector('.busqueda')
const button = document.querySelector('.button')
const input = document.querySelector('.input')

button.addEventListener('click', () => {
    busqueda.classList.toggle('activo')
    input.focus()
} )