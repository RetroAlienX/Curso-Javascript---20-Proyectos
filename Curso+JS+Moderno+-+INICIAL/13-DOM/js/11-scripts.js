//! Un ejemplo mas avanzado de lo que podemos hacer con JS
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

//! Eventos
// btnFlotante.addEventListener('click', () => {
//     console.log('Diste click en el boton')
// });

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter(){
    // console.log('Diste click en el boton')
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        // btnFlotante.classList.remove('activo'); //! 1a forma
        this.classList.remove('activo'); //! 2nda forma
        this.textContent = 'Idioma y Moneda';
    } else{
        footer.classList.add('activo');
        // btnFlotante.classList.add('activo'); //! 1a forma
        this.classList.add('activo'); //! 2a forma
        this.textContent = 'X Cerrar';
    }
    console.log(footer.classList);
}