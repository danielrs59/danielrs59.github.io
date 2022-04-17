const numero = document.querySelectorAll('.numero span');
const contenedor = document.querySelector('.contenedor');
const mensajeFinal = document.querySelector('.final');
const repetir = document.querySelector('#repetir');

comienzaAnimamacion();

function resetearDOM() {
    contenedor.classList.remove('hide');
    mensajeFinal.classList.remove('show');

    numero.forEach((num) => {
        num.classList.value = '';
    })

    numero[0].classList.add('en');
}

function comienzaAnimamacion() {
    numero.forEach((num, idx) => {
        const cuentaAtras = numero.length -1;

        num.addEventListener('animationend', (e) => {
            if (e.animationName === 'goIn' && idx !== cuentaAtras) {
                num.classList.remove('in');
                num.classList.add('out');
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('en');
            } else {
                contenedor.classList.add('hide');
                mensajeFinal.classList.add('show')
            }
        })
    })
}

repetir.addEventListener('click', () => {
    resetearDOM();
    comienzaAnimamacion();
})