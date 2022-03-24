const sonidos = ['gorrion', 'mirlo', 'petirrojo', 'urraca'];

sonidos.forEach(sonido => {
    const boton = document.createElement('button');

    boton.classList.add('boton');

    boton.addEventListener('click', () => {
        stopSongs();

        document.getElementById(sonido).play();
    })

    document.getElementById('botones').appendChild(boton);
})

function stopSongs() {
    sonidos.forEach(sonido => {
        const song = document.getElementById(sonido);

        song.pause();
        song.currentTime = 0;
    })
}