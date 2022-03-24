// https://triunfagram.com/frases-para-instagram/

const fraseEl = document.getElementById('frase');
const fraseBoton = document.getElementById('fraseBoton');

fraseBoton.addEventListener('click', generaFrase);

generaFrase();

// async function generaFrase() {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//     const res = await fetch('https://icanhazdadjoke.com', config);

//     const data = await res.json();

//     fraseEl.innerHTML = data.frase
// }

 //USING .then()
 function generaFrase() {
   const config = {
     headers: {
       Accept: 'application/json',
     },
    }
   fetch('https://icanhazdadjoke.com', config)
     .then((res) => res.json())
     .then((data) => {
       fraseEl.innerHTML = data.frase
     })
 }