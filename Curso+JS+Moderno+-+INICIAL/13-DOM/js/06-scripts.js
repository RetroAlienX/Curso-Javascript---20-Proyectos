//! Modificar textos o imagenes con JS

const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);



//! Acceder a contenido HTML mendiante javascript 3 formas
console.log(encabezado.innerText); //! Si en el CSS visibility: hidden NO lo encuentra
console.log(encabezado.textContent); //! Si en el CSS visibility: hidden SI lo encuentra
console.log(encabezado.innerHTML); //! Se trae el HTML

const nuevoHeading = 'Nuevo Heading!!'
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

//! Modificar una imagen
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';