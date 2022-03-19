const cajas = document.querySelectorAll('.caja')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom =window.innerHeight / 5 * 4

    cajas.forEach(caja => {
        const cajaTop = caja.getBoundingClientRect().top

        if (cajaTop < triggerBottom) {
            caja.classList.add('show')
        } else {
            caja.classList.remove('show')           
        }
    })
}