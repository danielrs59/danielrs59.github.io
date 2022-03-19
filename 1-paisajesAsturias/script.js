const panels = document.querySelectorAll('.vista')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('activa')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('activa')
    })
}